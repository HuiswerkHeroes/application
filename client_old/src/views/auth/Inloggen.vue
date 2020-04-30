<!--
  - Copyright (c) 2020
  - Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <Header />
        <div id="login">
            <div class="container">
                <div class="row justify-content-center py-4">
                    <div class="col-sm-12 col-md-10 col-lg-6">
                        <div v-if="this.fout" class="notice notice-error my-4">{{ this.fout }}</div>

                        <form v-on:submit="handleSubmit">
                            <div class="panel">
                                <div class="panel-header">
                                    <span class="panel-title mx-auto">Inloggen</span>
                                </div>
                                <div class="panel-body">
                                    <div class="form-group">
                                        <label for="email">E-mailadres</label>
                                        <input type="email" class="form-control" id="email" placeholder="Voer je e-mailadres in" v-model="email" required autofocus/>
                                    </div>
                                    <div class="form-group">
                                        <label for="wachtwoord">Wachtwoord</label>
                                        <input type="password" class="form-control" id="wachtwoord" v-model="wachtwoord" required current-password="">
                                    </div>
                                </div>
                                <div class="panel-footer">
                                    <div>
                                        <router-link class="btn btn-text btn-primary btn-sm ml-auto" :to="{ name: 'Registreren' }">Nog niet geregistreerd?</router-link>
                                        <a href class="btn btn-text btn-primary btn-sm ml-auto">Wachtwoord vergeten?</a>
                                    </div>
                                    <div class="ml-auto">
                                        <button class="btn btn-contained btn-primary" type="submit" v-bind:disabled="this.laden">
                                            <span v-if="this.laden" class="spinner"></span>
                                            <span>Inloggen</span>
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
    import Header from "@/components/layout/Header";
    import { mapActions } from "vuex";
    import {Latte} from "@bybas/latte-ui";
    // import { Latte } from '@bybas/latte-ui';

    export default {
        name: "Inloggen",
        components: {
            Header
        },
        data() {
            return {
                email: "",
                wachtwoord: "",
                fout: "",
                laden: false
            };
        },
        methods: {
            ...mapActions("auth", { probeerInloggen: "probeerInloggen" }),
            async handleSubmit(e) {
                e.preventDefault();

                if (this.laden) {
                    return;
                }

                this.laden = true;

                await this.probeerInloggen({ email: this.email, wachtwoord: this.wachtwoord })
                    .then(() => {
                        this.loading = false;
                        this.email = "";
                        this.wachtwoord = "";
                        this.$router.push({ name: "Dashboard" });
                    })
                    .catch(async err => {
                        this.wachtwoord = '';

                        if (!err.response) {
                            await Latte.ui.notification.create({
                                title: 'Er is iets fout gegaan!',
                                message: 'Probeer het later opnieuw.'
                            });
                        } else {
                            this.fout = err.response.data.error;
                        }
                    });

                this.laden = false;
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
