<template>
    <div>

        <div v-if="$mq === 'mobile'">
            <h2>Locate a dealer</h2>
            <div id="map"></div>
        </div>
        <l-map ref="myMap"></l-map>

        <div class="dealerMap" >
            <l-map
                    v-if="location"
                    :zoom="zoom"
                    :center="center"
                    :options="mapOptions"
                    style="height: 100%"
                    @update:center="centerUpdate"
                    @update:zoom="zoomUpdate"
            >
                <l-tile-layer
                        :url="url"
                        :attribution="attribution"
                />
                <l-marker
                        v-for="dealer in dealers"
                        :key="dealer.id"
                        :visible="dealer.visible"
                        :draggable="dealer.draggable"
                        :lat-lng.sync="dealer.position"
                        :icon="dealer.icon"
                >
                    <l-popup class="popup">
                        <p class="company">{{ dealer.company }}</p>
                        <p>{{ dealer.addressLine_1 }}</p>
                        <p>{{ dealer.addressLine_2 }}</p>
                        <p>{{ dealer.addressLine_3 }}</p>
                        <p>{{ dealer.phone_1 }}</p>
                        <p>{{ dealer.email }}</p>
                    </l-popup>

                </l-marker>
            </l-map>
        </div>
    </div>
</template>

<script>
    import { latLng } from "leaflet";
    import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
    import dealers from '../data/dealers.json'

    export default {
        name: "Dealer",
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup,

        },
        props: ["Something"],
        data: () => ({
            myLocation: null,
            longitude: null,
            latitude: null,
            zoom: 7,
            center: null,
            dealers: dealers,
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
            toggleTip: false,
            pending: true,
            error: false,
            location:null,
            gettingLocation: false,
            errorStr:null
        }),
        methods: {

            zoomUpdate(zoom) {
                this.currentZoom = zoom;
            },
            centerUpdate(center) {
                this.currentCenter = center;
            }
        },
        created() {
            //Checks if geolocation is supported by browser (Can be unavailable because of lack of HTTPS)
            if(!("geolocation" in navigator)) {
                this.errorStr = 'Geolocation is not available.'; //Sets error string
 }
             this.gettingLocation = true; //When user didn't click 'allow' nor 'block'
            {

                // get position if geolocation is available
                navigator.geolocation.getCurrentPosition(pos => {
                    this.gettingLocation = false;
                    this.location = pos;
                    this.center = latLng(pos.coords.latitude, pos.coords.longitude); //Sets center to received coordinates
                    this.zoom = 7;
                }, err => {
                    //Sets maps center if geolocation was denied
                    this.gettingLocation = false;
                    this.center = latLng(42.684184, 20.223107);
                    this.zoom = 1.5;
                    this.location = true;
                    this.locationRejected = true;
                    this.errorStr = err.message;
                })}


        }}

</script>

<style scoped>
    @import "~leaflet/dist/leaflet.css";
    html {
        color: #292f33;
    }
    .company {
        color: #004077;
        font-weight: bold;
        margin-bottom: 5% !important;
    }
     .popup p{
        margin: 0;
    }
    button {
        border: 1.5px solid #004077;
        margin-right: 4%;
        border-radius: 20px;
        padding: 1% 3% 0;
        display: inline-block;
        background-color: white;
        color: #004077;
        font-size: medium;
        margin-top: 6%;
        text-transform: uppercase;
    }
    .dealerMap {
        height: 50vh;
        width: 100%;

    }

</style>
