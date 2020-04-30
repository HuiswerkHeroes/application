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
                        <div v-if="this.fout" class="notice notice-error my-4">{{ this.fout }}</div>

                        <form v-on:submit="handleSubmit">
                            <div class="panel">
                                <div class="panel-body">
                                    <h5 v-if="!this.wachtenOpTypes">Ik ben een ...</h5>
                                    <div v-if="!this.wachtenOpTypes" class="form-group">
                                        <label class="d-flex" v-for="type in types" :key="type.id">
                                            <input type="radio" name="type" v-model="typeId" class="radio-button mr-3" :value="type.id" />
                                            <span>{{ type.naam }}</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                    <div class="ml-auto">
                                        <button class="btn btn-contained btn-primary" v-bind:disabled="this.laden || this.wachtenOpTypes" type="submit">
                                            <span v-if="this.laden" class="spinner"></span>
                                            <span>Volgende</span>
                                        </button>
                                    </div>
                                </div>
                                <div v-if="this.wachtenOpTypes || this.laden" class="loading-overlay">
                                    <span class="spinner"></span>
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
            fout: '',
            laden: false,
            wachtenOpTypes: true,
            types: [],
            typeId: 1
        };
    },
    methods: {
        async getTypes() {
            if (!this.wachtenOpTypes) {
                return;
            }
            try {
                const res = await axios.get(process.env.VUE_APP_APIURL + '/api/v1/gebruiker/types');
                this.types = res.data.types;
                this.wachtenOpTypes = false;
            } catch (err) {
                await Latte.ui.notification.create({
                    title: 'Er is iets fout gegaan!',
                    message: 'Probeer het later opnieuw.'
                });
            }
        },
        async handleSubmit(e) {
            e.preventDefault();

            if (this.laden) {
                return;
            }

            this.laden = true;

            try {
                await axios.post(process.env.VUE_APP_APIURL + '/api/v1/gebruiker/setup/type', {
                    typeId: this.typeId
                });

                if (this.typeId === 1) {
                    await this.$router.push({name: 'RegistrerenSetupStudent2'});
                }
            } catch (err) {
                if (!err.response) {
                    await Latte.ui.notification.create({
                        title: 'Er is iets fout gegaan!',
                        message: 'Probeer het later opnieuw.'
                    });
                } else {
                    this.fout = err.response.data.error;
                }
            }

            this.laden = false;
        }
    },
   created() {
        this.getTypes();
    }
};
</script>
