<!--
  - Copyright (c) 2020.
  - Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <div class="container">
            <div class="row justify-content-around">
                <div class="col-md-4 mt-3">
                    <router-link class="text-decoration-none" :to="{ name: 'RBACRollenIndex' }">
                        <div class="panel">
                            <div class="panel-body dashboardPanel">
                                <div class="text-center dashboardPanelContent">
                                    <div class="mb-4">
                                        <font-awesome-icon icon="user-tag" class="dashboardIcon rbacRoleIcon" />
                                    </div>
                                    <div>
                                        <h4 class="font-weight-bold">Rollen</h4>
                                        <p>
                                            Beheer de rollen en permissies die daarbij horen.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class="col-md-4 mt-3">
                    <router-link class="text-decoration-none" :to="{ name: 'RBACPermissiesIndex' }">
                        <div class="panel">
                            <div class="panel-body dashboardPanel">
                                <div class="text-center dashboardPanelContent">
                                    <div class="mb-4">
                                        <font-awesome-icon icon="ban" class="dashboardIcon text-error" />
                                    </div>
                                    <div>
                                        <h4 class="font-weight-bold">Permissies</h4>
                                        <p>
                                            Bekijk en beheer de permissies van het systeem.
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
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>

</style>