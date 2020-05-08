<!--
  - Copyright (c) 2020.
  - Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
  -->

<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="panel">
                        <div class="panel-header">
                            <span class="panel-title mr-auto">Permissies</span>
                        </div>

                        <div class="table-overflow" style="overflow: auto;">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th style="min-width: auto; width: auto;">
                                        <div class="column-content flex-row align-items-center justify-content-start">
                                            <span>Systeemnaam</span>
                                        </div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <!--                                    <tr>-->
                                <!--                                        <td style="width: auto;">-->
                                <!--                                            <div class="column-content">-->
                                <!--                                                Systeembeheerder-->
                                <!--                                            </div>-->
                                <!--                                        </td>-->
                                <!--                                        <td style="width: auto; max-width: 80px">-->
                                <!--                                            <div class="column-content">-->
                                <!--                                                <a href="" class="btn btn-outline btn-primary">-->
                                <!--                                                    <span>Meer info</span>-->
                                <!--                                                </a>-->
                                <!--                                            </div>-->
                                <!--                                        </td>-->
                                <!--                                    </tr>-->
                                </tbody>

                                <tfoot>
                                <tr>
                                    <th colspan="5">
                                        <div class="column-content">

                                        </div>
                                    </th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>

                        <div class="loading-overlay">
                            <div class="d-block text-center m-3">
                                <span class="text-warning">Niet functioneel.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "permissies-index"
    }
</script>

<style scoped>

</style>