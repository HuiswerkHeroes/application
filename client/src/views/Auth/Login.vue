<template>
    <div>
        <Header />

        <div id="login">
            <div class="container">
                <div class="row justify-content-center py-4">
                    <div class="col-md-6">
                        <div class="panel">
                            <div class="panel-header">
                                <span class="panel-title mx-auto">Inloggen</span>
                            </div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Voer je e-mailadres in" v-model="email" required autofocus />
                                </div>
                                <div class="form-group">
                                    <latte-password
                                        placeholder="Voer hier je wachtwoord in"
                                        autocomplete="new-password"
                                        v-model="password"
                                        required
                                    ></latte-password>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <button class="btn btn-contained btn-primary ml-auto" type="submit" @click="handleSubmit">
                                    <span class="spinner"></span><span>Inloggen</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/layout/Header';
export default {
    name: 'Login',
    components: {
        Header
    }
};
</script>

<style scoped>
#login {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
