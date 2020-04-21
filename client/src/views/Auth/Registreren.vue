<!--
  - Copyright (c) 2020
  - Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <Header />
        <div>
            <div class="container">
                <div class="row justify-content-center py-4">
                    <div class="col-sm-12 col-md-10 col-lg-6">
                        <div v-if="this.fout" class="notice notice-error my-4">{{ this.fout }}</div>

                        <form v-on:submit="handleSubmit">
                            <div class="panel">
                                <div class="panel-header">
                                    <span class="panel-title mx-auto">Registreren</span>
                                </div>
                                <div class="panel-body">
                                    <div class="form-group">
                                        <small>Voornaam</small>
                                        <input type="text" class="form-control" placeholder="Jan" v-model="voornaam">
                                    </div>
                                    <div class="form-group">
                                        <small>Achternaam</small>
                                        <input type="text" class="form-control" placeholder="Jansen" v-model="achternaam">
                                    </div>
                                    <div class="form-group">
                                        <small>E-mailadres</small>
                                        <input type="email" class="form-control" placeholder="jan.jansen@voorbeeld.nl" v-model="email" required>
                                    </div>
                                    <div class="form-group">
                                        <small>Wachtwoord</small>
                                        <input type="password" class="form-control" v-model="wachtwoord" autocomplete="new-password">
                                        <small>Een wachtwoord moet minimaal 6 karakters bevatten</small>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                    <div>
                                        <router-link class="btn btn-text btn-primary btn-sm ml-auto" :to="{ name: 'Inloggen' }"> Heeft u al een account?</router-link>
                                    </div>
                                    <div class="ml-auto">
                                        <button class="btn btn-contained btn-primary" type="submit" v-bind:disabled="this.laden">
                                            <span v-if="this.laden" class="spinner"></span>
                                            <span>Volgende</span>
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
    import Header from '../../components/layout/Header';
    import {mapActions} from 'vuex';
    import {Latte} from '@bybas/latte-ui';

    export default {
    name: 'Registreren',
    components: {
        Header
    },
    data() {
        return {
            voornaam: '',
            achternaam: '',
            email: '',
            wachtwoord: '',
            fout: '',
            laden: false
        };
    },
    methods: {
        ...mapActions('auth', { tryRegister: 'probeerRegistreren' }),
        async handleSubmit(e) {
            e.preventDefault();

            if (this.laden) {
                return;
            }

            this.laden = true;

            this.tryRegister({
                voornaam: this.voornaam,
                achternaam: this.achternaam,
                email: this.email,
                wachtwoord: this.wachtwoord
            })
                .then(() => {
                    this.laden = false;
                    this.voornaam = '';
                    this.achternaam = '';
                    this.email = '';
                    this.wachtwoord = '';
                    this.$router.push({ name: 'RegistrerenSetup1' });
                })
                .catch(err => {
                    this.laden = false;
                    this.wachtwoord = '';

                    if (!err.response) {
                        Latte.ui.notification.create({
                            title: 'Er is iets fout gegaan!',
                            message: 'Probeer het later opnieuw.'
                        });
                    } else {
                        const data = JSON.parse(err.request.response);
                        this.fout = (data.error);
                    }
                });
        }
    }
};
</script>
