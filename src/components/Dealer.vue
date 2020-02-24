<template>
    <div>

        <div>
            <h2 @click="getLocation">Your location</h2>
            <div class="map">
                {{ latitude }}
                {{ longitude }}
            </div>
            <div id="map"></div>
        </div>
        <l-map ref="myMap"></l-map>

        <div style="height: 500px; width: 100%">
            <div style="height: 200px; overflow: auto;">
                <p>First marker is placed at {{ withPopup.lat }}, {{ withPopup.lng }}</p>
                <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
                <button @click="showLongText">
                    Toggle long popup
                </button>
                <button @click="toggleMap()">
                    Toggle map
                </button>
            </div>
            <l-map
                    v-if="showMap"
                    :zoom="zoom"
                    :center="center"
                    :options="mapOptions"
                    style="height: 80%"
                    @update:center="centerUpdate"
                    @update:zoom="zoomUpdate"
            >
                <l-tile-layer
                        :url="url"
                        :attribution="attribution"
                />
                <l-marker :lat-lng="withPopup">
                    <l-popup>
                        <div @click="innerClick">
                            I am a popup
                            <p v-show="showParagraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                                Donec finibus semper metus id malesuada.
                            </p>
                        </div>
                    </l-popup>
                </l-marker>
                <l-marker :lat-lng="markerPos" @click="toggleTip = !toggleTip">
                    <l-popup :options="{ permanent: true, interactive: false }">
                            <p class="company">dol-sensors A/S</p>
                            <p>Agro Food Park 15</p>
                            <p>8200 Aarhus N</p>
                    </l-popup>
                </l-marker>

                <l-marker :lat-lng="withTooltip">
                    <l-tooltip :options="{ permanent: false, interactive: true }">

                    </l-tooltip>
                </l-marker>
            </l-map>
        </div>
    </div>
</template>

<script>
    import { latLng } from "leaflet";
    import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";

    export default {
        name: "Dealer",
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup,
            LTooltip
        },
        data: () => ({
            myLocation: null,
            longitude: null,
            latitude: null,
            zoom: 13,
            center: null,
            markers: [
                {
                    id: 'm1',
                    position: { lat: 56.739471, lng: 8.871149 },
                    popup: 'tooltip for marker1',
                    draggable: false,
                    visible: true,
                },
                {
                    id: 'm2',
                    position: { lat: 56.200106, lng: 10.159627 },
                    popup: 'tooltip for marker2',
                    draggable: false,
                    visible: true,
                }],
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            withPopup: latLng(56.739471, 8.871149),
            withTooltip: latLng(56.739471, 8.871149),
            currentZoom: 11.5,
            currentCenter: latLng(47.41322, -1.219482),
            showParagraph: false,
            mapOptions: {
                zoomSnap: 0.5
            },
            markerPos: latLng(56.199987, 10.159438),
            showMap: false,
            toggleTip: false
        }),
        methods: {
            getLocation: function () {
                if (navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(position => {
                        this.longitude = position.coords.longitude;
                        this.latitude = position.coords.latitude;

                    })
                }
                else {
                    this.myLocation = 'Location not available'
                }
            },
            zoomUpdate(zoom) {
                this.currentZoom = zoom;
            },
            centerUpdate(center) {
                this.currentCenter = center;
            },
            showLongText() {
                this.showParagraph = !this.showParagraph;
            },
            innerClick() {
                alert("Click!");

            },
            toggleMap: function () {
                this.showMap = !this.showMap;
                this.center = latLng(this.latitude, this.longitude)


            }
        },
        mounted() {
            navigator.geolocation.getCurrentPosition(position => {
                this.longitude = position.coords.longitude;
                this.latitude = position.coords.latitude;

                //this.zoom = 13;
                //this.center = latLng(position.coords.latitude, position.coords.longitude)
            })

        },


    }

</script>

<style scoped>
    @import "~leaflet/dist/leaflet.css";
    .company {
        color: #004077;
        font-weight: bold;
    }
</style>
