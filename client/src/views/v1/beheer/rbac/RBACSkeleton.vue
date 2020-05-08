<!--
  - Copyright (c) 2020.
  - Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <div class="panel panel-outline radius-none">
            <div class="container">
                <div class="row align-items-center py-10 m">
                    <div class="col-12">
                        <h3 class="my-2 text-center">Role-based Access Control</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="container my-5">
            <div class="col">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RBACSkeleton"
    }
</script>

<style scoped>

</style>