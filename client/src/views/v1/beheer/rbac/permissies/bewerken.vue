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
                            <router-link class="nav-link" :to="{ name: 'RBACPermissiesView', props: { permissie_id: permissie.id } }">{{ permissie.display_name || 'Laden...'}}</router-link>
                            <a class="nav-link is-active">Bewerken</a>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div v-if="this.fout" class="notice notice-error mb-3">{{ this.fout }}</div>

                    <latte-tab-container class="panel">
                        <div class="panel-header">
                            <span class="panel-title">Permissie bewerken: {{ permissie.display_name }} ({{ permissie.name }})</span>
                        </div>

                        <latte-tab-bar></latte-tab-bar>

                        <latte-tab class="panel-body" label="Algemeen">
                            <div class="row justify-content-between">
                                <div class="col-md-5">
                                    <form>
                                        <div class="form-group">
                                            <label>Weergavenaam</label>
                                            <input type="text" class="form-control" :value="this.permissie.display_name" />
                                        </div>
                                        <div class="form-group">
                                            <label>Systeemnaam</label>
                                            <input type="text" class="form-control" :value="this.permissie.name" disabled />
                                        </div>

                                        <div class="form-group">
                                            <label for="description">Beschrijving</label>
                                            <textarea class="form-control" id="description" cols="30" rows="3" :value="this.permissie.description || 'Geen beschrijving.'"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Gemaakt op</label>
                                        <input type="text" class="form-control" :value="this.permissie.created_at" disabled />
                                    </div>
                                    <div class="form-group">
                                        <label>Laatst veranderd op</label>
                                        <input type="text" class="form-control" :value="this.permissie.updated_at" disabled/>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-right">
                                <div class="form-group ml-auto mr-3">
                                    <button type="submit" class="btn btn-contained btn-primary">
                                        <span>Bewerken</span>
                                    </button>
                                </div>
                            </div>
                        </latte-tab>

                        <div class="loading-overlay" v-if="this.laden">
                            <span class="spinner"></span>
                        </div>

                        <div class="loading-overlay" v-if="this.failed">
                            <div class="d-block text-center m-3 text-error fa-2x">
                                <font-awesome-icon icon="times" />
                            </div>
                        </div>

                        <div class="loading-overlay" v-if="this.success">
                            <div class="d-block text-center m-3 text-error">
                                <div class="success-checkmark">
                                    <div class="check-icon">
                                        <span class="icon-line line-tip"></span>
                                        <span class="icon-line line-long"></span>
                                        <div class="icon-circle"></div>
                                        <div class="icon-fix"></div>
                                    </div>
                                </div>
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
        name: "permissies-bewerken",

        data() {
            return {
                fout: '',
                id: this.$route.params.permissie_id,
                permissie: {},
                laden: true,
                failed: true,
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