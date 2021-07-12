<template>
  <div>
    <HomesPageHeader :userProfilesData="userData" />
    <div class="containers">
      <div class="main-body mt-1">
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3" v-if="showProfile">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    :src="
                      user.profileImage == null
                        ? 'https://www.gravatar.com/avatar/49475d1f1538f4b301c5d7a6cc634191?s=285&r=g&d=https%3A%2F%2Fwww.bursasporluyuz.org%2Fwp-content%2Fuploads%2Favatars%2Fbursasporluyuz-guest.jpg'
                        : user.profileImage
                    "
                    alt="Yükleniyor..."
                    class="rounded-circle"
                    width="150"
                    height="150"
                    style="object-fit: cover; background-size: cover"
                  />
                  <div class="mt-3">
                    <h4>{{ user.fullName }}</h4>
                    <p class="text-dark font-size-sm text-secondary">
                      {{
                        user.email == null ? "Email belirtilmemiş" : user.email
                      }}
                    </p>
                    <p class="text-muted font-size-sm">Türkiye</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3" v-if="showUbdateProfile">
            <div class="card border-0">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    :src="photoUrl == null ? user.profileImage : photoUrl"
                    class="rounded-circle border border-danger"
                    width="150"
                    height="150"
                    style="object-fit: cover; background-size: cover"
                  />
                  <div
                    v-if="progress != null"
                    class="
                      progress-bar
                      bg-danger
                      progress-bar-striped progress-bar-animated
                    "
                    :style="'width:' + progress + '%'"
                  >
                    {{ Math.floor(progress) }}%
                  </div>
                  <div class="mt-3">
                    <h4>
                      {{
                        user.fullName == null
                          ? "İsim belirtilmemiş"
                          : user.fullName
                      }}
                    </h4>
                    <p class="text-dark text-secodary mb-1">
                      {{
                        user.email == null ? "Email belirtilmemiş" : user.email
                      }}
                    </p>
                    <p class="text-muted font-size-sm">Türkiye</p>
                    <input
                      ref="file4"
                      type="file"
                      @change="processFile($event)"
                      value=""
                      style="display: none"
                    />
                    <button
                      class="btn btn-danger btn-md mt-1 row-button"
                      @click.prevent="$refs.file4.click()"
                      v-if="showUbdateProfile"
                    >
                      Fotoğraf Seç
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8" v-if="showProfile">
            <div class="card mb-3 border-0">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">İsim Soyisim</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{
                      user.fullName == null
                        ? "İsim belirtilmemiş"
                        : user.fullName
                    }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Telefon Numarası</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{
                      user.phone == null ? "Numara belirtilmemiş" : user.phone
                    }}
                  </div>
                </div>
                <hr v-if="!userData.cardIban" />
                <div class="row" v-if="!userData.cardIban">
                  <div class="col-sm-3">
                    <h6 class="mb-0">
                      <img
                        class="d-block mx-auto"
                        src="./credit-card (1).png"
                        alt=""
                      />
                    </h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    TR XXXX XXXX XXXX 1234
                    <small>(Örnektir henüz paylaşılmadı..)</small>
                  </div>
                </div>
                <hr />
                <div
                  class="row"
                  @click.prevent="chanceHostCard"
                  v-if="userData.cardIban"
                >
                  <div
                    class="
                      col-md-8 col-lg-8 col-xl-8 col-sm-12 col-xs-12
                      mx-auto
                    "
                  >
                    <div
                      class="
                        row row-button
                        width-cards
                        border border-dark
                        mt-3
                        p-2
                        rounded
                      "
                      style="width: 100%; cursor: pointer"
                    >
                      <div
                        class="
                          col-md-1
                          d-flex-mobile
                          col-lg-1 col-xl-1 col-sm-12 col-xs-12
                        "
                      >
                        <img src="./house (6).png" alt="" />
                        <i
                          class="
                            fa fa-check
                            text-success
                            h4
                            ml-3
                            display-mobile
                          "
                        >
                        </i>
                      </div>
                      <div
                        class="
                          col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12
                          ml-3 ml-mobile
                          text-center
                        "
                      >
                        <h5 class="pl-2 mt-1">TR {{ userData.cardIban }}</h5>
                      </div>
                      <div class="col-1 display-pc">
                        <i class="fa fa-check text-success h4"> </i>
                      </div>
                      <small class="col-12 text-center mt-1">
                        (Ev sahibi kartınız tanımlanmıştır. Rezervasyon
                        ücretleri iban adresinize gönderilecektir.)
                      </small>
                    </div>
                  </div>
                </div>
                <hr />
                <div
                  class="row"
                  @click.prevent="guestCardRemove"
                  v-if="creditCardData.authId != null"
                >
                  <div
                    class="
                      col-md-8 col-lg-8 col-xl-8 col-sm-12 col-xs-12
                      mx-auto
                    "
                  >
                    <div
                      class="
                        row row-button
                        width-cards
                        border border-dark
                        mt-3
                        p-2
                        rounded
                      "
                      style="width: 100%; cursor: pointer"
                    >
                      <div
                        class="
                          col-md-1
                          d-flex-mobile
                          col-lg-1 col-xl-1 col-sm-12 col-xs-12
                        "
                      >
                        <img src="./masterCard.png" alt="" v-if="masterCard" />
                        <img src="./visa (2).png" alt="" v-if="visa" />
                        <img
                          src="./american-express.png"
                          alt=""
                          v-if="americanExpress"
                        />
                        <i
                          class="
                            fa fa-check
                            text-success
                            h4
                            mt-2
                            display-mobile
                          "
                        >
                        </i>
                      </div>
                      <div
                        class="
                          col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12
                          text-center
                        "
                      >
                        <h5 class="mt-2">
                          TR {{ cardFirstFourNumber }}
                          {{ cardFirstTwoNumber }}** ***
                          {{ creditCardData.lastFourDigits }}
                        </h5>
                      </div>
                      <div class="col-2 display-pc">
                        <i class="fa fa-check text-success h4 mt-2"> </i>
                      </div>
                      <small class="col-12 text-center">
                        (Misafir kartınız tanımlanmıştır. Rezervasyon ücretleri
                        kartınızdan onay verdiğiniz takdirde tahsil
                        edilecektir.)
                      </small>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <button
                      @click.prevent="showProfiles"
                      class="btn btn-danger row-button"
                      v-if="$store.state.authKey != null"
                    >
                      Düzenle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8" v-if="showUbdateProfile">
            <div class="card mb-3 border-0">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">İsim Soyisim</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      v-model="user.fullName"
                      class="form-control w-50 w-100-mobile border border-dark"
                      id="inputFullName1"
                      type="text"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Telefon Numarası</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      v-model="user.phone"
                      class="form-control w-50 w-100-mobile border border-dark"
                      id="inputPhone1"
                      type="text"
                    />
                  </div>
                </div>
                <hr />
                <div class="row margin-left-mobile">
                  <div class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                    <div
                      class="row row-button border border-dark mt-3 p-2 rounded"
                      style="width: 100%; cursor: pointer"
                      @click.prevent="guestCardShow"
                      v-if="cardButtons"
                    >
                      <div class="col-1">
                        <img src="./debit-card (1).png" alt="" />
                      </div>
                      <div class="col-10 text-center">
                        {{
                          creditCardDataRemove
                            ? "Misafir kartını sil"
                            : "Misafir kartı ekle"
                        }}
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5 col-lg-5 col-xl-5 col-sm-12 col-xs-12">
                    <div
                      class="row row-button border border-dark mt-3 p-2 rounded"
                      style="width: 100%; cursor: pointer"
                      v-if="cardButtons"
                      @click.prevent="hostCardShow"
                      @keyup.enter="hostCardShow"
                    >
                      <div class="col-1">
                        <img src="./house (3).png" alt="" />
                      </div>
                      <div class="col-10 text-center">
                        {{
                          !ubdateHostCard
                            ? "Ev sahibi kartı ekle"
                            : "Ev sahibi kartını güncelle"
                        }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" v-if="hostCard == true || guestCard == true">
                  <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                    <button
                      @click.prevent="backCard"
                      class="btn btn-sm btn-outline-dark margin-top-button mr-3"
                      style="margin-top: 20%"
                    >
                      <img
                        src="./house (4).png"
                        class="mb-1 pr-1"
                        v-if="guestCard"
                        alt=""
                      />
                      <img
                        src="./debit-card (2).png"
                        class="pr-1"
                        v-if="hostCard"
                        alt=""
                      />

                      {{ hostCard ? "Misafir kartı" : "Ev sahibi kartı" }}
                    </button>

                    <img src="./credit-card (3).png" alt="" />
                  </div>
                  <div class="col-sm-6 text-secondary mt-2">
                    <div>
                      <div
                        class="form-group"
                        :style="hostCard ? 'margin-top:10%!important' : ''"
                      >
                        <label for="cardNumber" class="font-weight-bold font"
                          >{{
                            hostCard
                              ? ubdateHostCard
                                ? "İban numaranızı güncelleyin"
                                : "İban numaranız"
                              : "Kart Numarası"
                          }}
                          <br v-if="ubdateHostCard" />
                          ({{
                            hostCard
                              ? ubdateHostCard
                                ? "Ev sahibi kartı"
                                : "Ev sahibi kartı"
                              : "Misafir kartı"
                          }})
                          <br />
                          <small
                            >(
                            {{
                              guestCard
                                ? "Kimse kart bilgilerinizi göremez"
                                : "Rezervasyon ücretleri iban adresinize gönderilecektir."
                            }}
                            )</small
                          ></label
                        >
                        <div
                          class="input-group"
                          v-if="
                            hostCard || (guestCard && !creditCardDataRemove)
                          "
                        >
                          <input
                            type="number"
                            class="form-control border border-dark rounded"
                            id="cardNumber"
                            :placeholder="
                              guestCard
                                ? '0000 0000 0000 0000'
                                : 'TR1800 0620 0119 0000 0667 2315'
                            "
                            v-model="creditCard.cardNumber"
                          />

                          <span class="input-group-addon"
                            ><span class="glyphicon glyphicon-lock"></span
                          ></span>
                        </div>
                        <br v-if="!hostCard && creditCardDataRemove" />
                        <button
                          v-if="!hostCard && creditCardDataRemove"
                          class="btn btn-block w-50 btn-outline-danger mt-2"
                          @click.prevent="removeCard"
                        >
                          Kartı sil
                        </button>
                        <small
                          class="text-danger mt-1 text-center"
                          v-if="hostCardIbanError"
                        >
                          {{ hostCardIbanErrorMessage }} !!
                        </small>
                      </div>
                      <div class="form-group" v-if="guestCard">
                        <label
                          for="cardNumber"
                          class="font-weight-bold font"
                          v-if="!creditCardDataRemove"
                          >Kart Sahibinin Adı Soyadı
                        </label>
                        <div class="input-group" v-if="!creditCardDataRemove">
                          <input
                            type="text"
                            class="form-control border border-dark rounded"
                            v-model="creditCard.cardHolderName"
                            id="cardName"
                            placeholder="AD SOYAD"
                          />

                          <span class="input-group-addon"
                            ><span class="glyphicon glyphicon-lock"></span
                          ></span>
                        </div>
                        <small
                          class="text-danger mt-1 text-center"
                          v-if="guestCardNameError"
                        >
                          {{ guestCardNameErrorMessage }} !!
                        </small>
                      </div>
                      <div class="row" v-if="guestCard">
                        <div
                          class="col-xs-8 col-md-8"
                          v-if="!creditCardDataRemove"
                        >
                          <div class="form-group">
                            <label for="expityMonth" class="font-weight-bold"
                              >Son Kullanma Tarihi</label
                            >
                            <div class="d-flex">
                              <div class="col-xs-6 col-lg-9 pl-ziro">
                                <input
                                  type="text"
                                  class="form-control border border-dark"
                                  id="expityMonth"
                                  placeholder="MM"
                                  v-model="creditCard.mm"
                                  required
                                />
                                <small
                                  class="text-danger mt-1 text-center"
                                  v-if="guestCardMmError"
                                >
                                  {{ guestCardMmErrorMessage }} !!
                                </small>
                              </div>
                              <div class="col-xs-6 ml-3 col-lg-10 pl-ziro">
                                <input
                                  type="text"
                                  class="form-control border border-dark"
                                  id="expityYear"
                                  placeholder="YY"
                                  v-model="creditCard.yy"
                                  required
                                />
                                <small
                                  class="text-danger mt-1 text-center"
                                  v-if="guestCardYyError"
                                >
                                  {{ guestCardYyErrorMessage }} !!
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <button class="btn btn-dark mr-3" @click.prevent="backProfile">Geri</button>
                    <button
                      @click="ubdateProfiles"
                      v-if="goUbdateButton"
                      class="btn btn-danger row-button"
                    >
                      {{ !ubdateButtonLoading ? "Güncelle" : "Yükleniyor..." }}
                    </button>
                  </div>
                </div>
              </div>
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
import HomesPageHeader from "@/components/common/homesPageHeader";
export default {
  layout: "homes",
  components: {
    HomesPageHeader,
  },
  data() {
    return {
      user: {
        fullName: null,
        phone: null,
        profileImage: null,
        firebaseId: null,
        cardHolderName: null,
        hostIbanCardId: null,
        cardIban: null,
        cardName: null,
      },
      creditCard: {
        cardHolderName: null,
        cardNumber: null,
        mm: null,
        yy: null,
      },
      guestCardNameError: false,
      guestCardNameErrorMessage: null,
      guestCardYyError: false,
      guestCardYyErrorMessage: null,
      guestCardMmError: false,
      guestCardMmErrorMessage: null,
      hostCard: false,
      ubdateHostCard: false,
      cardButtons: true,
      guestCard: false,
      photoUrl: null,
      goUbdateButton: true,
      ubdateButtonLoading: false,
      showProfile: true,
      creditCardData: [],
      creditCardDataRemove: false,
      userData: [],
      progress: null,
      showUbdateProfile: false,
      hostCardIbanError: false,
      visa: false,
      masterCard: false,
      americanExpress: false,
      cardFirstTwoNumber: null,
      cardFirstFourNumber: null,
    };
  },
  methods: {
    processFile(event) {
      let photo1Id = Math.random(Math.round()) * 10000000000;
      let file = event.target.files[0];
      this.photoUrl = URL.createObjectURL(file);
      var storageRef = this.$fire.storage
        .ref("userPhoto/")
        .child("photos1/" + photo1Id)
        .put(file);
      storageRef.on(
        "state_changed",
        (snapshot) => {
          this.progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.$fire.storage
            .ref("userPhoto/")
            .child("photos1/" + photo1Id)
            .getDownloadURL()
            .then((url) => {
              this.user.profileImage = url;
            });
        }
      );
      //  console.log(this.photos.photo1)
    },
    showProfiles() {
      (this.showProfile = false), (this.showUbdateProfile = true);
    },
    ubdateProfiles() {
      this.ubdateButtonLoading = true;
      let cardNumber = this.creditCard.cardNumber;
      if (cardNumber != null) {
        if (this.hostCard) {
          if (this.ubdateHostCard == true) {
            this.ubdateHostCards();
          } else {
            this.addHostCard();
          }
        } else {
          this.addGuestCard();
        }
      } else {
        this.ubdateOnlyNameAndPhone();
      }
    },
    ubdateOnlyNameAndPhone() {
      this.$store
        .dispatch("ubdateUserProfiles", {
          firebaseId: this.user.firebaseId,
          user: {
            fullName: this.user.fullName,
            phone: this.user.phone,
            email: this.user.email,
            authId: this.$store.state.authKey,
            firebaseId: this.user.firebaseId,
            profileImage: this.user.profileImage,
            hostIbanCardId: this.userData.hostIbanCardId,
            cardIban: this.userData.cardIban,
            cardName: this.userData.cardName,
          },
        })
        .then((res) => {
          window.location.reload();
        });
    },
    addHostCard() {
      let cardName = this.creditCard.cardHolderName;
      let cardNumber = this.creditCard.cardNumber;
      axios
        .post("https://www.bedfied.com/api/addHostCard", {
          authId: this.$store.state.authKey,
          iban: "TR" + cardNumber, // TR 1800 0620 0119 0000 0667 2315 format
          name: cardName,
          email: this.user.email,
        })
        .then((result) => {
          let data = result.data.data;
          if (data.status == "failure") {
            let errorMessage = data.errorMessage;
            this.hostCardIbanError = true;
            this.ubdateButtonLoading = false;
            this.hostCardIbanErrorMessage = errorMessage;
            if (this.hostCardIbanError == true) {
              setTimeout(() => {
                this.hostCardIbanError = false;
              }, 2000);
            }
          } else {
            this.$store
              .dispatch("ubdateUserProfiles", {
                firebaseId: this.user.firebaseId,
                user: {
                  profileImage: this.user.profileImage,
                  fullName: this.user.fullName,
                  phone: this.user.phone,
                  email: this.user.email,
                  firebaseId: this.user.firebaseId,
                  hostIbanCardId: data.subMerchantKey,
                  authId: this.$store.state.authKey,
                  cardIban: cardNumber,
                  cardName: cardName,
                },
              })
              .then((res) => {
                window.location.reload();
              });
          }
        });
    },
    ubdateHostCards() {
      let cardName = this.creditCard.cardHolderName;
      let cardNumber = this.creditCard.cardNumber;
      axios
        .post("https://www.bedfied.com/api/ubdateHostCard", {
          authId: this.$store.state.authKey,
          iban: "TR" + cardNumber, // TR 1800 0620 0119 0000 0667 2315 format
          name: cardName + "Bedfied",
          email: this.user.email,
          subMerchantKey: this.userData.hostIbanCardId,
        })
        .then((res) => {
          let data = res.data.data;
          if (data.status == "failure") {
            let errorMessage = data.errorMessage;
            this.hostCardIbanError = true;
            this.ubdateButtonLoading = false;
            this.hostCardIbanErrorMessage = errorMessage;
            if (this.hostCardIbanError == true) {
              setTimeout(() => {
                this.hostCardIbanError = false;
              }, 2000);
            }
          } else {
            let cardNumbers = this.creditCard.cardNumber;
            axios
              .put(
                "https://munhasir-ad882-default-rtdb.firebaseio.com/userProfileDATA/" +
                  this.userData.firebaseId +
                  "/.json",
                {
                  profileImage: this.user.profileImage,
                  fullName: this.user.fullName,
                  phone: this.user.phone,
                  email: this.user.email,
                  firebaseId: this.userData.firebaseId,
                  hostIbanCardId: this.userData.hostIbanCardId,
                  authId: this.$store.state.authKey,
                  cardIban: cardNumbers,
                  cardName: cardName,
                }
              )
              .then((res) => {
                if (res.status == 200) {
                    window.location.reload();
                }
              });
          }
        });
    },
    addGuestCard() {
      let cardName = this.creditCard.cardHolderName;
      let cardNumber = this.creditCard.cardNumber;
      let mm = this.creditCard.mm;
      let yy = this.creditCard.yy;
      axios
        .post("https://www.bedfied.com/api/addGuestCard", {
          authId: this.$store.state.authKey,
          cardNumber: cardNumber,
          cardHolderName: cardName,
          mm: mm,
          yy: yy,
          email: this.user.email,
        })
        .then((res) => {
          let data = res.data.result;
          if (data.status == "failure") {
            this.ubdateButtonLoading = false;
            let errorMessage = data.errorMessage;
            if (errorMessage == "expireMonth geçersizdir") {
              this.guestCardMmError = true;
              this.guestCardMmErrorMessage = "Ay bilgisi yanlış";
              if (this.guestCardMmError == true) {
                setTimeout(() => {
                  this.guestCardMmError = false;
                }, 2000);
              }
            }
            if (errorMessage == "expireYear geçersizdir") {
              this.guestCardYyError = true;
              this.guestCardYyErrorMessage = "Yıl bilgisi yanlış";
              if (this.guestCardYyError == true) {
                setTimeout(() => {
                  this.guestCardYyError = false;
                }, 2000);
              }
            }
            if (errorMessage == "cardHolderName gönderilmesi zorunludur") {
              this.guestCardNameError = true;
              this.guestCardNameErrorMessage =
                "Kart sahibinin Adı Soyadı hatalı";
              if (this.guestCardNameError == true) {
                setTimeout(() => {
                  this.guestCardNameError = false;
                }, 2000);
              }
            }
            if (errorMessage == "Kart numarası geçersizdir") {
              this.hostCardIbanError = true;
              this.hostCardIbanErrorMessage = errorMessage;
              if (this.hostCardIbanError == true) {
                setTimeout(() => {
                  this.hostCardIbanError = false;
                }, 2000);
              }
            }
          } else {
            this.$store.dispatch("ubdateUserProfiles", {
              firebaseId: this.userData.firebaseId,
              user: {
                authId: this.$store.state.authKey,
                cardIban: this.userData.cardIban,
                email: this.user.email,
                firebaseId: this.userData.firebaseId,
                fullName: this.user.fullName,
                hostIbanCardId: this.userData.hostIbanCardId,
                phone: this.user.phone,
                profileImage: this.user.profileImage,
              },
            });
            axios
              .post(
                "https://munhasir-ad882-default-rtdb.firebaseio.com/creaditCards.json",
                {
                  binNumber: data.binNumber,
                  cardAlias: data.cardAlias,
                  cardAssociation: data.cardAssociation,
                  cardBankCode: data.cardBankCode,
                  cardBankName: data.cardBankName,
                  cardFamily: data.cardFamily,
                  cardToken: data.cardToken,
                  cardType: data.cardType,
                  cardUserKey: data.cardUserKey,
                  email: data.email,
                  authId: this.$store.state.authKey,
                  lastFourDigits: data.lastFourDigits,
                }
              )
              .then((res) => {
                window.location.reload();
              });
          }
        });
    },
    hostCardShow() {
      this.hostCard = true;
      this.cardButtons = false;
    },
    guestCardShow() {
      this.cardButtons = false;
      this.guestCard = true;
    },
    backCard() {
      if (this.hostCard) {
        this.guestCard = true;
        this.hostCard = false;
      } else {
        this.guestCard = false;
        this.hostCard = true;
      }
    },
    backProfile(){
      (this.showProfile = true), (this.showUbdateProfile = false);
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
            this.user.firebaseId = newArray.firebaseId;
            this.user.authId = newArray.authId;
            if (newArray.email != undefined) {
              this.user.email = newArray.email;
            }
            if (newArray.profileImage != undefined) {
              this.user.profileImage = newArray.profileImage;
            }
            if (newArray.fullName != undefined) {
              this.user.fullName = newArray.fullName;
            }
            if (newArray.phone != undefined) {
              this.user.phone = newArray.phone;
            }
            this.userData = newArray;
            if (this.userData.cardIban != null) {
              if (this.userData.hostIbanCardId != null) {
                this.ubdateHostCard = true;
              }
            }
          }
        });
    },
    getCreaditCards() {
      axios
        .get(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/creaditCards.json"
        )
        .then((res) => {
          let data = res.data;
          let creaditData = [];
          let myCreaditData = [];
          for (let key in data) {
            creaditData.push({ firebaseId: key, ...data[key] });
          }
          myCreaditData = creaditData.filter(
            (s) => s.authId == this.$store.state.authKey
          );
          if (myCreaditData.length != 0) {
            let creaditDatas = myCreaditData[0];
            if (creaditDatas.cardAssociation == "MASTER_CARD") {
              this.masterCard = true;
            }
            if (creaditDatas.cardAssociation == "VISA") {
              this.visa = true;
            }
            if (creaditDatas.cardAssociation == "AMERICAN_EXPRESS") {
              this.americanExpress = true;
            }
            this.creditCardData = creaditDatas;
            let binNumber = this.creditCardData.binNumber;
            let cardSixNumber = binNumber.toString();
            let sayi = cardSixNumber.slice(
              cardSixNumber.length - 2,
              cardSixNumber.length
            );
            let sayi2 = cardSixNumber.slice(0, 4);
            this.cardFirstTwoNumber = sayi;
            this.cardFirstFourNumber = sayi2;
            this.creditCardDataRemove = true;
          }
        });
    },
    chanceHostCard() {
      (this.showProfile = false), (this.showUbdateProfile = true);
      this.hostCard = true;
      this.cardButtons = false;
      this.ubdateHostCard = true;
    },
    guestCardRemove() {
      (this.showProfile = false), (this.showUbdateProfile = true);
      this.guestCard = true;
      this.cardButtons = false;
      this.creditCardDataRemove = true;
    },
    removeCard() {
      axios
        .post("https://www.bedfied.com/api/removeGuestCard", {
          cardUserKey: this.creditCardData.cardUserKey,
        })
        .then((res) => {
          let data = res.data;
          if (data.result.status == "success") {
            axios
              .delete(
                "https://munhasir-ad882-default-rtdb.firebaseio.com/creaditCards/" +
                  this.creditCardData.firebaseId +
                  "/.json"
              )
              .then((res) => {
                window.location.reload();
              });
          }
        });
    },
  },
  created() {
    this.getUserDATA();
    this.getCreaditCards();
  },
};
</script>

<style scoped>
.row-button {
  transition: transform 80ms ease-in;
}
.display-pc {
  display: inherit;
}
.display-mobile {
  display: none;
}
@media (max-width: 762px) {
  .margin-left-mobile {
    margin-left: 1%;
    width: 110%;
  }
  .margin-top-button {
    margin-top: 10% !important;
  }
  .w-100-mobile {
    width: 100% !important;
    margin-top: 3%;
  }
  .d-flex-mobile {
    display: flex;
    justify-content: center;
  }
  .ml-mobile {
    margin-left: 0px !important;
  }
  .display-pc {
    display: none !important;
  }
  .display-mobile {
    display: inherit !important;
  }
  .width-cards {
    width: 120% !important;
  }
  .containers {
    margin-left: 5% !important;
    width: 83% !important;
  }
}
.row-button:active {
  transform: scale(0.95);
}

.panel-title {
  display: inline;
  font-weight: bold;
}
.checkbox.pull-right {
  margin: 0;
}
.pl-ziro {
  padding-left: 0px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.containers {
  width: 80%;
  height: 100% !important;
  margin-right: auto;
  margin-left: auto;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
</style>