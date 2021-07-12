<template>
  <div class="container-fluid ml-4" v-if="evaluationAll != 0">
    <hr class="mt-5 w-75" />

    <div class="row pc-row">
      <div class="col-11 col-md-12 col-lg-12 col-xl-12 mt-4 p-0">
        <h4 class="font-weight-bold mb-5">
          <img src="../İcons/star (1).png" alt="" />
          <span
            >{{ generalEvaluation }} ({{
              evaluationAll.length
            }}
            Değerlendirme)</span
          >
        </h4>
        <div class="row mb-4">
          <div class="col-3 col-md-2 col-lg-2 col-xl-2 mb-3">
            <h5>Temizlik</h5>
          </div>
          <div class="col-7 col-md-3 col-lg-3 col-xl-3 mb-3">
            <meter
              id="meter"
              class="meter"
              :value="cleanValue"
              max="5"
              min="0"
            ></meter>
          </div>
          <div class="col-1 col-md-1 col-xl-1 col-lg-1 mb-3">
            <div class="">{{ cleanValue }}</div>
          </div>
          <div class="col-3 col-md-2 col-lg-2 col-xl-2 mb-3">
            <h5>İletişim</h5>
          </div>
          <div class="col-7 col-md-3 col-lg-3 col-xl-3 mb-3">
            <meter
              id="meter"
              class="meter"
              :value="contactValue"
              max="5"
              min="0"
            ></meter>
          </div>
          <div class="col-1 col-md-1 col-xl-1 col-lg-1 mb-3">
            <div class="">{{ contactValue }}</div>
          </div>
          <div class="col-3 col-md-2 col-lg-2 col-xl-2 mb-3">
            <h5>Karşılama</h5>
          </div>
          <div class="col-7 col-md-3 col-lg-3 col-xl-3 mb-3">
            <meter
              id="meter"
              class="meter"
              :value="meetingValue"
              max="5"
              min="0"
            ></meter>
          </div>
          <div class="col-1 col-md-1 col-xl-1 col-lg-1 mb-3">
            <div class="">{{ meetingValue }}</div>
          </div>
          <div class="col-3 col-md-2 col-lg-2 col-xl-2 mb-3">
            <h5>Doğruluk</h5>
          </div>
          <div class="col-7 col-md-3 col-lg-3 col-xl-3 mb-3">
            <meter
              id="meter"
              class="meter"
              :value="honestValue"
              max="5"
              min="0"
            ></meter>
          </div>
          <div class="col-1 col-md-1 col-xl-1 col-lg-1 mb-3">
            <div class="">{{ honestValue }}</div>
          </div>
          <div class="col-3 col-md-2 col-lg-2 col-xl-2 mb-3">
            <h5>Konum</h5>
          </div>
          <div class="col-7 col-md-3 col-lg-3 col-xl-3 mb-3">
            <meter
              id="meter"
              class="meter"
              :value="mapValue"
              max="5"
              min="0"
            ></meter>
          </div>
          <div class="col-1 col-md-1 col-xl-1 col-lg-1 mb-3">
            <div class="">{{ mapValue }}</div>
          </div>
          <div class="col-3 col-md-2 col-lg-2 col-xl-2 mb-3">
            <h5 class="mr-3">Kalite</h5>
          </div>
          <div class="col-7 col-md-3 col-lg-3 col-xl-3 mb-3">
            <meter
              id="meter"
              class="meter"
              :value="priceAndValue"
              max="5"
              min="0"
            ></meter>
          </div>
          <div class="col-1 col-md-1 col-xl-1 col-lg-1 mb-3">
            <div class="">{{ priceAndValue }}</div>
          </div>
        </div>
        <div class="row comment-message-row mx-auto">
          <div
            class="col-md-6 comments p-1"
            v-for="(eva, idx) in evaluation"
            :key="idx"
          >
            <div class="col-md-12 d-flex">
              <img
                :src="eva.guestProfileImage"
                width="60"
                height="60"
                style="object-fit: cover"
                class="rounded-circle mr-3"
                alt=""
              />
              <h5 class="mt-2 font font-weight-bold" style="color: #222222">
                {{ eva.guestName }} <br />
                <h6 class="text-muted mt-1">{{ eva.month }} {{ eva.year }}</h6>
              </h5>
            </div>
            <div class="col-md-11">
              <p style="font-family: inherit !important; color: #222222">
                {{ eva.decreption }}
              </p>
            </div>
          </div>
          <div
            class="col-md-6 mt-5 text-center"
            v-if="evaluationAll.length >= 4"
          >
            <div
              @click.prevent="modelComment = !modelComment"
              class="btn-more button-click text-center"
            >
              <a
                href="#Bedfied"
                class="more-comment text-center font-weight-bold p-3"
              >
                {{ evaluationAll.length }} değerlendirmenin tümünü göster</a
              >
            </div>
          </div>
        </div>
        <transition name="home">
          <div class="modal" v-if="modelComment">
            <div class="modal-wrap" v-click-outside="modelCommentControl">
              <div class="row">
                <div class="col-12">
                  <div
                    @click.prevent="modelComment = false"
                    class="circle-close"
                  >
                    <div class="circle-value">X</div>
                  </div>
                </div>
                <div class="col-6 commands-puan">
                  <h4 class="font-weight-bold text-center mb-4">
                    <img src="../İcons/star (1).png" alt="" />
                    <span
                      >{{ generalEvaluation }} ({{
                        evaluationAll.length
                      }}
                      Değerlendirme)</span
                    >
                  </h4>
                  <div class="row ml-3 mt-5">
                    <div class="col-3 mb-3"><h6>Temizlik</h6></div>
                    <div class="col-7 mb-3">
                      <meter
                        id="meter"
                        class="meter"
                        :value="cleanValue"
                        max="5"
                        min="0"
                      ></meter>
                    </div>
                    <div class="col-2 mb-3">
                      <div class="">{{ cleanValue }}</div>
                    </div>
                    <div class="col-3 mb-3"><h6>İletişim</h6></div>
                    <div class="col-7 mb-3">
                      <meter
                        id="meter"
                        class="meter"
                        :value="contactValue"
                        max="5"
                        min="0"
                      ></meter>
                    </div>
                    <div class="col-2 mb-3">
                      <div class="">{{ contactValue }}</div>
                    </div>
                    <div class="col-3 mb-3"><h6>Karşılama</h6></div>
                    <div class="col-7 mb-3">
                      <meter
                        id="meter"
                        class="meter"
                        :value="meetingValue"
                        max="5"
                        min="0"
                      ></meter>
                    </div>
                    <div class="col-2 mb-3">
                      <div class="">{{ meetingValue }}</div>
                    </div>
                    <div class="col-3 mb-3"><h6>Doğruluk</h6></div>
                    <div class="col-7 mb-3">
                      <meter
                        id="meter"
                        class="meter"
                        :value="honestValue"
                        max="5"
                        min="0"
                      ></meter>
                    </div>
                    <div class="col-2 mb-3">
                      <div class="">{{ honestValue }}</div>
                    </div>
                    <div class="col-3 mb-3"><h6>Konum</h6></div>
                    <div class="col-7 mb-3">
                      <meter
                        id="meter"
                        class="meter"
                        :value="mapValue"
                        max="5"
                        min="0"
                      ></meter>
                    </div>
                    <div class="col-2 mb-3">
                      <div class="">{{ mapValue }}</div>
                    </div>
                    <div class="col-3 mb-3">
                      <h6>Kalite/fiyat</h6>
                    </div>
                    <div class="col-7 mb-3">
                      <meter
                        id="meter"
                        class="meter"
                        :value="priceAndValue"
                        max="5"
                        min="0"
                      ></meter>
                    </div>
                    <div class="col-2 mb-3">
                      <div class="">{{ priceAndValue }}</div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <input
                    @keyup.enter="searchEvaControl"
                    type="search"
                    placeholder="Değerelendirmeleri arayın"
                    class="form-control search-bar border"
                    v-model="searchEva"
                  />

                  <div class="row scrol-height">
                    <div
                      class="col-md-12 comments p-1"
                      v-for="(eva, idx) in searchDataAll"
                      :key="idx"
                    >
                      <div class="col-md-12 d-flex">
                        <img
                          :src="eva.guestProfileImage"
                          width="50"
                          height="50"
                          style="object-fit: cover"
                          class="rounded-circle mr-3"
                          alt=""
                        />
                        <h6
                          class="mt-2 font font-weight-bold"
                          style="color: #222222"
                        >
                          {{ eva.guestName }} <br />
                          <h6 class="text-muted small mt-1">
                            {{ eva.month }} {{ eva.year }}
                          </h6>
                        </h6>
                      </div>
                      <div class="col-md-11">
                        <p
                          style="
                            font-family: inherit !important;
                            color: #222222;
                          "
                        >
                          {{ eva.decreption }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="row mobile-row">
      <div class="col-11 col-md-12 col-lg-12 col-xl-12 mt-4 p-0">
        <h4 class="font-weight-bold mb-5">
          <img src="../İcons/star (1).png" alt="" />
          <span
            >{{ generalEvaluation }} ({{
              evaluationAll.length
            }}
            Değerlendirme)</span
          >
        </h4>
        <div class="row mb-4">
          <div class="col-3 col-md-2 col-lg-2 col-xl-2 mb-3">
            <h5>Temizlik</h5>
          </div>
          <div class="col-7 col-md-3 col-lg-3 col-xl-3 mb-3">
            <meter
              id="meter"
              class="meter"
              :value="cleanValue"
              max="5"
              min="0"
            ></meter>
          </div>
          <div class="col-1 col-md-1 col-xl-1 col-lg-1 mb-3">
            <div class="">{{ cleanValue }}</div>
          </div>
          <div class="col-3 col-md-2 col-lg-2 col-xl-2 mb-3">
            <h5>İletişim</h5>
          </div>
          <div class="col-7 col-md-3 col-lg-3 col-xl-3 mb-3">
            <meter
              id="meter"
              class="meter"
              :value="contactValue"
              max="5"
              min="0"
            ></meter>
          </div>
          <div class="col-1 col-md-1 col-xl-1 col-lg-1 mb-3">
            <div class="">{{ contactValue }}</div>
          </div>
          <div class="col-3 col-md-2 col-lg-2 col-xl-2 mb-3">
            <h5>Karşılama</h5>
          </div>
          <div class="col-7 col-md-3 col-lg-3 col-xl-3 mb-3">
            <meter
              id="meter"
              class="meter"
              :value="meetingValue"
              max="5"
              min="0"
            ></meter>
          </div>
          <div class="col-1 col-md-1 col-xl-1 col-lg-1 mb-3">
            <div class="">{{ meetingValue }}</div>
          </div>
          <div class="col-3 col-md-2 col-lg-2 col-xl-2 mb-3">
            <h5>Doğruluk</h5>
          </div>
          <div class="col-7 col-md-3 col-lg-3 col-xl-3 mb-3">
            <meter
              id="meter"
              class="meter"
              :value="honestValue"
              max="5"
              min="0"
            ></meter>
          </div>
          <div class="col-1 col-md-1 col-xl-1 col-lg-1 mb-3">
            <div class="">{{ honestValue }}</div>
          </div>
          <div class="col-3 col-md-2 col-lg-2 col-xl-2 mb-3">
            <h5>Konum</h5>
          </div>
          <div class="col-7 col-md-3 col-lg-3 col-xl-3 mb-3">
            <meter
              id="meter"
              class="meter"
              :value="mapValue"
              max="5"
              min="0"
            ></meter>
          </div>
          <div class="col-1 col-md-1 col-xl-1 col-lg-1 mb-3">
            <div class="">{{ mapValue }}</div>
          </div>
          <div class="col-3 col-md-2 col-lg-2 col-xl-2 mb-3">
            <h5 class="mr-3">Kalite</h5>
          </div>
          <div class="col-7 col-md-3 col-lg-3 col-xl-3 mb-3">
            <meter
              id="meter"
              class="meter"
              :value="priceAndValue"
              max="5"
              min="0"
            ></meter>
          </div>
          <div class="col-1 col-md-1 col-xl-1 col-lg-1 mb-3">
            <div class="">{{ priceAndValue }}</div>
          </div>
        </div>
        <div class="row comment-message-row mx-auto">
          <div
            class="col-md-12 comments p-1"
            v-for="(eva, idx) in evaluationMobile"
            :key="idx"
          >
            <div class="col-md-12 d-flex">
              <img
                :src="eva.guestProfileImage"
                width="60"
                height="60"
                style="object-fit: cover"
                class="rounded-circle mr-3"
                alt=""
              />
              <h5 class="mt-2 font font-weight-bold" style="color: #222222">
                {{ eva.guestName }} <br />
                <h6 class="text-muted mt-1">{{ eva.month }} {{ eva.year }}</h6>
              </h5>
            </div>
            <div class="col-md-11">
              <p style="font-family: inherit !important; color: #222222">
                          {{ eva.decreption }}
              </p>
            </div>
          </div>
          <div class="col-12 mt-2 text-center" v-if="evaluationAll.length >= 1">
            <div
              @click.prevent="modelCommentMobile = !modelCommentMobile"
              class="btn-more button-click text-center"
            >
              <a
                href="#Bedfied"
                class="more-comment text-center font-weight-bold"
              >
                {{ evaluationAll.length }} değerlendirmenin tümünü göster</a
              >
            </div>
          </div>
        </div>
        <transition name="home">
          <div class="modal" v-if="modelCommentMobile">
            <div
              class="modal-wrap-mobile"
              v-click-outside="modelCommentMobileControl"
            >
              <div class="row ">
                  <div
                    @click.prevent="modelCommentMobile = false"
                    class="circle-close"
                  >
                    <div class="circle-value">X</div>
                  </div>

                <div class="col-12 ">
                  <input
                    @keyup.enter="searchEvaControl"
                    type="search"
                    placeholder="Değerelendirmeleri arayın"
                    class="form-control search-bar border"
                    v-model="searchEva"
                  />

                  <div class="row scrol-height">
                    <div
                      class="col-md-12 comments p-1"
                      v-for="(eva, idx) in searchDataAll"
                      :key="idx"
                    >
                      <div class="col-md-12 d-flex">
                        <img
                          :src="eva.guestProfileImage"
                          width="50"
                          height="50"
                          style="object-fit: cover"
                          class="rounded-circle mr-3"
                          alt=""
                        />
                        <h6
                          class="mt-2 font font-weight-bold"
                          style="color: #222222"
                        >
                          {{ eva.guestName }} <br />
                          <h6 class="text-muted small mt-1">
                            {{ eva.month }} {{ eva.year }}
                          </h6>
                        </h6>
                      </div>
                      <div class="col-md-11">
                        <p
                          style="
                            font-family: inherit !important;
                            color: #222222;
                          "
                        >
                          {{ eva.decreption }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modelComment: false,
      modelCommentMobile:false,
      evaluation: [],
      evaluationAll: [],
      searchDataAll: [],
      evaluationMobile: [],
      searchEva: null,
      clean: null,
      contact: null,
      meeting: null,
      honest: null,
      map: null,
      priceAndValue: null,
      honestValue: null,
      cleanValue: null,
      mapValue: null,
      meetingValue: null,
      contactValue: null,
      generalEvaluation: null,
      meetingValueNotString: null,
      contactValueNotString: null,
      mapValueNotString: null,
      cleanValueNotString: null,
      priceAndValueNotString: null,
      honestValueNotString: null,
    };
  },
  props: {
    homeData: {
      required: true,
    },
  },
  methods: {
    modelCommentMobileControl(){
      if(this.modelCommentMobile){
        this.modelCommentMobile = false
      }
    },
    getEvaluation() {
      let array = [];
      let map = [];
      let honest = [];
      let meeting = [];
      let contact = [];
      let price = [];
      let clean = [];
      let data = this.homeData.evaluation;
      for (let key in data) {
        array.push({ firebaseId: key, ...data[key] });
      }
      this.evaluationAll = array;
      this.searchDataAll = array;
      var firstArray2 = array.filter(function (value, index, arr) {
        return index < 4;
      });
      var firstArray3 = array.filter(function (value, index, arr) {
        return index < 1;
      });
      this.evaluation = firstArray2;
      this.evaluationMobile = firstArray3;
      array.forEach((element) => {
        price.push(element.priceAndValue);
        map.push(element.map);
        honest.push(element.honest);
        meeting.push(element.meeting);
        contact.push(element.contact);
        clean.push(element.clean);
      });
      this.chancePriceValue(price);
      this.chanceHonestValue(honest);
      this.chanceCleanValue(clean);
      this.chanceMapValue(map);
      this.chanceMeetingValue(meeting);
      this.chanceContactValue(contact);
    },
    searchEvaControl() {
      this.searchDataAll = this.evaluationAll.filter((s) =>
        s.decreption.startsWith(this.searchEva)
      );
    },
    chancePriceValue(price) {
      let priceValue = null;
      price.forEach((element) => {
        priceValue = priceValue + element;
      });
      let priceValue2 = null;
      let priceString = null;
      priceValue2 = priceValue / price.length;
      this.priceAndValueNotString = priceValue2;
      priceString = priceValue2.toString();
      this.priceAndValue = priceString.slice(0, 3);
    },
    chanceHonestValue(honest) {
      let honestValue = null;
      honest.forEach((element) => {
        honestValue = honestValue + element;
      });
      let honestValue2 = null;
      let honestString = null;
      honestValue2 = honestValue / honest.length;
      this.honestValueNotString = honestValue2;
      honestString = honestValue2.toString();
      this.honestValue = honestString.slice(0, 3);
    },
    chanceCleanValue(clean) {
      let cleanValue = null;
      clean.forEach((element) => {
        cleanValue = cleanValue + element;
      });
      let cleanValue2 = null;
      let cleanString = null;
      cleanValue2 = cleanValue / clean.length;
      this.cleanValueNotString = cleanValue2;
      cleanString = cleanValue2.toString();
      this.cleanValue = cleanString.slice(0, 3);
    },
    chanceMapValue(map) {
      let mapValue = null;
      map.forEach((element) => {
        mapValue = mapValue + element;
      });
      let mapValue2 = null;
      let mapString = null;
      mapValue2 = mapValue / map.length;
      this.mapValueNotString = mapValue2;
      mapString = mapValue2.toString();
      this.mapValue = mapString.slice(0, 3);
    },
    chanceMeetingValue(meeting) {
      let meetingValue = null;
      meeting.forEach((element) => {
        meetingValue = meetingValue + element;
      });
      let meetingValue2 = null;
      let meetingString = null;
      meetingValue2 = meetingValue / meeting.length;
      this.meetingValueNotString = meetingValue2;
      meetingString = meetingValue2.toString();
      this.meetingValue = meetingString.slice(0, 3);
    },
    chanceContactValue(contact) {
      let contactValue = null;
      contact.forEach((element) => {
        contactValue = contactValue + element;
      });
      let contactValue2 = null;
      let contactString = null;
      contactValue2 = contactValue / contact.length;
      this.contactValueNotString = contactValue2;
      contactString = contactValue2.toString();
      this.contactValue = contactString.slice(0, 3);
      let a = this.meetingValueNotString;
      let b = this.contactValueNotString;
      let c = this.mapValueNotString;
      let d = this.cleanValueNotString;
      let e = this.priceAndValueNotString;
      let f = this.honestValueNotString;
      let generalPuan = (a + b + c + d + e + f) / 6;
      let generalString = generalPuan.toString();
      this.generalEvaluation = generalString.slice(0, 3);
      this.$emit("generalEvaluation", this.generalEvaluation);
    },
    modelCommentControl() {
      if (this.modelComment) {
        this.modelComment = false;
      }
    },
  },
  created() {
    this.getEvaluation();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");

.scrol-height {
  height: 300px;
  overflow-y: scroll;

  scrollbar-color: rebeccapurple green;

  scrollbar-width: 1px !important;

  width: 102%;
}
.scrol-height::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.scrol-height::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.scrol-height::-webkit-scrollbar-thumb {
  background: #888;
  height: 100px !important ;
}

/* Handle on hover */
.scrol-height::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.commands-puan {
  padding: 10px;
  margin-top: -1%;
  height: 100%;
}
.circle-close {
  width: 25px;
  height: 25px;
  margin: 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 80ms ease-in;
}
.circle-close:active {
  transform: scale(0.84);
  border: 1px solid black;
}
.circle-close:hover {
  border: 1px solid black;
}
.circle-value {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
}
.search-bar-comment {
  padding: 0px 38px;
}
.search-bar {
  background-color: rgb(247, 247, 247) !important;
  width: 95%;
  display: flex;
  margin-right: auto;
  border-radius: 40px;
}
.search-input {
  background-color: rgb(197, 160, 160) !important;
  border-radius: 40px;
}
.search-bar::placeholder {
  font-size: 13px !important;
}
.search-bar:hover {
  border: 1px solid #222222 !important;
}
.home-enter-active,
.home-leave-active {
  transition: opacity 0.4s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
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
  background-color: rgba(31, 32, 41, 0.5);
}
.pc-row {
  display: inherit;
}
.mobile-row {
  display: none;
}
@media (min-width: 1389px) {
  .modal-wrap {
    height: 60% !important;
  }
}
@media (max-width: 762px) {
  .modal-wrap-mobile {
    position: relative;

    display: block;

    width: 80%;
    height: 50%;
    max-width: 90%;
    margin-top: -7%;
    padding: 10px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    -ms-flex-item-align: center;
    align-self: center;
    box-shadow: 0 12px 25px 0 rgba(199, 175, 189, 0.25);
    transform: scale(1.2);
  }
  .comments {
    margin-top: 5px !important;
  }
  .pc-row {
    display: none;
  }
  .mobile-row {
    display: inherit;
  }
  .btn-more {
    padding: 5px 0px;
    width: 85% !important;
    border-radius: 10px;
  }
}
.modal-wrap {
  position: relative;
  display: block;
  width: 100%;
  height: 70%;
  max-width: 60%;
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
.font {
  font-family: "Titillium Web", sans-serif !important;
}
.button-click {
  transition: transform 80ms ease-in;
}
.button-click:active {
  transform: scale(0.94);
}
.comment-message-row {
  width: 100%;
  min-height: 0px;
}
.comments {
  margin-top: 40px;
}
.more-comment {
  color: #222222;
  font-size: 16px;
}
.btn-more {
  border: 1px solid black;
  padding: 10px 5px;
  width: 50%;
  border-radius: 10px;
}
.meter {
  width: 100%;
  height: 25px;
}
.meter::-webkit-meter-bar {
  background: #fff;
  border: 1px solid #ccc;
}

.meter::-webkit-meter-optimum-value {
  background: #f93b3b;
}
</style>