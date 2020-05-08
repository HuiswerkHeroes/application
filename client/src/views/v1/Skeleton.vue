<!--
  - Copyright (c) 2020
  - Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <header id="app-header">
            <div class="app-bar app-bar-primary">
                <div class="app-bar-row">
                    <router-link class="app-bar-title nav-link" :to="{ name: 'Dashboard' }">HuiswerkHeroes</router-link>

                    <div class="ml-auto">
                        <strong class="mx-2 d-md-inline-block d-sm-none d-none" style="font-size: 0.9em;" v-if="getGebruiker.setup_afgerond">{{ getGebruiker.opleiding.naam }} - {{ getGebruiker.school_locatie.naam }}</strong>
                        <button class="btn btn-text btn-icon btn-lg" ref="userDropdown">
                            <latte-initials :initials="getGebruiker.initialen" class="avatar"></latte-initials>
                        </button>
                    </div>
                    <latte-popup :associate-with="$refs.userDropdown" :margin-x="-9">
                        <nav class="nav nav-list">
                            <router-link class="nav-link" :to="{ name: 'Instellingen' }" v-if="getGebruiker.setup_afgerond">Instellingen</router-link>

                            <div class="divider divider-horizontal" v-if="getGebruiker.setup_afgerond"></div>

                            <form v-on:submit="handleSignOut">
                                <button class="nav-link" type="submit">
                                    <span>Uitloggen</span>
                                </button>
                            </form>
                        </nav>
                    </latte-popup>
                </div>
            </div>
        </header>

        <aside id="is-sidebar" v-if="getGebruiker.setup_afgerond">
            <latte-bottom-nav is-side class="bottom-nav-dark" id="app-sidebar">
                <router-link class="text-decoration-none" :to="{ name: 'Dashboard' }">
                    <latte-ripple as="div" class="btn btn-action w-100">
                        <font-awesome-icon icon="home" />
                        <span>Dashboard</span>
                    </latte-ripple>
                </router-link>
            </latte-bottom-nav>
        </aside>

        <main id="main-view">
            <router-view />
        </main>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Skeleton',
    data() {
        return {
            initialen: ''
        };
    },
    methods: {
        ...mapActions('auth', { trySignOut: 'probeerUitloggen' }),
        async handleSignOut(e) {
            e.preventDefault();

            this.trySignOut().then(() => {
                this.$router.push({ name: 'Inloggen' });
            });
        }
    },
    computed: mapGetters('auth', ['getGebruiker'])
};
</script>

<style></style>
