<template>
  <div>
    <nav>
      <ul class="menu-bar">
        <li class="font lis ml-3 button-click" style="">
          <nuxt-link tag="div" to="/">
            <img src="./placeholder (3).png" alt="" />
          </nuxt-link>
        </li>
        <nuxt-link
          to="/homeHost"
          tag="div"
          v-if="!this.$store.getters.isAuthenticated"
        >
          <li class="font lis button-click">Genel bakış</li>
        </nuxt-link>
        <nuxt-link
          tag="div"
          to="/homeHost/settings"
          v-if="!this.$store.getters.isAuthenticated"
        >
          <li class="font mx-2 lis button-click">Ayar</li>
        </nuxt-link>
        <nuxt-link
          tag="div"
          to="/homeHost/finance"
          v-if="!this.$store.getters.isAuthenticated"
        >
          <li class="font mx-2 lis button-click">Finans</li>
        </nuxt-link>
        <nuxt-link
          tag="div"
          to="/homeHost"
          class="d-block ml-auto"
          v-if="!this.$store.getters.isAuthenticated"
        >
          <li class="font mx-3 lis button-click">
            Aylık potansiyel <span style="color: #f93b3b">6.804₺</span>
          </li>
        </nuxt-link>
        <div
          @click.prevent="homePageStatusBorder"
          v-if="this.$store.getters.isAuthenticated"
        >
          <li
            class="font mx-2 lis button-click"
            :class="homePageStatus ? 'text-danger' : ''"
          >
            Genel bakış
          </li>
        </div>
        <div
          @click.prevent="rezervPageStatusBorder"
          v-if="this.$store.getters.isAuthenticated"
        >
          <li
            class="font mx-2 lis button-click"
            :class="rezervPageStatus ? 'text-danger' : ''"
          >
            Rezervasyonlar
          </li>
        </div>

        <div
          v-if="this.$store.getters.isAuthenticated"
          @click.prevent="$router.push('/homeHost/' + $store.state.authKey)"
        >
          <li
            class="font mx-2 lis button-click"
            :class="homesPageStatus ? 'text-danger' : ''"
          >
            Konutlar
          </li>
        </div>

        <div
          @click.prevent="messagePageStatusBorder"
          v-if="this.$store.getters.isAuthenticated"
        >
          <li
            class="font mx-2 lis button-click"
            :class="messagePageStatus ? 'text-danger' : ''"
          >
            Mesajlar
          </li>
        </div>

        <div
          class="d-block ml-auto button-click"
          @click.prevent="newHomePageStatusBorder"
          v-if="this.$store.getters.isAuthenticated"
        >
          <li
            class="font mx-3 lis newHome"
            :class="newHomePageStatus ? 'text-white' : ''"
          >
            Yeni konut ekle
          </li>
        
        </div>
           <div
          class="notification-container-slash shadow-lg"
          @click.prevent="slash = !slash"
          v-if="slash && $store.state.authKey != null"
        >
          <i class="far fa-bell-slash icon-bell"></i>
        </div>
        <div
          class="notification-container shadow-lg"
          @click.prevent="slashControl"
          v-else-if="!slash && $store.state.authKey != null"
        >
          <div
            class="message-length"
            v-if="guestValueData.length + hostValueData.length > 0"
          >
            <div class="message-number">
              {{ guestValueData.length + hostValueData.length }}
            </div>
          </div>
          <i class="far fa-bell icon-bell"></i>
        </div>
        <div
          class="card p-4 shadow-lg notification-container-message scroller"
          v-if="slash"
          v-click-outside="cardNotificationClose"
        >
          <div
            class="row p-3"
            v-if="guestNotData.length + hostNotData.length == 0"
          >
            <h6 class="text-muted mx-auto">Bildirim bulunmamaktadır.</h6>
          </div>
          <div
            class="row p-2 message-hover"
            @click.prevent="$router.push('/homeHost/myReservations')"
            v-for="(data, index) in hostNotData"
            :key="index"
          >
            <div class="col-2" v-if="data.guestProfilePhoto">
              <img
                :src="data.guestProfilePhoto"
                style="object-fit: cover"
                width="50"
                height="50"
                class="rounded-circle mt-1"
                alt=""
              />
            </div>
            <div class="col-2 pt-2" v-else>
              <img
                src="./user.png"
                style="object-fit: cover"
                width="50"
                height="50"
                class="rounded-circle mt-1"
                alt=""
              />
            </div>
            <div class="col-10 pt-2">
              <p class="pl-2">
                {{ data.guestName }} eviniz için rezervasyon oluşturdu.
                <span class="text-muted"
                  >({{ data.day }} {{ data.month }}
                  {{ data.weekDay }} günü)</span
                ><img class="ml-1" src="./guest-post.png" alt="" />
              </p>
            </div>
          </div>
          <div
            class="row p-2 message-hover"
            @click.prevent="$router.push('/travelMode')"
            v-for="(data, index) in guestNotData"
            :key="index"
          >
            <div class="col-2 pt-2">
              <img
                :src="data.hostHomePhoto"
                width="60"
                height="45"
                class="rounded pr-2"
                style="object-fit: cover"
                alt=""
              />
            </div>
            <div class="col-10 pt-2">
              <p class="pl-2">
                {{ data.county }} bölgesine gidiyorsunuz. <br /><small
                  class="text-muted"
                  >({{ data.day }} {{ data.month }} {{ data.weekDay }} günü
                  oluşturuldu.)</small
                >
                <img class="ml-1" src="./suitcases.png" alt="" />
              </p>
            </div>
          </div>
        </div>
        <li
          class="border border-dark button-click p-1 mt-1 hover-li"
          style="border-radius: 60px; list-style-type: none; cursor: pointer"
          @click.prevent="showCard = !showCard"
        >
          <i class="fas fa-bars bar-size ml-1 p-2"></i
          ><img
            width="35"
            style="object-fit: cover; user-select: none"
            class="rounded-circle img-navbar mb-1 mt-1 mr-2"
            height="35"
            v-if="userProfilesData.profileImage"
            :src="
              userProfilesData.profileImage == null
                ? './user.png'
                : userProfilesData.profileImage
            "
            alt=""
          />
          <img
            width="35"
            style="object-fit: cover; user-select: none"
            class="rounded-circle img-navbar mb-1 mt-1 mr-2"
            height="35"
            v-else
            src="./user.png"
            alt=""
          />
        </li>

        <div
          v-if="showCard"
          class="card shadow-lg p-2"
          v-click-outside="showCardOut"
          style="
            z-index: 5;
            position: absolute;
            top: 100px;
            right: 10px;
            height: auto;
            width: 200px;
            border-radius: 10px;
          "
        >
          <h6
            class="
              font-weight-bold
              size-navbars
              font
              p-1
              button-click
              hover-detail
            "
            @click.prevent="$router.push('/auth')"
            style="cursor: pointer"
            v-if="!this.$store.getters.isAuthenticated"
          >
            Oturum açın
          </h6>
          <h6
            class="font size-navbars p-1 button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/profile/' + $store.state.authKey)"
            v-if="this.$store.getters.isAuthenticated"
          >
            Profil
          </h6>
          <h6
            class="p-1 size-navbars button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/auth')"
            v-if="!this.$store.getters.isAuthenticated"
          >
            Kaydolun
          </h6>
          <hr v-if="!this.$store.getters.isAuthenticated" />
          <h6
            class="p-1 size-navbars button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/homes')"
            v-if="!this.$store.getters.isAuthenticated"
          >
            Seyahate çıkın
          </h6>
          <h6
            class="p-1 size-navbars button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/TravelMode')"
            v-if="this.$store.getters.isAuthenticated"
          >
            Seyahat modu
          </h6>

          <h6
            class="p-1 size-navbars button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/homeHost')"
            v-if="!this.$store.getters.isAuthenticated"
          >
            Evinizde ev sahipliği yapın
          </h6>
          <hr v-if="this.$store.getters.isAuthenticated" />
          <h6
            class="p-1 size-navbars button-click hover-detail"
            @click.prevent="$router.push('/homeHost/help')"
            style="cursor: pointer"
          >
            Yardım
          </h6>
          <h6
            class="p-1 size-navbars button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="logout"
            v-if="this.$store.getters.isAuthenticated"
          >
            Oturumu kapatın
          </h6>
        </div>
      </ul>
      <MobileNavbar/>
      <!-- <ul class="menu-bar2">
        <div class="row w-100">
          <div class="col-3" style="cursor: pointer">
            <nuxt-link
              to="/homeHost"
              tag="div"
              v-if="!this.$store.getters.isAuthenticated"
            >
              <i
                class="fa fa-home d-flex justify-content-center mt-1"
                style="font-size: 30px"
              ></i>
              <div
                class="text-center mt-1 font-weight-bold button-click"
                style="color: black !important; font-size: 14px !important"
              >
                Genel
              </div>
            </nuxt-link>
            <nuxt-link
              to="/homeHost"
              tag="div"
              v-if="this.$store.getters.isAuthenticated"
            >
              <i
                class="
                  fa fa-home
                  d-flex
                  button-click
                  justify-content-center
                  pr-2
                  mt-2
                "
                style="font-size: 25px"
              ></i>
              <div
                class="text-center mt-1 mr-2 font-weight-bold"
                style="color: black !important; font-size: 14px !important"
              >
                Genel
              </div>
            </nuxt-link>
          </div>
          <div class="col-3" style="cursor: pointer">
            <nuxt-link
              to="/homeHost/settings"
              tag="div"
              v-if="!this.$store.getters.isAuthenticated"
            >
              <i
                class="fas fa-cog d-flex justify-content-center mt-1"
                style="font-size: 30px"
              ></i>
              <div
                class="text-center button-click mt-1 font-weight-bold"
                style="color: black !important; font-size: 14px !important"
              >
                Ayar
              </div>
            </nuxt-link>
            <div
              @click.prevent="$router.push('/homeHost/' + $store.state.authKey)"
              v-if="this.$store.getters.isAuthenticated"
            >
              <i
                class="fas fa-hotel d-flex justify-content-center mt-2"
                style="font-size: 25px"
              ></i>
              <div
                class="text-center mt-1 button-click font-weight-bold"
                style="color: black !important; font-size: 14px !important"
              >
                Konutlar
              </div>
            </div>
          </div>
          <div class="col-2" style="cursor: pointer">
            <nuxt-link
              to="/homeHost/finance"
              tag="div"
              v-if="!this.$store.getters.isAuthenticated"
            >
              <i
                class="far fa-credit-card d-flex justify-content-center mt-1"
                style="font-size: 30px"
              ></i>
              <div
                class="text-center mt-1 button-click font-weight-bold"
                style="color: black !important; font-size: 14px !important"
              >
                Finans
              </div>
            </nuxt-link>
            <nuxt-link
              to="/homeHost/newHome"
              tag="div"
              v-if="this.$store.getters.isAuthenticated"
            >
              <i
                class="
                  fas
                  fa-plus
                  text-danger
                  d-flex
                  justify-content-center
                  mt-2
                "
                style="font-size: 25px"
              ></i>
              <div
                class="text-center mt-1 button-click font-weight-bold"
                style="color: black !important; font-size: 14px !important"
              >
                Ekle
              </div>
            </nuxt-link>
          </div>
          <div class="col-4" style="cursor: pointer">
            <div
              class="text-center mt-2 font-weight-bold"
              style="color: black !important; font-size: 14px !important"
            >
              <li
                class="border border-dark button-click p-1 hover-li"
                style="
                  border-radius: 60px;
                  list-style-type: none;
                  cursor: pointer;
                "
                @click.prevent="showCardMobile = !showCardMobile"
              >
                <i class="fas fa-bars"></i
                ><img
                  width="40"
                  style="object-fit: cover; user-select: none"
                  class="rounded-circle ml-2"
                  height="40"
                  v-if="userProfilesData.profileImage"
                  :src="
                    userProfilesData.profileImage == null
                      ? './user.png'
                      : userProfilesData.profileImage
                  "
                  alt=""
                />
                <img
                  width="40"
                  style="object-fit: cover; user-select: none"
                  class="rounded-circle ml-2"
                  height="40"
                  v-else
                  src="./user.png"
                  alt=""
                />
                 <div class="mobile-not-number" v-if="guestValueData.length + hostValueData.length > 0"> {{ guestValueData.length + hostValueData.length }}</div>
              </li>
            </div>
            <div
              v-if="showCardMobile"
              class="card shadow-lg p-2"
              v-click-outside="showCardOutMobile"
              style="
                z-index: 5;
                position: absolute;
                margin-top: -340px;
                margin-left: -90px;
                height: auto;
                width: 200px;
                border-radius: 10px;
              "
            >
              <h6
                class="font-weight-bold button-click font p-1 hover-detail"
                @click.prevent="$router.push('/auth')"
                style="cursor: pointer"
                v-if="!this.$store.getters.isAuthenticated"
              >
                Oturum açın
              </h6>
              <h6
                class="font p-1 button-click hover-detail"
                style="cursor: pointer"
                @click.prevent="
                  $router.push('/profile/' + $store.state.authKey)
                "
                v-if="this.$store.getters.isAuthenticated"
              >
                Profil
              </h6>
              <h6
                class="font pt-1 pb-1 pl-1 button-click hover-detail"
                @click.prevent="
                  $router.push('/homeHost/messages/' + $store.state.authKey)
                "
                style="cursor: pointer"
                v-if="this.$store.getters.isAuthenticated"
              >
                Mesajlar
              </h6>
              <h6
                class="font pt-1 pb-1 pl-1 button-click hover-detail"
                @click.prevent="$router.push('/homeHost/myReservations')"
                style="cursor: pointer"
                v-if="this.$store.getters.isAuthenticated"
              >
                İstekler <span class="badge badge-danger" v-if="hostValueData.length != 0"> {{ hostValueData.length }}</span>
              </h6>
              <h6
                class="p-1 button-click hover-detail"
                style="cursor: pointer"
                @click.prevent="$router.push('/auth')"
                v-if="!this.$store.getters.isAuthenticated"
              >
                Kaydolun
              </h6>
              <hr v-if="!this.$store.getters.isAuthenticated" />
              <h6
                class="p-1 button-click hover-detail"
                style="cursor: pointer"
                @click.prevent="$router.push('/homes')"
                v-if="!this.$store.getters.isAuthenticated"
              >
                Seyahate çıkın
              </h6>
              <h6
                class="p-1 button-click hover-detail"
                style="cursor: pointer"
                @click.prevent="$router.push('/TravelMode')"
                v-if="this.$store.getters.isAuthenticated"
              >
                Seyahat modu <span class="badge badge-danger" v-if="guestValueData.length != 0"> {{ guestValueData.length }}</span>
              </h6>

              <h6
                class="p-1 button-click hover-detail"
                style="cursor: pointer"
                @click.prevent="$router.push('/homeHost')"
                v-if="!this.$store.getters.isAuthenticated"
              >
                Evinizde ev sahipliği yapın
              </h6>
              <hr v-if="this.$store.getters.isAuthenticated" />
              <h6
                class="p-1 button-click hover-detail"
                @click.prevent="$router.push('/homeHost/help')"
                style="cursor: pointer"
              >
                Yardım
              </h6>
              <h6
                class="p-1 button-click hover-detail"
                style="cursor: pointer"
                @click.prevent="logout"
                v-if="this.$store.getters.isAuthenticated"
              >
                Oturumu kapatın
              </h6>
            </div>
          </div>
        </div>
      </ul> -->
    </nav>
  </div>
</template>
<script>
import MobileNavbar from '@/components/common/mobileNavbar';
import axios from "axios";
export default {
  components: {
    MobileNavbar
  },
  data() {
    return {
      showCard: false,
      showCardMobile: false,

      homePageStatus: true,
      rezervPageStatus: false,
      homesPageStatus: false,
      messagePageStatus: false,
      newHomePageStatus: false,
      slash: false,
      guestNotData: [],
      guestValueData: [],
      hostNotData: [],
      hostValueData: [],
      messageData: 0,
      ref: null,
    };
  },
  props: {
    userProfilesData: {
      required: true,
    },
  },
  methods: {
    logout() {
      this.showCard = false;
      this.showCardMobile = false;
      this.$store.dispatch("logout").then((res) => {
        this.$router.push("/homeHost");
      });
    },
    homePageStatusBorder() {
      this.$router.push("/homeHost");
    },
    rezervPageStatusBorder() {
      this.$router.push("/homeHost/myReservations");
    },
    homesPageStatusBorder() {
      this.$router.push("/homeHost/" + this.$store.state.authKey);
    },
    messagePageStatusBorder() {
      this.$router.push("/homeHost/messages/" + this.$store.state.authKey);
    },
    newHomePageStatusBorder() {
      this.$router.push("/homeHost/newHome");
    },
    showCardOut() {
      this.showCard = false;
    },
    showCardOutMobile() {
      this.showCardMobile = false;
    },
     cardNotificationClose() {
      this.slash = false;
    },
 slashControl() {
      this.slash = true;
      this.guestValueData = [];
      this.hostValueData = [];
    },
    getNotData() {
      // Rezervasyon oluşturulunca giden bildirim misafire
      if (this.$store.state.authKey != null) {
        this.ref = this.$fire.firestore.collection("notification");
        this.ref
          .doc(this.$store.state.authKey)
          .collection("homes")
          .orderBy("orderDate")
          .onSnapshot((querySnapshot) => {
            let exampleData = [];
            let allNotData = [];
            querySnapshot.forEach((doc) => {
              allNotData.push(doc.data());
            });
            exampleData = allNotData.filter(
              (s) => s.guestId == this.$store.state.authKey
            );
            let tarih = new Date();
            let time = tarih.getTime();
            for (let example of exampleData) {
              if (time < example.orderDate + 604800000) {
                this.guestNotData = exampleData;
                this.guestNotData.reverse();
                this.$fire.firestore
                  .collection("notificationValue")
                  .doc(this.$store.state.authKey)
                  .collection("hostId")
                  .onSnapshot((querySnapshot) => {
                    let exampleData2 = [];
                    let allNotData = [];
                    querySnapshot.forEach((doc) => {
                      allNotData.push(doc.data());
                    });
                    if (allNotData.length != 0) {
                      exampleData2 = allNotData.filter(
                        (s) => s.guestId == this.$store.state.authKey
                      );
                      this.guestValueData = exampleData2;
                    }
                  });
              }
            }
          });
        axios
          .get(
            "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData.json"
          )
          .then((res) => {
            let data = res.data;
            let travelAllData = [];
            let newTravelData = [];
            let authData = [];
            let allNotData2 = [];

            for (let key in data) {
              travelAllData.push({ firebaseId: key, ...data[key] });
            }

            newTravelData = travelAllData.filter(
              (s) => s.userProfileData.authId == this.$store.state.authKey
            );

            newTravelData.forEach((auth) => {
              authData.push(auth.authId);
            });
            let allNotData = [];
            let exampleData2 = [];
            for (let auth of authData) {
              this.ref
                .doc(auth)
                .collection("homes")
                .onSnapshot((querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                    allNotData2.push(doc.data());
                  });

                  exampleData2 = allNotData2.filter(
                    (s) => s.hostId == this.$store.state.authKey
                  );
                  this.hostNotData = exampleData2;
                  this.hostNotData.reverse();
                });
              this.$fire.firestore
                .collection("notificationValue")
                .doc(auth)
                .collection("hostId")
                .doc(this.$store.state.authKey)
                .collection("hostData")
                .onSnapshot((querySnapshot) => {
                  let exampleData = [];
                  querySnapshot.forEach((doc) => {
                    allNotData.push(doc.data());
                  });
                  this.hostValueData = allNotData;
                });
            }
          });
      }
      // Rezervasyon oluşturulunca giden bildirim misafire bitiş
    },
  },
  created() {
    if (this.$route.name == "homeHost") {
      (this.homePageStatus = true),
        (this.rezervPageStatus = false),
        (this.homesPageStatus = false),
        (this.messagePageStatus = false),
        (this.newHomePageStatus = false);
    }
    if (this.$route.name == "homeHost-myReservations") {
      (this.homePageStatus = false),
        (this.rezervPageStatus = true),
        (this.homesPageStatus = false),
        (this.messagePageStatus = false),
        (this.newHomePageStatus = false);
    }
    if (this.$route.name == "homeHost-haveHome") {
      (this.homePageStatus = false),
        (this.rezervPageStatus = false),
        (this.homesPageStatus = true),
        (this.messagePageStatus = false),
        (this.newHomePageStatus = false);
    }
    if (this.$route.name == "homeHost-messages-messageId") {
      (this.homePageStatus = false),
        (this.rezervPageStatus = false),
        (this.homesPageStatus = false),
        (this.messagePageStatus = true),
        (this.newHomePageStatus = false);
    }
    if (this.$route.name == "homeHost-newHome") {
      (this.homePageStatus = false),
        (this.rezervPageStatus = false),
        (this.homesPageStatus = false),
        (this.messagePageStatus = false),
        (this.newHomePageStatus = true);
    }
    this.getNotData();
  },
};
</script>

<style  scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Truculenta:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
.mobile-not-number {
  color: white;
  position: absolute;
  top: 0px;
  right: 20%;
  border-radius: 40%;
  padding: 0px 7px;
  background: #f93b3b;
  font-size: 14px;
}
.message-hover {
  cursor: pointer;
  border-radius: 10px;
}
.message-hover:hover {
  background: rgb(236, 236, 236);
}

.message-length {
  position: absolute;
  z-index: 50;
  background: #f93b3b;
  color: #fff;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  text-align: center;
  margin-left: 25px;
  margin-top: 8px;
  user-select: none;
}
.message-number {
  font-size: 12px;
}

.scroller {
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}

.notification-container-message {
  border-radius: 20px;
  position: absolute;
  right: 7%;
  top: 90%;
  width: 400px;
  height: auto;
  max-height: 400px;
}

.notification-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  margin: 0px 10px 0px 0px;
  color: #121317;
  cursor: pointer;
}
.notification-container-slash {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: linear-gradient(to right, #323b42, #121317);
  margin: 0px 10px 0px 0px;
  color: #fff;
  cursor: pointer;
}
.notification-container:hover {
  background-image: linear-gradient(to right, #323b42, #121317);
  color: #fff;
}
.icon-bell {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-size: 20px;
}

.button-click {
  transition: transform 80ms ease-in;
}
@media (min-width: 1450px) {
  .size-navbars {
    font-size: 18px !important;
  }
  .lis {
    font-size: 20px !important;
  }
  .img-navbar {
    width: 40px !important;
    height: 40px !important;
  }
  .bar-size {
    font-size: 20px !important;
  }
}
.button-click:active {
  transform: scale(0.95);
}
.hover-detail:hover {
  color: #f93b3b;
}
.font {
  font-family: "Titillium Web", sans-serif !important;
}
nav {
  height: 16vh;
  margin: 0;
  display: flex;
  justify-content: center;
  font-family: "Titillium Web", sans-serif !important;
}
.hover-li:hover {
  background: linear-gradient(to right, #323b42, #121317);
  color: #ffff !important;
}
.ft {
  font-size: 20px !important;
}
.menu-bar {
  border-radius: 25px;
  height: fit-content;
  position: fixed;
  z-index: 8;
  width: 100%;
  display: inline-flex;
  background-color: white;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  align-items: center;
  padding: 0 10px;
}
.menu-logo2 {
  display: none;
}
.menu-bar2 {
  width: 100% !important;
  height: 60px;
  position: fixed;
  bottom: -15px;
  background: #fff;
  z-index: 50;
  list-style: none;
}
.lis {
  list-style: none;
  color: black;
  font-family: sans-serif;
  font-weight: bold;
  padding: 11px 15px;
  margin: 8px 8px;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  white-space: nowrap;
}
.lis:hover {
  color: #f93b3b;
}
.newHome {
  background-image: linear-gradient(to right, #f93b3b, #fa1a1a);
  color: white;
  border-radius: 40px;
  font-size: 16px;
  transition: 1s all;
}
.newHome:hover {
  color: white !important;
  transform: scale(1.04);
}
.menu-bar2 {
  display: none;
}
@media (max-width: 768px) {
  nav {
    height: 5vh !important;
  }
  .mrg-button {
    font-size: 15px !important;
  }
  .menu-bar {
    display: none;
  }
  .mrg-sm-special {
    margin-top: 0px !important;
  }
  .mrg-special {
    margin-top: 30px !important;
  }
  .mrg-sm {
    font-size: 35px !important;
  }
  .margin-top {
    margin-top: 33px !important;
  }
  .menu-bar2 {
    display: flex;
  }
  .menu-logo2 {
    display: inherit;
  }
  .mrg-left {
    margin-left: 0px !important ;
    width: 115% !important;
  }
}
@media (max-width: 562px) {
  nav {
    height: 75vh;
  }
  .mrg-button {
    font-size: 15px !important;
  }
  .menu-bar {
    display: none;
  }
  .mrg-sm-special {
    margin-top: 0px !important;
  }
  .mrg-special {
    margin-top: 30px !important;
  }
  .mrg-sm {
    font-size: 35px !important;
  }
  .margin-top {
    margin-top: 33px !important;
  }
  .menu-bar2 {
    display: flex;
  }
  .menu-logo2 {
    display: inherit;
  }
  .mrg-left {
    margin-left: 0px !important ;
    width: 115% !important;
  }
}
</style>