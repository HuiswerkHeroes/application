<!--
  - Copyright (c) 2020.
  - Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <div class="panel">
            <form>
                <div class="panel-body">
                    <div class="form-group">
                        <label for="voornaam">Voornaam</label>
                        <input id="voornaam" type="text" class="form-control" v-model="voornaam" required />
                    </div>
                    <div class="form-group">
                        <label for="achternaam">Achternaam</label>
                        <input id="achternaam" type="text" class="form-control" v-model="achternaam" required />
                    </div>
                </div>

                <div class="panel-footer">
                    <button type="submit" class="btn btn-contained btn-primary ml-auto" v-bind:disabled="this.laden">
                        <span v-if="this.laden" class="spinner"></span>
                        <span>Opslaan</span>
                    </button>
                </div>
            </form>
            <div class="loading-overlay">
                <div class="d-block text-center m-3 text-error fa-2x">
                    <font-awesome-icon icon="times" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'Instellingen',
        data() {
            return {
                laden: false,
                voornaam: '',
                achternaam: '',
                success: ''
            };
        },
        computed: mapGetters('auth', ['getGebruiker']),
        mounted() {
            this.voornaam = this.getGebruiker.voornaam;
            this.achternaam = this.getGebruiker.achternaam;
        }
    };
</script>
