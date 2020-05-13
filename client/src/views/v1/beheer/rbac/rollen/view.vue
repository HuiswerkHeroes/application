<!--
  - Copyright (c) 2020.
  - Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <latte-tab-container class="panel">
                        <div class="panel-header">
                            <span class="panel-title">Rol: </span>
                            <a href="" class="btn btn-outline btn-primary ml-auto">
                                <font-awesome-icon icon="pen" class="mr-2" />
                                <span>Rol wijzigen</span>
                            </a>
                        </div>

                        <latte-tab-bar></latte-tab-bar>

                        <latte-tab class="panel-body" label="Algemeen">
                            <div class="row justify-content-between">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label>Weergavenaam</label>
                                        <input type="text" class="form-control" value="" disabled/>
                                    </div>
                                    <div class="form-group">
                                        <label>Systeemnaam</label>
                                        <input type="text" class="form-control" value="" disabled/>
                                    </div>

                                    <div class="form-group">
                                        <label for="description">Beschrijving</label>
                                        <textarea class="form-control" id="description" cols="30" rows="3" disabled></textarea>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Gemaakt op</label>
                                        <input type="text" class="form-control" value="" disabled/>
                                    </div>
                                    <div class="form-group">
                                        <label>Laatst veranderd op</label>
                                        <input type="text" class="form-control" value="" disabled/>
                                    </div>
                                </div>
                            </div>
                        </latte-tab>

                        <latte-tab class="table-overflow" style="overflow: auto;" label="Permissies">
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
                                    <tr>
                                        <td style="width: auto;">
                                            <div class="column-content">

                                            </div>
                                        </td>
                                        <td style="width: auto;">
                                            <div class="column-content">

                                            </div>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </latte-tab>

                        <latte-tab class="panel-body" label="Rol verwijderen">
                            <form>
                                <div class="notice notice-error">
                                    <p>
                                        Weet je zeker dat je deze rol wilt verwijderen? <br>
                                        <strong>Dit is een permanente wijziging.</strong>
                                    </p>
                                </div>

                                <div class="notice notice-info mb-3">
                                    <p>De rol wordt verwijderd bij alle gebruikers die deze rol hebben. <br /> Hierdoor verliezen ze alle permissies die bij deze rol horen.</p>
                                </div>

                                <div class="form-group">
                                    <label for="confirm">Voer hier de systeemnaam van de rol in (--naam--) voor bevestiging om deze rol te verwijderen</label>
                                    <input type="text" class="form-control" name="confirm" id="confirm">
                                </div>

                                <div class="row justify-content-between mt-4">
                                    <button type="submit" class="btn btn-contained btn-danger ml-auto mr-3">
                                        <span>Verwijderen</span>
                                    </button>
                                </div>
                            </form>
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
        name: "view-index",

        data() {
            return {
                fout: '',
                id: this.$route.params.rol_id,
                rol: {},
                laden: true,
                failed: false,
            };
        },

        methods: {
            async getRol() {
                if (!this.laden) {
                    return;
                }

                try {
                    const res = await axios.get(process.env.VUE_APP_APIURL + '/api/v1/beheer/rbac/rollen/' + this.id);
                    this.rol = res.data.rol;
                    this.laden = false;
                } catch (err) {
                    this.failed = true;
                    this.laden = false;
                    Latte.ui.notification.create({
                        title: 'Er is iets fout gegaan!',
                        message: 'Probeer het later opnieuw.'
                    });
                }
            },
        },

        created() {
            this.getRol();
        }
    }
</script>