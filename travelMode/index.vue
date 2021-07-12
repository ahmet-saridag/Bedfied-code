<template>
  <div>
    <TravelModeHeader :userProfilesData="userData" />
    <div class="containers mt-1 fm">
      <div class="row">
        <div class="col-md-6">
          <div class="row menu-content d-flex">
            <h5
              class="p-3"
              :class="
                nowContent ? 'text-danger border-bottom border-danger' : 'p-3'
              "
              style="cursor: pointer"
              @click.prevent="nowContents"
            >
              Yaklaşan
              <span
                class="badge rounded-circle alert-length"
                style="color: #fff; background: #f93b3b"
                v-if="travelSearchData.length != 0"
                >{{ travelSearchData.length }}</span
              >
            </h5>
            <h5
              class="p-3"
              :class="
                finishContent
                  ? 'text-danger border-bottom border-danger'
                  : 'p-3'
              "
              style="cursor: pointer"
              @click.prevent="finishContents"
            >
              Geçmiş
              <span
                class="badge rounded-circle alert-length"
                style="color: #fff; background: #f93b3b"
                v-if="oldTravelsSearchData.length != 0"
                >{{ oldTravelsSearchData.length }}</span
              >
            </h5>
            <h5
              class="p-3"
              :class="
                deleteContent
                  ? 'text-danger border-bottom border-danger'
                  : 'p-3'
              "
              style="cursor: pointer"
              @click.prevent="deleteContents"
            >
              İptal edilenler
              <span
                class="badge rounded-circle alert-length"
                style="color: #fff; background: #f93b3b"
                v-if="deleteSearchTravel.length != 0"
                >{{ deleteSearchTravel.length }}</span
              >
            </h5>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-group mt-3" v-if="nowContent">
            <div class="input-group-prepend"></div>
            <input
              type="search"
              class="form-control"
              placeholder="Yaklaşan kayıtlarda arama yapın.."
              aria-label="search"
              aria-describedby="basic-addon1"
              v-model="messages.nowContentMessage"
              @keyup.enter="nowContentSearch"
            />
            <button
              @click.prevent="nowContentSearch"
              class="border-0 rounded"
              style="background: #f93b3b"
            >
              <span
                class="input-group-text border-0"
                id="basic-addon1"
                style="background: #f93b3b; color: white"
              >
                <i class="fa fa-search"></i>
              </span>
            </button>
          </div>
          <div class="input-group mt-3" v-if="finishContent">
            <div class="input-group-prepend"></div>
            <input
              type="search"
              class="form-control"
              placeholder="Geçmiş kayıtlarda arama yapın.."
              aria-label="search"
              aria-describedby="basic-addon1"
              v-model="messages.finishContentMessage"
              @keyup.enter="finishContentSearch"
            />
            <button
              @click.prevent="finishContentSearch"
              class="border-0 rounded"
              style="background: #f93b3b"
            >
              <span
                class="input-group-text border-0"
                id="basic-addon1"
                style="background: #f93b3b; color: white"
              >
                <i class="fa fa-search"></i>
              </span>
            </button>
          </div>
          <div class="input-group mt-3" v-if="deleteContent">
            <div class="input-group-prepend"></div>
            <input
              type="search"
              class="form-control"
              placeholder="İptal edilmiş kayıtlarda arama yapın.."
              aria-label="search"
              aria-describedby="basic-addon1"
              @keyup.enter="deleteContentSearch"
              v-model="messages.deleteContentMessage"
            />
            <button
              @click.prevent="deleteContentSearch"
              class="border-0 rounded"
              style="background: #f93b3b"
            >
              <span
                class="input-group-text border-0"
                id="basic-addon1"
                style="background: #f93b3b; color: white"
              >
                <i class="fa fa-search"></i>
              </span>
            </button>
          </div>
        </div>
        <div class="col-12">
          <hr class="bg-dark text-dark" />
        </div>

        <div class="col-md-12" v-if="nowContent">
          <div class="row">
            <div
              class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 mt-2 mr-5"
              v-for="travel in travelSearchData"
              :key="travel.firebaseId"
            >
              <div
                class="card shadow-lg mr-5"
                style="width: 20rem; border-radius: 20px"
              >
                <img
                  class="card-img-top"
                  height="200"
                  width="200"
                  style="object-fit: cover; border-radius: 20px 20px 0px 0px"
                  :src="travel.homeData.photos[0].photo"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title mb-1">
                    <h6 class="text-muted mt-0 text-center">
                      {{ travel.travelData.dateData.goDate.split("-")[2] }}.{{
                        travel.travelData.dateData.goDate.split("-")[1]
                      }}.{{ travel.travelData.dateData.goDate.split("-")[0] }}
                      ile
                      {{ travel.travelData.dateData.endDate.split("-")[2] }}.{{
                        travel.travelData.dateData.endDate.split("-")[1]
                      }}.{{ travel.travelData.dateData.endDate.split("-")[0] }}
                      arası
                    </h6>
                    {{ travel.homeData.county }}
                    <h6 class="mb-0 mt-1">
                      <span class="font-weight-bold">Rezervasyon durumu:</span>
                      <span v-if="travel.travelRemoveMode.reserveStatus == null"
                        >onay bekliyor...
                        <img class="mb-2" src="./waiting (1).png" alt=""
                      /></span>
                      <span
                        class="text-success font-weight-bold"
                        v-if="travel.travelRemoveMode.reserveStatus == true"
                        >Onayladı
                        <i class="fa fa-check-circle text-success"></i>
                      </span>
                    </h6>
                  </h5>
                  <p class="card-text">
                    {{ travel.homeData.peopleCounty }} misafir
                    {{ Math.floor(travel.homeData.bed) }} yatak odası
                    {{ travel.homeData.bed }} yatak
                    {{ travel.homeData.bathroom }} banyo
                  </p>
                  <button
                    @click.prevent="
                      $router.push('/travelMode/' + travel.firebaseId)
                    "
                    class="btn text-white button-click d-block mx-auto"
                    style="background: #f93b3b"
                  >
                    Seyahat detaylarını görüntüle
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row" v-if="travelSearchData.length == 0">
            <div
              class="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col d-flex justify-content-center align-items-center"
            >
              <div class="text-center">
                <h3 class="mb-4 mt-5">Yaklaşan seyahatiniz bulunmamaktadır.</h3>
                <button
                  class="btn"
                  @click.prevent="$router.push('/homes')"
                  style="background: #f93b3b; color: white"
                >
                  Seyahate çıkın
                </button>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
              <img
                src="https://images.unsplash.com/photo-1617987974302-7d4cb8966f58?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                width="500"
                height="400"
                class="none"
                style="object-fit: cover; border-radius: 40px"
                alt=""
              />
            </div>
          </div>
          <div style="height: 100px"></div>
        </div>
        <div class="col-md-12" v-if="finishContent">
          <div class="row">
            <div
              class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 mt-2 mr-5"
              v-for="travel in oldTravelsSearchData"
              :key="travel.firebaseId"
            >
              <div
                class="card shadow-lg mr-5"
                style="width: 20rem; border-radius: 20px"
              >
                <img
                  class="card-img-top"
                  height="200"
                  width="200"
                  style="object-fit: cover; border-radius: 20px 20px 0px 0px"
                  :src="travel.homeData.photos[0].photo"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title mb-1">
                    <h6 class="mt-2 text-center text-success">
                      {{ travel.travelData.dateData.goDate.split("-")[2] }}.{{
                        travel.travelData.dateData.goDate.split("-")[1]
                      }}.{{ travel.travelData.dateData.goDate.split("-")[0] }}
                      ile
                      {{ travel.travelData.dateData.endDate.split("-")[2] }}.{{
                        travel.travelData.dateData.endDate.split("-")[1]
                      }}.{{ travel.travelData.dateData.endDate.split("-")[0] }}
                      arası
                    </h6>
                    {{ travel.homeData.county }} <br />
                    <span class="text-success">Geçmiş Seyahat</span>
                  </h5>
                  <p class="card-text">
                    {{ travel.homeData.peopleCounty }} misafir
                    {{ Math.floor(travel.homeData.bed) }} yatak odası
                    {{ travel.homeData.bed }} yatak
                    {{ travel.homeData.bathroom }} banyo
                  </p>
                  <div class="buttons d-flex justify-content-center">
                    <button
                      @click.prevent="
                        $router.push('/homes/' + travel.homeDataFirebaseId)
                      "
                      class="btn btn-info text-white"
                    >
                      Konutu görüntüleyin
                    </button>
                    <button
                      @click.prevent="
                        $router.push(
                          '/travelMode/deleteTravel/' + travel.firebaseId
                        )
                      "
                      class="btn btn-danger text-white ml-2"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" v-if="oldTravelsSearchData.length == 0">
            <div
              class="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center"
            >
              <div class="text-center">
                <h3 class="mb-4 mt-5">Geçmiş seyahatiniz bulunmamaktadır.</h3>
                <button
                  class="btn"
                  @click.prevent="$router.push('/homes')"
                  style="background: #f93b3b; color: white"
                >
                  Seyahate çıkın
                </button>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6">
              <img
                src="https://images.unsplash.com/photo-1617905876865-3643a32301e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                width="500"
                height="400"
                class="none"
                style="object-fit: cover; border-radius: 40px"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-md-12" v-if="deleteContent">
          <div class="row">
            <div
              class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 mt-2 mr-5"
              v-for="travel in deleteSearchTravel"
              :key="travel.firebaseId"
            >
              <div
                class="card shadow-lg mr-5"
                style="width: 20rem; border-radius: 20px"
              >
                <img
                  class="card-img-top"
                  height="200"
                  width="200"
                  style="object-fit: cover; border-radius: 20px 20px 0px 0px"
                  :src="travel.homeData.photos[0].photo"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title mb-1">
                    <h6 class="mt-2 text-center text-danger">
                      {{ travel.travelData.dateData.goDate.split("-")[2] }}.{{
                        travel.travelData.dateData.goDate.split("-")[1]
                      }}.{{ travel.travelData.dateData.goDate.split("-")[0] }}
                      ile
                      {{ travel.travelData.dateData.endDate.split("-")[2] }}.{{
                        travel.travelData.dateData.endDate.split("-")[1]
                      }}.{{ travel.travelData.dateData.endDate.split("-")[0] }}
                      arası
                    </h6>
                    {{ travel.homeData.county }} <br />
                    <span
                      v-if="
                        travel.travelRemoveMode.reserveStatus == false &&
                        travel.travelRemoveMode.authId == $store.state.authKey
                      "
                      class="text-danger"
                      >Sizin tarafınızdan iptal Edildi !!
                      <img src="./remove.png" alt="" class="float-right" />
                    </span>
                    <span v-else class="text-danger"
                      >Ev sahibi tarafından iptal Edildi !!
                      <img src="./remove.png" alt="" class="float-right" />
                    </span>
                  </h5>
                  <p class="card-text">
                    {{ travel.homeData.peopleCounty }} misafir
                    {{ Math.floor(travel.homeData.bed) }} yatak odası
                    {{ travel.homeData.bed }} yatak
                    {{ travel.homeData.bathroom }} banyo
                  </p>
                  <div class="buttons d-flex justify-content-center">
                    <button
                      @click.prevent="
                        $router.push('/homes/' + travel.homeDataFirebaseId)
                      "
                      class="btn btn-info text-white"
                    >
                      Konutu görüntüleyin
                    </button>
                    <button
                      @click.prevent="
                        $router.push(
                          '/travelMode/deleteTravel/' + travel.firebaseId
                        )
                      "
                      class="btn btn-danger text-white ml-2"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" v-if="deleteSearchTravel.length == 0">
            <div
              class="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center"
            >
              <div class="text-center">
                <h3 class="mb-4 mt-5">
                  İptal edilmiş seyahatiniz bulunmamaktadır.
                </h3>
                <button
                  class="btn"
                  @click.prevent="$router.push('/homes')"
                  style="background: #f93b3b; color: white"
                >
                  Seyahate çıkın
                </button>
              </div>
            </div>
            <div class="col-6">
              <img
                src="https://images.unsplash.com/photo-1617905875947-cced63cfcb27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                width="500"
                height="400"
                class="none"
                style="object-fit: cover; border-radius: 40px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div style="height: 100px"></div>
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
      nowContent: true,
      finishContent: false,
      deleteContent: false,

      travelsData: [],
      travelSearchData: [],

      oldTravelsData: [],
      oldTravelsSearchData: [],

      deleteTravel: [],
      deleteSearchTravel: [],

      messages: {
        nowContentMessage: null,
        finishContentMessage: null,
        deleteContentMessage: null,
      },
      toDay: null,
      userData: [],
    };
  },
  methods: {
    nowContents() {
      (this.nowContent = true),
        (this.finishContent = false),
        (this.deleteContent = false);
    },
    finishContents() {
      (this.nowContent = false),
        (this.finishContent = true),
        (this.deleteContent = false);
    },
    deleteContents() {
      (this.nowContent = false),
        (this.finishContent = false),
        (this.deleteContent = true);
    },
    getRezervData() {
      axios
        .get(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData.json"
        )
        .then((res) => {
          let data = res.data;
          let travelAllData = [];
          let newTravelData = [];
          for (let key in data) {
            travelAllData.push({ firebaseId: key, ...data[key] });
          }
          newTravelData = travelAllData.filter(
            (s) => s.authId == this.$store.state.authKey
          );
          for (let travel of newTravelData) {
            if (
              travel.authId == this.$store.state.authKey &&
              travel.travelRemoveMode.reserveStatus == false
            ) {
              this.deleteTravel.push(travel);
            } else {
              let tarih = new Date();
              let time = tarih.getTime();
              let travelTime = new Date(travel.travelData.dateData.endDate);
              let chanceTime = travelTime.getTime();
              if (time > chanceTime) {
                this.oldTravelsData.push(travel);
              } else {
                this.travelsData.push(travel);
              }
            }
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    nowContentSearch() {
      if (this.messages.nowContentMessage != null) {
        this.travelSearchData = this.travelsData.filter((s) =>
          s.homeData.county.startsWith(this.messages.nowContentMessage)
        );
      }
    },
    finishContentSearch() {
      if (this.messages.finishContentMessage != null) {
        this.oldTravelsSearchData = this.oldTravelsData.filter((s) =>
          s.homeData.county.startsWith(this.messages.finishContentMessage)
        );
      }
    },
    deleteContentSearch() {
      if (this.messages.deleteContentMessage != null) {
        this.deleteSearchTravel = this.deleteTravel.filter((s) =>
          s.homeData.county.startsWith(this.messages.deleteContentMessage)
        );
      }
    },
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
            this.userData = newArray;
          }
        });
    },
  },
  created() {
    this.getRezervData();
    this.getUserDATA();
    this.travelSearchData = this.travelsData;
    this.oldTravelsSearchData = this.oldTravelsData;
    this.deleteSearchTravel = this.deleteTravel;
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
.fm {
  font-family: "Titillium Web", sans-serif !important;
}
.button-click {
  transition: transform 80ms ease-in;
  cursor: pointer;
}

.button-click:active {
  transform: scale(0.95);
}
.alert-length {
  font-size: 12px;
  position: absolute;
  top: 5px;
}
.containers {
  width: 80%;
  margin-right: auto!important;
  margin-left: auto!important;
}
@media (max-width: 762px) {
  .containers {
  width: 80%;
}
  .none {
    display: none;
  }
}
</style>