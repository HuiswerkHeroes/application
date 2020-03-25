<template>
    <div>
        <Header />
        <h2>{{ getUser }}</h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import Header from '@/components/layout/Header';

export default {
    name: 'Dashboard',
    components: {
        // Header
    },
    computed: mapGetters('auth', ['getUser'])
};
</script>

<style></style>
