<!--
  - Copyright (c) 2020
  - Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <div>
            <div id="dashboardContainer" class="container">
                <div class="row justify-content-around">
                    <div class="col-md-4 mt-3">
                        <router-link class="text-decoration-none" :to="{ name: 'Gebruikers' }">
                            <div class="panel">
                                <div class="panel-body dashboardPanel">
                                    <div class="text-center dashboardPanelContent">
                                        <div class="mb-4">
                                            <font-awesome-icon icon="users" class="dashboardIcon usersIcon" />
                                        </div>
                                        <div>
                                            <h4 class="font-weight-bold">Gebruikers</h4>
                                            <p>
                                                Een lijst van alle gebruikers die een account hebben op HuiswerkHeroes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <div class="col-md-4 mt-3">
                        <router-link class="text-decoration-none" :to="{ name: 'RBACDashboard' }">
                            <div class="panel">
                                <div class="panel-body dashboardPanel">
                                    <div class="text-center dashboardPanelContent">
                                        <div class="mb-4">
                                            <font-awesome-icon icon="user-lock" class="dashboardIcon rbacIcon" />
                                        </div>
                                        <div>
                                            <h4 class="font-weight-bold">Rollen / Permissies</h4>
                                            <p>
                                                Een overzicht van alle rollen en permissies die er zijn op HuiswerkHeroes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel m-5">
            <div class="panel-header">
                <span class="panel-title">Debug Information</span>
            </div>
            <div class="panel-body">
                <ul>
                    <li v-bind:key="index" v-for="(item, index) in getGebruiker">
                        <strong> {{ index }}: </strong>
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

export default {
    name: 'Dashboard',
    computed: mapGetters('auth', ['getGebruiker'])
};
</script>

<style></style>
