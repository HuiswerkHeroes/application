<!--
  - Copyright (c) 2020
  - Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <div class="app-bar app-bar-main app-bar-dark py-2">
            <div class="app-bar-row app-bar-auto py-2">
                <!-- <button class="btn btn-icon btn-text"></button> -->
                <div class="app-bar-column">
                    <span class="app-bar-title">Homework Heroes</span>
                </div>
            </div>
        </div>
    </div>
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
