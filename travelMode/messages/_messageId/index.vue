<template>
  <div>
    <TravelModeHeader :userProfilesData="haveUserData" />
    <div>
      <div class="containers  app font chat-pc">
        <div class="row app-one">
          <div class="col-sm-4 side">
            <div class="side-one">
              <div class="row heading">
                <div class="col-sm-2 col-xs-3 heading-avatar">
                  <div class="heading-avatar-icon">
                    <img
                      :src="
                        haveUserData.profileImage == null
                          ? './user.png'
                          : haveUserData.profileImage
                      "
                      style="object-fit: cover"
                      v-if="haveUserData.profileImage"
                    />
                    <img src="./user.png" style="object-fit: cover" v-else />
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="margin-top-name">
                    {{
                      haveUserData.fullName == null
                        ? "İsim yok"
                        : haveUserData.fullName
                    }}
                  </div>
                </div>
                <div class="col-sm-6 margin-top-span text-right text-muted">
                  Misafir
                </div>
              </div>

              <div class="row searchBox">
                <div class="col-sm-12 searchBox-inner">
                  <div class="form-group has-feedback">
                    <input
                      id="searchText"
                      type="text"
                      class="form-control"
                      name="searchText"
                      placeholder="Keşfet"
                      v-model="searchUser"
                      @keyup.enter="searchUsers"
                    />
                    <span
                      class="glyphicon glyphicon-search form-control-feedback"
                    ></span>
                  </div>
                </div>
                <div
                  class="col-1 searchBox-icon-search"
                  @click.prevent="searchUsers"
                >
                  <i class="fas fa-search text-muted"></i>
                </div>
              </div>

              <div
                class="row sideBar"
                id="style-1"
                v-if="allSearchData.length != 0"
              >
                <div
                  class="row sideBar-body"
                  v-for="user in allSearchData"
                  :key="user.firebaseId"
                  @click.prevent="changeChat(user.hostProfile.authId)"
                  :id="user.hostProfile.authId == hostId ? 'choseBorder' : ''"
                >
                  <div class="col-sm-2 col-xs-3 sideBar-avatar">
                    <div class="avatar-icon">
                      <img
                        :src="
                          user.hostProfile.profileImage == null
                            ? './user.png'
                            : user.hostProfile.profileImage
                        "
                        style="object-fit: cover"
                        v-if="user.hostProfile.profileImage"
                      />
                      <img src="./user.png" style="object-fit: cover" v-else />
                    </div>
                  </div>
                  <div class="col-sm-9 col-xs-9 sideBar-main">
                    <div class="row">
                      <div class="col-sm-6 h-25 col-xs-8 sideBar-name">
                        <span class="name-meta" style="margin-left: -4px"
                          >{{
                            user.hostProfile.fullName == null
                              ? "İsim belirtilmemiş"
                              : user.hostProfile.fullName
                          }}
                        </span>
                      </div>
                      <div
                        class="col-sm-6 font-weight-bold h-25 col-xs-4 pull-right sideBar-time"
                      >
                        <span class="time-meta pull-right"
                          >{{ user.messageSendDate.Days }}.{{
                            user.messageSendDate.months
                          }}.{{ user.messageSendDate.years }} -
                          {{ user.messageSendDate.hours }}:{{
                            user.messageSendDate.Minutes
                          }}
                        </span>
                      </div>
                      <div
                        class="col-12 ml-2 small h-50 w-100"
                        v-if="user.messageTravel.length < 140"
                      >
                        {{ user.messageTravel }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="row text-center">
                <div class="col-12">
                  <h5 style="margin-top: 28%">Rezervasyon bulunmamaktadır.</h5>
                  <button
                    class="btn button-lanier"
                    @click.prevent="$router.push('/homes')"
                  >
                    Keşfet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-8 conversation">
            <div class="row heading">
              <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                <div
                  class="heading-avatar-icon"
                  v-if="chooseProfile.length != 0"
                >
                  <img
                    class="photo-object"
                    :src="chooseProfile[0].hostProfile.profileImage"
                    alt=""
                  />
                </div>
              </div>
              <div
                class="col-sm-8 col-xs-7 heading-name"
                v-if="chooseProfile.length != 0"
              >
                <a class="heading-name-meta"
                  >{{ chooseProfile[0].hostProfile.fullName }}
                </a>
              </div>
              <div class="col-sm-10 col-xs-7 heading-name" v-else></div>
              <div
                v-if="chooseProfile.length != 0"
                class="col-sm-2 col-xs-2 heading-dot pull-right d-flex justify-content-end"
              >
                <span
                  class="heading-online mr-2 text-right text-muted margin-top-span"
                  >Ev sahibi</span
                >
                <i
                  class="fa fa-ellipsis-v fa-2x pull-right mt-2"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            <div class="row message scroll" id="chat-history" ref="msg_history">
              <!-- <div class="row message-previous" v-if="">
                <div class="col-sm-12 previous">
                  <a href="" id="ankitjain28" name="20">
                    Önceki Mesajları Göster!
                  </a>
                </div>
              </div> -->

              <div
                class="row message-body mb-0"
                v-for="message in chatMessages"
                :key="message.id"
              >
                <div
                  class="col-sm-12 message-main-receiver"
                  :class="
                    message.messageId == $store.state.authKey
                      ? 'col-sm-12 message-main-sender mb-3 text-right'
                      : 'col-sm-12 message-main-receiver ml-2 mb-3'
                  "
                >
                  <div
                    class="receiver"
                    :class="
                      message.messageId == $store.state.authKey
                        ? 'sender'
                        : 'receiver'
                    "
                  >
                    <div class="message-text text-left">
                      {{ message.message }}
                    </div>
                    <span
                      class="message-time"
                      :class="
                        message.messageId == $store.state.authKey
                          ? 'message-time d-flex justify-content-left'
                          : 'message-time'
                      "
                    >
                      {{ message.gün }}.{{ message.ay + 1 }}.{{ message.yıl }} -
                      {{ message.saat }}:{{ message.dakika }}
                      <i
                        class="fa fa-check mt-1 ml-2"
                        v-if="message.messageId == $store.state.authKey"
                        style="font-size: 10px"
                      ></i>
                      <i
                        class="fa fa-check mt-1 ml-0"
                        v-if="message.messageId == $store.state.authKey"
                        style="font-size: 10px"
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="row message-body mb-0 text-center"
                v-if="chatMessages.length == 0"
              >
                <div class="col-12">
                  <h3 style="margin-top: 20% !important">
                    Henüz mesajınız bulunmamaktadır.
                  </h3>
                  <button
                    class="btn mt-2 button-lanier"
                    @click.prevent="$router.push('/homes')"
                  >
                    Yakınlardaki konaklamaları keşfet
                  </button>
                </div>
              </div>
            </div>

            <div class="row reply">
              <div class="col-sm-1 col-xs-1 reply-emojis">
                <i class="far fa-smile fa-2x"></i>
              </div>
              <div class="col-sm-9 col-xs-9 reply-main">
                <input
                  type="text"
                  placeholder="Bir şeyler yazın.."
                  class="form-control"
                  v-model="message"
                  @keyup.enter="saveMessage"
                />
              </div>
              <div class="col-sm-1 col-xs-1 reply-recording">
                <i class="fa fa-microphone fa-2x" aria-hidden="true"></i>
              </div>
              <div
                class="col-sm-1 col-xs-1 reply-send"
                @click.prevent="saveMessage"
              >
                <i class="fas fa-paper-plane fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container w-100 app font chat-mobile"
        style="margin-top: -35px"
      >
        <div class="col-sm-12 side">
          <div class="side-one">
            <div class="row heading">
              <div
                class="col-1 d-flex justify-content-center mt-3"
                @click.prevent="chanceSide"
                style="cursor: pointer"
              >
                <i
                  :class="
                    side
                      ? 'far fa-arrow-alt-circle-down mr-2'
                      : 'far fa-arrow-alt-circle-left mr-2'
                  "
                  style="font-size: 30px; color: #f93b3b"
                ></i>
              </div>
              <div class="col-2 ml-2">
                <div class="heading-avatar-icon">
                  <div
                    class="heading-avatar-icon"
                    v-if="chooseProfile.length != 0"
                  >
                    <img
                      class="photo-object"
                      :src="chooseProfile[0].hostProfile.profileImage"
                      alt=""
                    />
                  </div>
                  <img src="./user.png" style="object-fit: cover" v-else />
                </div>
              </div>
              <div class="col-5">
                <div class="margin-top-name" v-if="chooseProfile.length != 0">
                  {{ chooseProfile[0].hostProfile.fullName }}
                </div>
                <div class="col-sm-10 col-xs-7 heading-name" v-else>
                  İsim Yok
                </div>
              </div>
              <div class="col-3 d-flex justify-content-end">
                <div class="margin-top-name">Misafir</div>
              </div>
            </div>
            <div v-if="side">
              <div class="row searchBox">
                <div class="col-sm-12 searchBox-inner">
                  <div class="form-group has-feedback">
                    <input
                      id="searchText"
                      type="text"
                      class="form-control"
                      name="searchText"
                      placeholder="Keşfet"
                      v-model="searchUser"
                      @keyup.enter="searchUsers"
                    />
                    <span
                      class="glyphicon glyphicon-search form-control-feedback"
                    ></span>
                  </div>
                </div>
                <div
                  class="col-1 searchBox-icon-search"
                  @click.prevent="searchUsers"
                >
                  <i class="fas fa-search text-muted"></i>
                </div>
              </div>

              <div
                class="row sideBar"
                id="style-1"
                v-if="allSearchData.length != 0"
              >
                <div
                  class="row bar"
                 style="border-bottom: 1px solid #f7f7f7; cursor: pointer"
                  v-for="user in allSearchData"
                  :key="user.firebaseId"
                  @click.prevent="changeChat(user.hostProfile.authId)"
                  :id="user.hostProfile.authId == hostId ? 'choseBorder' : ''"
                >
                  <div class="col-2 mb-1 ml-2">
                    <div class="avatar-icon">
                      <img
                        :src="
                          user.hostProfile.profileImage == null
                            ? './user.png'
                            : user.hostProfile.profileImage
                        "
                            class="mt-3"
                        style="object-fit: cover"
                        v-if="user.hostProfile.profileImage"
                      />
                      <img src="./user.png" style="object-fit: cover" v-else />
                    </div>
                  </div>
                  <div class="col-9 mt-1 p-2">
                    <div class="row">
                      <div class="col-6">
                        <span class="name-meta" style="margin-left: -4px"
                          >{{
                            user.hostProfile.fullName == null
                              ? "İsim belirtilmemiş"
                              : user.hostProfile.fullName
                          }}
                        </span>
                      </div>
                      <div
                        class="col-6"
                      >
                        <span class="time-meta pull-right"
                          >{{ user.messageSendDate.Days }}.{{
                            user.messageSendDate.months
                          }}.{{ user.messageSendDate.years }} -
                          {{ user.messageSendDate.hours }}:{{
                            user.messageSendDate.Minutes
                          }}
                        </span>
                      </div>
                      <div
                        class="col-12"
                        v-if="user.messageTravel.length < 140"
                      >
                        {{ user.messageTravel }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="row text-center">
                <div class="col-12">
                  <h5 style="margin-top: 18%">Rezervasyon bulunmamaktadır.</h5>
                  <button
                    class="btn button-lanier"
                    @click.prevent="$router.push('/homes')"
                  >
                    Keşfet
                  </button>
                </div>
              </div>
              <div style="height: 100px"></div>
            </div>
          </div>
        </div>
        <div v-if="conversation">
          <div class="container-fluid message-body2">
            <div
              class="row message scroll h-100"
              id="chat-history2"
              ref="msg_history"
            >
              <div
                class="row message-body mb-0"
                v-for="message in chatMessages"
                :key="message.id"
              >
                <div
                  class="col-sm-12 message-main-receiver"
                  :class="
                    message.messageId == $store.state.authKey
                      ? 'col-sm-12 message-main-sender mb-3 text-right'
                      : 'col-sm-12 message-main-receiver ml-3 mt-3  mb-2'
                  "
                >
                  <div
                    class="receiver"
                    :class="
                      message.messageId == $store.state.authKey
                        ? 'sender'
                        : 'receiver'
                    "
                  >
                    <div class="message-text text-left">
                      {{ message.message }}
                    </div>
                    <span
                      class="message-time"
                      :class="
                        message.messageId == $store.state.authKey
                          ? 'message-time d-flex justify-content-left'
                          : 'message-time'
                      "
                    >
                      {{ message.gün }}.{{ message.ay + 1 }}.{{ message.yıl }} -
                      {{ message.saat }}:{{ message.dakika }}
                      <i
                        class="fa fa-check mt-1 ml-2"
                        v-if="message.messageId == $store.state.authKey"
                        style="font-size: 10px"
                      ></i>
                      <i
                        class="fa fa-check mt-1 ml-0"
                        v-if="message.messageId == $store.state.authKey"
                        style="font-size: 10px"
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="row message-body mb-0 text-center"
                v-if="chatMessages.length == 0"
              >
                <div class="col-12">
                  <h3 style="margin-top: 20% !important">
                    Henüz mesajınız bulunmamaktadır.
                  </h3>
                  <button
                    class="btn mt-2 button-lanier"
                    @click.prevent="$router.push('/homes')"
                  >
                    Yakınlardaki konaklamaları keşfet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row reply">
            <div class="col-10">
              <input
                type="text"
                placeholder="Bir şeyler yazın.."
                class="form-control w-100"
                v-model="message"
                @keyup.enter="saveMessage"
              />
            </div>

            <div class="col-1" @click.prevent="saveMessage">
              <i
                class="fas fa-paper-plane"
                style="
                  font-size: 25px;
                  margin-top: 25%;
                  margin-left: 40%;
                  color: #f93b3b;
                "
              ></i>
            </div>
          </div>
        </div>
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
      haveUserData: [],
      message: null,
      allUsersData: [],
      allSearchData: [],
      ref: null,
      chatMessages: [],
      hostId: null,
      chooseProfile: [],
      searchUser: null,
      side: true,
      conversation: false,
    };
  },
  methods: {
    getProfile() {
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
            newArray.find((s) => s.authId == this.$store.state.authKey)
          );
          if (userData[0] != undefined) {
            this.haveUserData = userData[0];
          }
        });
    },
    saveMessage() {
      if (this.message != null) {
        this.ref.doc(this.hostId).collection("chat").doc().set({
          message: this.message,
          messageId: this.$store.state.authKey,
          createAt: new Date(),
          ay: new Date().getMonth(),
          dakika: new Date().getMinutes(),
          gün: new Date().getDate(),
          saat: new Date().getHours(),
          yıl: new Date().getFullYear(),
        });
        this.message = null;
        setTimeout(() => {
          var scrollHeight = 6000;
          document.getElementById("chat-history").scrollTop = scrollHeight;
          document.getElementById("chat-history2").scrollTop = scrollHeight;
        }, 50);
      }
    },
    getMessages() {
      let usersData = [];
      let chooseProfile = [];
      this.ref = this.$fire.firestore.collection(this.$store.state.authKey);
      this.ref
        .orderBy("order")
        .get()
        .then((res) => {
          let hostIdData = [];
          res.forEach((doc) => {
            usersData.push(doc.data());
            usersData.reverse();
            hostIdData.push(doc.data().hostProfile.authId);
          });
          // Sayfa ilk açıldığında gelecek olan chat o da son mesaj attığı kişi getiriyor
          let hostId = hostIdData.slice(-1);
          this.hostId = hostId[0];
          if (hostId.length != 0) {
            this.ref
              .doc(hostId[0])
              .get()
              .then((res) => {
                chooseProfile.push(res.data());
              });

            this.chooseProfile = chooseProfile;
          }

          this.ref
            .doc(hostId[0])
            .collection("chat")
            .orderBy("createAt")
            .onSnapshot((querySnapshot) => {
              let allMessages = [];
              querySnapshot.forEach((doc) => {
                allMessages.push(doc.data());
              });
              this.chatMessages = allMessages;
            });
          setTimeout(() => {
            if (this.$refs.msg_history) {
              var scrollHeight = 6000;
              document.getElementById("chat-history").scrollTop = scrollHeight;
            }
          }, 1000);
          // Burası da bitişi
        });
      this.allUsersData = usersData;
    },
    changeChat(hostId) {
      this.side = false;
      this.conversation = true;
      let chooseProfiles = [];
      this.hostId = hostId;
      this.ref.doc(hostId).onSnapshot((res) => {
        chooseProfiles.push(res.data());
      });
      this.chooseProfile = chooseProfiles;
      this.ref
        .doc(hostId)
        .collection("chat")
        .orderBy("createAt")
        .onSnapshot((querySnapshot) => {
          let allMessages = [];
          querySnapshot.forEach((doc) => {
            allMessages.push(doc.data());
          });
          this.chatMessages = allMessages;
        });
      setTimeout(() => {
        var scrollHeight = 6000;
        document.getElementById("chat-history").scrollTop = scrollHeight;
        document.getElementById("chat-history2").scrollTop = scrollHeight;
      }, 50);
    },
    searchUsers() {
      if (this.searchUser != null) {
        this.allSearchData = this.allUsersData.filter((s) =>
          s.hostProfile.fullName.startsWith(this.searchUser)
        );
      }
    },
    chanceSide() {
      this.side = true;
      this.conversation = false;
    },
  },
  created() {
    this.getMessages();
    this.getProfile();
    this.allSearchData = this.allUsersData;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");

.font {
  font-family: "Titillium Web", sans-serif !important;
}
div,
span {
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#style-1::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar {
  width: 9px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgb(173, 173, 173);
}
.scroll::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f5;
}

.scroll::-webkit-scrollbar {
  width: 9px;
  background-color: #f5f5f5;
}

.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgb(173, 173, 173);
}
#choseBorder {
  border-left: 5px solid #f93b3b;
}
.fa-2x {
  font-size: 1.5em;
}
.margin-top-span {
  margin-top: 13px !important;
}
.photo-object {
  object-fit: cover;
}
.button-lanier {
  background: #f93b3b !important;
  color: #ffff !important;
  border: none !important;
}
.app {
  position: relative;
  overflow: hidden;
  /* top: 19px; */
  height: 520px;
  margin: auto;
  padding: 0;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
}
.searchBox-icon-search {
  position: absolute;
  /* top: 35px; */
  right: 10px;
  font-size: 20px;
  margin-top: 13px;
  cursor: pointer;
}
.app-one {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
}

.side {
  padding: 0;
  margin: 0;
  height: 100%;
  background-image: linear-gradient(#faf8f9, #f0eff0);
}
.side-one {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  position: relative;
  display: block;
  top: 0;
}

.side-two {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  position: relative;
  top: -100%;
  left: -100%;
  -webkit-transition: left 0.3s ease;
  transition: left 0.3s ease;
}

.heading {
  padding: 10px 16px 10px 15px;
  margin: 0;
  height: 65px;
  width: 100%;
  background-image: linear-gradient(#faf8f9, #f0eff0);
  z-index: 1000;
}
.margin-top-name {
  margin-top: 13px !important;
  margin-left: 8px;
}
.heading-avatar {
  padding: 0;
  cursor: pointer;
}

.heading-avatar-icon img {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.heading-name {
  padding: 0 !important;
  cursor: pointer;
  margin-top: 7px !important;
}

.heading-name-meta {
  font-size: 100%;
  padding: 6px;
  padding-bottom: 0;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
  display: block;
}
.heading-online {
  padding: 0 5px;
  font-size: 16px;
  margin-left: 10px;
  color: black;
}
.heading-compose {
  padding: 0;
}

.heading-compose i {
  text-align: center;
  padding: 5px;
  color: #93918f;
  cursor: pointer;
}

.heading-dot {
  padding: 0;
  margin-left: 10px;
}

.heading-dot i {
  text-align: right;
  padding: 5px;
  color: #93918f;
  cursor: pointer;
}

.searchBox {
  padding: 0 !important;
  margin: 0 !important;
  height: 60px;
  width: 100%;
  background-image: linear-gradient(#faf8f9, #f0eff0);
}

.searchBox-inner {
  height: 100%;
  width: 100%;
  padding: 10px !important;
  background-color: #fbfbfb;
}

/*#searchBox-inner input {
  box-shadow: none;
}*/

.searchBox-inner input:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

.sideBar {
  padding: 0 !important;
  margin: 0 !important;
  background-image: linear-gradient(#faf8f9, #f0eff0) !important;
  overflow-y: auto;
  border: 1px solid #f7f7f7;
  height: calc(100% - 120px);
}

.sideBar-body {
  /* position: relative; */
  padding: 10px !important;
  border-bottom: 1px solid #f7f7f7;

  height: 120px;
  margin-top: 0px;

  cursor: pointer;
}

.sideBar-body:hover {
  background-color: #e2e2e2;
}

.sideBar-avatar {
  text-align: center;
  padding: 0 !important;
}

.avatar-icon img {
  border-radius: 50%;
  height: 60px;
  width: 60px;
  margin-top: 15px;
}

.sideBar-main {
  padding: 0 !important;
}

.sideBar-main .row {
  padding: 0 !important;
  margin: 0 !important;
}

.sideBar-name {
  padding: 10px !important;
}

.name-meta {
  font-size: 100%;
  padding: 1% !important;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
}

.sideBar-time {
  padding: 10px !important;
}

.time-meta {
  text-align: right;
  font-size: 12px;
  padding: 1% !important;
  color: rgba(0, 0, 0, 0.4);
  vertical-align: baseline;
}

/*New Message*/

.newMessage {
  padding: 0 !important;
  margin: 0 !important;
  height: 100%;
  position: relative;
  left: -100%;
}
.newMessage-heading {
  padding: 10px 16px 10px 15px !important;
  margin: 0 !important;
  height: 100px;
  width: 100%;
  background-color: #00bfa5;
  z-index: 1001;
}

.newMessage-main {
  padding: 10px 16px 0 15px !important;
  margin: 0 !important;
  height: 60px;
  margin-top: 30px !important;
  width: 100%;
  z-index: 1001;
  color: #fff;
}

.newMessage-title {
  font-size: 18px;
  font-weight: 700;
  padding: 10px 5px !important;
}
.newMessage-back {
  text-align: center;
  padding: 12px 5px !important;
  display: block;
  cursor: pointer;
}
.newMessage-back i {
  margin: auto !important;
}

.composeBox {
  padding: 0 !important;
  margin: 0 !important;
  height: 60px;
  width: 100%;
}

.composeBox-inner {
  height: 100%;
  width: 100%;
  padding: 10px !important;
  background-color: #fbfbfb;
}

.composeBox-inner input:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

.compose-sideBar {
  padding: 0 !important;
  margin: 0 !important;
  background-color: #fff;
  overflow-y: auto;
  border: 1px solid #f7f7f7;
  height: calc(100% - 160px);
}

/*Conversation*/

.conversation {
  padding: 0 !important;
  margin: 0 !important;
  height: 100%;
  /*width: 100%;*/
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  /*overflow-y: auto;*/
}

.message {
  padding: 0 !important;
  margin: 0 !important;
  /* background: url("w.jpg") no-repeat fixed center; */
  background-size: cover;
  overflow-y: auto;
  border: 1px solid #f7f7f7;
  height: calc(100% - 120px);
}
.message-previous {
  margin: 0 !important;
  padding: 0 !important;
  height: auto;
  width: 100%;
}
.previous {
  font-size: 15px;
  text-align: center;
  padding: 10px !important;
  cursor: pointer;
}

.previous a {
  text-decoration: none;
  font-weight: 700;
}

.message-body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  height: auto;
}
.messages-body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  height: auto;
  background-image: linear-gradient(#faf8f9, #f0eff0);
}

.message-main-receiver {
  /*padding: 10px 20px;*/
  max-width: 60%;
}

.message-main-sender {
  padding: 3px 20px !important;
  margin-left: 40% !important;
  max-width: 60%;
}

.message-text {
  margin: 0 !important;
  padding: 5px !important;
  word-wrap: break-word;
  font-weight: 200;
  font-size: 14px;
  padding-bottom: 0 !important;
}

.message-time {
  margin: 0 !important;
  margin-left: 10px !important;
  font-size: 12px;
  text-align: right !important;
  color: #faf8f9;
}

.receiver {
  width: auto !important;
  padding: 4px 10px 7px !important;
  border-radius: 10px 10px 10px 0;
  background: #323b42;
  color: white;
  font-size: 12px;
  height: auto;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  word-wrap: break-word;
  display: inline-block;
}

.sender {
  width: auto !important;
  background: #303481;
  color: white;
  font-weight: 500;
  border-radius: 10px 10px 0 10px;
  height: auto;
  padding: 4px 10px 7px !important;
  font-size: 12px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  display: inline-block;
  word-wrap: break-word;
}

/*Reply*/

.reply {
  height: 60px;
  width: 100%;
  background-color: #f5f1ee;
  padding: 10px 5px 10px 5px !important;
  margin: 0 !important;
  z-index: 1000;
}

.reply-emojis {
  padding: 5px !important;
}

.reply-emojis i {
  text-align: center;
  padding: 5px 5px 5px 5px !important;
  color: #93918f;
  cursor: pointer;
}

.reply-recording {
  padding: 5px !important;
}

.reply-recording i {
  text-align: center;
  padding: 5px !important;
  color: #93918f;
  cursor: pointer;
}

.reply-send {
  padding: 5px !important;
}

.reply-send i {
  text-align: center;
  padding: 5px !important;
  color: #93918f;
  cursor: pointer;
}

.reply-main {
  padding: 2px 5px !important;
  margin-top: -2px;
}

.reply-main textarea {
  width: 100%;
  resize: none;
  overflow: hidden;
  padding: 5px !important;
  outline: none;
  border: none;
  text-indent: 5px;
  box-shadow: none;
  height: 100%;
  font-size: 16px;
}

.reply-main textarea:focus {
  outline: none;
  border: none;
  text-indent: 5px;
  box-shadow: none;
}
.chat-pc {
  display: inherit;
}
.chat-mobile {
  display: none;
}
.message-body2 {
  height: 589px;
}
@media (max-height: 762px) and (max-width: 762px) {
  .message-body2 {
    height: 445px;
  }
}
@media (max-height: 562px) and (max-width: 762px) {
  .message-body2 {
    height: 330px;
  }
}
.containers {
  width: 80%;
  margin-right: auto!important;
  margin-left: auto!important;
}
@media (min-width:1450px) {
    .containers {
      height: 580px;
    }

}
@media screen and (max-width: 762px) {
  .chat-pc {
    display: none;
  }
  .chat-mobile {
    display: inherit !important;
  }
  .app {
    top: 0;
    height: 100%;
  }
  .heading {
    height: 70px;
    background-color: #009688;
  }
  .fa-2x {
    font-size: 2.3em !important;
  }
  .heading-avatar {
    padding: 0 !important;
  }
  .heading-avatar-icon img {
    height: 50px;
    width: 50px;
  }
  .heading-compose {
    padding: 5px !important;
  }
  .heading-compose i {
    color: #fff;
    cursor: pointer;
  }
  .heading-dot {
    padding: 5px !important;
    margin-left: 10px !important;
  }
  .heading-dot i {
    color: #fff;
    cursor: pointer;
  }
  .sideBar {
    height: calc(100% - 130px);
  }
  .sideBar-body {
    height: 80px;
  }
  .sideBar-avatar {
    text-align: left;
    padding: 0 8px !important;
  }
  .avatar-icon img {
    height: 55px;
    width: 55px;
  }
  .sideBar-main {
    padding: 0 !important;
  }
  .sideBar-main .row {
    padding: 0 !important;
    margin: 0 !important;
  }
  .sideBar-name {
    padding: 10px 5px !important;
  }
  .name-meta {
    font-size: 16px;
    padding: 5% !important;
  }
  .sideBar-time {
    padding: 10px !important;
  }
  .time-meta {
    text-align: right;
    font-size: 14px;
    padding: 4% !important;
    color: rgba(0, 0, 0, 0.4);
    vertical-align: baseline;
  }
  /*Conversation*/
  .conversation {
    padding: 0 !important;
    margin: 0 !important;
    height: 100%;
    /*width: 100%;*/
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    /*overflow-y: auto;*/
  }
  .message {
    height: calc(100% - 140px);
  }
  .reply {
    height: 70px;
  }
  .reply-emojis {
    padding: 5px 0 !important;
  }
  .reply-emojis i {
    padding: 5px 2px !important;
    font-size: 1.8em !important;
  }
  .reply-main {
    padding: 2px 8px !important;
  }
  .reply-main textarea {
    padding: 8px !important;
    font-size: 18px;
  }
  .reply-recording {
    padding: 5px 0 !important;
  }
  .reply-recording i {
    padding: 5px 0 !important;
    font-size: 1.8em !important;
  }
  .reply-send {
    padding: 5px 0 !important;
  }
  .reply-send i {
    padding: 5px 2px 5px 0 !important;
    font-size: 1.8em !important;
  }
}
</style>