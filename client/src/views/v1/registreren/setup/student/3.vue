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
                                    <h5 class="text-center ">Op welke opleiding / niveau zit je?</h5>

                                    <div class="list">
                                        <span v-if="this.laden" class="spinner"></span>

                                        <latte-ripple v-for="opleiding in filteredOpleidingen" :key="opleiding.id" as="a" class="list-item link-d" @click="handleOpleiding(opleiding.id)">
                                            <div class="list-item-caption">
                                                <strong>{{opleiding.naam}}</strong>
                                            </div>
                                        </latte-ripple>
                                    </div>
                                </div>

                                <div class="panel-footer">
                                    <router-link class="btn btn-soft btn-primary" :to="{ name: 'RegistrerenSetupStudent2' }">Vorige</router-link>
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
    import {mapActions} from "vuex";

    export default {
        name: 'RegistrerenSetupStudent2',
        components: {},
        data() {
            return {
                error: '',
                zoekString: '',
                opleidingen: [],
                filteredOpleidingen: [],
                laden: false,
                fout: ''
            };
        },
        methods: {
            ...mapActions("auth", { probeerAuthenticeren: "probeerAuthenticeren" }),
            async handleOpleiding(id) {
                if (this.laden === true) {
                    return;
                }

                this.laden = true;

                try {
                    await axios.post(process.env.VUE_APP_APIURL + '/api/v1/gebruikers/setup/gebruiker/opleiding', {
                        opleidingId: id
                    });

                    await this.probeerAuthenticeren()
                        .then(() => {
                            this.laden = false;
                            this.$router.push({ name: "Dashboard" });
                        })
                        .catch(async err => {
                            if (!err.response) {
                                await Latte.ui.notification.create({
                                    title: 'Er is iets fout gegaan!',
                                    message: 'Probeer het later opnieuw.'
                                });
                            } else {
                                this.fout = err.response.data.error;
                            }
                        });
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
        async mounted() {
            this.opleidingen = [];
            this.laden = true;

            try {
                const res = await axios.get(process.env.VUE_APP_APIURL + '/api/v1/gebruikers/setup/opleidingen');
                this.opleidingen = res.data.opleidingen;
                this.filteredOpleidingen = res.data.opleidingen;
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
    };
</script>
