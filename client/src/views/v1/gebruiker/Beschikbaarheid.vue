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
                        <h3 class="my-2 text-center">Beschikbaarheid</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="container my-3">
            <div class="row my-3">
                <div class="col">
                    <div class="panel">
                        <nav class="nav nav-breadcrumb m-3">
                            <router-link class="nav-link" :to="{ name: 'Dashboard' }">
                                <font-awesome-icon icon="home" />
                            </router-link>
                            <a class="nav-link">{{ getGebruiker.voornaam }} {{ getGebruiker.achternaam }}</a>
                            <a class="nav-link is-active">Beschikbaarheid</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 py-2">
                    <div class="panel">
                        <div class="panel-header">Maandag</div>
                        <div class="list" style="max-height: 350px; overflow: auto;">
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:00 → 08:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:30 → 09:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:00 → 09:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:30 → 10:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:00 → 10:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:30 → 11:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:00 → 11:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:30 → 12:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:00 → 12:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:30 → 13:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:00 → 13:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:30 → 14:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:00 → 14:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:30 → 15:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:00 → 15:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:30 → 16:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:00 → 16:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:30 → 17:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:00 → 17:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:30 → 18:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:00 → 18:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:30 → 19:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:00 → 19:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:30 → 20:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 py-2">
                    <div class="panel">
                        <div class="panel-header">Dinsdag</div>
                        <div class="list" style="max-height: 350px; overflow: auto;">
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:00 → 08:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:30 → 09:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:00 → 09:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:30 → 10:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:00 → 10:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:30 → 11:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:00 → 11:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:30 → 12:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:00 → 12:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:30 → 13:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:00 → 13:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:30 → 14:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:00 → 14:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:30 → 15:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:00 → 15:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:30 → 16:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:00 → 16:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:30 → 17:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:00 → 17:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:30 → 18:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:00 → 18:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:30 → 19:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:00 → 19:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:30 → 20:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 py-2">
                    <div class="panel">
                        <div class="panel-header">Woensdag</div>
                        <div class="list" style="max-height: 350px; overflow: auto;">
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:00 → 08:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:30 → 09:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:00 → 09:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:30 → 10:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:00 → 10:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:30 → 11:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:00 → 11:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:30 → 12:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:00 → 12:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:30 → 13:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:00 → 13:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:30 → 14:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:00 → 14:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:30 → 15:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:00 → 15:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:30 → 16:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:00 → 16:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:30 → 17:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:00 → 17:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:30 → 18:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:00 → 18:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:30 → 19:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:00 → 19:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:30 → 20:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 py-2">
                    <div class="panel">
                        <div class="panel-header">Donderdag</div>
                        <div class="list" style="max-height: 350px; overflow: auto;">
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:00 → 08:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:30 → 09:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:00 → 09:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:30 → 10:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:00 → 10:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:30 → 11:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:00 → 11:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:30 → 12:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:00 → 12:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:30 → 13:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:00 → 13:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:30 → 14:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:00 → 14:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:30 → 15:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:00 → 15:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:30 → 16:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:00 → 16:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:30 → 17:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:00 → 17:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:30 → 18:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:00 → 18:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:30 → 19:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:00 → 19:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:30 → 20:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 py-2">
                    <div class="panel">
                        <div class="panel-header">Vrijdag</div>
                        <div class="list" style="max-height: 350px; overflow: auto;">
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:00 → 08:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:30 → 09:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:00 → 09:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:30 → 10:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:00 → 10:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:30 → 11:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:00 → 11:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:30 → 12:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:00 → 12:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:30 → 13:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:00 → 13:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:30 → 14:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:00 → 14:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:30 → 15:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:00 → 15:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:30 → 16:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:00 → 16:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:30 → 17:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:00 → 17:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:30 → 18:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:00 → 18:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:30 → 19:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:00 → 19:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:30 → 20:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 py-2">
                    <div class="panel">
                        <div class="panel-header">Zaterdag</div>
                        <div class="list" style="max-height: 350px; overflow: auto;">
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:00 → 08:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:30 → 09:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:00 → 09:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:30 → 10:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:00 → 10:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:30 → 11:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:00 → 11:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:30 → 12:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:00 → 12:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:30 → 13:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:00 → 13:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:30 → 14:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:00 → 14:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:30 → 15:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:00 → 15:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:30 → 16:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:00 → 16:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:30 → 17:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:00 → 17:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:30 → 18:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:00 → 18:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:30 → 19:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:00 → 19:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:30 → 20:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2 py-2">
                    <div class="panel">
                        <div class="panel-header">Zondag</div>
                        <div class="list" style="max-height: 350px; overflow: auto;">
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:00 → 08:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>08:30 → 09:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:00 → 09:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>09:30 → 10:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:00 → 10:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>10:30 → 11:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:00 → 11:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>11:30 → 12:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:00 → 12:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>12:30 → 13:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:00 → 13:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>13:30 → 14:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:00 → 14:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>14:30 → 15:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:00 → 15:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>15:30 → 16:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:00 → 16:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>16:30 → 17:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:00 → 17:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>17:30 → 18:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:00 → 18:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>18:30 → 19:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:00 → 19:30</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                            <label class="list-item">
                                <div class="list-item-caption">
                                    <strong>19:30 → 20:00</strong>
                                </div>
                                <input type="checkbox" class="toggle-button toggle-button-primary list-item-suffix"/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Beschikbaarheid",
        computed: mapGetters('auth', ['getGebruiker'])
    }
</script>

<style scoped>

</style>