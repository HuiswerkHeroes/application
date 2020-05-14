<!--
  - Copyright (c) 2020.
  - Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <div class="container">
            <div class="row my-3">
                <div class="col">
                    <div class="panel">
                        <nav class="nav nav-breadcrumb m-3">
                            <router-link class="nav-link" :to="{ name: 'Dashboard' }">
                                <font-awesome-icon icon="home" />
                            </router-link>
                            <router-link class="nav-link" :to="{ name: 'RBACDashboard' }">Role-based Access Control</router-link>
                            <a class="nav-link is-active">Permissies</a>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div v-if="this.fout" class="notice notice-error my-4">{{ this.fout }}</div>

                    <div class="panel">
                        <div class="panel-header">
                            <span class="panel-title mr-auto">Permissies</span>

                            <router-link class="btn btn-outline btn-primary ml-auto" :to="{ name: 'RBACPermissiesToevoegen' }">
                                <font-awesome-icon icon="plus" class="mr-2" />
                                <span>Permissie toevoegen</span>
                            </router-link>
                        </div>

                        <div class="table-overflow" style="overflow: auto;">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th style="min-width: auto; width: auto;">
                                        <div class="column-content flex-row align-items-center justify-content-start">
                                            <span>Weergavenaam</span>
                                        </div>
                                    </th>
                                    <th style="min-width: auto; width: auto;">
                                        <div class="column-content flex-row align-items-center justify-content-start">
                                            <span>Systeemnaam</span>
                                        </div>
                                    </th>
                                    <th style="min-width: auto; width: auto;">
                                        <div class="column-content flex-row align-items-center justify-content-start">
                                            <span>Beschrijving</span>
                                        </div>
                                    </th>

                                    <th style="min-width: 150px; width: auto;"></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="permissie in permissies" :key="permissie.id">
                                    <td style="width: auto;">
                                        <div class="column-content">
                                            {{ permissie.display_name }}
                                        </div>
                                    </td>
                                    <td style="width: auto;">
                                        <div class="column-content">
                                            {{ permissie.name }}
                                        </div>
                                    </td>
                                    <td style="width: auto;">
                                        <div class="column-content">
                                            {{ permissie.description || 'Geen beschrijving.' }}
                                        </div>
                                    </td>
                                    <td style="width: auto;">
                                        <div class="column-content">
                                            <router-link class="btn btn-outline btn-primary" :to="{ name: 'RBACPermissiesView', params: { permissie_id: permissie.id } }">
                                                <span>Meer info</span>
                                            </router-link>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>

                                <tfoot>
                                <tr>
                                    <th colspan="5">
                                        <div class="column-content">

                                        </div>
                                    </th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>

                        <div class="loading-overlay" v-if="this.laden">
                            <span class="spinner"></span>
                        </div>

                        <div class="loading-overlay" v-if="this.failed">
                            <div class="d-block text-center m-3 text-error fa-2x">
                                <font-awesome-icon icon="times" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import {Latte} from "@bybas/latte-ui";

    export default {
        name: "permissies-index",

        data() {
            return {
                fout: '',
                laden: true,
                failed: false,
                permissies: []
            };
        },

        methods: {
            async getPermissies() {
                if (!this.laden) {
                    return;
                }

                try {
                    const res = await axios.get(process.env.VUE_APP_APIURL + '/api/v1/beheer/rbac/permissies');
                    this.permissies = res.data.permissies;
                    this.laden = false;
                } catch (err) {
                    this.laden = false;
                    this.failed = true;

                    await Latte.ui.notification.create({
                        title: 'Er is iets fout gegaan!',
                        message: 'Probeer het later opnieuw.'
                    });
                }
            },
        },

        created() {
            this.getPermissies();
        }
    }
</script>

<style scoped>

</style>