<!--
  - Copyright (c) 2020.
  - Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div class="panel">
        <form action="">
            <div class="panel-body">
                    <div class="form-group">
                        <label for="email">E-mailadres</label>
                        <input type="text" class="form-control" v-model="email">
                    </div>
            </div>
            <div class="panel-footer">
                <button type="submit" class="btn btn-contained btn-primary ml-auto" v-bind:disabled="this.laden">
                    <span v-if="this.laden" class="spinner"></span>
                    <span>E-mailadres veranderen</span>
                </button>
            </div>
        </form>

        <div class="loading-overlay">
            <div class="d-block text-center m-3 text-error fa-2x">
                <font-awesome-icon icon="times" />
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "E-mailadres.vue",
        data() {
            return {
                email: ''
            };
        },
        computed: mapGetters('auth', ['getGebruiker']),
        mounted() {
            this.email = this.getGebruiker.email;
        }
    }
</script>

<style scoped>

</style>