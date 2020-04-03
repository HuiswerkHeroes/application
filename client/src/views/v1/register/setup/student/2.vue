<!--
  - Copyright (c) 2020
  - Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <div>
            <div class="container">
                <div class="row justify-content-center py-4">
                    <div class="col-sm-12 col-md-10 col-lg-6">
                        <div v-if="this.error" class="notice notice-error my-4">{{ this.error }}</div>

                        <form v-on:submit="handleSubmit">
                            <div class="panel">
                                <div class="panel-header">
                                    <span class="panel-title mx-auto">Registreren</span>
                                </div>

                                <div class="panel-body">
                                    <h5>Typ je schoolnaam</h5>

                                    <div class="mx-auto text-center" v-if="this.loadingSchools"><span class="spinner"></span></div>

                                    <!-- TODO: Veranderen naar select met typen -->
                                    <div v-if="!this.loadingSchools" class="form-group">
                                        <select v-model="selected" class="custom-select">
                                            <option :key="school.id" v-for="school in schools" :value="school._id">
                                                {{ school.name }} ({{ school.city }})
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                    <router-link class="btn btn-soft btn-primary" :to="{ name: 'RegisterSetup1' }">Vorige</router-link>
                                    <div class="ml-auto">
                                        <button
                                            class="btn btn-contained btn-primary"
                                            v-bind:disabled="this.loading || this.loadingSchools"
                                            type="submit"
                                        >
                                            <span v-if="this.loading" class="spinner"></span>
                                            <span>Volgende</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {Latte} from '@bybas/latte-ui';

    export default {
    name: 'RegisterSetup1',
    components: {},
    data() {
        return {
            error: '',
            schools: {},
            selected: '5e8461e6e95181d1bb61537c',
            loadingSchools: true,
            loading: false
        };
    },
    methods: {
        async handleSubmit(e) {
            e.preventDefault();

            if (this.loading || this.loadingSchools) {
                return;
            }

            this.loading = true;

            try {
                await axios.post(process.env.VUE_APP_APIURL + '/api/user/setup/school', {
                    schoolId: this.selected
                });

                this.$store.state.auth.user.setupComplete = true;
                this.$router.push({ name: 'Dashboard' });
            } catch (err) {
                console.error(err);
                Latte.ui.notification.create({
                    title: 'Er is iets fout gegaan!',
                    message: 'Probeer het later opnieuw.'
                });
            }

            this.loading = false;
        }
    },
    async created() {
        try {
            const res = await axios.get(process.env.VUE_APP_APIURL + '/api/school');
            this.schools = res.data;
            this.loadingSchools = false;
        } catch (err) {
            Latte.ui.notification.create({
                title: 'Er is iets fout gegaan!',
                message: 'Kan de scholen niet ophalen, probeer het later opnieuw!'
            });
        }
    }
};
</script>
