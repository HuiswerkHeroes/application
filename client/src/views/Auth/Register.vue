<template>
    <div>
        <Header />
        <div>
            <div class="container">
                <div class="row justify-content-center py-4">
                    <div class="col-sm-12 col-md-10 col-lg-6">
                        <div v-if="this.error" class="notice notice-error my-4">{{ this.error }}</div>

                        <form v-on:submit="handleSubmit">
                            <div class="panel">
                                <div class="panel-header">
                                    <span class="panel-title mx-auto">Registreren</span>
                                </div>
                                <div class="panel-body">
                                    <div class="form-group">
                                        <small>Voornaam</small>
                                        <input type="text" class="form-control" placeholder="Jan" v-model="firstName" required autofocus />
                                    </div>
                                    <div class="form-group">
                                        <small>Achternaam</small>
                                        <input type="text" class="form-control" placeholder="Jansen" v-model="lastName" required autofocus />
                                    </div>
                                    <div class="form-group">
                                        <small>E-mailadres</small>
                                        <input
                                            type="email"
                                            class="form-control"
                                            placeholder="jan.jansen@voorbeeld.nl"
                                            v-model="email"
                                            required
                                            autofocus
                                        />
                                    </div>
                                    <div class="form-group">
                                        <small>Wachtwoord</small>
                                        <latte-password placeholder="••••••••" v-model="password" min="6"></latte-password>
                                        <small>Een wachtwoord moet minimaal 6 karakters bevatten</small>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                    <div>
                                        <router-link class="btn btn-text btn-primary btn-sm ml-auto" :to="{ name: 'Login' }"
                                            >Heeft u al een account?</router-link
                                        >
                                    </div>
                                    <div class="ml-auto">
                                        <button class="btn btn-contained btn-primary" type="submit">
                                            <span v-if="this.loading" class="spinner"></span>
                                            <span>Registreren</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/layout/Header';
import { mapActions } from 'vuex';
import { Latte } from '@bybas/latte-ui';

export default {
    name: 'Register',
    components: {
        Header
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            error: '',
            loading: false
        };
    },
    methods: {
        ...mapActions('auth', { tryRegister: 'tryRegister' }),
        async handleSubmit(e) {
            e.preventDefault();

            if (this.loading) {
                return;
            }

            this.loading = true;
            this.tryRegister({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            })
                .then(() => {
                    this.loading = false;
                    this.firstName = '';
                    this.lastName = '';
                    this.email = '';
                    this.password = '';
                    this.$router.push({ name: 'Dashboard' });
                })
                .catch(err => {
                    this.loading = false;
                    this.password = '';

                    if (!err.response) {
                        Latte.ui.notification.create({
                            title: 'Er is iets fout gegaan!',
                            message: 'Kan niet verbinden met de server. Probeer het later opnieuw.'
                        });
                    } else if (err.response.status === 400) {
                        this.error = err.data.msg;
                    } else if (err.response.status === 422) {
                        this.error = 'Niet alle velden zijn correct ingevuld';
                    } else if (err.response.status === 409) {
                        this.error = 'Dit e-mailadres is al in gebruik';
                    } else if (err.response.status === 500) {
                        Latte.ui.notification.create({
                            title: 'Er is iets fout gegaan!',
                            message: 'Probeer het later opnieuw.'
                        });
                    } else {
                        Latte.ui.notification.create({
                            title: 'Er is iets fout gegaan!',
                            message: 'Kan niet verbinden met de server. Probeer het later opnieuw.'
                        });
                    }
                });
        }
    }
};
</script>
