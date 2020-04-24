<!--
  - Copyright (c) 2020.
  - Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <div v-if="this.fout" class="notice notice-error my-4">{{ this.fout }}</div>
        <div v-if="this.success" class="notice notice-success my-4">{{ this.success }}</div>

        <div class="panel">
            <form v-on:submit="handleSubmit">
                <div class="panel-body">
                    <div class="form-group">
                        <label for="oud-wachtwoord">Huidig wachtwoord</label>
                        <input id="oud-wachtwoord" type="password" class="form-control" v-model="oudWachtwoord" placeholder="Huidig wachtwoord" required />
                    </div>
                </div>

                <div class="divider divider-horizontal"></div>

                <div class="panel-body">
                    <div class="form-group">
                        <label for="nieuw-wachtwoord">Nieuw wachtwoord</label>
                        <input id="nieuw-wachtwoord" type="password" class="form-control" v-model="nieuwWachtwoord" placeholder="Nieuw wachtwoord" required />
                    </div>

                    <div class="form-group">
                        <label for="nieuw-wachtwoord-confirm">Wachtwoord bevestigen</label>
                        <input id="nieuw-wachtwoord-confirm" type="password" class="form-control" v-model="nieuwWachtwoordConfirm" placeholder="Wachtwoord bevestigen" required />
                    </div>
                </div>

                <div class="panel-footer">
                    <button type="submit" class="btn btn-contained btn-primary ml-auto" v-bind:disabled="this.laden">
                        <span v-if="this.laden" class="spinner"></span>
                        <span>Opslaan</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {Latte} from "@bybas/latte-ui";
    import axios from "axios";

    export default {
        name: "Wachtwoord.vue",
        data() {
            return {
                laden: false,
                nieuwWachtwoord: '',
                nieuwWachtwoordConfirm: '',
                oudWachtwoord: '',
                fout: '',
                success: ''
            };
        },
        methods: {
            async handleSubmit(e) {
                e.preventDefault();

                if (this.laden) {
                    return;
                }

                this.laden = true;
                this.fout = '';
                this.success = '';

                if (this.nieuwWachtwoord !== this.nieuwWachtwoordConfirm) {
                    this.fout = 'Je hebt twee verschillende wachtwoorden gekozen bij het nieuwe wachtwoord.'
                    this.oudWachtwoord = '';
                    this.laden = false;
                    return;
                }

                try {
                    const res = await axios.post(process.env.VUE_APP_APIURL + '/api/v1/gebruiker/instellingen/wachtwoord', {
                        oudWachtwoord: this.oudWachtwoord,
                        nieuwWachtwoord: this.nieuwWachtwoord
                    });

                    this.nieuwWachtwoord = '';
                    this.nieuwWachtwoordConfirm = '';
                    this.success = res.data.message;
                } catch (err) {
                    if (!err.response) {
                        await Latte.ui.notification.create({
                            title: 'Er is iets fout gegaan!',
                            message: 'Probeer het later opnieuw.'
                        });
                    } else {
                        this.fout = err.response.data.error;
                    }
                }

                this.oudWachtwoord = '';
                this.laden = false;
            }
        }
    }
</script>

<style scoped>

</style>