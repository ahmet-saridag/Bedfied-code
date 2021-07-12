<template>
  <div class="allFont" style="width: 100%">
    <nav>
      <HomePageHeader :ProfileData="userProfileData" /> 
    </nav>
         

    <div class="container-fluid non" style="height: auto">
      <div class="row row-mobile" style="margin: 40px 40px 40px 60px">
        <div
          class="col-md-12 col-sm-margin col-xl-12 col-xs-12 col-lg-12 col-sm-12"
        >
          <h3 class="font-weight-bold text-left py-3 pr-3 pl-4 mb-3">
            Yakın çevreyi keşfedin
          </h3>
        </div>
        <div
          class="col-md-3 col-lg-3 col-xs-6 col-sm-12 p-3 sc"
          @click.prevent="$router.push('/homes')"
        >
          <img
            style="object-fit: cover"
            class="rounded ml-4 float-left"
            width="76"
            height="76"
            src="https://a0.muscache.com/im/pictures/7d80bee1-a510-4950-a1a0-07a4fb25ec2e.jpg?im_q=medq&im_w=240"
            alt="Sapanca"
          />
          <h5 class="h5 float-left ml-3 mt-3 font-weight-bold">Sapanca</h5>
          <br />
          <br />
          <h6 class="h6 float-left ml-3">Araçla 2 saat</h6>
        </div>
        <div
          class="col-md-3 col-lg-3 p-3 col-xs-12 col-sm-12 sc"
          @click.prevent="$router.push('/homes')"
        >
          <img
            style="object-fit: cover"
            class="rounded ml-4 float-left"
            width="76"
            height="76"
            src="https://a0.muscache.com/im/pictures/c2eba2e9-0d80-4704-9e2c-34ac16316c53.jpg?im_q=medq&im_w=240"
            alt="Bodrum"
          />
          <h5 class="h5 float-left ml-3 mt-3 font-weight-bold">Bodrum</h5>
          <br />
          <br />
          <h6 class="h6 float-left ml-3">Araçla 9 saat</h6>
        </div>
        <div
          class="col-md-3 col-lg-3 p-3 col-xs-12 col-sm-12 sc"
          @click.prevent="$router.push('/homes')"
        >
          <img
            style="object-fit: cover"
            class="rounded ml-4 float-left"
            width="75"
            height="76"
            src="https://a0.muscache.com/im/pictures/7a0735b6-b341-4d2c-a0ab-8fa01d1373fb.jpg?im_q=medq&im_w=240"
            alt="İznik"
          />
          <h5 class="h5 float-left ml-3 mt-3 font-weight-bold">İznik</h5>
          <br />
          <br />
          <h6 class="h6 float-left ml-3">Araçla 2.5 saat</h6>
        </div>
        <div
          class="col-md-3 col-lg-3 p-3 col-xs-12 sc col-sm-12"
          @click.prevent="$router.push('/homes')"
        >
          <img
            style="object-fit: cover"
            class="rounded ml-4 float-left"
            width="75"
            height="76"
            src="https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240"
            alt="İzmit"
          />
          <h5 class="h5 float-left ml-3 mt-3 font-weight-bold">İzmit</h5>
          <br />
          <br />
          <h6 class="h6 float-left ml-3">Araçla 1.5 saat</h6>
        </div>
        <br />
        <div
          class="col-md-3 col-lg-3 p-3 col-xs-12 sc col-sm-12"
          @click.prevent="$router.push('/homes')"
        >
          <img
            style="object-fit: cover"
            class="rounded ml-4 float-left"
            width="75"
            height="76"
            src="https://a0.muscache.com/im/pictures/ac2086c9-df0d-4085-94c0-94fe3fb94862.jpg?im_q=medq&im_w=240"
            alt="Bozcada"
          />
          <h5 class="h5 float-left ml-3 mt-3 font-weight-bold">Bozcada</h5>
          <br />
          <br />
          <h6 class="h6 float-left ml-3">Araçla 3 saat</h6>
        </div>
        <div
          class="col-md-3 col-lg-3 p-3 col-xs-12 sc col-sm-12"
          @click.prevent="$router.push('/homes')"
        >
          <img
            style="object-fit: cover"
            class="rounded ml-4 float-left"
            width="75"
            height="76"
            src="https://a0.muscache.com/im/pictures/f98fbb2e-9e10-4514-b4a7-02c467e1da03.jpg?im_q=medq&im_w=240"
            alt="Çerkezköy"
          />
          <h5 class="h5 float-left ml-3 mt-3 font-weight-bold">Çerkezköy</h5>
          <br />
          <br />
          <h6 class="h6 float-left ml-3">Araçla 1.5 saat</h6>
        </div>
        <div
          class="col-md-3 col-lg-3 p-3 col-xs-12 sc col-sm-12"
          @click.prevent="$router.push('/homes')"
        >
          <img
            style="object-fit: cover"
            class="rounded ml-4 float-left"
            width="75"
            height="76"
            src="https://a0.muscache.com/im/pictures/0445ba36-5684-4cca-9cb1-418a0ffdcd2f.jpg?im_q=medq&im_w=240"
            alt="Seferihisar"
          />
          <h5 class="h5 float-left ml-3 mt-3 font-weight-bold">Seferihisar</h5>
          <br />
          <br />
          <h6 class="h6 float-left ml-3">Araçla 6.5 saat</h6>
        </div>
        <div
          class="col-md-3 col-lg-3 p-3 col-xs-12 sc col-sm-12"
          @click.prevent="$router.push('/homes')"
        >
          <img
            style="object-fit: cover"
            class="rounded ml-4 float-left"
            width="75"
            height="76"
            src="https://a0.muscache.com/im/pictures/676c0a60-2a5a-4598-aeeb-10a81aa5232f.jpg?im_q=medq&im_w=240"
            alt="Didim"
          />
          <h5 class="h5 float-left ml-3 mt-3 font-weight-bold">Didim</h5>
          <br />
          <br />
          <h6 class="h6 float-left ml-3">Araçla 7.5 saat</h6>
        </div>
      </div>
    </div>

    <div class="container-fluid non">
      <div class="row text-center row-mobile2 mb-4" style="margin-left:3.7%">
        <div
          class="col-md-12 col-sm-margin col-xl-12 col-xs-12 col-lg-12 col-sm-12"
        >
          <h3 class="text-left row-mobile-h3 p-3 font-weight-bold">
            Dilediğiniz yerde yaşayın
          </h3>
        </div>
      </div>
      <div class="row row-mobile-margin2" style="margin-left: 4.5%">
        <div
          class="col-md-4 col-xl-4 col-xs-12 col-lg-4 col-sm-12"
          style="cursor: pointer"
          @click.prevent="$router.push('/homes')"
        >
          <img
            src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
            width="320"
            class="img-width-pc"
            alt=""
            style="border-radius: 10px"
          />
          <h4 class="font-weight-bold mt-2 h4-margin">Doğada kaçamaklar</h4>
        </div>
        <div
          class="col-md-4 col-xl-4 col-xs-12 col-lg-4 col-sm-12"
          style="cursor: pointer"
          @click.prevent="$router.push('/homes')"
        >
          <img
            src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320"
            width="320"
            class="img-width-pc"
            alt=""
            style="border-radius: 10px"
          />
          <h4 class="font-weight-bold mt-2 h4-margin">
            Benzersiz konaklamalar
          </h4>
        </div>
        <div
          class="col-md-4 col-xl-4 col-xs-12 col-lg-4 col-sm-12"
          style="cursor: pointer"
          @click.prevent="$router.push('/homes')"
        >
          <img
            src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320"
            width="320"
            class="img-width-pc"
            alt=""
            style="border-radius: 10px"
          />
          <h4 class="font-weight-bold mt-2">Tamamı rezerve edilebilir evler</h4>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5 host-container">
      <div class="row text-white h-100 w-50" style="padding: 38px 0px 0px 83px">
        <div class="col-12 p-0">
          <h1 style="font-size: 48px" class="font-weight-bold h-50">
            Ev sahipliği <br />
            yapmaya <br />
            başlayın
          </h1>
        </div>
        <div class="col-12 p-0">
          <h5 class="" style="margin-top: -27px">
            Yerinizi paylaşarak ek gelir elde edin <br />
            ve yeni fırsatlara kapı açın.
          </h5>
        </div>
        <div class="col-12 p-0 mb-3">
          <button
            class="btn font-weight-bold px-4 py-2 font col-button-click"
            style="border-radius: 7px; background: #ffff; font-size: 17px"
            @click.prevent="$router.push('/homeHost')"
          >
            Daha fazla bilgi edinin
          </button>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5 host-container-mobile">
      <div class="row text-white h-50 w-100 text-center" style="padding: 55px 0px 0px 53px">
        <div class="col-12 p-0">
          <h1 style="font-size: 48px" class="font-weight-bold h-50">
            Ev sahipliği 
            yapmaya 
            başlayın
          </h1>
        </div>
        <div class="col-12 my-3 p-0">
          <h5 class="">
            Yerinizi paylaşarak ek gelir elde edin <br />
            ve yeni fırsatlara kapı açın.
          </h5>
        </div>
        <div class="col-12 p-0 mb-3">
          <button
            class="btn font-weight-bold px-4 py-2 font col-button-click"
            style="border-radius: 7px; background: #ffff; font-size: 17px"
            @click.prevent="$router.push('/homeHost')"
          >
            Daha fazla bilgi edinin
          </button>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0 map-web">
      <div class="row p-0 my-5">
        <div class="col-12">
          <h3 class="font-weight-bold mt-4">
            Türkiye için yeni bir başlangıç
            <img class="ml-2" src="./hello.png" alt="" />
          </h3>
        </div>
        <div class="col-12" style="margin-top: 38px">
          <div>
            <GmapMap
              :center="centerTurkey"
              :zoom="6"
              map-type-id="roadmap"
              style="
                width: 100%;
                height: 425px;
                overflow: hidden;
                border-radius: 15px;
              "
              class="Map-responsive-sm"
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in newAllData"
                :position="m.position"
                :clickable="true"
                :draggable="false"
                @click="toggleInfoWindow(m, index)"
                :icon="Icon"
                :label="m.price + '₺'"
              />
              <gmap-info-window
                :position="infoWindowPos"
                :opened="infoWinOpen"
                @closeclick="infoWinOpen = false"
              >
                <div
                  class="card m-0 p-0 border-0 map-responsive-1"
                  style="width: 18rem; height: auto; border-radius: 20px"
                  v-html="infoContent"
                ></div>
              </gmap-info-window>
            </GmapMap>
          </div>
        </div>
      </div>
    </div>
    <div class="container map-mobile">
      <div class="row my-5">
        <div class="col-12 text-center">
          <h3 class="font-weight-bold mt-4">
            Türkiye için yeni bir başlangıç
            <img class="ml-2 mt-2" src="./hello.png" alt="" />
          </h3>
        </div>
        <div class="col-12" style="margin-top: 38px">
          <div>
            <GmapMap
              :center="centerTurkey"
              :zoom="5"
              map-type-id="roadmap"
              style="
                width: 100%;
                height: 425px;
                overflow: hidden;
                border-radius: 15px;
              "
              class="Map-responsive-sm"
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in newAllData"
                :position="m.position"
                :clickable="true"
                :draggable="false"
                 @click="toggleInfoMobileWindow(m, index)"
                :icon="Icon"
                :label="m.price + '₺'"
              />
              <gmap-info-window
                 :position="infoWindowMobilePos"
            :opened="infoWinMobileOpen"
            @closeclick="infoWinMobileOpen = false"
              >
                <div
                  class="card m-0 p-0 border-0 map-responsive-1"
                  style="width: 18rem; height: auto; border-radius: 20px"
                 v-html="infoMobileContent"
                ></div>
              </gmap-info-window>
            </GmapMap>
          </div>
        </div>
      </div>
    </div>
    <div>
      
    </div>
    <div class="map-mobile">
        <MobileNavbar/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HomePageHeader from "@/components/common/homePageHeader";
import MobileNavbar from '@/components/common/mobileNavbar';
export default {
  components: {
    HomePageHeader,
    MobileNavbar
  },
  data() {
    return {
      userProfileData: [],
      Icon: {
        path: "M100,0 A100,100 0 1,1 100,200 A100,100 0 1,1 100,0",
        fillColor: "white",
        fillOpacity: 1,
        scale: 0.2,
        strokeColor: "white",
        strokeWeight: 1,
        labelOrigin: { x: 100, y: 100 },
      },
      infoWindowPos: {
        lat: 0,
        lng: 0,
      },
      infoWinOpen: false,
      currentMidx: null,
      infoContent: "",
      infoWindowMobilePos: {
        lat: 0,
        lng: 0,
      },
      infoWinMobileOpen: false,
      currentMobileMidx: null,
      infoMobileContent: "",
      centerTurkey: {
        lat: 39.37643801214484,
        lng: 35.11810328900551,
      },
      newAllData:[],
    };
  },
  methods: {
    getUserDATA() {
      return axios
        .get(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/userProfileDATA.json"
        )
        .then((res) => {
          let data = res.data;
          let userArray = [];
          let newArray = [];
          for (let key in data) {
            userArray.push({ firebaseId: key, ...data[key] });
          }
          newArray = userArray.find(
            (c) => c.authId == this.$store.state.authKey
          );
          if (newArray) {
            this.userProfileData = newArray;
          }
        });
    },
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = this.getInfoWindowContent(marker);

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    getInfoWindowContent(marker) {
      return `<div>
        
      <div
        id="${marker.firebaseId + 34}"
        data-ride="carousel"
         class="carousel slide map-info-popup"
        
      >
      <div  style=" position: absolute;
  padding: 10px;
  width:100%;
  z-index: 3;margin-top:5px">
        <span style="color: black;
  background: #ffff;
  padding: 9px;
  border-radius: 20px;
  margin-top: -5px;
  font-size: 13px;"
          >Süper ev sahibi
          <i
            class="fa fa-check-circle"
            style="color: #f93b3b; font-size: 15px"
          ></i
        ></span>
        <i
            class="fas fa-heart float-right"
            style="color: #f93b3b; font-size: 21px;"
          ></i
        >
      </div>
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner" style="border-radius: 10px 10px 3px 3px;cursor:pointer">
          <a class="carousel-item active" href="/homes/${
            marker.firebaseId
          }"  style="cursor:pointer" >
            <img
               src="${
                 marker.photos[0] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[0].photo
               }
                        "              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </a>
          <a class="carousel-item"  href="/homes/${
            marker.firebaseId
          }" style="cursor:pointer">
            <img
               src="${
                 marker.photos[1] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[1].photo
               }
                        "             alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </a>
          <a class="carousel-item"  href="/homes/${
            marker.firebaseId
          }" style="cursor:pointer">
            <img
               src="${
                 marker.photos[2] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[2].photo
               }
                        "
              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </a>
          <a class="carousel-item"   href="/homes/${
            marker.firebaseId
          }" style="cursor:pointer">
            <img
               src="${
                 marker.photos[3] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[3].photo
               }
                        "              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </a>
          <a class="carousel-item"  href="/homes/${
            marker.firebaseId
          }" style="cursor:pointer">
            <img
                src="${
                  marker.photos[4] == undefined
                    ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                    : marker.photos[4].photo
                }
                        "              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </a>
        </div>
        <a
          class="carousel-control-prev"
          href="${"#" + marker.firebaseId + 34}"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only" >Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="${"#" + marker.firebaseId + 34}"
          role="button"
          data-slide="next"
          style="font-weight:bold;color:#f93b3b!important"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="card-body pb-0 mb-0 pt-2" style="cursor:pointer">
        <a  href="/homes/${
        marker.firebaseId
      }" style="text-decoration:none" class="text-dark">
        <div class="row" style="height:6rem">
          <div class="col-md-12 mb-1" style="font-size:15px">
            <i class="fa fa-star" style="color: #f93b3b;"></i> 4,${Math.round(
              Math.random() * 20
            )}
                    
            <small class="text-muted">(${Math.round(
              Math.random() * 20
            )} değerlendirme)</small>
          </div>
          <div class="col-md-12" style="font-size:17px">${marker.houseType} - 
          ${marker.county}</div>
          <div class="col-md-12 my-1" style="font-size:17px">
            <small>${marker.peopleCounty} misafir ${Math.floor(
        marker.bed / 2
      )} yatak odası ${marker.bed} yatak ${marker.bathroom} banyo</small>
          </div>
          <div class="col-md-12" style="font-size:17px">
            <span class="font-weight-bold">${marker.price} ₺</span> / gece
          </div>
        </div></a>
      </div>
    </div>`;
    },
    toggleInfoMobileWindow(marker, idx) {
      this.infoWindowMobilePos = marker.position;
      this.infoMobileContent = this.getInfoMobileWindowContent(marker);

      //check if its the same marker that was selected if yes toggle
      if (this.currentMobileMidx == idx) {
        this.infoWinMobileOpen = !this.infoWinMobileOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinMobileOpen = true;
        this.currentMobileMidx = idx;
      }
    },
    getInfoMobileWindowContent(marker) {
      return `<div>
        
      <div
        id="${marker.firebaseId + 35}"
        data-ride="carousel"
         class="carousel slide map-info-popup"
        
      >
      <div  style=" position: absolute;
  padding: 10px;
  width:100%;
  z-index: 3;margin-top:5px">
        <span style="color: black;
  background: #ffff;
  padding: 9px;
  border-radius: 20px;
  margin-top: -5px;
  font-size: 13px;"
          >Süper ev sahibi
          <i
            class="fa fa-check-circle"
            style="color: #f93b3b; font-size: 15px"
          ></i
        ></span>
        <i
            class="fas fa-heart float-right"
            style="color: #f93b3b; font-size: 21px;"
          ></i
        >
      </div>
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner" style="border-radius: 10px 10px 3px 3px;cursor:pointer">
          <div class="carousel-item active"  onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer" >
            <img
               src="${
                 marker.photos[0] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[0].photo
               }
                        "              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
          <div class="carousel-item" onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer">
            <img
               src="${
                 marker.photos[1] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[1].photo
               }
                        "             alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
          <div class="carousel-item" onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer">
            <img
               src="${
                 marker.photos[2] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[2].photo
               }
                        "
              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
          <div class="carousel-item"  onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer">
            <img
               src="${
                 marker.photos[3] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[3].photo
               }
                        "              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
          <div class="carousel-item" onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer">
            <img
                src="${
                  marker.photos[4] == undefined
                    ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                    : marker.photos[4].photo
                }
                        "              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="${"#" + marker.firebaseId + 35}"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only" >Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="${"#" + marker.firebaseId + 35}"
          role="button"
          data-slide="next"
          style="font-weight:bold;color:#f93b3b!important"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="card-body pb-0 mb-0 pt-2   map-responsive"  onclick="location.href='/homes/${
        marker.firebaseId
      }'" style="cursor:pointer">
        <div class="row" style="height:6rem">
          <div class="col-md-12 mb-1" style="font-size:15px">
            <i class="fa fa-star" style="color: #f93b3b;"></i> 4,${Math.round(
              Math.random() * 20
            )}
                    
            <small class="text-muted">(${Math.round(
              Math.random() * 20
            )} değerlendirme)</small>
          </div>
          <div class="col-md-12" style="font-size:17px">${marker.houseType} - 
          ${marker.county}</div>
          <div class="col-md-12 my-1" style="font-size:17px">
            <small>${marker.peopleCounty} misafir ${Math.floor(
        marker.bed / 2
      )} yatak odası ${marker.bed} yatak ${marker.bathroom} banyo</small>
          </div>
          <div class="col-md-12" style="font-size:17px">
            <span class="font-weight-bold">${marker.price} ₺</span> / gece
          </div>
        </div>
      </div>
    </div>`;
    },
    getAllData(){
      setTimeout(() => {
      this.newAllData = this.$store.getters.getHomesData

      }, 6000);
    }
  },
  created() {
    this.getUserDATA();
    this.getAllData();
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Truculenta:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
.host-container {
  height: 400px;
  width: 86%;
  border-radius: 15px;
  display: inherit;
  background-image: url("https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1200");
}
.map-web {
  display: inherit;
  width: 88%;
  margin-left:auto;
  margin-right: auto;
}
.map-mobile {
  display: none;
}
.col-button-click {
  transition: transform 80ms ease-in;
}

.col-button-click:active {
  transform: scale(0.95);
}
@media (min-width: 1569px) {
  .img-width-pc {
    width: 440px!important;
  }
  .host-container {
      width: auto;
      max-width: 88%;
      margin-left:auto;
      margin-right: auto;
  

  }
}

@media (max-width: 576px) {
  .h4-margin {
    margin-bottom: 10%;
  }
  .row-mobile-margin2 {
   width: auto!important;
  }
  .row-mobile2 {
    margin-left: 0px !important;
    margin-bottom: 0px !important;
    padding: 0px !important;
  }
  .row-mobile2 h3 {
    padding: 0px !important;
    margin: 25px 0px 50px 0px;
  }
  .mx-sm-1 {
    margin: 0px 1px !important;
  }
  .tar {
    margin-left: 0px !important;
  }
  .card-sm-mg {
    margin-left: 0px !important;
  }
  .row-sm {
    margin-left: 0px !important;
  }
  .margin-left-xsmall {
    margin-left: 37px !important;
  }
}
.host-container-mobile {
  display: none;
}
@media (max-width: 768px) {
    .row-mobile-margin2 {
   margin:0px!important;
   width: auto!important;
   text-align: center;
  }
  .row-mobile-h3 {
    text-align: center!important;
  }
  .map-web {
    display: none;
  }
  .map-mobile {
    display: inherit;
  }
  .host-container-mobile {
    display: inherit !important;
    min-height: 400px;
    width: 90%;
    border-radius: 15px;
    padding: 0px;
    display: inherit;
    background-image: url("https://images.unsplash.com/photo-1621869590274-2998d1d1d550?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80");
    background-position: center center;
  }
  .host-container {
    display: none;
  }
  .col-sm-margin {
    margin-top: 20px !important;
  }
  .row-mobile {
    margin: 0px !important;
  }

  .mx-sm-1 {
    margin: 0px 1px !important;
  }
  .tas {
    margin-left: 70px;
  }
  .text-md-special {
    font-size: 30px !important;
  }
  .card-sm-mg {
    margin-left: 0px !important;
  }
  .row-sm {
    margin-left: -10px !important;
  }
}

.sc {
  transition: all 1s;
}
.sc:hover {
  transform: scale(1.04);
  cursor: pointer;
}
.allFont {
  font-family: "Titillium Web", sans-serif !important;
}
.ta {
  font-size: 1.8rem;
  color: black;
  font-family: "Titillium Web", sans-serif !important;
  font-weight: bold;
  letter-spacing: 0.4px;
  transition: 1s all;
  margin-top: 10px !important;
}

.ta:hover {
  border-radius: 10px;
  cursor: pointer;
  transform: scale(1.03);
}
.tx {
  font-size: 2rem;
  color: white;
  font-family: "Titillium Web", sans-serif !important;
  font-weight: bold;
  letter-spacing: 0.4px;
  transition: 1s all;
}
.fy {
  font-size: 3rem !important  ;
  font-family: "Titillium Web", sans-serif !important;

  color: white;
  font-weight: 560;
  letter-spacing: 0.4px;
  transition: 1s all;
}
.fy:hover {
  transform: scale(1.04);
}
.tx:hover {
  background: white;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  transform: scale(1.04);
}
.ft {
  font-size: 5rem !important  ;
  font-family: "Titillium Web", sans-serif !important;
  font-size: 2rem;
  color: white;
  font-weight: bold;
  letter-spacing: 0.4px;
  transition: 1s all;
}
.ft:hover {
  transform: scale(1.04);
}

.new-konut {
  margin-top: 10%;
  margin-left: 3%;
}
.tx-navbar {
  font-size: 3rem;
}
</style>
