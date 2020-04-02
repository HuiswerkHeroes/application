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
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Op welke opleiding zit je?"
                                            autofocus=""
                                            spellcheck="false"
                                            autocapitalize="none"
                                            autocorrect="off"
                                            autocomplete="off"
                                        />
                                        <small>Nog niet functioneel</small>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                    <router-link class="btn btn-soft btn-primary" :to="{ name: 'RegisterSetupStudent2' }">Vorige</router-link>
                                    <!-- <button class="btn btn-text btn-primary btn-sm ml-auto" data-action="latte:ui:overlay" data-name="niet-gevonden">
                                        Niet gevonden?
                                    </button> -->

                                    <latte-overlay name="niet-gevonden">
                                        <div class="panel" style="width: 480px">
                                            <div class="panel-header">
                                                <span class="panel-title">Overlay example</span>
                                                <button
                                                    class="btn btn-icon btn-text ml-auto"
                                                    data-action="latte:ui:overlay:close"
                                                    data-name="overlay-1"
                                                >
                                                    <latte-icon>close</latte-icon>
                                                </button>
                                            </div>
                                            <div class="panel-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio hic perferendis sit. Adipisci
                                                aperiam architecto doloremque dolores dolorum facilis fugit magnam quaerat quidem quo, sed, sint
                                                temporibus tenetur vitae voluptas.
                                            </div>
                                        </div>
                                    </latte-overlay>

                                    <div class="ml-auto">
                                        <button class="btn btn-contained btn-primary" type="submit">
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
// import { Latte } from '@bybas/latte-ui';

export default {
    name: 'RegisterSetup1',
    components: {},
    data() {
        return {
            error: '',
            loading: false
        };
    },
    methods: {
        async handleSubmit(e) {
            e.preventDefault();

            if (this.loading) {
                return;
            }

            this.loading = true;
            this.$router.push({ name: 'Dashboar' });
            this.loading = false;
        }
    }
};
</script>
