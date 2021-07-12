<template>
  <ul class="menu-bar2 p-0">
    <div
      class="d-flex justify-content-center align-items-center w-100 h-100"
      v-if="!hostBar"
    >
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="!profile"
        style="cursor: pointer"
        @click.prevent="homePageControl"
      >
        <div
          :class="
            homePage
              ? 'fa fa-home menu-icon'
              : 'fa fa-home menu-icon text-muted'
          "
          :style="
            homePage ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'
          "
        ></div>
        <div :class="homePage ? 'menu-name font-weight-bold' : 'menu-name'">
          Ana sayfa
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-else
        style="cursor: pointer"
        @click.prevent="hostPageControl"
      >
        <div
          :class="
            profil
              ? 'fas fa-hotel menu-icon'
              : 'fas fa-hotel menu-icon text-muted'
          "
          :style="profil ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'"
        ></div>
        <div :class="profil ? 'menu-name font-weight-bold' : 'menu-name'">
          Ev sahibi 
           <div
            class="badge badge-danger rounded-circle"
            v-if="hostNotData.length != 0 && hostValueDelete"
          >
            {{ hostNotData.length }}            
          </div>
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="!profile"
        style="cursor: pointer"
        @click.prevent="searchBarControl"
      >
        <div
          :class="
            searchBar
              ? 'fa fa-search menu-icon'
              : 'fa fa-search menu-icon text-muted'
          "
          :style="
            searchBar ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'
          "
        ></div>
        <div :class="searchBar ? 'menu-name font-weight-bold' : 'menu-name'">
          Keşfet
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-else
        @click.prevent="profileControl"
        style="cursor: pointer"
      >
        <div
          :class="
            profil
              ? 'far fa-user menu-icon'
              : 'far fa-user menu-icon text-muted'
          "
          :style="profil ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'"
        ></div>
        <div :class="profil ? 'menu-name font-weight-bold' : 'menu-name'">
          Profil
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="$store.state.authKey == null"
        style="cursor: pointer"
        @click.prevent="hostPageControl"
      >
        <div
          :class="
            homeHostPage
              ? 'fas fa-hotel menu-icon'
              : 'fas fa-hotel menu-icon text-muted'
          "
          :style="
            homeHostPage ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'
          "
        ></div>
        <div :class="homeHostPage ? 'menu-name font-weight-bold' : 'menu-name'">
          Ev sahibi
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="$store.state.authKey == null"
        style="cursor: pointer"
        @click.prevent="$router.push('/auth')"
      >
        <div
          :class="
            authPage
              ? 'far fa-user menu-icon'
              : 'far fa-user menu-icon text-muted'
          "
          :style="
            authPage ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'
          "
        ></div>
        <div :class="authPage ? 'menu-name font-weight-bold' : 'menu-name'">
          Oturum aç
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="!profile && $store.state.authKey != null"
        @click.prevent="travelsControl"
        style="cursor: pointer"
      >
        <div
          :class="
            travels
              ? 'fas fa-suitcase-rolling menu-icon'
              : 'fas fa-suitcase-rolling menu-icon text-muted'
          "
          :style="
            travels ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'
          "
        ></div>
        <div :class="travels ? 'menu-name font-weight-bold' : 'menu-name'">
          Seyahatler
          <div
            class="badge badge-danger rounded-circle"
            v-if="guestNotData.length != 0"
          >
            {{ guestNotData.length }}
          </div>
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="profile && $store.state.authKey != null"
        @click.prevent="helpControl"
        style="cursor: pointer"
      >
        <div
          :class="
            profil
              ? 'far fa-question-circle menu-icon'
              : 'far fa-question-circle menu-icon text-muted'
          "
          :style="profil ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'"
        ></div>
        <div :class="profil ? 'menu-name font-weight-bold' : 'menu-name'">
          Yardım
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="!profile && $store.state.authKey"
        @click.prevent="messagesControl"
        style="cursor: pointer"
      >
        <div
          :class="
            messages
              ? 'far fa-comment-alt menu-icon'
              : 'far fa-comment-alt menu-icon text-muted'
          "
          :style="
            messages ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'
          "
        ></div>
        <div :class="messages ? 'menu-name font-weight-bold' : 'menu-name'">
          Mesajlar
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="profile && $store.state.authKey != null"
        @click.prevent="logoutControl"
        style="cursor: pointer"
      >
        <div
          :class="
            profil
              ? 'fas fa-sign-out-alt menu-icon'
              : 'fas fa-sign-out-alt menu-icon text-muted'
          "
          :style="profil ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'"
        ></div>
        <div :class="profil ? 'menu-name font-weight-bold' : 'menu-name'">
          Çıkış yap
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="$store.state.authKey != null"
        @click.prevent="anotherControl"
        style="cursor: pointer"
      >
        <img
          v-if="!profile"
          src="./İcons/menu (3).png"
          width="19"
          height="19"
          class="object-fit:cover"
          alt=""
        />
        <img
          v-else
          src="./İcons/cancel (2).png"
          width="19"
          height="19"
          class="object-fit:cover"
          alt=""
        />
        <div :class="profile ? 'menu-name font-weight-bold' : 'menu-name'">
          Diğer 
               <div
            class="badge badge-danger rounded-circle"
            v-if="hostNotData.length != 0 && hostValueDelete"
          >
            {{ hostNotData.length }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex justify-content-center align-items-center w-100 h-100"
      v-else
    >
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="!anotherHost"
        style="cursor: pointer"
        @click.prevent="homePageControl"
      >
        <div
          :class="
            homePage
              ? 'fa fa-home menu-icon'
              : 'fa fa-home menu-icon text-muted'
          "
          :style="
            homePage ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'
          "
        ></div>
        <div :class="homePage ? 'menu-name font-weight-bold' : 'menu-name'">
          Ana sayfa
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="anotherHost && $store.state.authKey != null"
        style="cursor: pointer"
        @click.prevent="haveHomeControl"
      >
        <img v-if="!haveHome" src="./İcons/address.png" width="19" height="19" alt="" />
        <img v-else src="./İcons/address (1).png" width="19" height="19" alt="" />
        <div :class="haveHome ? 'menu-name font-weight-bold' : 'menu-name'">
          Konutlarım
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="anotherHost && $store.state.authKey != null"
        @click.prevent="messagesHostControl"
        style="cursor: pointer"
      >
        <div
          :class="
            messagesHost
              ? 'far fa-comment-alt menu-icon'
              : 'far fa-comment-alt menu-icon text-muted'
          "
          :style="
            messagesHost ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'
          "
        ></div>
        <div :class="messagesHost ? 'menu-name font-weight-bold' : 'menu-name'">
          Mesajlar
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="!anotherHost"
        style="cursor: pointer"
        @click.prevent="hostPageControl"
      >
        <div
          :class="
            homeHostPage
              ? 'far fa-chart-bar menu-icon'
              : 'far fa-chart-bar menu-icon text-muted'
          "
          :style="
            homeHostPage ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'
          "
        ></div>
        <div :class="homeHostPage ? 'menu-name font-weight-bold' : 'menu-name'">
          Genel bakış
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="$store.state.authKey == null"
        style="cursor: pointer"
        @click.prevent="settingsControl"
      >
        <div
          :class="
            settings
              ? 'fas fa-cog menu-icon'
              : 'fas fa-cog menu-icon text-muted'
          "
          :style="
            settings ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'
          "
        ></div>
        <div :class="settings ? 'menu-name font-weight-bold' : 'menu-name'">
          Ayar
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="!anotherHost && $store.state.authKey != null"
        style="cursor: pointer"
        @click.prevent="newHomeControl"
      >
        <div
          :class="newHome ? 'fas fa-plus' : 'fas fa-plus text-muted'"
          :style="
            newHome ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'
          "
        ></div>
        <div :class="newHome ? 'menu-name font-weight-bold' : 'menu-name'">
          Ekle
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="$store.state.authKey == null"
        style="cursor: pointer"
        @click.prevent="financeControl"
      >
        <div
          :class="
            finance
              ? 'far fa-credit-card menu-icon'
              : 'far fa-credit-card menu-icon text-muted'
          "
          :style="
            finance ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'
          "
        ></div>
        <div :class="finance ? 'menu-name font-weight-bold' : 'menu-name'">
          Finans
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="!anotherHost && $store.state.authKey != null"
        style="cursor: pointer"
        @click.prevent="rezervationControl"
      >
        <img src="./İcons/calendar (1).png" height="19" width="19" v-if="!rezervation" alt="" />
        <img src="./İcons/calendar (2).png" height="19" width="19" v-else alt="" />
        <div :class="rezervation ? 'menu-name font-weight-bold' : 'menu-name'">
          İstekler
           <div
            class="badge badge-danger rounded-circle"
            v-if="hostNotData.length != 0 && hostValueDelete"
          >
            {{ hostNotData.length }}
          </div>
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="$store.state.authKey == null"
        style="cursor: pointer"
        @click.prevent="$router.push('/auth')"
      >
        <div
          :class="
            authPage
              ? 'far fa-user menu-icon'
              : 'far fa-user menu-icon text-muted'
          "
          :style="
            authPage ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'
          "
        ></div>
        <div :class="authPage ? 'menu-name font-weight-bold' : 'menu-name'">
          Oturum aç
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="anotherHost && $store.state.authKey != null"
        @click.prevent="profileControl"
        style="cursor: pointer"
      >
        <div
          :class="
            profil
              ? 'far fa-user menu-icon'
              : 'far fa-user menu-icon text-muted'
          "
          :style="profil ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'"
        ></div>
        <div :class="profil ? 'menu-name font-weight-bold' : 'menu-name'">
          Profil
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="anotherHost"
        @click.prevent="helpControl"
        style="cursor: pointer"
      >
        <div
          :class="
            profil
              ? 'far fa-question-circle menu-icon'
              : 'far fa-question-circle menu-icon text-muted'
          "
          :style="profil ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'"
        ></div>
        <div :class="profil ? 'menu-name font-weight-bold' : 'menu-name'">
          Yardım
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="anotherHost && $store.state.authKey != null"
        @click.prevent="logoutControl"
        style="cursor: pointer"
      >
        <div
          :class="
            profil
              ? 'fas fa-sign-out-alt menu-icon'
              : 'fas fa-sign-out-alt menu-icon text-muted'
          "
          :style="profil ? 'color:#f93b3b; font-size: 19px' : 'font-size: 19px'"
        ></div>
        <div :class="profil ? 'menu-name font-weight-bold' : 'menu-name'">
          Çıkış yap
        </div>
      </div>
      <div
        class="
          menu-item
          d-flex
          justify-content-center
          align-items-center
          flex-direction-column
        "
        v-if="$store.state.authKey != null"
        @click.prevent="anotherHostControl"
        style="cursor: pointer"
      >
        <img
          v-if="!anotherHost"
          src="./İcons/menu (3).png"
          width="19"
          height="19"
          class="object-fit:cover"
          alt=""
        />
        <img
          v-else
          src="./İcons/cancel (2).png"
          width="19"
          height="19"
          class="object-fit:cover"
          alt=""
        />
        <div :class="anotherHost ? 'menu-name font-weight-bold' : 'menu-name'">
          Diğer
        </div>
      </div>
    </div>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      homePage: false,
      profile: false,
      messages: false,
      travels: false,
      searchBar: false,
      authPage: false,
      homeHostPage: false,
      hostBar: false,
      settings: false,
      finance: false,
      rezervation: false,
      newHome: false,
      anotherHost: false,
      haveHome: false,
      messagesHost: false,
      guestNotData: [],
      guestValueData: [],
      hostNotData: [],
      hostValueData: [],
      hostValueDelete:true,
      hostHomeValueDelete:true,
    };
  },
  methods: {
    homePageControl() {
      this.$router.push("/");
      this.homePage = true;
      (this.profile = false),
        (this.messages = false),
        (this.travels = false),
        (this.searchBar = false);
    },
    hostPageControl() {
      this.$router.push("/homeHost");
      this.homeHostPage = true;
      this.hostHomeValueDelete = false
    },
    settingsControl() {
      this.$router.push("/homeHost/settings");
      this.settings = true;
    },
    financeControl() {
      this.$router.push("/homeHost/finance");
    },
    newHomeControl() {
      this.$router.push("/homeHost/newHome");
    },
    haveHomeControl() {
      this.$router.push("/homeHost/" + this.$store.state.authKey);
    },
    rezervationControl() {
      this.$router.push("/homeHost/myReservations");
      this.hostValueDelete = true;
      this.hostNotData = [];
    },
    anotherHostControl() {
      this.anotherHost = !this.anotherHost;
      this.hostValueDelete = false;
    },
    searchBarControl() {
      this.$router.push("/homes");
      this.homePage = false;
      (this.profile = false),
        (this.messages = false),
        (this.travels = false),
        (this.searchBar = true);
    },
    profileControl() {
      this.$router.push("/profile/" + this.$store.state.authKey);
    },
    anotherControl() {
      this.homePage = false;
      (this.profile = !this.profile),
        (this.messages = false),
        (this.travels = false),
        (this.searchBar = false);
    },
    messagesControl() {
      this.$router.push("/travelMode/messages/" + this.$store.state.authKey);
      this.homePage = false;
      (this.profile = false),
        (this.messages = true),
        (this.travels = false),
        (this.searchBar = false);
    },
    travelsControl() {
      this.$router.push("/travelMode");
      this.homePage = false;
      (this.profile = false),
        (this.messages = false),
        (this.travels = true),
        (this.searchBar = false);
        this.guestNotData = [];
    },
    helpControl() {
      this.$router.push("/homeHost/help");
    },
    logoutControl() {
      this.$store.dispatch("logout").then((res) => {
        window.location.reload();
      });
    },
    messagesHostControl() {
      this.$router.push("/homeHost/messages/" + this.$store.state.authKey);
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
    if (this.$route.name == "index") {
      this.homePage = true;
      this.profile = false;
      this.messages = false;
      this.travels = false;
      this.searchBar = false;
      this.authPage = false;
      this.homeHostPage = false;
    }
    if (this.$route.name == "homes") {
      this.homePage = false;
      this.profile = false;
      this.messages = false;
      this.travels = false;
      this.searchBar = true;
      this.authPage = false;
      this.homeHostPage = false;
    }
    if (this.$route.name == "homes-homesId") {
      this.homePage = false;
      this.profile = false;
      this.messages = false;
      this.travels = false;
      this.searchBar = true;
      this.authPage = false;
      this.homeHostPage = false;
    }
    if (this.$route.name == "travelMode-messages-messageId") {
      this.homePage = false;
      this.profile = false;
      this.messages = true;
      this.travels = false;
      this.searchBar = false;
    }
    if (this.$route.name == "travelMode") {
      this.homePage = false;
      this.profile = false;
      this.messages = false;
      this.travels = true;
      this.searchBar = false;
    }
     if (this.$route.name == "travelMode-deleteTravel-deleteId") {
      this.homePage = false;
      this.profile = false;
      this.messages = false;
      this.travels = true;
      this.searchBar = false;
    }
    if (this.$route.name == "travelMode-travelsId") {
      this.homePage = false;
      this.profile = false;
      this.messages = false;
      this.travels = true;
      this.searchBar = false;
    }
    if (this.$route.name == "homeHost") {
      this.hostBar = true;
      this.homeHostPage = true;
    }
    if (this.$route.name == "homeHost-settings") {
      this.hostBar = true;
      this.settings = true;
    }
    if (this.$route.name == "homeHost-finance") {
      this.hostBar = true;
      this.finance = true;
    }
    if (this.$route.name == "homeHost-myReservations") {
      this.hostBar = true;
      this.rezervation = true;
    }
    if (this.$route.name == "homeHost-myReservations-rezervationId") {
      this.hostBar = true;
      this.rezervation = true;
    }
    if (this.$route.name == "homeHost-myReservations-deleteTravel-deleteId") {
      this.hostBar = true;
      this.rezervation = true;
    }
    if (this.$route.name == "homeHost-haveHome") {
      this.hostBar = true;
      this.anotherHost = true;
      this.haveHome = true;
    }
    if (this.$route.name == "homeHost-ubdateHome-ubdateId") {
      this.hostBar = true;
      this.anotherHost = true;
      this.haveHome = true;
    }
    if (this.$route.name == "homeHost-messages-messageId") {
      this.hostBar = true;
      this.anotherHost = true;
      this.messagesHost = true;
    }

    if (this.$route.name == "homeHost-newHome") {
      this.hostBar = true;
      this.newHome = true;
    }
    if (this.$route.name == "auth") {
      this.homePage = false;
      this.profile = false;
      this.messages = false;
      this.travels = false;
      this.searchBar = false;
      this.authPage = true;
      this.homeHostPage = false;
    }
    this.getNotData();
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");

@media (max-width:762px) {
  
  .menu-bar2 {
    display: inherit!important;
    bottom: -2.7%;
      width: 100% !important;
  height: 60px;
  position: fixed !important;
  background: #fff;
  z-index: 5000 !important;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Titillium Web", sans-serif !important;
  }
  .menu-item {
  height: 100%;
  width: 20%;
  flex-direction: column;
}
.menu-name {
  font-size: 10px;
  margin-top: 5%;
}
}
</style>