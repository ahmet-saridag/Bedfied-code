<template>
  <div>
    <div>
      <TravelModeHeader :userProfilesData="userData" />
    </div>
    <div class="fm">
      <div class="show-map responsive-filter2" v-if="!errorRemove">
        <button
          @click.prevent="showMobileMaps"
          class="btn btn-dark btn-md"
          style="border-radius: 10px !important"
        >
          <i
            :class="
              !showMobileMap ? 'fas fa-location-arrow' : 'far fa-times-circle'
            "
          ></i>
          {{ !showMobileMap ? "Haritayı göster" : "Haritayı kapat" }}
        </button>
      </div>
      <div class="row m-0 p-0">
        <div
          class="mobile-dizyn scroller col-md-4 col-lg-4 col-xl-4"
          v-if="!showMobileMap"
        >
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  :src="
                    travelData.homeData.photos[0] == undefined
                      ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                      : travelData.homeData.photos[0].photo
                  "
                  alt="First slide"
                  height="250
                    "
                  style="object-fit: cover; border-radius: 20px"
                  width="300"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="
                    travelData.homeData.photos[1] == undefined
                      ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                      : travelData.homeData.photos[1].photo
                  "
                  alt="Second slide"
                  height="250
                    "
                  style="object-fit: cover; border-radius: 20px"
                  width="300"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="
                    travelData.homeData.photos[2] == undefined
                      ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                      : travelData.homeData.photos[2].photo
                  "
                  alt="Third slide"
                  height="250
                    "
                  style="object-fit: cover; border-radius: 20px"
                  width="300"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="
                    travelData.homeData.photos[3] == undefined
                      ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                      : travelData.homeData.photos[3].photo
                  "
                  alt="Second slide"
                  height="250
                    "
                  style="object-fit: cover; border-radius: 20px"
                  width="300"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="
                    travelData.homeData.photos[4] == undefined
                      ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                      : travelData.homeData.photos[4].photo
                  "
                  alt="Second slide"
                  height="250
                    "
                  style="object-fit: cover; border-radius: 20px"
                  width="300"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <h4 class="text-center my-3 font-weight-bold">
            {{ travelData.homeData.county }}
          </h4>
          <div class="row mx-0">
            <div class="col-10 mt-2">
              <h5>
                Ev sahibiniz:
                {{
                  travelData.userProfileData.fullName == undefined
                    ? "İsim belirtmemiş"
                    : travelData.userProfileData.fullName
                }}
              </h5>
              <h5>
                {{ travelData.homeData.houseType }}-
                {{ travelData.homeData.houseStayType }}
              </h5>
              <p class="mb-1 rezerve-detail-p">
                {{ travelData.homeData.peopleCounty }} misafir
                {{ Math.floor(travelData.homeData.bed) }} yatak odası
                {{ travelData.homeData.bed }} yatak
                {{ travelData.homeData.bathroom }} banyo
              </p>
              <p class="mb-1 rezerve-detail-p">
                {{ travelData.travelData.dateData.goDate.split("-")[2] }}.{{
                  travelData.travelData.dateData.goDate.split("-")[1]
                }}.{{ travelData.travelData.dateData.goDate.split("-")[0] }} ile
                {{ travelData.travelData.dateData.endDate.split("-")[2] }}.{{
                  travelData.travelData.dateData.endDate.split("-")[1]
                }}.{{
                  travelData.travelData.dateData.endDate.split("-")[0]
                }}
                arası <br />
                {{ travelData.lastDay }} günlük seyahat /
                <span
                  >{{
                    travelData.travelData.guest.oldBoy +
                    travelData.travelData.guest.middleBoy
                  }}
                  misafir
                </span>
                <span>{{ travelData.travelData.guest.smallBoy }} bebek </span>
              </p>
              <p class="mb-0 rezerve-detail-p">
                <span class="font-weight-bold">Rezervasyon durumu:</span>
                <span v-if="travelData.travelRemoveMode.reserveStatus == null"
                  >onay bekliyor...
                  <img class="mb-2" src="./İcons/waiting (1).png" alt=""
                /></span>
                <span
                  class="text-success rezerve-detail-p font-weight-bold"
                  v-if="travelData.travelRemoveMode.reserveStatus == true"
                  >Onayladı <i class="fa fa-check-circle text-success"></i>
                </span>
              </p>
              <p
                class="my-2 rezerve-detail-p text-info font-weight-bold"
                v-if="travelData.travelRemoveMode.reserveStatus == true"
              >
                Ev sahibinden evin giriş çıkış saatlerini <br />
                ve telefon numarasını mesaj atarak <br />
                belirtmesini isteyin.
                <img src="./İcons/laugh (1).png" alt="" /> <br />
                Eve güvenli bir giriş sağladıktan sonra <br />
                ev sahibize , mail adresinize gelen <br />
                mailden rezervasyon ücretini <br />
                göndermeyi unutmayın.
                <img src="./İcons/handshake (1).png" alt="" />
              </p>
              <p class="font-weight-bold rezerve-detail-p">
                Toplam maliyet:
                {{
                  Math.round(
                    travelData.homeData.price * travelData.lastDay +
                      travelData.homeData.price * travelData.lastDay * (8 / 100)
                  )
                }}₺
              </p>
            </div>
            <div class="col-2">
              <img
                class="rounded-circle float-right"
                :src="travelData.userProfileData.profileImage"
                width="60"
                style="object-fit: cover"
                height="60"
                alt=""
              />
            </div>
            <div class="col-12">
              <hr v-if="travelData.homeData.kitchen" />
              <h5
                class="font-weight-bold text-center"
                v-if="
                  !travelData.homeData.wifi &&
                  !travelData.homeData.basicMaterials &&
                  !travelData.homeData.washingMachine &&
                  !travelData.homeData.kitchen &&
                  !travelData.homeData.tv &&
                  !travelData.homeData.Iron &&
                  !travelData.homeData.carPark &&
                  !travelData.homeData.table &&
                  !travelData.homeData.airConditioning &&
                  !travelData.homeData.cabinet &&
                  !travelData.homeData.pool &&
                  !travelData.homeData.notFreeCarPark
                    ? ''
                    : 'Olanaklar'
                "
              >
                Olanaklar
              </h5>
            </div>

            <div class="row p-3">
              <div
                class="col-6 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.wifi"
              >
                <img src="./İcons/wifi.png" alt />
                <span class="mt-2" style="font-size: 17px">Wifi</span>
              </div>
              <div
                class="col-6 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.basicMaterials"
              >
                <img src="./İcons/soap.png" alt />
                <span style="font-size: 17px">Temel Malzemeler</span>
              </div>
              <div
                class="col-6 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.carPark"
              >
                <img src="./İcons/parking-car.png" alt />
                <span class="mt-2" style="font-size: 17px"
                  >Ücretsiz Otopark</span
                >
              </div>
              <div
                class="col-6 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.kitchen"
              >
                <img src="./İcons/kitchen.png" alt />
                <span style="font-size: 17px">Mutfak</span>
              </div>
              <div
                class="col-6 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.Iron"
              >
                <img src="./İcons/iron.png" alt />
                <span style="font-size: 15px">Ütü</span>
              </div>
              <div
                class="col-6 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.washingMachine"
              >
                <img src="./İcons/washing-machine.png" alt />
                <span style="font-size: 15px">Çamaşır Makinesi</span>
              </div>
              <div
                class="col-6 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.tv"
              >
                <img src="./İcons/monitor.png" alt />
                <span style="font-size: 15px">TV</span>
              </div>
              <div
                class="col-6 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.cabinet"
              >
                <img src="./İcons/wardrobe.png" alt />
                <span style="font-size: 15px">Dolap / Çekmeceler</span>
              </div>
              <div
                class="col-6 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.table"
              >
                <img src="./İcons/chair.png" alt />
                <span style="font-size: 15px">Masa, Sandalye</span>
              </div>
              <div
                class="col-6 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.airConditioning"
              >
                <img src="./İcons/air-conditioner (1).png" alt />
                <span style="font-size: 15px">Klima</span>
              </div>
              <div
                class="col-6 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.pool"
              >
                <img src="./İcons/swimming-pool.png" alt />
                <span style="font-size: 15px">Havuz</span>
              </div>
              <div
                class="col-6 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.notFreeCarPark"
              >
                <img src="./İcons/car-park (1).png" alt />
                <span style="font-size: 15px">Ücretli otopark</span>
              </div>
            </div>

            <div class="col-12" v-if="travelData.homeData.rules">
              <hr />
              <h5
                class="font-weight-bold text-center"
                v-if="travelData.homeData.rules"
              >
                Ev kuralları
              </h5>
            </div>

            <div class="row p-3" v-if="travelData.homeData.rules">
              <div
                class="col-12 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.rules.smogeRule"
              >
                <img src="./İcons/cigarrete.png" alt />
                <span class="mt-2" style="font-size: 17px"
                  >Sigara içilebilir</span
                >
              </div>
              <div
                class="col-12 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.rules.funnyRule"
              >
                <img src="./İcons/celebration.png" alt />
                <span style="font-size: 17px"
                  >Etkinlik , eğlencelere izin veriliyor</span
                >
              </div>
              <div
                class="col-12 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.rules.babyRule"
              >
                <img src="./İcons/baby-boy.png" alt />
                <span class="mt-2" style="font-size: 17px"
                  >Bebekler için uygun (2 yaş ve altı)</span
                >
              </div>
              <div
                class="col-12 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.rules.childRule"
              >
                <img src="./İcons/children.png" alt />
                <span style="font-size: 17px"
                  >Çocuklar için uygun (2-12 yaş arası)</span
                >
              </div>
              <div
                class="col-12 mb-2"
                style="cursor: pointer"
                v-if="travelData.homeData.rules.animalRule"
              >
                <img src="./İcons/cat.png" alt />
                <span style="font-size: 15px">Evcil hayvanlar için uygun</span>
              </div>
            </div>
            <div class="col-12">
              <hr />
              <h5 class="font-weight-bold text-center">
                Seyahatiniz de gezip görebileceğiniz mekanlar
              </h5>
              <h6 class="text-muted text-center">
                haritadaki işaretleri takip edebilirsiniz
              </h6>
            </div>
            <div class="row p-3">
              <div class="col-12 mb-2" style="cursor: pointer">
                <img src="./İcons/location-pin.png" alt />
                <span class="mt-2" style="font-size: 17px"
                  >Alışveriş Merkezleri</span
                >
              </div>
              <div class="col-12 my-2" style="cursor: pointer">
                <img src="./İcons/location-pin (2).png" alt />
                <span style="font-size: 17px">Tarihi Mekanlar</span>
              </div>
              <div class="col-12 my-2" style="cursor: pointer">
                <img src="./İcons/maps-and-flags.png" alt />
                <span class="mt-2" style="font-size: 17px"
                  >Eğlence Merkezleri</span
                >
              </div>
              <div class="col-12 mt-2" style="cursor: pointer">
                <img src="./İcons/home (4).png" alt />
                <span class="mt-2" style="font-size: 17px"
                  >Misafir olacağınız yer</span
                >
              </div>
            </div>
            <div class="col-12">
              <hr />
              <h5 class="font-weight-bold text-center">İptal Politikası</h5>
            </div>

            <div class="row p-3">
              <div class="col-1 mr-1 mt-3 mb-2" style="cursor: pointer">
                <img src="./İcons/calendar.png" alt />
              </div>
              <div class="col-10 mb-3">
                <span class="mt-2" style="font-size: 17px"
                  >Ev sahibi isteğinizi kabul edene kadar rezervasyonunuz
                  onaylanmayacaktır.</span
                >
              </div>
              <div class="col-1 mr-1 mt-4" style="cursor: pointer">
                <img src="./İcons/checked.png" alt />
              </div>
              <div class="col-10">
                <span style="font-size: 17px"
                  >O zamana kadar istediğiniz zaman iptal edebilir ve ödemenizi
                  eksiksiz bir şekilde geri alabilirsiniz.</span
                >
              </div>
            </div>
            <div class="col-6 text-center mt-3" style="margin-bottom: 20px">
              <button
                @click.prevent="
                  $router.push('/travelMode/messages/' + $store.state.authKey)
                "
                class="btn btn-sm btn-info p-2 button-click button-size"
              >
                Ev sahibine mesaj at
              </button>
            </div>
            <div class="col-6 text-center mt-3" style="margin-bottom: 20px">
              <button
                @click.prevent="
                  $router.push('/homes/' + travelData.homeDataFirebaseId)
                "
                class="btn btn-sm btn-info p-2 button-click button-size"
              >
                Konutu görüntüle
              </button>
            </div>
            <div
              class="col-12 text-center"
              :style="errorRemove ? 'margin-bottom:5px' : 'margin-bottom: 20px'"
            >
              <div class="section full-height">
                <label
                  @click.prevent="modalCloseControl"
                  :class="
                    loadingButtonRemove
                      ? 'button-click  btn btn-sm button-size px-5'
                      : 'button-click  btn btn-sm button-size p-2'
                  "
                  :style="
                    loadingButtonRemove
                      ? 'color: white; background: #f93b3b;height:40px'
                      : 'color: white; background: #f93b3b'
                  "
                  >Rezervasyonu iptal et</label
                >
                <transition name="home">
                  <div class="modal" v-if="modalStatus">
                    <div class="modal-wrap" v-click-outside="modalStatusClose">
                      <video autoplay muted loop>
                        <source
                          src="./İcons/karmaVideo.mp4"
                          v-if="reserveStatus"
                          type=""
                        />
                        <source
                          src="./İcons/video.mp4"
                          v-else
                          type="video/mp4"
                        />

                        Your browser does not support HTML video.
                      </video>
                      <p class="p-3 mb-0 h5" v-if="reserveStatus">
                        Ev sahibi rezervasyonunuzu
                        <span class="text-success">onayladı</span> sizi misafir
                        etmek istiyor <img src="./İcons/unicorn.png" alt="" />
                      </p>
                      <p class="p-3 mb-0 h5" v-else>
                        Rezervasyonunuz henüz onaylanmadı iptal etmek
                        istediğinize emin misiniz?
                      </p>
                      <button
                        @click.prevent="
                          $router.push(
                            '/travelMode/messages/' + $store.state.authKey
                          )
                        "
                        class="
                          btn btn-sm btn-info
                          mb-1
                          button-click button-size
                        "
                      >
                        Ev sahibine mesaj at
                      </button>
                      <button
                        :class="
                          loadingButtonRemove
                            ? 'button-click btn btn-danger mb-1 px-5 py-0  btn btn-sm button-size '
                            : 'button-click btn btn-danger mb-1  btn btn-sm button-size'
                        "
                        :style="loadingButtonRemove ? 'height:40px' : ''"
                        @click.prevent="removeRezervation"
                      >
                        <span v-if="!loadingButtonRemove"
                          >Rezervasyonu iptal et</span
                        >
                        <div
                          v-else
                          class="spinner-border text-white"
                          style="font-size: 15px"
                          role="status"
                        >
                          <span class="sr-only">Loading...</span>
                        </div>
                      </button>
                      <div
                        class="
                          text-danger
                          d-block
                          mx-auto
                          mt-0
                          mr-4
                          font-weight-bold
                        "
                        v-if="errorRemove"
                      >
                        {{ errorRemoveMessage }}
                      </div>
                      <small v-if="reserveStatus" class="mt-0 p-2"
                        >(Rezervasyon ücretinden
                        <span class="font-weight-bold"
                          >{{
                            Math.floor(
                              travelData.homeData.price *
                                travelData.lastDay *
                                (8 / 100)
                            )
                          }}₺</span
                        >
                        kesilecektir.)</small
                      >
                      <small v-else class="text-muted mt-0 p-2"
                        >(Rezervasyon ücreti eksiksiz bir şekilde
                        aktıralacaktır.)</small
                      >
                    </div>
                  </div>
                </transition>
              </div>
            </div>
            <div class="col-sm-12" style="height: 100px"></div>
          </div>
        </div>
        <div class="col-8 p-0 m-0 mobile-none" v-if="!showMobileMap">
          <GmapMap
            :center="center"
            :zoom="10"
            map-type-id="roadmap"
            style="width: 100%; height: 100%"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="false"
              :icon="{ url: require('./İcons/home (4).png') }"
            />
            <GmapMarker
              :key="index"
              v-for="(m, index) in markersAVM"
              :position="m.position"
              :clickable="true"
              :draggable="false"
              :icon="{ url: require('./İcons/location-pin.png') }"
            />
            <GmapMarker
              :key="index"
              v-for="(m, index) in markersFunnyPlaces"
              :position="m.position"
              :clickable="true"
              :draggable="false"
              :icon="{ url: require('./İcons/maps-and-flags.png') }"
            />
            <GmapMarker
              :key="index"
              v-for="(m, index) in markersHistoryPlaces"
              :position="m.position"
              :clickable="true"
              :draggable="false"
              :icon="{ url: require('./İcons/location-pin (2).png') }"
            />
          </GmapMap>
        </div>
      </div>
      <div
        class="row row-mobile-map border border-info responsive-filter2"
        id="scroll"
        v-if="showMobileMap"
      >
        <GmapMap
          :center="center"
          :zoom="10"
          map-type-id="roadmap"
          style="width: 100%; height: 110%"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            :icon="{ url: require('./İcons/home (4).png') }"
          />
          <GmapMarker
            :key="index"
            v-for="(m, index) in markersAVM"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            :icon="{ url: require('./İcons/location-pin.png') }"
          />
          <GmapMarker
            :key="index"
            v-for="(m, index) in markersFunnyPlaces"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            :icon="{ url: require('./İcons/maps-and-flags.png') }"
          />
          <GmapMarker
            :key="index"
            v-for="(m, index) in markersHistoryPlaces"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            :icon="{ url: require('./İcons/location-pin (2).png') }"
          />
        </GmapMap>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TravelModeHeader from "@/components/travel/travelHeader";
export default {
  middleware: ["session-control", "auth"],

  layout: "homes",
  components: {
    TravelModeHeader,
  },
  data() {
    return {
      markers: [
        {
          position: {
            lat: null,
            lng: null,
          },
        },
      ],
      markersAVM: [
        {
          position: {
            lat: 40.9859469520207,
            lng: 29.100253406231417,
            name: "Pladium Avm",
          },
        },
        {
          position: {
            lat: 40.98622324311971,
            lng: 29.11845494659659,
            name: "Novado Avm",
          },
        },
        {
          position: {
            lat: 40.979888249712914,
            lng: 29.099865187641388,
            name: "Carrefour Avm",
          },
        },
        {
          position: {
            lat: 40.982578729826656,
            lng: 29.132146579672018,

            name: "Brandium Avm",
          },
        },
        {
          position: {
            lat: 40.982578729826656,
            lng: 29.132146579672018,

            name: "Brandium Avm",
          },
        },
        {
          position: {
            lat: 41.00275803242759,
            lng: 29.055001710596763,

            name: "Akasya Avm",
          },
        },
        {
          position: {
            lat: 41.00347241004005,
            lng: 29.071378721263052,

            name: "Emaar Avm",
          },
        },
        {
          position: {
            lat: 41.000062590252156,
            lng: 29.031661501518546,
            name: "Nautlius Avm",
          },
        },
        {
          position: {
            lat: 41.021195788303515,
            lng: 29.03940741469711,
            name: "Caiptol Avm",
          },
        },
        {
          position: {
            lat: 41.01301858929726,
            lng: 29.01587782659242,
            name: "Çicekçi Avm",
          },
        },
        {
          position: {
            lat: 41.05722188429511,
            lng: 29.052745640796353,
            name: "AVM Life",
          },
        },
        {
          position: {
            lat: 41.0627161453924,
            lng: 28.993025513107796,
            name: "Cevahir Avm",
          },
        },
        {
          position: {
            lat: 41.0627161453924,
            lng: 28.993025513107796,
            name: "Cevahir Avm",
          },
        },
        {
          position: {
            lat: 41.005772917271194,
            lng: 28.959220561278915,
            name: "İstanbul Avm",
          },
        },
        {
          position: {
            lat: 41.014429812154155,
            lng: 28.945278352986936,
            name: "Historia Avm",
          },
        },
      ],
      markersHistoryPlaces: [
        {
          position: {
            lat: 41.01156853958498,
            lng: 28.983346600012737,
            name: "Topkapı Sarayı",
          },
        },
        {
          position: {
            lat: 41.008463694770924,
            lng: 28.977878783967025,
            name: "Yerebatan Sarnıcı",
          },
        },
        {
          position: {
            lat: 41.00869240388766,
            lng: 28.980152550982957,
            name: "Ayasofya Cami",
          },
        },
        {
          position: {
            lat: 41.00547417530242,
            lng: 28.976804297980806,
            name: "Sultanahmet Cami",
          },
        },
        {
          position: {
            lat: 41.01077743160436,
            lng: 28.968044890755433,
            name: "Kapalı Çarşı",
          },
        },
        {
          position: {
            lat: 41.01620645493823,
            lng: 28.964137388677837,
            name: "Süleymaniye Cami",
          },
        },
        {
          position: {
            lat: 41.01620645493823,
            lng: 28.964137388677837,
            name: "Süleymaniye Cami",
          },
        },
        {
          position: {
            lat: 41.02566625777256,
            lng: 28.974180695374482,
            name: "Süleymaniye Cami",
          },
        },
        {
          position: {
            lat: 41.02113955790478,
            lng: 29.004117190315096,
            name: "Kız Kulesi",
          },
        },
      ],
      markersFunnyPlaces: [
        {
          position: {
            lat: 40.989967593615866,
            lng: 29.027033534877848,
            name: "Escape İstanbul",
          },
        },
        {
          position: {
            lat: 40.99963370911064,
            lng: 29.031601497747484,
            name: "Play Planet",
          },
        },
        {
          position: {
            lat: 40.9804465156402,
            lng: 29.049998478130053,
            name: "Çocuklar Aktivite Merkezi",
          },
        },
        {
          position: {
            lat: 41.004934149553556,
            lng: 29.070514846460817,
            name: "Fun Lab",
          },
        },
        {
          position: {
            lat: 41.02096805999483,
            lng: 29.039460085994133,
            name: "Captune World",
          },
        },
        {
          position: {
            lat: 41.03488016904019,
            lng: 28.979697648858217,
            name: "Gençlik Merkezi",
          },
        },
        {
          position: {
            lat: 41.04363410527961,
            lng: 29.006198903190295,
            name: "Vr House",
          },
        },
        {
          position: {
            lat: 41.07242969133288,
            lng: 28.92233817561233,
            name: "Tema Park",
          },
        },
      ],
      showMobileMap: false,
      center: { lat: 40.960882, lng: 29.271368 },
      userData: [],
      errorRemove: false,
      errorRemoveMessage: null,
      loadingButtonRemove: false,
      modalStatus: false,
      reserveStatus: null,
    };
  },
  asyncData(context) {
    return axios
      .get(
        "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/" +
          context.params.travelsId +
          ".json"
      )
      .then((res) => {
        return {
          travelData: res.data,
        };
      });
  },
  methods: {
    removeRezervation() {
      if (this.travelData.travelRemoveMode.reserveStatus == undefined) {
        this.loadingButtonRemove = true;
        axios
          .post("https://www.bedfied.com/api/refundPayWithApi", {
            paymentTransactionId:
              this.travelData.data.itemTransactions[0].paymentTransactionId,
            price:
              this.travelData.homeData.price * this.travelData.lastDay +
              this.travelData.homeData.price *
                this.travelData.lastDay *
                (8 / 100),
          })
          .then((res) => {
            let data = res.data.result;
            if (data.status == "success") {
              this.removeTravel();
            } else {
              this.travelErrorMessage(data);
            }
          });
      }
      if (this.travelData.travelRemoveMode.reserveStatus == true) {
        this.loadingButtonRemove = true;
        axios
          .post("https://www.bedfied.com/api/refundPayWithApi", {
            paymentTransactionId:
              this.travelData.data.itemTransactions[0].paymentTransactionId,
            price: this.travelData.homeData.price * this.travelData.lastDay,
          })
          .then((res) => {
            let data = res.data.result;
            if (data.status == "success") {
              this.removeTravel();
            } else {
              this.travelErrorMessage(data);
            }
          });
      }
    },
    removeTravel() {
      axios
        .put(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/" +
            this.$route.params.travelsId +
            ".json",
          {
            homeData: this.travelData.homeData,
            travelData: this.travelData.travelData,
            homeDataFirebaseId: this.travelData.homeDataFirebaseId,
            userProfileData: this.travelData.userProfileData,
            createRezevDate: this.travelData.createRezevDate,
            authId: this.$store.state.authKey,
            lastDay: this.travelData.lastDay,
            travelRemoveMode: {
              authId: this.$store.state.authKey, // Rezervasyonun oluşturan kişi
              reserveStatus: false,
            },
          }
        )
        .then((res) => {
          axios
            .put(
              "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/" +
                this.$route.params.travelsId +
                ".json",
              {
                homeData: this.travelData.homeData,
                travelData: this.travelData.travelData,
                homeDataFirebaseId: this.travelData.homeDataFirebaseId,
                userProfileData: this.travelData.userProfileData,
                createRezevDate: this.travelData.createRezevDate,
                authId: this.$store.state.authKey,
                lastDay: this.travelData.lastDay,
                travelRemoveMode: {
                  authId: this.$store.state.authKey, // Rezervasyonun oluşturan kişi
                  reserveStatus: false,
                },
              }
            )
            .then((res) => {
              let goDayDate =
                this.travelData.travelData.dateData.goDate.split("-")[2];
              let goMonthDate =
                this.travelData.travelData.dateData.goDate.split("-")[1];
              let goYearDate =
                this.travelData.travelData.dateData.goDate.split("-")[0];
              let endDayDate =
                this.travelData.travelData.dateData.endDate.split("-")[2];
              let endMonthDate =
                this.travelData.travelData.dateData.endDate.split("-")[1];
              let endYearDate =
                this.travelData.travelData.dateData.endDate.split("-")[0];
              if (this.travelData.travelRemoveMode.reserveStatus == true) {
                axios.post(
                  "https://www.bedfied.com/api/sendHaveGuestAcceptRemove",
                  {
                    guestName: this.userData.fullName,
                    guestProfilePhoto: this.userData.profileImage,
                    guestEmail: this.userData.email,
                    hostName: this.travelData.userProfileData.fullName,
                    hostProfilePhoto:
                      this.travelData.userProfileData.profileImage,
                    hostHomePhoto: this.travelData.homeData.photos[0].photo,
                    price:
                      this.travelData.homeData.price * this.travelData.lastDay,
                    totalDays: this.travelData.lastDay,
                    priceSubtract: this.travelData.homeData.price *
                        this.travelData.lastDay *
                        (8 / 100),
                    goDate: goDayDate + "." + goMonthDate + "." + goYearDate,
                    endDate:
                      endDayDate + "." + endMonthDate + "." + endYearDate,
                    goMyRezervations: "https://www.bedfied.com/homes",
                  }
                );
                axios.post(
                  "https://www.bedfied.com/api/sendHaveHostAcceptRemove",
                  {
                    guestName: this.userData.fullName,
                    guestProfilePhoto: this.userData.profileImage,
                    guestEmail: this.userData.email,
                    hostName: this.travelData.userProfileData.fullName,
                    hostEmail: this.travelData.userProfileData.email,
                    hostProfilePhoto:
                      this.travelData.userProfileData.profileImage,
                    hostHomePhoto: this.travelData.homeData.photos[0].photo,
                      priceSubtract: this.travelData.homeData.price *
                        this.travelData.lastDay *
                        (8 / 100),
                    totalDays: this.travelData.lastDay,
                    goDate: goDayDate + "." + goMonthDate + "." + goYearDate,
                    endDate:
                      endDayDate + "." + endMonthDate + "." + endYearDate,
                    goMyRezervations: "https://www.bedfied.com/homes",
                  }
                );
                this.$router.push("/travelMode");
              } else {
                axios.post("https://www.bedfied.com/api/sendHaveGuestRemove", {
                  guestName: this.userData.fullName,
                  guestProfilePhoto: this.userData.profileImage,
                  guestEmail: this.userData.email,
                  hostName: this.travelData.userProfileData.fullName,
                  hostProfilePhoto:
                    this.travelData.userProfileData.profileImage,
                  hostHomePhoto: this.travelData.homeData.photos[0].photo,
                  price:
                    this.travelData.homeData.price * this.travelData.lastDay +
                    this.travelData.homeData.price *
                      this.travelData.lastDay *
                      (8 / 100),
                  totalDays: this.travelData.lastDay,
                  goDate: goDayDate + "." + goMonthDate + "." + goYearDate,
                  endDate: endDayDate + "." + endMonthDate + "." + endYearDate,
                  goMyRezervations: "https://www.bedfied.com/homes",
                });
                axios.post("https://www.bedfied.com/api/sendHaveHostRemove", {
                  guestName: this.userData.fullName,
                  guestProfilePhoto: this.userData.profileImage,
                  guestEmail: this.userData.email,
                  hostName: this.travelData.userProfileData.fullName,
                  hostEmail: this.travelData.userProfileData.email,
                  hostProfilePhoto:
                    this.travelData.userProfileData.profileImage,
                  hostHomePhoto: this.travelData.homeData.photos[0].photo,
                  totalDays: this.travelData.lastDay,
                  goDate: goDayDate + "." + goMonthDate + "." + goYearDate,
                  endDate: endDayDate + "." + endMonthDate + "." + endYearDate,
                  goMyRezervations: "https://www.bedfied.com/homes",
                });
              this.$router.push("/travelMode");
              }
            });
        });
    },
    travelErrorMessage(data) {
      this.loadingButtonRemove = false;
      let message = data.errorMessage;
      this.errorRemove = true;
      this.errorRemoveMessage = message;
      setTimeout(() => {
        this.errorRemove = false;
      }, 5000);
    },
    getUserData() {
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
            this.userData = newArray;
          }
        });
    },
    showMobileMaps() {
      this.showMobileMap = !this.showMobileMap;
      window.scrollTo(6000, 0);
    },
    modalCloseControl() {
      if (this.travelData.travelRemoveMode.reserveStatus == undefined) {
        this.modalStatus = true;
        this.reserveStatus = false;
      }
      if (this.travelData.travelRemoveMode.reserveStatus == true) {
        this.modalStatus = true;
        this.reserveStatus = true;
      }
      if (this.travelData.travelRemoveMode.reserveStatus == false) {
        this.$router.push("/travelMode");
      }
    },
    modalStatusClose() {
      if (this.modalStatus) {
        this.modalStatus = false;
      }
    },
  },
  created() {
    this.getUserData();
    axios
      .get(
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
          this.travelData.homeData.adres +
          "&key=AIzaSyAJ60rXBHT0NkgcAmOlgbR7svLYHLFWnvc"
      )
      .then((res) => {
        this.markers[0].position.lat =
          res.data.results[0].geometry.location.lat;
        this.markers[0].position.lng =
          res.data.results[0].geometry.location.lng;
      });
    this.center = this.travelData.homeData.position;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");

.home-enter-active,
.home-leave-active {
  transition: opacity 0.4s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.section {
  position: relative;
  width: 100%;
  display: block;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
  transition: 1s all ease-in-out;
}

.modal {
  position: fixed;
  display: block;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow-x: hidden;
  background-color: rgba(31, 32, 41, 0.75);
}

.modal-wrap {
  position: relative;
  display: block;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 20px;
  background-color: #fff;
  -ms-flex-item-align: center;
  align-self: center;
  box-shadow: 0 12px 25px 0 rgba(199, 175, 189, 0.25);
  transform: scale(1.2);
}
.modal-wrap video {
  width: 100%;
  object-fit: cover;
  height: 270px;
}

@media screen and (max-width: 762px) {
  .modal-wrap {
    width: calc(70% - 40px);
    height: auto !important;
  }
  .modal-wrap p {
    font-size: 15px !important;
  }
  .modal-wrap small {
    font-size: 10px !important;
  }
  .modal-wrap button {
    font-size: 10px !important;
  }
  .modal-wrap video {
    width: 100%;
    object-fit: cover;
    height: 170px;
  }
}
.button-click {
  transition: transform 80ms ease-in;
  cursor: pointer;
}

.button-click:active {
  transform: scale(0.95);
}

.fm {
  font-family: "Titillium Web", sans-serif !important;
}
@media (min-width: 1450px) {
  .rezerve-detail-p {
    font-size: 20px !important;
  }
  .button-size {
    font-size: 17px !important;
  }
}

.row-pc {
  width: 100%;
  min-width: 90%;
  max-width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  min-height: 83vh;
}
@media (min-width: 762px) {
  .scroller {
    overflow-y: scroll;
    scrollbar-color: rebeccapurple green;
    scrollbar-width: thin;
  }
}
.mobile-dizyn {
  height: 83vh !important;
  min-height: 83vh !important;
}
.mobile-none {
  display: inherit;
}
@media (max-width: 762px) {
  .row-mobile-map {
    height: 83vh !important;
    min-height: 83vh !important;
    width: 100%;
    margin-top: -10%;
    margin-left: auto;
    margin-right: auto;
  }

  .scroller {
    overflow-y: none !important;
  }
  .mobile-none {
    display: none;
  }
  .responsive-filter2 {
    display: inherit !important;
  }
}
.show-map {
  position: fixed;
  bottom: 10%;
  left: 3%;
  z-index: 21;
}
.responsive-filter2 {
  display: none;
}
</style>