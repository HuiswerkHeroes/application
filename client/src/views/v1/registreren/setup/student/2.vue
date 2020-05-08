<template>
    <div>
        <div>
            <div class="container">
                <div class="row justify-content-center py-4">
                    <div class="col-sm-12 col-md-10 col-lg-6">
                        <div v-if="this.fout" class="notice notice-error my-4">{{ this.fout }}</div>

                        <form>
                            <div class="panel">
                                <div class="panel-body">
                                    <h5 class="text-center ">Op welke school zit je?</h5>

                                    <div class="form-group input-group mt-4">
                                        <input type="text" class="form-control my-4" v-model="zoekString" placeholder="Typ je schoolnaam of de adres van je school..." v-on:keydown="handleSearch">
                                    </div>

                                    <div class="list">
                                        <div class="text-center" v-if="this.laden">
                                            <span class="spinner"></span>
                                        </div>
                                        <latte-ripple v-for="school in scholen" :key="school.id" as="a" class="list-item link-d" @click="handleSchool(school.id)">
                                            <div class="list-item-caption">
                                                <strong>{{school.naam}}</strong>
                                                <span class="text-soft">
                                                    {{ school.adres.charAt(0).toUpperCase() + school.adres.toLowerCase().slice(1) }},
                                                    {{ school.plaatsnaam.charAt(0).toUpperCase() + school.plaatsnaam.toLowerCase().slice(1) }}
                                                </span>
                                            </div>
                                        </latte-ripple>
                                    </div>
                                </div>

                                <div class="panel-footer">
                                    <router-link class="btn btn-soft btn-primary" :to="{ name: 'RegistrerenSetup1' }">Vorige</router-link>
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
    import axios from "axios";
    import {Latte} from "@bybas/latte-ui";

    let call;

    export default {
    name: 'RegistrerenSetupStudent2',
    components: {},
    data() {
        return {
            error: '',
            zoekString: '',
            scholen: [],
            laden: false,
            fout: ''
        };
    },
    methods: {
        async handleSearch() {
            if (this.zoekString.length < 3) {
                if (call) {
                    call.cancel();
                }

                this.scholen = [];
                this.laden = false;
                
                return;
            }

            this.scholen = [];
            this.laden = true;

            if (call) {
                call.cancel();
            }

            call = axios.CancelToken.source();

            try {
                const res = await axios.get(process.env.VUE_APP_APIURL + '/api/v1/gebruiker/setup/scholen?q=' + this.zoekString, {
                    cancelToken: call.token
                });

                this.scholen = res.data.scholen;
            } catch (err) {
                if (axios.isCancel(err)) {
                    return;
                } else if (!err.response) {
                    await Latte.ui.notification.create({
                        title: 'Er is iets fout gegaan!',
                        message: 'Probeer het later opnieuw.'
                    });
                } else {
                    this.fout = err.response.data.error;
                }
            }

            this.laden = false;
        },
        async handleSchool(id) {
            if (this.laden === true) {
                return;
            }

            this.laden = true;

            try {
                await axios.post(process.env.VUE_APP_APIURL + '/api/v1/gebruiker/setup/school', {
                    schoolId: id
                });

                await this.$router.push({name: 'RegistrerenSetupStudent3'});
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
    }
};
</script>
