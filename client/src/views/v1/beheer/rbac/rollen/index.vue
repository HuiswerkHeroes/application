<!--
  - Copyright (c) 2020.
  - Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div v-if="this.fout" class="notice notice-error my-4">{{ this.fout }}</div>

                    <div class="panel">
                        <div class="panel-header">
                            <span class="panel-title mr-auto">Rollen</span>
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
                                    <tr v-for="rol in rollen" :key="rol.id">
                                        <td style="width: auto;">
                                            <div class="column-content">
                                                {{ rol.display_name }}
                                            </div>
                                        </td>
                                        <td style="width: auto;">
                                            <div class="column-content">
                                                {{ rol.name }}
                                            </div>
                                        </td>
                                        <td style="width: auto;">
                                            <div class="column-content">
                                                {{ rol.description || 'Geen beschrijving.' }}
                                            </div>
                                        </td>
                                        <td style="width: auto;">
                                            <div class="column-content">
                                                <router-link class="btn btn-outline btn-primary" :to="{ name: 'RBACRollenView', params: { rol_id: rol.id } }">
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
        name: "rollen-index",

        data() {
            return {
                fout: '',
                laden: true,
                rollen: []
            };
        },

        methods: {
            async getRollen() {
                if (!this.laden) {
                    return;
                }

                try {
                    const res = await axios.get(process.env.VUE_APP_APIURL + '/api/v1/beheer/rbac/rollen');
                    this.rollen = res.data.rollen;
                    this.laden = false;
                } catch (err) {
                    await Latte.ui.notification.create({
                        title: 'Er is iets fout gegaan!',
                        message: 'Probeer het later opnieuw.'
                    });
                }
            },
        },

        created() {
            this.getRollen();
        }
    }
</script>