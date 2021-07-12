<template>
  <div>
    <div>
      <HostHeader :userProfilesData="userProfileDatas" />
    </div>
    <div class="container fm">
      <div class="row">
        <div
          class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-3"
          v-if="!travelData.travelRemoveMode.reserveStatus"
        >
          <div class="buttons">
            <div
              class="
                card
                px-5
                pt-5
                pb-3
                border-0
                mb-3
                w-100
                card-padding-mobile
              "
              style="border-radius: 40px"
            >
              <div class="card-title">
                <h2 class="mb-4 text-center h2-mobile">
                  Rezervasyon Detayları
                </h2>
                <h5>
                  Rezervasyon isteği : {{ travelData.createRezevDate.Days }}.{{
                    travelData.createRezevDate.months
                  }}.{{ travelData.createRezevDate.years }} -
                  {{ travelData.createRezevDate.hours }}:{{
                    travelData.createRezevDate.Minutes
                  }}'da oluşturuldu
                </h5>
                <h6>
                  Rezerve etmek isteyen misafiriniz:
                  {{
                    CreateRezervPersonProfile.fullName == null
                      ? "İsim belirtilmemiş"
                      : CreateRezervPersonProfile.fullName
                  }}
                  <img
                    :src="
                      CreateRezervPersonProfile.profileImage == null
                        ? './user.png'
                        : CreateRezervPersonProfile.profileImage
                    "
                    style="object-fit: cover"
                    width="100"
                    height="100"
                    alt=""
                    class="rounded-circle float-right mt-3"
                  />
                </h6>
                <h6>
                  {{ travelData.travelData.dateData.goDate.split("-")[2] }}.{{
                    travelData.travelData.dateData.goDate.split("-")[1]
                  }}.{{ travelData.travelData.dateData.goDate.split("-")[0] }}
                  ile
                  {{ travelData.travelData.dateData.endDate.split("-")[2] }}.{{
                    travelData.travelData.dateData.endDate.split("-")[1]
                  }}.{{ travelData.travelData.dateData.endDate.split("-")[0] }}
                  arası
                </h6>
                <h6>
                  {{ travelData.lastDay }} günlük seyahat /
                  {{
                    travelData.travelData.guest.oldBoy +
                    travelData.travelData.guest.middleBoy
                  }}
                  misafir {{ travelData.travelData.guest.smallBoy }} bebek
                </h6>
                <h6 class="font-weight-bold">
                  Toplam kazancınız:
                  {{ travelData.homeData.price * travelData.lastDay }}₺
                </h6>
                <h6 class="text-info font-weight-bold">
                  Rezervasyon onaylandıktan sonra reddetme hakkınız
                  bulunmamaktadır !!
                </h6>
                <p>
                  <span class="font-weight-bold"
                    >Misafirin mesajı {{ travelData.reser }}
                  </span>
                  :{{ travelData.travelData.travelsMessage }}
                </p>
                <button
                  @click.prevent="
                    $router.push('/homeHost/messages/' + $store.state.authKey)
                  "
                  class="
                    btn btn-info
                    d-flex
                    justift-content-center
                    mx-auto
                    mt-4
                  "
                >
                  Misafir ile iletişime geç
                  <i class="far fa-comment mt-1 ml-2"></i>
                </button>
              </div>
            </div>
            <div class="groups text-center">
              <div
                class="col-12 text-center"
                :style="
                  errorRemove ? 'margin-bottom:5px' : 'margin-bottom: 20px'
                "
              >
                <div class="section full-height">
                  <label
                    @click.prevent="modalCloseControl"
                    :class="
                      loadingButtonRemove
                        ? 'button-click  btn btn-danger button-size  mr-3'
                        : 'button-click  btn btn-danger button-size mr-3'
                    "
                    >Rezervasyonu iptal et
                    <i class="fa fa-times-circle ml-1"></i
                  ></label>
                  <transition name="home">
                    <div class="modal" v-if="modalStatus">
                      <div
                        class="modal-wrap"
                        v-click-outside="modalStatusClose"
                      >
                        <video autoplay muted loop>
                          <source
                            src="./karmaVideo.mp4"
                            v-if="modalAccept"
                            type="video/mp4"
                          />
                          <source v-else src="./video.mp4" type="video/mp4" />

                          Your browser does not support HTML video.
                        </video>
                        <p class="p-3 mb-0 h5" v-if="!modalAccept">
                          Misafiriniz buna üzülecek
                          <span class="text-danger">iptal</span> etmek
                          istediğinize emin misiniz?
                          <img src="./unicorn (1).png" alt="" />
                        </p>
                        <p class="p-3 mb-0 h5" v-else>
                          Misafiriniz buna çok sevinecek
                          <img src="./unicorn.png" alt="" />
                          <br />
                          <small>
                            TR{{ userProfileDatas.cardIban }} <br />
                            ( İban adresinize gönderilecektir. )
                          </small>
                        </p>
                        <button
                          v-if="!modalAccept"
                          @click.prevent="
                            $router.push(
                              '/homeHost/messages/' + $store.state.authKey
                            )
                          "
                          class="
                            btn btn-sm btn-info
                            mb-1
                            button-click button-size
                          "
                        >
                          Misafire mesaj at
                        </button>
                        <button
                          v-if="!modalAccept"
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
                        <button
                          v-if="modalAccept"
                          @click.prevent="updateIban"
                          class="
                            btn btn-sm btn-info
                            mb-1
                            button-click button-size
                          "
                        >
                          İban adresimi güncelle
                        </button>
                        <button
                          v-if="modalAccept"
                          :class="
                            loadingButtonRemove
                              ? 'button-click btn btn-success mb-1 px-5 py-0  btn btn-sm button-size '
                              : 'button-click btn btn-success mb-1  btn btn-sm button-size'
                          "
                          :style="loadingButtonRemove ? 'height:40px' : ''"
                          @click.prevent="acceptRezervation"
                        >
                          <span v-if="!loadingButtonRemove"
                            >Rezervasyonu kabul et</span
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
                        <br />
                        <small class="mt-0 p-2" v-if="!modalAccept"
                          >(Rezervasyon ücretinden
                          <span class="font-weight-bold text-danger"
                            >{{
                              Math.floor(
                                travelData.homeData.price * travelData.lastDay
                              )
                            }}₺</span
                          >
                          kaybetmiş olacaksınız.)</small
                        >
                        <small class="mt-0 p-2" v-else
                          >(Rezervasyon ücretinden toplam
                          <span class="font-weight-bold text-success"
                            >{{
                              Math.floor(
                                travelData.homeData.price * travelData.lastDay
                              )
                            }}₺</span
                          >
                          kazanmış olacaksınız.)</small
                        >
                      </div>
                    </div>
                  </transition>
                  <button
                    @click.prevent="acceptRezervationControl"
                    class="btn btn-success mb-2"
                  >
                    Rezervasyonu kabul et
                    <i class="fa fa-check-circle ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12" v-else>
          <div class="card mt-4 border-0">
            <div class="card-title mt-4">
              <h4 class="text-center text-success mb-4">
                Tebrikler rezervasyon onaylandı <img src="./check.png" alt="" />
              </h4>
              <div class="card-title">
                <h5>
                  Rezervasyon isteği : {{ travelData.createRezevDate.Days }}.{{
                    travelData.createRezevDate.months
                  }}.{{ travelData.createRezevDate.years }} -
                  {{ travelData.createRezevDate.hours }}:{{
                    travelData.createRezevDate.Minutes
                  }}'da oluşturuldu
                </h5>
                <h6>
                  Rezerve etmek isteyen misafiriniz:
                  {{
                    CreateRezervPersonProfile.fullName == null
                      ? "İsim belirtilmemiş"
                      : CreateRezervPersonProfile.fullName
                  }}
                  <img
                    :src="
                      CreateRezervPersonProfile.profileImage == null
                        ? './user.png'
                        : CreateRezervPersonProfile.profileImage
                    "
                    style="object-fit: cover"
                    width="100"
                    height="100"
                    alt=""
                    class="rounded-circle float-right"
                  />
                </h6>
                <h6>
                  {{ travelData.travelData.dateData.goDate.split("-")[2] }}.{{
                    travelData.travelData.dateData.goDate.split("-")[1]
                  }}.{{ travelData.travelData.dateData.goDate.split("-")[0] }}
                  ile
                  {{ travelData.travelData.dateData.endDate.split("-")[2] }}.{{
                    travelData.travelData.dateData.endDate.split("-")[1]
                  }}.{{ travelData.travelData.dateData.endDate.split("-")[0] }}
                  arası
                </h6>
                <h6
                  class="text-info font-weight-bold"
                  style="letter-spacing: 0.5px"
                >
                  <i class="fa fa-info-circle text-info"></i> Misafirinize
                  konutunuza hangi saat aralığında gelmesi gerektiğini ve
                  telefon numaranızı mesaj atarak belirtin. Evinize güvenli bir
                  giriş yaptığı zaman mail adresine gelen mailden ev sahibine
                  parayı gönder butonuna basmasını rica edin.
                </h6>
                <h6>
                  {{ travelData.lastDay }} günlük seyahat /
                  {{
                    travelData.travelData.guest.oldBoy +
                    travelData.travelData.guest.middleBoy
                  }}
                  misafir {{ travelData.travelData.guest.smallBoy }} bebek
                </h6>
                <h6 class="font-weight-bold">
                  Toplam kazancınız:
                  <span class="text-success"
                    >{{ travelData.homeData.price * travelData.lastDay }}₺</span
                  >
                </h6>
                <p>
                  <span class="font-weight-bold">Misafirin mesajı</span> :{{
                    travelData.travelData.travelsMessage
                  }}
                </p>
                <button
                  @click.prevent="
                    $router.push('/homeHost/messages/' + $store.state.authKey)
                  "
                  class="
                    btn btn-info
                    d-flex
                    justift-content-center
                    mx-auto
                    mt-4
                  "
                >
                  Misafir ile iletişime geç
                  <i class="far fa-comment mt-1 ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12 mt-5">
          <div
            class="card ml-3 card-width-mobile"
            style="width: 25rem; border-radius: 20px"
          >
            <img
              class="card-img-top"
              height="200"
              width="200"
              style="object-fit: cover; border-radius: 20px 20px 0px 0px"
              :src="travelData.homeData.photos[0].photo"
              alt="Card image cap"
            />
            <div class="card-body p-4 text-center">
              <h5 class="card-title mb-1">
                <h6 class="mt-2 text-center">
                  {{ travelData.travelData.dateData.goDate.split("-")[2] }}.{{
                    travelData.travelData.dateData.goDate.split("-")[1]
                  }}.{{ travelData.travelData.dateData.goDate.split("-")[0] }}
                  ile
                  {{ travelData.travelData.dateData.endDate.split("-")[2] }}.{{
                    travelData.travelData.dateData.endDate.split("-")[1]
                  }}.{{ travelData.travelData.dateData.endDate.split("-")[0] }}
                  arası
                </h6>
                {{ travelData.homeData.county }} <br />
              </h5>
              <p class="card-text">
                {{ travelData.homeData.peopleCounty }} misafir
                {{ Math.floor(travelData.homeData.bed) }} yatak odası
                {{ travelData.homeData.bed }} yatak
                {{ travelData.homeData.bathroom }} banyo
              </p>
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
import HostHeader from "@/components/host/hostHeader";
export default {
  middleware: ["session-control", "auth"],

  layout: "homes",
  components: {
    HostHeader,
  },
  data() {
    return {
      accept: true,
      CreateRezervPersonProfile: [],
      rezervationData: [],
      userProfileDatas: [],
      errorRemove: false,
      errorRemoveMessage: null,
      loadingButtonRemove: false,
      modalStatus: false,
      modalAccept: false,
    };
  },
  asyncData(context) {
    return axios
      .get(
        "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/" +
          context.params.rezervationId +
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
    },
    getCreateRezervPersonProfile() {
      axios
        .get(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/" +
            this.$route.params.rezervationId +
            ".json"
        )
        .then((response) => {
          this.rezervationData = response.data;
          axios
            .get(
              "https://munhasir-ad882-default-rtdb.firebaseio.com/userProfileDATA.json"
            )
            .then((res) => {
              let data = res.data;
              let newArray = [];
              for (let key in data) {
                newArray.push({ firebaseId: key, ...data[key] });
              }
              let userData = [];
              userData.push(
                newArray.find((s) => s.authId == this.travelData.authId)
              );
              if (userData[0] != undefined) {
                this.CreateRezervPersonProfile = userData[0];
              }
            });
        });
    },
    acceptRezervation() {
      axios
        .put(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/" +
            this.$route.params.rezervationId +
            ".json",
          {
            data: this.rezervationData.data,
            homeData: this.rezervationData.homeData,
            createRezevDate: this.rezervationData.createRezevDate,
            travelData: this.rezervationData.travelData,
            homeDataFirebaseId: this.rezervationData.homeDataFirebaseId,
            userProfileData: this.rezervationData.userProfileData,
            authId: this.rezervationData.authId,
            lastDay: this.rezervationData.lastDay,
            travelRemoveMode: {
              authId: this.$store.state.authKey, // Rezervasyonun oluşturan kişi
              reserveStatus: true,
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
          axios.post("https://www.bedfied.com/api/sendHostAccept", {
            hostEmail: this.userProfileDatas.email,
            hostName: this.userProfileDatas.fullName,
            hostHomePhoto: this.travelData.homeData.photos[0].photo,
            price: this.travelData.homeData.price * this.travelData.lastDay,
            totalDays: this.rezervationData.lastDay,
            oldBoy: this.travelData.travelData.guest.oldBoy,
            middleBoy: this.travelData.travelData.guest.middleBoy,
            smallBoy: this.travelData.travelData.guest.smallBoy,
            goDate: goDayDate + "." + goMonthDate + "." + goYearDate,
            endDate: endDayDate + "." + endMonthDate + "." + endYearDate,
            goMyRezervations: "https://www.bedfied.com/homeHost/myReservations",
            goMessages:
              "https://www.bedfied.com/homeHost/messages/" +
              this.$store.state.authKey,
            guestName: this.CreateRezervPersonProfile.fullName,
            guestProfilePhoto: this.CreateRezervPersonProfile.profileImage,
          });
          axios.post("https://www.bedfied.com/api/sendGuestAccept", {
            guestEmail: this.CreateRezervPersonProfile.email,
            guestName: this.CreateRezervPersonProfile.fullName,
            hostProfilePhoto: this.userProfileDatas.profileImage,
            hostHomePhoto: this.travelData.homeData.photos[0].photo,
            hostName: this.userProfileDatas.fullName,
            county: this.travelData.homeData.county,
            price:
              this.travelData.homeData.price * this.travelData.lastDay +
              this.travelData.homeData.price *
                this.travelData.lastDay *
                (8 / 100),
            totalDays: this.rezervationData.lastDay,
            houseType: this.travelData.homeData.houseType,
            houseStayType: this.travelData.homeData.houseStayType,
            adres: this.travelData.homeData.adres,
            oldBoy: this.travelData.travelData.guest.oldBoy,
            middleBoy: this.travelData.travelData.guest.middleBoy,
            smallBoy: this.travelData.travelData.guest.smallBoy,
            goDate: goDayDate + "." + goMonthDate + "." + goYearDate,
            endDate: endDayDate + "." + endMonthDate + "." + endYearDate,
            goMyRezervations: "https://www.bedfied.com/homeHost/myReservations",
            goMoney:"https://www.bedfied.com/homeHost/sendHostMoney/" + this.$route.params.rezervationId,
            goComments:"https://www.bedfied.com/homeHost/comments/" + this.travelData.homeDataFirebaseId
          });
          window.location.reload();
        });
    },
    acceptRezervationControl() {
      this.modalAccept = true;
      this.modalStatus = true;
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
            this.userProfileDatas = newArray;
          }
        });
    },
    removeTravel() {
      axios
        .put(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/" +
            this.$route.params.rezervationId +
            ".json",
          {
            homeData: this.rezervationData.homeData,
            travelData: this.rezervationData.travelData,
            homeDataFirebaseId: this.rezervationData.homeDataFirebaseId,
            createRezevDate: this.rezervationData.createRezevDate,
            userProfileData: this.rezervationData.userProfileData,
            authId: this.rezervationData.authId,
            lastDay: this.rezervationData.lastDay,
            travelRemoveMode: {
              authId: this.$store.state.authKey, // Rezervasyonun oluşturan kişi
              reserveStatus: false,
            },
          }
        )
        .then((res) => {
            let goDayDate = this.travelData.travelData.dateData.goDate.split(
              "-"
            )[2];
            let goMonthDate = this.travelData.travelData.dateData.goDate.split(
              "-"
            )[1];
            let goYearDate = this.travelData.travelData.dateData.goDate.split(
              "-"
            )[0];
            let endDayDate = this.travelData.travelData.dateData.endDate.split(
              "-"
            )[2];
            let endMonthDate = this.travelData.travelData.dateData.endDate.split(
              "-"
            )[1];
            let endYearDate = this.travelData.travelData.dateData.endDate.split(
              "-"
            )[0];
            axios.post("https://www.bedfied.com/api/sendHostRemove", {
              hostEmail: this.userProfileDatas.email,
              hostName: this.userProfileDatas.fullName,
              hostHomePhoto: this.travelData.homeData.photos[0].photo,
              price: this.travelData.homeData.price * this.travelData.lastDay,
              totalDays: this.rezervationData.lastDay,
              goDate: goDayDate + "." + goMonthDate + "." + goYearDate,
              endDate: endDayDate + "." + endMonthDate + "." + endYearDate,
              goMyRezervations: "https://www.bedfied.com/homeHost/myReservations",
              guestName: this.CreateRezervPersonProfile.fullName,
              guestProfilePhoto: this.CreateRezervPersonProfile.profileImage,
            });
            axios.post("https://www.bedfied.com/api/sendGuestRemove", {
              guestName: this.CreateRezervPersonProfile.fullName,
              guestEmail: this.CreateRezervPersonProfile.email,
              hostName: this.userProfileDatas.fullName,
              hostProfilePhoto: this.userProfileDatas.profileImage,
              hostHomePhoto: this.travelData.homeData.photos[0].photo,
              price:
                this.travelData.homeData.price * this.travelData.lastDay +
                (this.travelData.homeData.price * this.travelData.lastDay) * (8 / 100),
              totalDays: this.rezervationData.lastDay,
              goDate: goDayDate + "." + goMonthDate + "." + goYearDate,
              endDate: endDayDate + "." + endMonthDate + "." + endYearDate,
              goMyRezervations: "https://www.bedfied.com/homes",
            });
            this.$router.push("/homeHost/myReservations");
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
    modalCloseControl() {
      this.modalStatus = true;
      this.modalAccept = false;
    },
    modalStatusClose() {
      if (this.modalStatus) {
        this.modalStatus = false;
      }
    },
    updateIban() {
      this.$router.push("/profile/" + this.$store.state.authKey);
    },
  },
  created() {
    this.getCreateRezervPersonProfile();
    this.getUserDATA();
    console.log(this.travelData.homeDataFirebaseId);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");

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
  max-width: 354.4px;
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

@media screen and (max-width: 500px) {
  .modal-wrap {
    width: calc(70% - 40px);
    height: auto!important;
  }
  .modal-wrap p {
    font-size:15px!important
  }
  .modal-wrap small {
    font-size:10px!important
  }
   .modal-wrap button {
    font-size:10px!important
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
@media (max-width: 762px) {
  .card-padding-mobile {
    padding: 10px !important;
  }
  .card-width-mobile {
    width: 20rem !important;
    margin-left: 4px !important;
  }
  .h2-mobile {
    font-size: 25px !important ;
    font-weight: bold;
  }
}
</style>