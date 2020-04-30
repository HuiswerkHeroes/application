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
                                        <label for="voornaam">Voornaam</label>
                                        <input type="text" class="form-control" id="voornaam" placeholder="Jan" v-model="voornaam" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="achternaam">Achternaam</label>
                                        <input type="text" class="form-control" id="achternaam" placeholder="Jansen" v-model="achternaam" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">E-mailadres</label>
                                        <input type="email" class="form-control" id="email" placeholder="jan.jansen@voorbeeld.nl" v-model="email" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="wachtwoord">Wachtwoord</label>
                                        <input type="password" class="form-control" id="wachtwoord" v-model="wachtwoord" placeholder="Nieuw wachtwoord" autocomplete="new-password" required>
                                        <small>Een wachtwoord moet minimaal 6 karakters bevatten</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="wachtwoordConfirm">Wachtwoord bevestigen</label>
                                        <input type="password" class="form-control" id="wachtwoordConfirm" v-model="wachtwoordConfirm"  placeholder="Wachtwoord bevestigen" autocomplete="new-password" required>
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

                                <div v-if="this.laden" class="loading-overlay">
                                    <span class="spinner"></span>
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
            wachtwoordConfirm: '',
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

            if (this.wachtwoord !== this.wachtwoordConfirm) {
                this.fout = 'Je hebt twee verschillende wachtwoorden gekozen.'
                this.wachtwoord = '';
                this.wachtwoordConfirm = '';
                this.laden = false;
                return;
            }

            await this.tryRegister({
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
                    this.wachtwoordConfirm = '';
                    this.$router.push({ name: 'RegistrerenSetup1' });
                })
                .catch(async err => {
                    this.wachtwoord = '';
                    this.wachtwoordConfirm = '';

                    if (!err.response) {
                        await Latte.ui.notification.create({
                            title: 'Er is iets fout gegaan!',
                            message: 'Probeer het later opnieuw.'
                        });
                    } else {
                        const data = JSON.parse(err.request.response);
                        this.fout = (data.error);
                    }
                });

            this.laden = false;
        }
    }
};
</script>
