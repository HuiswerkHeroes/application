<template>
    <div>
        <Header />
        <div id="login">
            <div class="container">
                <div class="row justify-content-center py-4">
                    <div class="col-md-6">
                        <div v-if="this.error" class="notice notice-error my-4">{{ this.error }}</div>

                        <form v-on:submit="handleSubmit">
                            <div class="panel">
                                <div class="panel-header">
                                    <span class="panel-title mx-auto">Inloggen</span>
                                </div>
                                <div class="panel-body">
                                    <div class="form-group">
                                        <input
                                            type="email"
                                            class="form-control"
                                            placeholder="Voer je e-mailadres in"
                                            v-model="email"
                                            required
                                            autofocus
                                        />
                                    </div>
                                    <div class="form-group">
                                        <latte-password placeholder="Voer hier je wachtwoord in" v-model="password"></latte-password>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                    <button class="btn btn-contained btn-primary ml-auto " type="submit">
                                        <span v-if="this.loading" class="spinner"></span><span>Inloggen</span>
                                    </button>
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
    name: 'Login',
    components: {
        Header
    },
    data() {
        return {
            email: '',
            password: '',
            error: '',
            loading: false
        };
    },
    methods: {
        ...mapActions(['tryLogin']),
        async handleSubmit(e) {
            e.preventDefault();

            if (this.loading) {
                return;
            }

            this.loading = true;
            this.tryLogin({ email: this.email, password: this.password })
                .then(() => {
                    this.loading = false;
                    this.email = '';
                    this.password = '';
                    this.$router.push({ name: 'Dashboard' });
                })
                .catch(err => {
                    this.loading = false;
                    this.email = '';
                    this.password = '';

                    if (err.status === 400) {
                        this.error = err.data.msg;
                    }

                    if (err.status === 422) {
                        this.error = 'Niet alle velden zijn correct ingevuld';
                    }

                    if (err.status === 500) {
                        Latte.ui.notification.create({
                            title: 'Er is iets fout gegaan!',
                            message: 'Probeer het later opnieuw.'
                        });
                    }
                });
        }
    }
};
</script>

<style scoped>
#login {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
