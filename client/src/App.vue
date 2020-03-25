<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'App',
    methods: mapActions('auth', { tryAuth: 'tryAuth' }),
    mounted() {
        this.tryAuth().catch(err => console.log(err));
    }
};
</script>
