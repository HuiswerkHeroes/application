<!--
  - Copyright (c) 2020
  - Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <header>
            <div class="app-bar app-bar-dark">
                <div class="app-bar-row">
                    <span class="app-bar-title">HuiswerkHeroes</span>

                    <button class="btn btn-text btn-icon ml-auto btn-lg" ref="userDropdown">
                        <latte-initials :initials="getGebruiker.initialen" class="avatar"></latte-initials>
                    </button>
                    <latte-popup :associate-with="$refs.userDropdown" :margin-x="-9">
                        <nav class="nav nav-list">
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
        <main>
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
        ...mapActions('auth', { trySignOut: 'trySignOut' }),
        async handleSignOut(e) {
            e.preventDefault();

            this.trySignOut().then(() => {
                this.$router.push({ name: 'Login' });
            });
        }
    },
    computed: mapGetters('auth', ['getGebruiker'])
};
</script>

<style></style>
