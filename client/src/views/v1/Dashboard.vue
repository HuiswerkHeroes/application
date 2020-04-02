<template>
    <div>
        <Header />
        <ul class="mt-5">
            <li v-bind:key="index" v-for="(item, index) in getUser">
                <strong> {{ index }}: </strong>
                {{ item }}
            </li>
        </ul>
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
