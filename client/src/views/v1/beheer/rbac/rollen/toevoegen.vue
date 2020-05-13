<!--
  - Copyright (c) 2020
  - Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
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
                            <router-link class="nav-link" :to="{ name: 'RBACRollenIndex' }">Rollen</router-link>
                            <a class="nav-link is-active">Rol toevoegen</a>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">

                    <div v-if="this.fout" class="notice notice-error mb-3">{{ this.fout }}</div>

                    <div class="panel">
                        <div class="panel-header">
                            <span class="panel-title">Rol toevoegen</span>
                        </div>

                        <div class="panel-body">
                            <form>
                                <div class="form-group">
                                    <label for="display_name">Weergavenaam</label>
                                    <input type="text" class="form-control" id="display_name" name="display_name" required/>
                                </div>

                                <div class="form-group">
                                    <label for="name">Systeemnaam</label>
                                    <input type="text" class="form-control" id="name" name="name" required/>
                                </div>

                                <div class="form-group">
                                    <label for="description">Beschrijving</label>
                                    <textarea class="form-control" name="description" id="description" cols="30" rows="5"></textarea>
                                </div>

                                <div class="form-group">
                                    <label>Permissies</label>

                                    <label class="d-flex">
                                        <input type="checkbox" v-model="checkbox" value="1" class="checkbox mr-3"/>
                                        <span>1</span>
                                    </label>
                                    <label class="d-flex">
                                        <input type="checkbox" v-model="checkbox" value="2" class="checkbox mr-3"/>
                                        <span>2</span>
                                    </label>
                                    <label class="d-flex">
                                        <input type="checkbox" v-model="checkbox" value="3" class="checkbox mr-3"/>
                                        <span>3</span>
                                    </label>
                                    <label class="d-flex">
                                        <input type="checkbox" v-model="checkbox" value="4" class="checkbox mr-3"/>
                                        <span>4</span>
                                    </label>
                                </div>

                                <div class="row justify-content-between mt-4">
                                    <button type="submit" class="btn btn-contained btn-success ml-auto mr-3">
                                        <span>Toevoegen</span>
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div class="loading-overlay" v-if="this.preload">
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
    import axios from 'axios';
    import {Latte} from '@bybas/latte-ui';

    export default {
        name: 'rollen-toevoegen',
        components: {},
        data() {
            return {
                fout: '',
                checkbox: [],
                preload: true,
                failed: false,
            };
        },
        methods: {
            async getPermissies() {
                if (!this.preload) {
                    return;
                }
                try {
                    const res = await axios.get(process.env.VUE_APP_APIURL + '/api/v1/gebrsuiker/types');
                    this.types = res.data.types;
                    this.preload = false;
                } catch (err) {
                    this.preload = false;
                    this.failed = true;

                    await Latte.ui.notification.create({
                        title: 'Er is iets fout gegaan!',
                        message: 'Probeer het later opnieuw.'
                    });
                }
            },
            async handleSubmit(e) {
                e.preventDefault();

                if (this.laden) {
                    return;
                }

                this.laden = true;

                try {
                    await axios.post(process.env.VUE_APP_APIURL + '/api/v1/gebruiker/setup/type', {
                        typeId: this.typeId
                    });

                    if (this.typeId === 1) {
                        await this.$router.push({name: 'RegistrerenSetupStudent2'});
                    }
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

                this.laden = false;
            }
        },
        created() {
            this.getPermissies();
        }
    };
</script>
