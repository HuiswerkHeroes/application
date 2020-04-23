<!--
  - Copyright (c) 2020.
  - Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <div class="panel panel-outline radius-none">
            <div class="container">
                <div class="row align-items-center py-10 m">
                    <div class="col-12">
                        <h3 class="my-2 text-center">Instellingen</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="container my-5">
            <div class="row">
                <div class="col-4">
                    <div class="panel">
                        <nav class="nav nav-list">
                            <router-link class="nav-link" :to="{ name: 'Instellingen' }">Algemeen</router-link>

                            <div class="divider divider-horizontal"></div>

                            <router-link class="nav-link" :to="{ name: 'Instellingen-E-mailadres' }">E-mailadres</router-link>
                            <router-link class="nav-link" :to="{ name: 'Instellingen-Wachtwoord' }">Wachtwoord</router-link>
                        </nav>
                    </div>
                </div>

                <div class="col">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>