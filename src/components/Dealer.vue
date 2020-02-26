<template>
    <div>

        <div>
            <h2>Locate a dealer</h2>
            <div id="map"></div>
        </div>
        <l-map ref="myMap"></l-map>

        <div style="height: 70vh; width: 100%">
            <div style="margin-bottom: 5%">
                <button @click="toggleMap()">
                    Toggle map
                </button>
            </div>
            <l-map
                    v-if="location"
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
                        <p>{{ dealer.phone_1 }}</p>
                        <p>{{ dealer.email }}</p>
                    </l-popup>

                </l-marker>

<!--                <l-marker :lat-lng="markerPos" @click="toggleTip = !toggleTip">
                    <l-popup :options="{ permanent: true, interactive: false }">
                            <p class="company">dol-sensors A/S</p>
                            <p>Agro Food Park 15</p>
                            <p>8200 Aarhus N</p>
                    </l-popup>
                </l-marker>-->

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
            getLocation: function () {
/*                if (navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(position => {
                        this.longitude = position.coords.longitude;
                        this.latitude = position.coords.latitude;
                    })
                }
                else {
                    this.myLocation = 'Location not available'
                }*/
            },
            zoomUpdate(zoom) {
                this.currentZoom = zoom;
            },
            centerUpdate(center) {
                this.currentCenter = center;
            },
            toggleMap: function () {
                this.showMap = !this.showMap;
                this.center = latLng(this.latitude, this.longitude);
            }
        },
       /* beforeMount() {
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition(position => {

                    this.longitude = position.coords.longitude;
                    this.latitude = position.coords.latitude;
                    console.log("Map should be already available " + this.longitude);
                    localStorage.setItem("longitude", this.longitude);
                    localStorage.setItem("latitude", this.latitude)
                })
            }
            else {
                this.myLocation = 'Location not available'
            }
        },
        mounted(){
          let lat = localStorage.getItem('latitude');
          let long = localStorage.getItem('longitude')
          console.log(lat);
          this.longitude = long
            console.log(this.longitude)
            this.center = latLng(lat, long);
          if (!('geolocation' in navigator)){
              console.log('error')
          }
          else {

              this.showMap = !this.showMap;
              console.log("inside else")
          }
        },*/
        created() {
            //do we support geolocation
            if(!("geolocation" in navigator)) {
                this.errorStr = 'Geolocation is not available.';
                return;
            }

            this.gettingLocation = true;
            // get position
            navigator.geolocation.getCurrentPosition(pos => {
                this.gettingLocation = false;
                this.location = pos;
                console.log(pos.coords)
                this.center = latLng(pos.coords.latitude, pos.coords.longitude)
            }, err => {
                this.gettingLocation = false;
                this.errorStr = err.message;
            })
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

</style>
