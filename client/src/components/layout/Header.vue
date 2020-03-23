<template>
    <div>
        <div id="top-bar" class="app-bar py-1">
            <div class="container">
                <div class="app-bar-row app-bar-auto">
                    <div class="ml-auto">
                        <button class="btn btn-outline btn-primary"><span>Inloggen</span></button>
                        <button class="btn btn-outline btn-primary"><span>Registreren</span></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="app-bar app-bar-main py-3">
            <div class="container">
                <div class="app-bar-row app-bar-auto py-2">
                    <button class="btn btn-icon btn-text"></button>
                    <div class="app-bar-column">
                        <span class="app-bar-title">Homework Heroes</span>
                    </div>
                    <nav class="nav nav-tabs px-5 d-none d-lg-flex">
                        <router-link class="nav-link" to="/">Home</router-link>
                        <router-link class="nav-link" to="/about">About</router-link>
                    </nav>
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
