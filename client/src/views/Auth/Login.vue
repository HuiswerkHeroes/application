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
                        <form v-on:submit="handleSubmit">
                            <div class="panel">
                                <div class="panel-header">
                                    <span class="panel-title mx-auto">Inloggen</span>
                                </div>
                                <div class="panel-body">
                                    <div class="form-group">
                                        <small>E-mailadres</small>
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
                                        <small>Wachtwoord</small>
                                        <latte-password placeholder="Voer je wachtwoord in" v-model="wachtwoord"></latte-password>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                    <div>
                                        <router-link class="btn btn-text btn-primary btn-sm ml-auto" :to="{ name: 'Register' }"
                                            >Nog niet geregistreerd?</router-link
                                        >
                                        <a href class="btn btn-text btn-primary btn-sm ml-auto">Wachtwoord vergeten?</a>
                                    </div>
                                    <div class="ml-auto">
                                        <button class="btn btn-contained btn-primary" type="submit">
                                            <span v-if="this.loading" class="spinner"></span>
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
import Header from '@/components/layout/Header';
import { mapActions } from 'vuex';
// import { Latte } from '@bybas/latte-ui';

export default {
    name: 'Login',
    components: {
        Header,
    },
    data() {
        return {
            email: '',
            wachtwoord: '',
            loading: false,
        };
    },
    methods: {
        ...mapActions('auth', { tryLogin: 'tryLogin' }),
        async handleSubmit(e) {
            e.preventDefault();

            if (this.loading) {
                return;
            }

            this.loading = true;

            this.tryLogin({ email: this.email, wachtwoord: this.wachtwoord })
                .then(() => {
                    this.loading = false;
                    this.email = '';
                    this.wachtwoord = '';
                    this.$router.push({ name: 'Dashboard' });
                })
                .catch(() => {
                    this.loading = false;
                    this.email = '';
                    this.wachtwoord = '';

                    // TODO: Error handeling
                });
        },
    },
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
