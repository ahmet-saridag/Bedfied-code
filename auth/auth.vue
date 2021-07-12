
<template>
  <div>
    <div class="web-auth">
      <div class="container container-panels" id="container" v-if="!rightPanel">
        <div class="form-container text-center sign-in-container">
          <nav class="mt-0">
            <img src="./placeholder (3).png" alt="" />
            <h1 class="mb-5 mt-2">
              <span style="letter-spacing: -1px"
                >Merhaba, haydi üye olalım!</span
              >
            </h1>

            <GoogleLogin
              :params="params"
              :onSuccess="LoginWithGoogle"
              :onFailure="onFailure"
              class="row row-button bg-white text-dark p-2 rounded border border-dark"
              style="width: 110%; cursor: pointer"
            >
              <div class="col-1">
                <img src="./google (1).png" class="pr-4" alt="" />
              </div>

              <div class="col-10 text-center">Google ile devam et</div>
            </GoogleLogin>
            <small
              class="font-weight-bold text-dark mt-2"
              v-if="onFailureMessage"
              >E-posta ile devam etmeyi deneyin!</small
            >
            <small
              class="font-weight-bold text-dark mt-2"
              v-if="onFailureMessageGoogle"
              >Bu Google hesabı kullanılıyor giriş yapmayı deneyin!</small
            >

            <div
              class="row row-button border border-dark mt-3 p-2 rounded"
              style="width: 110%; cursor: pointer"
              @click.prevent="SignUpWithEmail"
              v-if="!SignUpWithEmailAndPassword"
            >
              <div class="col-1">
                <img src="./mail.png" class="pr-4" alt="" />
              </div>
              <div class="col-10 text-center">E-posta ile devam et</div>
            </div>
            <transition name="transition-form">
              <div
                class="form-group"
                v-if="SignUpWithEmailAndPassword"
                style="width: 110%"
              >
                <input
                  type="email"
                  class="form-control border border-dark mt-3"
                  placeholder="E-posta adresiniz.."
                  v-model="user.email"
                  @blur="$v.user.email.$touch()"
                  :class="{ 'is-invalid': $v.user.email.$error }"
                  id="email"
                  @keyup.enter="LoginWithEmail"
                />
                <small
                  class="font-weight-bold text-dark"
                  v-if="$v.user.email.$error"
                  >Lütfen doğru bir mail adresi giriniz!</small
                >
                <input
                  :type="visibility ? 'password' : 'text'"
                  class="form-control font-weight-bold border border-dark mt-3"
                  :class="{ 'is-invalid': $v.user.password.$error }"
                  placeholder="Şifreniz.."
                  v-model="user.password"
                  @blur="$v.user.password.$touch()"
                  id="inputPassword"
                  autocomplete="on"
                  @keyup.enter="LoginWithEmail"
                />

                <img
                  class="float-right password-show"
                  style="cursor: pointer"
                  src="./invisible.png"
                  alt=""
                  v-if="visibility"
                  @click.prevent="visibility = !visibility"
                />
                <img
                  v-else
                  class="float-right password-show"
                  style="cursor: pointer"
                  src="./visibility.png"
                  alt=""
                  @click.prevent="visibility = !visibility"
                />

                <small
                  v-if="$v.user.password.$error"
                  class="form-text font-weight-bold text-dark mb-2"
                  >Eksik veya yanlış şifre giriniz!</small
                >
                <button
                  class="btn text-white btn-block row-button mt-3"
                  style="background: #ff4b2b"
                  @click.prevent="LoginWithEmail"
                  :disabled="$v.$invalid"
                >
                  Devam et
                </button>
                <div
                  v-if="!isUser && this.$store.state.status == 400"
                  class="form-text text-dark font-weight-bold mt-2 text-center"
                >
                  Email ve şifre hatalı lütfen tekrar deneyiniz..
                </div>
              </div>
            </transition>
          </nav>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Sen de katıl!</h1>
              <p>Kişisel bilgilerinizi girin ve bizimle yolculuğa başlayın!</p>
              <button
                @click.prevent="SignIn"
                class="row-button btn text-white border border-white"
                id="signIn"
              >
                Giriş yap
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container container-panels right-panel-active"
        v-if="rightPanel"
        id="container"
      >
        <div class="form-container sign-up-container">
          <nav class="mt-0">
            <img src="./placeholder (3).png" alt="" />
            <h1 class="mb-5 mt-3">
              <span style="letter-spacing: -1px"
                >Selam, seni görmek ne güzel!
              </span>
            </h1>
            <GoogleLogin
              :params="params"
              :onSuccess="SignInWithGoogle"
              :onFailure="onFailureSign"
              class="row row-button bg-white text-dark p-2 rounded border border-dark"
              style="width: 110%; cursor: pointer"
            >
              <div class="col-1">
                <img src="./google (1).png" class="pr-4" alt="" />
              </div>

              <div class="col-10 text-center">Google ile giriş yap</div>
            </GoogleLogin>
            <small
              class="font-weight-bold text-dark mt-2"
              v-if="onFailureMessageGoogleSignIn"
              >Bu Google hesabı kayıtlı değil önce üye olun!</small
            >
            <small
              class="font-weight-bold text-dark mt-2"
              v-if="onFailureMessageSignIn"
              >E-posta ile devam etmeyi deneyin!</small
            >

            <div
              @click.prevent="SignInWithEmail"
              v-if="!SignInWithEmailAndPassword"
              class="row row-button border border-dark mt-3 p-2 rounded"
              style="width: 110%; cursor: pointer"
            >
              <div class="col-1">
                <img src="./mail.png" class="pr-4" alt="" />
              </div>
              <div class="col-10 text-center">E-posta ile giriş yap</div>
            </div>

            <transition name="transition-form">
              <div
                class="form-group"
                v-if="SignInWithEmailAndPassword"
                style="width: 110%"
              >
                <input
                  type="email"
                  class="form-control border border-dark mt-3"
                  placeholder="E-posta adresiniz.."
                  v-model="user.email"
                  @blur="$v.user.email.$touch()"
                  :class="{ 'is-invalid': $v.user.email.$error }"
                  id="email"
                  @keyup.enter="LoginWithEmail"
                />
                <small
                  class="font-weight-bold text-dark"
                  v-if="$v.user.email.$error"
                  >Lütfen doğru bir mail adresi giriniz!</small
                >
                <input
                  :type="visibility ? 'password' : 'text'"
                  class="form-control border border-dark mt-3"
                  placeholder="Şifreniz.."
                  v-model="user.password"
                  :class="{ 'is-invalid': $v.user.password.$error }"
                  @blur="$v.user.password.$touch()"
                  id="inputPassword"
                  @keyup.enter="LoginWithEmail"
                />
                <img
                  class="float-right password-show"
                  style="cursor: pointer"
                  src="./invisible.png"
                  alt=""
                  v-if="visibility"
                  @click.prevent="visibility = !visibility"
                />
                <img
                  v-else
                  class="float-right password-show"
                  style="cursor: pointer"
                  src="./visibility.png"
                  alt=""
                  @click.prevent="visibility = !visibility"
                />
                <small
                  v-if="$v.user.password.$error"
                  class="form-text font-weight-bold text-dark mb-2"
                  >Eksik veya yanlış şifre giriniz!</small
                >
                <button
                  class="btn text-white btn-block row-button mt-3"
                  style="background: #ff416c"
                  @click.prevent="LoginWithEmail"
                  :disabled="$v.$invalid"
                  @keyup.enter="LoginWithEmail"
                >
                  Giriş yap
                </button>
                <div
                  v-if="isUser && this.$store.state.status == 400"
                  class="form-text text-dark font-weight-bold mt-2 text-center"
                >
                  Email ve şifre hatalı lütfen tekrar deneyiniz..
                </div>
              </div>
            </transition>
          </nav>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Tekrar Hoşgeldin!</h1>
              <p>
                Bedfied'a katılmak için lütfen kişisel bilgilerinizle giriş
                yapın!
              </p>
              <button
                @click.prevent="SignUp"
                class="row-button btn text-white border border-white"
                id="signIn"
              >
                Kayıt ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bu sayfanın mobile kısmı -->
    <div class="mobile-auth">
      <div class="container-mobile" v-if="!rightPanel">
        <div class="text-center">
          <nav class="mt-0">
            <img src="./placeholder (3).png" alt="" />
            <h1 class="mb-5 mt-2">
              <span style="letter-spacing: -1px"
                >Merhaba, haydi üye olalım!</span
              >
            </h1>

            <GoogleLogin
              :params="params"
              :onSuccess="LoginWithGoogle"
              :onFailure="onFailure"
              class="row row-button bg-white text-dark p-2 rounded border border-dark"
              style="width: 110%; cursor: pointer"
            >
              <div class="col-1">
                <img src="./google (1).png" class="pr-4" alt="" />
              </div>

              <div class="col-10 text-center">Google ile devam et</div>
            </GoogleLogin>
            <small
              class="font-weight-bold text-dark mt-2"
              v-if="onFailureMessage"
              >E-posta ile devam etmeyi deneyin!</small
            >
            <small
              class="font-weight-bold text-dark mt-2"
              v-if="onFailureMessageGoogle"
              >Bu Google hesabı kullanılıyor giriş yapmayı deneyin!</small
            >

            <div
              class="row row-button border border-dark mt-3 p-2 rounded"
              style="width: 110%; cursor: pointer"
              @click.prevent="SignUpWithEmail"
              v-if="!SignUpWithEmailAndPassword"
            >
              <div class="col-1">
                <img src="./mail.png" class="pr-4" alt="" />
              </div>
              <div class="col-10 text-center">E-posta ile devam et</div>
            </div>
            <transition name="transition-form">
              <div
                class="form-group"
                v-if="SignUpWithEmailAndPassword"
                style="width: 110%"
              >
                <input
                  type="email"
                  class="form-control border border-dark mt-3"
                  placeholder="E-posta adresiniz.."
                  v-model="user.email"
                  @blur="$v.user.email.$touch()"
                  :class="{ 'is-invalid': $v.user.email.$error }"
                  id="email"
                  @keyup.enter="LoginWithEmail"
                />
                <small
                  class="font-weight-bold text-dark"
                  v-if="$v.user.email.$error"
                  >Lütfen doğru bir mail adresi giriniz!</small
                >
                <input
                  :type="visibility ? 'password' : 'text'"
                  class="form-control font-weight-bold border border-dark mt-3"
                  :class="{ 'is-invalid': $v.user.password.$error }"
                  placeholder="Şifreniz.."
                  v-model="user.password"
                  @blur="$v.user.password.$touch()"
                  id="inputPassword"
                  autocomplete="on"
                  @keyup.enter="LoginWithEmail"
                />
                <img
                  class="float-right password-show-mobile"
                  style="cursor: pointer"
                  src="./invisible.png"
                  alt=""
                  v-if="visibility"
                  @click.prevent="visibility = !visibility"
                />
                <img
                  v-else
                  class="float-right password-show-mobile"
                  style="cursor: pointer"
                  src="./visibility.png"
                  alt=""
                  @click.prevent="visibility = !visibility"
                />

                <small
                  v-if="$v.user.password.$error"
                  class="form-text font-weight-bold text-dark mb-2"
                  >Eksik veya yanlış şifre giriniz!</small
                >
                <button
                  class="btn text-white btn-block row-button mt-3"
                  style="background: #ff4b2b"
                  @click.prevent="LoginWithEmail"
                  :disabled="$v.$invalid"
                >
                  Devam et
                </button>
                <div
                  v-if="!isUser && this.$store.state.status == 400"
                  class="form-text text-dark font-weight-bold mt-2 text-center"
                >
                  Email ve şifre hatalı lütfen tekrar deneyiniz..
                </div>
              </div>
            </transition>
            <button
              @click.prevent="SignIn"
              class="row-button signIn-button btn text-white"
              id="signIn"
            >
              Giriş yap
            </button>
          </nav>
        </div>
      </div>
      <div
        class="container-mobile right-panel-active"
        v-if="rightPanel"
        id="container"
      >
        <div class="text-center">
          <nav class="mt-0">
            <img src="./placeholder (3).png" alt="" />
            <h1 class="mb-5 mt-3">
              <span style="letter-spacing: -1px"
                >Selam, seni görmek ne güzel!
              </span>
            </h1>
            <GoogleLogin
              :params="params"
              :onSuccess="SignInWithGoogle"
              :onFailure="onFailureSign"
              class="row row-button bg-white text-dark p-2 rounded border border-dark"
              style="width: 110%; cursor: pointer"
            >
              <div class="col-1">
                <img src="./google (1).png" class="pr-4" alt="" />
              </div>

              <div class="col-10 text-center">Google ile giriş yap</div>
            </GoogleLogin>
            <small
              class="font-weight-bold text-dark mt-2"
              v-if="onFailureMessageGoogleSignIn"
              >Bu Google hesabı kayıtlı değil önce üye olun!</small
            >
            <small
              class="font-weight-bold text-dark mt-2"
              v-if="onFailureMessageSignIn"
              >E-posta ile devam etmeyi deneyin!</small
            >

            <div
              @click.prevent="SignInWithEmail"
              v-if="!SignInWithEmailAndPassword"
              class="row row-button border border-dark mt-3 p-2 rounded"
              style="width: 110%; cursor: pointer"
            >
              <div class="col-1">
                <img src="./mail.png" class="pr-4" alt="" />
              </div>
              <div class="col-10 text-center">E-posta ile giriş yap</div>
            </div>

            <transition name="transition-form">
              <div
                class="form-group"
                v-if="SignInWithEmailAndPassword"
                style="width: 110%"
              >
                <input
                  type="email"
                  class="form-control border border-dark mt-3"
                  placeholder="E-posta adresiniz.."
                  v-model="user.email"
                  @blur="$v.user.email.$touch()"
                  :class="{ 'is-invalid': $v.user.email.$error }"
                  id="email"
                  @keyup.enter="LoginWithEmail"
                />
                <small
                  class="font-weight-bold text-dark"
                  v-if="$v.user.email.$error"
                  >Lütfen doğru bir mail adresi giriniz!</small
                >
                <input
                  :type="visibility ? 'password' : 'text'"
                  class="form-control border border-dark mt-3"
                  placeholder="Şifreniz.."
                  v-model="user.password"
                  :class="{ 'is-invalid': $v.user.password.$error }"
                  @blur="$v.user.password.$touch()"
                  id="inputPassword"
                  @keyup.enter="LoginWithEmail"
                />

                <img
                  class="float-right password-show-mobile"
                  style="cursor: pointer"
                  src="./invisible.png"
                  alt=""
                  v-if="visibility"
                  @click.prevent="visibility = !visibility"
                />
                <img
                  v-else
                  class="float-right password-show-mobile"
                  style="cursor: pointer"
                  src="./visibility.png"
                  alt=""
                  @click.prevent="visibility = !visibility"
                />
                <small
                  v-if="$v.user.password.$error"
                  class="form-text font-weight-bold text-dark mb-2"
                  >Eksik veya yanlış şifre giriniz!</small
                >
                <button
                  class="btn text-white btn-block row-button mt-3"
                  style="background: #ff416c"
                  @click.prevent="LoginWithEmail"
                  :disabled="$v.$invalid"
                  @keyup.enter="LoginWithEmail"
                >
                  Giriş yap
                </button>
                <div
                  v-if="isUser && this.$store.state.status == 400"
                  class="form-text text-dark font-weight-bold mt-2 text-center"
                >
                  Email ve şifre hatalı lütfen tekrar deneyiniz..
                </div>
              </div>
            </transition>
            <button
              @click.prevent="SignUp"
              class="row-button signUp-button btn text-white"
              id="signIn"
            >
              Kayıt ol
            </button>
          </nav>
        </div>
      </div>

      <div style="height: 100px"></div>
    </div>
  </div>
</template>
<script>
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
  sameAs,
  between,
} from "vuelidate/lib/validators";
import GoogleLogin from "vue-google-login";
export default {
  layout: "homes",
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      rightPanel: false,
      visibility: true,
      isUser: false,
      onFailureMessage: false,
      onFailureMessageGoogle: false,
      onFailureMessageGoogleSignIn: false,
      SignUpWithEmailAndPassword: false,
      SignInWithEmailAndPassword: false,
      onFailureMessageSignIn: false,
      params: {
        client_id:
          "53685875917-shrbc62r6abdhefof6mftvc10kr6tbhl.apps.googleusercontent.com",
      },
    };
  },
  components: {
    GoogleLogin,
  },
  validations: {
    user: {
      email: {
        required,
        email,
        minLength: minLength(7),
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },

  methods: {
    LoginWithEmail() {
      this.$store
        .dispatch("newUser", {
          user: this.user,
          isUser: this.isUser,
        })
        .then((res) => {
          if (this.$store.state.status != 400) {
            window.history.back();
          }
        });
    },
    LoginWithGoogle(googleUser) {
      let userData = googleUser.getBasicProfile();
      let fullName = userData.Ue;
      let profileImage = userData.CJ;
      let email = userData.Mt;
      let password = userData.KS;
      this.$store
        .dispatch("newUser", {
          user: {
            email: email,
            password: password,
            fullName: fullName,
            profileImage: profileImage,
            authId: this.$store.state.authKey,
          },
          isUser: this.isUser,
        })
        .then((res) => {
          if (this.$store.state.status != 400) {
            window.history.back();
          } else {
            this.onFailureMessageGoogle = true;

            setTimeout(() => {
              this.onFailureMessageGoogle = false;
            }, 3000);
          }
          
        });
    },
    SignInWithGoogle(googleUserSign) {
      let userData = googleUserSign.getBasicProfile();
      let fullName = userData.Ue;
      let profileImage = userData.CJ;
      let email = userData.Mt;
      let password = userData.KS;
      this.$store
        .dispatch("newUser", {
          user: {
            email: email,
            password: password,
            fullName: fullName,
            profileImage: profileImage,
            authId: this.$store.state.authKey,
          },
          isUser: this.isUser,
        })
        .then((res) => {
          if (this.$store.state.status != 400) {
            window.history.back();
          } else {
            this.onFailureMessageGoogleSignIn = true;

            setTimeout(() => {
              this.onFailureMessageGoogleSignIn = false;
            }, 3000);
          }
        });
    },
    onFailure(googleUser) {
      this.onFailureMessage = true;
      setTimeout(() => {
        this.onFailureMessage = false;
      }, 3000);
    },
    onFailureSign() {
      this.onFailureMessageSignIn = true;
      setTimeout(() => {
        this.onFailureMessageSignIn = false;
      }, 3000);
    },
    SignUpWithEmail() {
      this.SignUpWithEmailAndPassword = !this.SignUpWithEmailAndPassword;
    },
    SignInWithEmail() {
      this.SignInWithEmailAndPassword = !this.SignInWithEmailAndPassword;
    },

    SignIn() {
      this.rightPanel = true;
      this.isUser = true;
      // isUser false ise kayıt ol true ise giriş yap
    },
    SignUp() {
      this.rightPanel = false;
      this.isUser = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");




.password-show-mobile {
  margin-top: -8%;
   margin-right: 3%;
}


.signIn-button {
  margin: 10% 0px;
  background: linear-gradient(to right, rgba(0, 243, 141, 1), #009eff);
}
.signUp-button {
  margin: 10% 0px;
  background: #f93b3b;
}
.password-show {
  margin-top: -6%;
  margin-right: 3%;
}
@media (min-width: 1450px) and (max-width: 1550px) {
  .password-show {
    margin-top: -5.5%;
    margin-right: 3%;
  }
}
@media (min-width: 1550px) {
  .password-show {
    margin-top: -4.5%;
    margin-right: 3%;
  }
}
.mobile-auth {
  display: none;
}
@media only screen and (max-width: 762px) {
  .mobile-auth {
    display: inherit !important;
    height: 100%;
  }
  .web-auth {
    display: none;
  }
}
* {
  box-sizing: border-box;
}
.transition-form-enter-active,
.transition-form-leave-active {
  transition: opacity 0.4s;
}
.transition-form-enter,
.transition-form-leave-active {
  opacity: 0;
}
nav {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}
.row-button {
  transition: transform 80ms ease-in;
}

.row-button:active {
  transform: scale(0.95);
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 70%;
  max-width: 100%;
  min-height: 500px;
  font-family: "Titillium Web", sans-serif !important;
}
.container-mobile {
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 800px;
  max-width: 100%;
  min-height: 500px;
  margin-top: 35%;
  font-family: "Titillium Web", sans-serif !important;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff416c, #ff4b2b);
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-img-left {
  width: 40%;
  /* Link to your background image using in the property below! */
  background: scroll center
    url("https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80");
  background-size: cover;
  object-fit: cover;
  background-position: center center;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 80%;
}

.form-signin .btn {
  font-size: 70%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}
</style>
   


