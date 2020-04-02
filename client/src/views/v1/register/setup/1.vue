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
                                    <h5>Ik ben een ...</h5>
                                    <div class="form-group">
                                        <label class="d-flex">
                                            <input type="radio" name="type" v-model="type" class="radio-button mr-3" value="Student" />
                                            <span>Student</span>
                                        </label>

                                        <label class="d-flex">
                                            <input type="radio" name="type" v-model="type" class="radio-button mr-3" value="Docent" />
                                            <span>Docent</span>
                                        </label>

                                        <label class="d-flex">
                                            <input type="radio" name="type" v-model="type" class="radio-button mr-3" value="HBVB" />
                                            <span>HBVB (Huiswerk / Bijles Vrijwillige Begeleider)</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                    <div class="ml-auto">
                                        <button class="btn btn-contained btn-primary" v-bind:disabled="this.loading" type="submit">
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
import { Latte } from '@bybas/latte-ui';

export default {
    name: 'RegisterSetup1',
    components: {},
    data() {
        return {
            error: '',
            loading: false,
            type: 'Student'
        };
    },
    methods: {
        async handleSubmit(e) {
            e.preventDefault();

            if (this.loading) {
                return;
            }

            this.loading = true;

            try {
                await axios.post(process.env.VUE_APP_APIURL + '/api/user/setup/type', {
                    type: this.type
                });

                this.$router.push({ name: 'RegisterSetupStudent2' });
            } catch (err) {
                Latte.ui.notification.create({
                    title: 'Er is iets fout gegaan!',
                    message: 'Probeer het later opnieuw.'
                });
            }

            this.loading = false;
        }
    }
};
</script>
