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
                            <router-link class="nav-link" :to="{ name: 'RBACPermissiesIndex' }">Permissies</router-link>
                            <a class="nav-link is-active">{{ permissie.display_name || 'Laden...'}}</a>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div v-if="this.fout" class="notice notice-error mb-3">{{ this.fout }}</div>

                    <latte-tab-container class="panel">
                        <div class="panel-header">
                            <span class="panel-title">Permissie: {{ permissie.display_name }} ({{ permissie.name }})</span>
                            <router-link class="btn btn-outline btn-primary ml-auto" :to="{ name: 'RBACPermissiesBewerken', props: { permissie_id: permissie.id } }">
                                <font-awesome-icon icon="pen" class="mr-2" />
                                <span>Rol bewerken</span>
                            </router-link>
                        </div>

                        <latte-tab-bar></latte-tab-bar>

                        <latte-tab class="panel-body" label="Algemeen">
                            <div class="row justify-content-between">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label>Weergavenaam</label>
                                        <input type="text" class="form-control" :value="this.permissie.display_name" disabled/>
                                    </div>
                                    <div class="form-group">
                                        <label>Systeemnaam</label>
                                        <input type="text" class="form-control" :value="this.permissie.name" disabled/>
                                    </div>

                                    <div class="form-group">
                                        <label for="description">Beschrijving</label>
                                        <textarea class="form-control" id="description" cols="30" rows="3" :value="this.permissie.description || 'Geen beschrijving.'" disabled></textarea>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Gemaakt op</label>
                                        <input type="text" class="form-control" :value="this.permissie.created_at" disabled/>
                                    </div>
                                    <div class="form-group">
                                        <label>Laatst veranderd op</label>
                                        <input type="text" class="form-control" :value="this.permissie.updated_at" disabled/>
                                    </div>
                                </div>
                            </div>
                        </latte-tab>

                        <latte-tab class="table-overflow" style="overflow: auto;" label="Rollen">
                            <table class="table table-hover m-2">
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
                                </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="rol in permissie.roles" :key="rol.id">
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
                                    </tr>
                                </tbody>

                            </table>
                        </latte-tab>
                        
                        <div class="loading-overlay" v-if="this.laden">
                            <span class="spinner"></span>
                        </div>

                        <div class="loading-overlay" v-if="this.failed">
                            <div class="d-block text-center m-3 text-error fa-2x">
                                <font-awesome-icon icon="times" />
                            </div>
                        </div>
                    </latte-tab-container>
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
                id: this.$route.params.permissie_id,
                permissie: {},
                verwijderenConfirm: '',
                laden: true,
                failed: false,
                success: false
            };
        },

        methods: {
            async getPermissie() {
                if (!this.laden) {
                    return;
                }

                try {
                    const res = await axios.get(process.env.VUE_APP_APIURL + '/api/v1/beheer/rbac/permissies/' + this.id);
                    this.permissie = res.data.permissie;
                    this.laden = false;
                } catch (err) {
                    this.failed = true;
                    this.laden = false;
                    await Latte.ui.notification.create({
                        title: 'Er is iets fout gegaan!',
                        message: 'Probeer het later opnieuw.'
                    });
                }
            }
        },
        created() {
            this.getPermissie();
        }
    }
</script>