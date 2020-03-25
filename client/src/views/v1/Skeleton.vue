<template>
    <div>
        <header>
            <div class="app-bar app-bar-dark">
                <div class="app-bar-row">
                    <span class="app-bar-title">HuiswerkHeroes</span>

                    <button class="btn btn-text btn-icon ml-auto btn-lg" ref="userDropdown">
                        <latte-initials :initials="getUser.firstName.slice(0, 1) + getUser.lastName.slice(0, 1)" class="avatar"></latte-initials>
                    </button>
                    <latte-popup :associate-with="$refs.userDropdown" :margin-x="-9">
                        <nav class="nav nav-list">
                            <latte-ripple as="a" class="nav-link" href="#"><span>Uitloggen</span></latte-ripple>
                        </nav>
                    </latte-popup>
                </div>
            </div>
        </header>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Skeleton',
    computed: mapGetters('auth', ['getUser'])
};
</script>

<style></style>
