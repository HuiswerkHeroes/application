<!--
  - Copyright (c) 2020
  - Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <header>
        <div class="app-bar app-bar-primary">
            <div class="container">
                <div class="app-bar-row">
                    <router-link class="app-bar-title nav-link" :to="{ name: 'Inloggen' }">HuiswerkHeroes</router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    components: {}
};
</script>

<style scoped>
#top-bar {
    --app-bar-background: 228, 228, 228;
}
.router-link-exact-active {
    box-shadow: inset 0 -2px rgb(var(--tabs-accent)) !important;
    opacity: 1 !important;
}
</style>
