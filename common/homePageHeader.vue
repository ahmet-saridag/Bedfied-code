<template>
  <div>
    <nav>
      <ul
        class="menu-bar"
        :class="!scrolStyle ? 'menu-bar' : 'menu-bar bg-white'"
        @scroll="handleScroll"
      >
        <li
          class="font font-weight-bold-css mt-3 ml-3 d-block mr-auto"
          style="cursor: pointer"
        >
          <nuxt-link
            tag="div"
            to="/"
            class="col-button-click margin-bedfied pb-2"
            style="font-size: 30px"
          >
            <img src="./İcons/placeholder (3).png" alt="" />
            <span class="text-dark">Bedfied</span>
          </nuxt-link>
        </li>
        <div
          class="card p-2 shadow-lg card-header-search"
          @click.prevent="cardSearchActive"
          style="cursor: pointer"
          v-if="scrolStyle"
        >
          <div class="row">
            <div class="col-9">
              <h6 class="text-dark font-weight-bold">Aramanıza başlayın</h6>
            </div>
            <div class="col-3">
              <div class="search-button2 button-click" style="cursor: pointer">
                <i
                  class="fa fa-search text-white"
                  style="margin-top: 13px; margin-left: 13px; font-size: 14px"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <nuxt-link to="/homes" tag="div">
          <li class="font lis text-dark col-button-click">Konaklama yerleri</li>
        </nuxt-link>
        <nuxt-link tag="div" to="/homeHost">
          <li class="font mx-5 lis text-dark col-button-click">
            Ev sahibi modu
          </li>
        </nuxt-link>
        <div
          class="notification-container-slash shadow-lg "
          @click.prevent="slash = !slash"
          v-if="slash && $store.state.authKey != null"
        >
          <i class="far fa-bell-slash icon-bell"></i>
        </div>
        <div
          class="notification-container shadow-lg "
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
                src="../host/user.png"
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
                ><img class="ml-1" src="./İcons/guest-post.png" alt="" />
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
                <img class="ml-1" src="./İcons/suitcases.png" alt="" />
              </p>
            </div>
          </div>
        </div>
        <li
          class="
            border
            user-nav
            border-dark
            col-button-click
            bg-white
            p-1
            mt-1
            hover-li
          "
          :class="
            !scrolStyle
              ? 'border border-white col-button-click bg-white p-1 mt-1 hover-li'
              : 'border border-dark col-button-click bg-white p-1 mt-1 hover-li'
          "
          style="border-radius: 60px; list-style-type: none; cursor: pointer"
          @click.prevent="showCard = !showCard"
        >
          <i class="fas fa-bars bars-font-size ml-1 p-2"></i
          ><img
            width="35"
            style="object-fit: cover; user-select: none"
            class="rounded-circle width-img mb-1 mt-1 mr-2"
            height="35"
            v-if="ProfileData.profileImage"
            :src="
              ProfileData.profileImage == null
                ? '../host/user.png'
                : ProfileData.profileImage
            "
            alt=""
          />
          <img
            width="35"
            style="object-fit: cover; user-select: none"
            class="rounded-circle width-img mb-1 mt-1 mr-2"
            height="35"
            v-else
            src="../host/user.png"
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
            right: 0px;
            height: auto;
            width: 200px;
            border-radius: 10px;
          "
        >
          <h6
            class="
              font-weight-bold-css
              size-navbars
              font
              p-1
              col-button-click
              hover-detail
            "
            style="cursor: pointer"
            v-if="!this.$store.getters.isAuthenticated"
            @click.prevent="$router.push('/auth')"
          >
            Oturum açın
          </h6>
          <h6
            class="font p-1 size-navbars col-button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/travelMode')"
            v-if="this.$store.getters.isAuthenticated"
          >
            Seyahatler
          </h6>
          <h6
            class="
              font
              pt-1
              size-navbars
              pb-1
              pl-1
              col-button-click
              hover-detail
            "
            @click.prevent="
              $router.push('/travelMode/messages/' + $store.state.authKey)
            "
            style="cursor: pointer"
            v-if="this.$store.getters.isAuthenticated"
          >
            Mesajlar
          </h6>
          <h6
            class="
              font
              pt-1
              size-navbars
              pb-1
              pl-1
              col-button-click
              hover-detail
            "
            @click.prevent="$router.push('/profile/' + $store.state.authKey)"
            style="cursor: pointer"
            v-if="this.$store.getters.isAuthenticated"
          >
            Profil
          </h6>

          <h6
            class="p-1 size-navbars col-button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/auth')"
            v-if="!this.$store.getters.isAuthenticated"
          >
            Kaydolun
          </h6>
          <hr v-if="!this.$store.getters.isAuthenticated" />
          <h6
            class="p-1 size-navbars col-button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/homes')"
            v-if="!this.$store.getters.isAuthenticated"
          >
            Seyahate çıkın
          </h6>
          <h6
            class="p-1 size-navbars col-button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/homeHost')"
            v-if="this.$store.getters.isAuthenticated"
          >
            Ev sahibi modu
          </h6>

          <h6
            class="p-1 size-navbars col-button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/homeHost')"
            v-if="!this.$store.getters.isAuthenticated"
          >
            Evinizde ev sahipliği yapın
          </h6>
          <hr v-if="this.$store.getters.isAuthenticated" />
          <h6
            class="p-1 size-navbars col-button-click hover-detail"
            @click.prevent="$router.push('/homeHost/help')"
            style="cursor: pointer"
          >
            Yardım
          </h6>
          <h6
            class="p-1 size-navbars col-button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="logout"
            v-if="this.$store.getters.isAuthenticated"
          >
            Oturumu kapatın
          </h6>
        </div>
      </ul>
      <div
        class="container-fluid h-50 margin-top mobile-home-page"
        style="margin-top: 11%; width: 90% !important"
      >
        <div
          style="width: 70%; height: 20%; border-radius: 35px"
          class="bg-white width-search b-block mx-auto"
        >
          <div class="row w-100 h-100 p-0 m-0 shadow-bottom-lg">
            <div
              class="col-3 col-map col-button-click col-hover"
              @click.prevent="whereAreYouGoing"
            >
              <h6 class="font-weight-bold-css mb-0 pb-0">Konum</h6>
              <h6 class="p-0 m-0" v-if="!whereAreYouMap">
                Nereye gidiyorsunuz?
              </h6>
              <h6 class="p-0 m-0" v-else>Yakınlara gidiyorsunuz...</h6>
            </div>

            <div
              class="col-3 col-hover border-left col-button-click border-right"
              style="padding: 13px 0px 0px 35px"
              @click.prevent="dateShowGo"
            >
              <h6 class="font-weight-bold-css mb-0 pb-0">Giriş</h6>
              <h6 class="p-0 m-0" v-if="!goDateChance">Tarih ekleyin</h6>
              <h6 class="p-0 m-0" v-else>
                Giriş tarihi seçildi
                <i class="fa fa-check-circle text-success"></i>
              </h6>
            </div>
            <div
              @click.prevent="dateShowGo2"
              class="col-3 col-hover border-right col-button-click"
              style="padding: 13px 0px 0px 35px"
            >
              <h6 class="font-weight-bold-css mb-0 pb-0">Çıkış</h6>
              <h6 class="p-0 m-0" v-if="!endDateChance">Tarih ekleyin</h6>
              <h6 class="p-0 m-0" v-else>
                Çıkış tarihi seçildi
                <i class="fa fa-check-circle text-success"></i>
              </h6>
            </div>
            <div
              @click.prevent="dateShowGo3"
              class="col-3 d-flex col-hover col-guest col-button-click"
            >
              <div class="col-9 p-0">
                <h6 class="font-weight-bold-css mb-0 pb-0">Misafir</h6>
                <h6 class="p-0 m-0" v-if="!successGoDate3">Misafir ekleyin</h6>
                <h6 class="p-0 m-0" v-else>
                  {{ oldBoy + childBoy }} misafir , {{ babyBoy }} bebek
                </h6>
              </div>
              <div class="col-2 p-0">
                <div
                  class="search-button button-click"
                  @click.prevent="$router.push('/homes')"
                >
                  <i
                    class="fa fa-search ml-3 text-white"
                    style="margin-top: 16px; font-size: 18px"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div
            @click.prevent="whereAreYouClick"
            v-click-outside="externalClick"
            class="card shadow-lg card-where pl-3"
            v-if="whereAreYou"
            style="cursor: pointer"
          >
            <div class="row" style="margin-top: 24px">
              <div class="col-2">
                <img
                  src="https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg"
                  width="45"
                  class="rounded ml-4"
                  height="45"
                  alt=""
                />
              </div>
              <div class="col-10">
                <h5 class="mt-2">Yakınınızda gidebilecek yerleri keşifedin</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row w-100 h-100 p-0 m-0">
          <div class="col-md-3 col-sm-12 col-xs-12 w-100 h-75">
            <h1 class="mrg-sm mrg-sm-special nature-life text-dark">
              Doğa <br />
              harikaları
            </h1>
            <h5 class="font-weight-bold-css text-dark">
              Bedfied tarafından seçilen favoriler
            </h5>
            <a
              href="/homes"
              class="
                btn btn-dark
                col-button-click
                go-homes
                mt-2
                px-3
                font
                btn-sm
              "
            >
              İlham alın
            </a>
          </div>
          <div class="col-md-2 mt-2 offset-1">
            <input
              v-model="goDateValue"
              type="date"
              class="form-control w-100"
              v-click-outside="externalClick2"
              v-if="dateShow"
            />
          </div>
          <div
            class="col-md-2 h-25 mt-2"
            v-click-outside="externalClick3"
            v-if="dateShow2"
          >
            <input
              v-model="endDateValue"
              type="date"
              class="form-control ml-2 w-100"
            />
          </div>
          <div class="col-md-4 mt-2" v-if="dateShow3">
            <div
              class="card p-4 shadow-lg"
              style="border-radius: 10px"
              v-click-outside="externalClick4"
            >
              <div class="row">
                <div class="col-8">
                  <h6 class="font-weight-bold-css mb-0 pb-0">Yetişkinler</h6>
                  <small>13 ve üzeri yaştakiler</small>
                </div>
                <div class="col-4 my-2">
                  <img
                    src="./İcons/minus (2).png"
                    class="mr-1"
                    alt=""
                    style="cursor: pointer"
                    @click.prevent="minusOldBoy"
                  />
                  <span class="mt-1 my-2">{{ oldBoy }}</span>
                  <img
                    src="./İcons/plus (2).png"
                    class="ml-1"
                    alt=""
                    style="cursor: pointer"
                    @click.prevent="plusOldBoy"
                  />
                </div>
                <div class="col-12">
                  <hr />
                </div>
                <div class="col-8">
                  <h6 class="font-weight-bold-css mb-0 pb-0">Çocuklar</h6>
                  <small>Yaş aralığı 2-12</small>
                </div>
                <div class="col-4 my-2">
                  <img
                    src="./İcons/minus (2).png"
                    class="mr-1"
                    alt=""
                    style="cursor: pointer"
                    @click.prevent="minusChildBoy"
                  />
                  <span class="mt-1 my-2">{{ childBoy }}</span>
                  <img
                    src="./İcons/plus (2).png"
                    class="ml-1"
                    alt=""
                    style="cursor: pointer"
                    @click.prevent="plusChildBoy"
                  />
                </div>
                <div class="col-12">
                  <hr />
                </div>
                <div class="col-8">
                  <h6 class="font-weight-bold-css mb-0 pb-0">Bebekler</h6>
                  <small>2 yaş ve altı</small>
                </div>
                <div class="col-4 my-2">
                  <img
                    src="./İcons/minus (2).png"
                    class="mr-1"
                    alt=""
                    style="cursor: pointer"
                    @click.prevent="minusBabyBoy"
                  />
                  <span class="mt-1 my-2">{{ babyBoy }}</span>
                  <img
                    src="./İcons/plus (2).png"
                    class="ml-1"
                    alt=""
                    style="cursor: pointer"
                    @click.prevent="plusBabyBoy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mobile-home-page2">
        <div class="p-3 row bg-white shadow-lg mobile-search b-block mx-auto">
          <div
            class="col-1"
            style="cursor: pointer"
            @click.prevent="$router.push('/homes')"
          >
            <i
              class="fa fa-search"
              style="margin-top: 10px; color: #f93b3b; font-size: 20px"
            ></i>
          </div>
          <div class="col-10">
            <input
              type="text"
              @keyup.enter="$router.push('/homes')"
              id="adress"
              style="font-size: 18px"
              placeholder="Nereye gidiyorsunuz?"
              class="form-control border-0 font-weight-bold-css text-dark"
            />
          </div>
        </div>
        <div class="row w-100 h-100 p-0 m-0">
          <div
            class="col-md-3 col-sm-12 col-xs-12 w-100 h-75 nature-life-mobile"
          >
            <h1 class="font-weight-bold-css">
              Doğa <br />
              harikaları
            </h1>
            <h5 class="font-weight-bold-css">
              Bedfied tarafından seçilen favoriler
            </h5>
            <a
              href="/homes"
              class="
                btn btn-dark
                col-button-click
                go-homes
                mt-2
                px-3
                font
                btn-sm
              "
            >
              İlham alın
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from "axios";
export default {
  
  data() {
    return {
      showCard: false,
      newHeader: false,
      whereAreYou: false,
      whereAreYouMap: false,
      scrolStyle: false,
      showCardMobile: false,
      goDateValue: null,
      endDateValue: null,
      datePicker: false,
      dateShow: false,
      dateShow2: false,
      dateShow3: false,
      month: null,
      oldBoy: 1,
      childBoy: 0,
      babyBoy: 0,
      successGoDate: false,
      successGoDate2: false,
      successGoDate3: false,
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
    ProfileData: {
      required: true,
    },
  },
  methods: {
    showCardOutMobile() {
      this.showCardMobile = false;
    },
    plusOldBoy() {
      if (this.oldBoy < 25) {
        this.oldBoy++;
      }
    },
    minusOldBoy() {
      if (this.oldBoy > 1) {
        this.oldBoy--;
      }
    },
    plusChildBoy() {
      if (this.childBoy < 25) {
        this.childBoy++;
      }
    },
    minusChildBoy() {
      if (this.childBoy > 0) {
        this.childBoy--;
      }
    },
    plusBabyBoy() {
      if (this.babyBoy < 25) {
        this.babyBoy++;
      }
    },
    minusBabyBoy() {
      if (this.babyBoy > 0) {
        this.babyBoy--;
      }
    },
    logout() {
      this.$store.dispatch("logout").then((res) => {
        window.location.reload();
      });
    },
    whereAreYouGoing() {
      (this.dateShow = false),
        (this.dateShow2 = false),
        (this.whereAreYou = !this.whereAreYou);
      this.dateShow3 = false;
    },
    externalClick(event) {
      this.whereAreYou = false;
    },
    externalClick2(event) {
      this.dateShow = false;
    },
    externalClick3(event) {
      this.dateShow2 = false;
    },
    externalClick4(event) {
      this.dateShow3 = false;
    },
    showCardOut(event) {
      this.showCard = false;
    },
    whereAreYouClick() {
      this.whereAreYou = false;
      this.dateShow = true;
      this.dateShow3 = false;
      this.whereAreYouMap = !this.whereAreYouMap;
    },
    clickOutSide() {
      this.dateShow = false;
    },
    dateShowGo() {
      this.dateShow2 = false;
      this.whereAreYou = false;
      this.dateShow = true;
      this.dateShow3 = false;
    },
    doSomethingInParentComponentFunction() {
      this.successGoDate = true;
      this.dateShow = false;
      this.whereAreYou = false;
      this.dateShow2 = true;
    },
    doSomethingInParentComponentFunction2() {
      this.successGoDate2 = true;
      this.dateShow = false;
      this.dateShow2 = false;
      this.dateShow3 = true;
      this.successGoDate3 = true;
    },
    dateShowGo2() {
      this.dateShow = false;
      this.dateShow3 = false;
      this.whereAreYou = false;
      this.dateShow2 = true;
    },
    dateShowGo3() {
      this.dateShow = false;
      this.whereAreYou = false;
      this.dateShow2 = false;
      this.dateShow3 = !this.dateShow3;
      this.successGoDate3 = true;
    },
    handleScroll(event) {
      let x = window.scrollY;
      x > 1 ? (this.scrolStyle = true) : (this.scrolStyle = false);
    },
    cardSearchActive() {
      window.scrollTo(0, 0);
      this.whereAreYou = true;
    },
    handleScroll() {
      // Your scroll handling here
      let y = window.scrollY;
      y > 0 ? (this.scrolStyle = true) : (this.scrolStyle = false);
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
  computed: {
    goDateChance() {
      if (this.goDateValue != null) {
        return true;
      } else {
        return false;
      }
    },
    endDateChance() {
      if (this.endDateValue != null) {
        return true;
      } else {
        return false;
      }
    },
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  created() {
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
.scroller {
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
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
.font-weight-bold-css {
  font-weight: bold !important;
}
.card-header-search {
  height: 46px !important;
  width: 250px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 60px;
}
.card-header-search h6 {
  padding: 5px 0px 5px 15px;
}
.mobile-home-page2 {
  display: none;
}
.showCard {
  z-index: 5;
  position: absolute;
  margin-top: -290px;
  margin-left: -90px;
  height: auto;
  width: 200px;
  border-radius: 10px;
}
.date-picker {
  z-index: 50 !important;
  margin-left: 500px;
}
.font {
  font-family: "Titillium Web", sans-serif !important;
}
.width-img {
  width: 35px;
  height: 35px;
}
@media (min-width: 1450px) {
  .size-navbars {
    font-size: 20px;
  }
  .width-img {
    width: 40px;
    height: 40px !important;
  }
  .bars-font-size {
    font-size: 17px !important;
  }
  .margin-bedfied {
    font-size: 35px !important;
  }
  .lis {
    font-size: 20px !important;
  }
}
.message-margin {
  margin-left: -35%;
}
.hover-li:hover {
  background-color: rgba(0, 0, 0, 0.5) !important;
  color: #ffff !important;
}
.hover-li {
  border-radius: 60px;
  list-style-type: none;
  cursor: pointer;
}
.nature-life {
  margin-top: 9.5%;
  font-size: 65px;
  font-weight: bolder;
  cursor: pointer;
  user-select: none;
}
@media (min-width: 1569px) {
  .width-search {
    width: 70%;
    height: 16% !important;
  }
  .nature-life {
    font-size: 80px;
  }
}
.card-where {
  width: 56%;
  height: 150%;
  margin-top: 15px;
  border-radius: 30px;
  z-index: 5;
}
nav {
  background: url("https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg")
    center / cover no-repeat;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  font-family: "Titillium Web", sans-serif !important;
}
.ft {
  font-size: 20px !important;
}
.col-map {
  padding: 13px 0px 0px 35px;
  border-radius: 35px 0px 0px 35px;
  cursor: pointer;
}
.button-click {
  transition: transform 80ms ease-in;
}

.button-click:active {
  transform: scale(0.9);
  background: #f93b3b;
}
.col-button-click {
  transition: transform 80ms ease-in;
}

.col-button-click:active {
  transform: scale(0.95);
}
.col-hover:hover {
  background: rgba(0, 0, 0, 0.06);
  cursor: pointer;
}
.col-guest {
  padding: 13px 0px 0px 23px;
  border-radius: 0px 35px 35px 0px;
}
.go-homes {
  font-size: 16px;
  border-radius: 10px;
  background: rgb(0, 0, 0, 0.7);
}

.search-button {
  width: 50px;
  border-radius: 50%;
  height: 50px;
  margin-top: -6px;
  margin-left: -25%;
  background: -webkit-linear-gradient(to right, rgba(0, 243, 141, 1), #009eff);
  background: linear-gradient(to right, rgba(0, 243, 141, 1), #009eff);
}
.search-button2 {
  width: 38px;
  border-radius: 50%;
  height: 38px;
  margin-right: 60px !important;
  margin-top: -5px;
  background: -webkit-linear-gradient(to right, rgba(0, 243, 141, 1), #009eff);
  background: linear-gradient(to right, rgba(0, 243, 141, 1), #009eff);
}
.menu-bar {
  border-radius: 25px;
  height: 12%;
  position: fixed;
  z-index: 500;
  width: 93%;
  display: inline-flex;
  background-color: none;
  align-items: center;
  padding: 0 10px;
  margin: 20px 0 0 0;
}
.menu-logo2 {
  display: none;
}
.hover-detail:hover {
  color: #f93b3b;
}
.lis {
  list-style: none;
  color: black;
  font-family: sans-serif;
  font-weight: bold;
  padding: 12px 16px;
  margin: 8px 8px;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  white-space: nowrap;
}
.lis:hover {
  color: black;
}
.lis:hover::before {
  background: linear-gradient(to bottom, #e8edec, #d2d1d3);
  box-shadow: 0px 3px 20px 0px black;
  transform: scale(1.2);
}
.lis:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  transition: 0.2s;
  border-radius: 25px;
}

@media (max-width: 768px) {
  .nature-life-mobile {
    margin-top: 10%;
  }
  .mobile-search {
    width: 95%;
    min-height: 14%;
    border-radius: 35px;
    position: fixed;
    z-index: 501;
    top: 10px;
  }
  .mobile-home-page2 {
    display: inherit !important;
  }
  .mobile-home-page {
    display: none !important;
  }
  nav {
    min-height: 40vh !important;
    max-height: 75vh !important;
    background: url("https://a0.muscache.com/im/pictures/38100f6a-9a35-45b8-a503-cfe384d953b5.jpg?im_w=960")
      center / cover no-repeat;
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

  .menu-logo2 {
    display: inherit;
  }
  .mrg-left {
    margin-left: 0px !important ;
    width: 115% !important;
  }
}
@media (max-width: 562px) {
  .nature-life-mobile {
    margin-top: 40%;
  }
  .mobile-search {
    max-width: 95%;
    min-height: 7%;
    border-radius: 35px;
    position: fixed;
    z-index: 501;
    top: 10px;
  }
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
  .menu-logo2 {
    display: inherit;
  }
  .mrg-left {
    margin-left: 0px !important ;
    width: 115% !important;
  }
}
</style>