<!--
  - Copyright (c) 2020
  - Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div id="app">
        <router-view />

        <v-offline @detected-condition="amIOnline">
            <template v-slot:[onlineSlot] :slot-name="onlineSlot" v-if="this.appOnline === false">
                <div class="loading-overlay">
                    <div class="d-block text-center m-3">
                        <span class="spinner"></span>
                        <br>
                        <span class="text-info">Je hebt een online verbinding nodig.</span>
                    </div>
                </div>
            </template>
            <template v-slot:[offlineSlot] :slot-name="offlineSlot" v-if="this.appOnline === false">
                <div class="loading-overlay">
                    <div class="d-block text-center m-3">
                        <span class="spinner"></span>
                        <br>
                        <span class="text-info">Je hebt een online verbinding nodig.</span>
                    </div>
                </div>
            </template>
        </v-offline>
    </div>
</template>

<script>
    import VOffline from 'v-offline';

    export default {
        name: "App",
        components: {
            VOffline
        },
        data: () => ({
            appOnline: null,
            onlineSlot: 'online',
            offlineSlot: 'offline',
        }),
        methods: {
            amIOnline(e) {
                this.appOnline = e;
            },
        },
    };
</script>