<template>
  <div>
    <TravelModeHeader :userProfilesData="userData" />
    
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
      userData: [],
    };
  },
  methods: {
    step1Rating1Control() {
      (this.step1Rating5 = false),
        (this.step1Rating4 = false),
        (this.step1Rating3 = false),
        (this.step1Rating2 = false),
        (this.step1Rating1 = null);
      this.step1KonumRatingValue = 1;
      setTimeout(() => {
        this.step1Go();
      }, 1000);
    },
    step1Rating2Control() {
      (this.step1Rating5 = false),
        (this.step1Rating4 = false),
        (this.step1Rating3 = false),
        (this.step1Rating2 = null),
        (this.step1Rating1 = false);
      this.step1KonumRatingValue = 2;
      setTimeout(() => {
        this.step1Go();
      }, 1000);
    },
    step1Rating3Control() {
      (this.step1Rating5 = false),
        (this.step1Rating4 = false),
        (this.step1Rating3 = null),
        (this.step1Rating2 = false),
        (this.step1Rating1 = false);
      this.step1KonumRatingValue = 3;
      setTimeout(() => {
        this.step1Go();
      }, 1000);
    },
    step1Rating4Control() {
      (this.step1Rating5 = false),
        (this.step1Rating4 = null),
        (this.step1Rating3 = false),
        (this.step1Rating2 = false),
        (this.step1Rating1 = false);
      this.step1KonumRatingValue = 4;
      setTimeout(() => {
        this.step1Go();
      }, 1000);
    },
    step1Rating5Control() {
      (this.step1Rating5 = null),
        (this.step1Rating4 = false),
        (this.step1Rating3 = false),
        (this.step1Rating2 = false),
        (this.step1Rating1 = false);
      this.step1KonumRatingValue = 5;
      setTimeout(() => {
        this.step1Go();
      }, 1000);
    },

    step3RatingContact5Control() {
      (this.step3RatingContact5 = null),
        (this.step3RatingContact4 = false),
        (this.step3RatingContact3 = false),
        (this.step3RatingContact2 = false),
        (this.step3RatingContact1 = false);
      this.step3RatingContactValue = 5;
      setTimeout(() => {
        this.step3Go();
      }, 1000);
    },
    step3RatingContact4Control() {
      (this.step3RatingContact5 = false),
        (this.step3RatingContact4 = null),
        (this.step3RatingContact3 = false),
        (this.step3RatingContact2 = false),
        (this.step3RatingContact1 = false);
      this.step2RatingContactValue = 4;
      setTimeout(() => {
        this.step3Go();
      }, 1000);
    },
    step3RatingContact3Control() {
      (this.step3RatingContact5 = false),
        (this.step3RatingContact4 = false),
        (this.step3RatingContact3 = null),
        (this.step3RatingContact2 = false),
        (this.step3RatingContact1 = false);
      this.step3RatingContactValue = 3;
      setTimeout(() => {
        this.step3Go();
      }, 1000);
    },
    step3RatingContact2Control() {
      (this.step3RatingContact5 = false),
        (this.step3RatingContact4 = false),
        (this.step3RatingContact3 = false),
        (this.step3RatingContact2 = null),
        (this.step3RatingContact1 = false);
      this.step3RatingContactValue = 2;
      setTimeout(() => {
        this.step3Go();
      }, 1000);
    },
    step3RatingContact1Control() {
      (this.step3RatingContact5 = false),
        (this.step3RatingContact4 = false),
        (this.step3RatingContact3 = false),
        (this.step3RatingContact2 = false),
        (this.step3RatingContact1 = null);
      this.step3RatingContactValue = 1;
      setTimeout(() => {
        this.step3Go();
      }, 1000);
    },

    step2RatingMeeting5Control() {
      this.step2RatingMeeting5 = null;
      this.step2RatingMeeting4 = false;
      this.step2RatingMeeting3 = false;
      this.step2RatingMeeting2 = false;
      this.step2RatingMeeting1 = false;
      this.step2RatingMeetingValue = 5;
      setTimeout(() => {
        this.step2Go();
      }, 1000);
    },
    step2RatingMeeting4Control() {
      this.step2RatingMeeting5 = false;
      this.step2RatingMeeting4 = null;
      this.step2RatingMeeting3 = false;
      this.step2RatingMeeting2 = false;
      this.step2RatingMeeting1 = false;
      this.step2RatingMeetingValue = 4;
      setTimeout(() => {
        this.step2Go();
      }, 1000);
    },
    step2RatingMeeting3Control() {
      this.step2RatingMeeting5 = false;
      this.step2RatingMeeting4 = false;
      this.step2RatingMeeting3 = null;
      this.step2RatingMeeting2 = false;
      this.step2RatingMeeting1 = false;
      this.step2RatingMeetingValue = 3;
      setTimeout(() => {
        this.step2Go();
      }, 1000);
    },
    step2RatingMeeting2Control() {
      this.step2RatingMeeting5 = false;
      this.step2RatingMeeting4 = false;
      this.step2RatingMeeting3 = false;
      this.step2RatingMeeting2 = null;
      this.step2RatingMeeting1 = false;
      this.step2RatingMeetingValue = 2;
      setTimeout(() => {
        this.step2Go();
      }, 1000);
    },
    step2RatingMeeting1Control() {
      this.step2RatingMeeting5 = false;
      this.step2RatingMeeting4 = false;
      this.step2RatingMeeting3 = false;
      this.step2RatingMeeting2 = false;
      this.step2RatingMeeting1 = null;
      this.step2RatingMeetingValue = 1;
      setTimeout(() => {
        this.step2Go();
      }, 1000);
    },

    step4RatingHonest5Control() {
      this.step4RatingHonest5 = null;
      this.step4RatingHonest4 = false;
      this.step4RatingHonest3 = false;
      this.step4RatingHonest2 = false;
      this.step4RatingHonest1 = false;
      this.step4RatingHonestValue = 5;
      setTimeout(() => {
        this.step4Go();
      }, 1000);
    },
    step4RatingHonest4Control() {
      this.step4RatingHonest5 = false;
      this.step4RatingHonest4 = null;
      this.step4RatingHonest3 = false;
      this.step4RatingHonest2 = false;
      this.step4RatingHonest1 = false;
      this.step4RatingHonestValue = 4;
      setTimeout(() => {
        this.step4Go();
      }, 1000);
    },
    step4RatingHonest3Control() {
      this.step4RatingHonest5 = false;
      this.step4RatingHonest4 = false;
      this.step4RatingHonest3 = null;
      this.step4RatingHonest2 = false;
      this.step4RatingHonest1 = false;
      this.step4RatingHonestValue = 3;
      setTimeout(() => {
        this.step4Go();
      }, 1000);
    },
    step4RatingHonest2Control() {
      this.step4RatingHonest5 = false;
      this.step4RatingHonest4 = false;
      this.step4RatingHonest3 = false;
      this.step4RatingHonest2 = null;
      this.step4RatingHonest1 = false;
      this.step4RatingHonestValue = 2;
      setTimeout(() => {
        this.step4Go();
      }, 1000);
    },
    step4RatingHonest1Control() {
      this.step4RatingHonest5 = false;
      this.step4RatingHonest4 = false;
      this.step4RatingHonest3 = false;
      this.step4RatingHonest2 = false;
      this.step4RatingHonest1 = null;
      this.step4RatingHonestValue = 1;
      setTimeout(() => {
        this.step4Go();
      }, 1000);
    },

      step5RatingClean5Control() {
      this.step5RatingClean5 = null;
      this.step5RatingClean4 = false;
      this.step5RatingClean3 = false;
      this.step5RatingClean2 = false;
      this.step5RatingClean1 = false;
      this.step5RatingCleanValue = 5;
      setTimeout(() => {
        this.step5Go();
      }, 1000);
    },
    step5RatingClean4Control() {
      this.step5RatingClean5 = false;
      this.step5RatingClean4 = null;
      this.step5RatingClean3 = false;
      this.step5RatingClean2 = false;
      this.step5RatingClean1 = false;
      this.step5RatingCleanValue = 4;
      setTimeout(() => {
        this.step5Go();
      }, 1000);
    },
    step5RatingClean3Control() {
      this.step5RatingClean5 = false;
      this.step5RatingClean4 = false;
      this.step5RatingClean3 = null;
      this.step5RatingClean2 = false;
      this.step5RatingClean1 = false;
      this.step5RatingCleanValue = 3;
      setTimeout(() => {
        this.step5Go();
      }, 1000);
    },
    step5RatingClean2Control() {
      this.step5RatingClean5 = false;
      this.step5RatingClean4 = false;
      this.step5RatingClean3 = false;
      this.step5RatingClean2 = null;
      this.step5RatingClean1 = false;
      this.step5RatingCleanValue = 2;
      setTimeout(() => {
        this.step5Go();
      }, 1000);
    },
    step5RatingClean1Control() {
      this.step5RatingClean5 = false;
      this.step5RatingClean4 = false;
      this.step5RatingClean3 = false;
      this.step5RatingClean2 = false;
      this.step5RatingClean1 = null;
      this.step5RatingCleanValue = 1;
      setTimeout(() => {
        this.step5Go()
        }, 1000);
    },


      step6RatingPrice5Control() {
      this.step6RatingPrice5 = null;
      this.step6RatingPrice4 = false;
      this.step6RatingPrice3 = false;
      this.step6RatingPrice2 = false;
      this.step6RatingPrice1 = false;
      this.step6RatingCPricealue = 5;
      setTimeout(() => {
        this.step6Go();
      }, 1000);
    },
    step6RatingPrice4Control() {
      this.step6RatingPrice5 = false;
      this.step6RatingPrice4 = null;
      this.step6RatingPrice3 = false;
      this.step6RatingPrice2 = false;
      this.step6RatingPrice1 = false;
      this.step6RatingPriceValue = 4;
      setTimeout(() => {
        this.step6Go();
      }, 1000);
    },
    step6RatingPrice3Control() {
      this.step6RatingPrice5 = false;
      this.step6RatingPrice4 = false;
      this.step6RatingPrice3 = null;
      this.step6RatingPrice2 = false;
      this.step6RatingPrice1 = false;
      this.step6RatingPriceValue = 3;
      setTimeout(() => {
        this.step6Go();
      }, 1000);
    },
    step6RatingPrice2Control() {
      this.step6RatingPrice5 = false;
      this.step6RatingPrice4 = false;
      this.step6RatingPrice3 = false;
      this.step6RatingPrice2 = null;
      this.step6RatingPrice1 = false;
      this.step6RatingPriceValue = 2;
      setTimeout(() => {
        this.step6Go();
      }, 1000);
    },
    step6RatingPrice1Control() {
      this.step6RatingPrice5 = false;
      this.step6RatingPrice4 = false;
      this.step6RatingPrice3 = false;
      this.step6RatingPrice2 = false;
      this.step6RatingPrice1 = null;
      this.step6RatingPriceValue = 1;
      setTimeout(() => {
        this.step6Go()
        }, 1000);
    },

    step1Go() {
      this.progress2 = 40;
      (this.steps.step1 = false), (this.steps.step2 = true);
    },
    step2Back() {
      this.stepsWidth = 30;
      this.steps.step2 = false;
      this.steps.step1 = true;
    },
    step2Go() {
      this.stepsWidth = 50;
      this.steps.step2 = false;
      this.steps.step3 = true;
    },
    step3Back() {
      this.stepsWidth = 40;
      this.steps.step3 = false;
      this.steps.step2 = true;
    },
    step3Go() {
      this.stepsWidth = 60;
      this.steps.step3 = false;
      this.steps.step4 = true;
    },
    step4Back() {
      this.stepsWidth = 50;
      this.steps.step4 = false;
      this.steps.step3 = true;
    },
    step4Go() {
      this.stepsWidth = 70;
      this.steps.step4 = false;
      this.steps.step5 = true;
    },
    step5Back() {
      this.stepsWidth = 60;
      this.steps.step5 = false;
      this.steps.step4 = true;
    },
    step5Go() {
      this.stepsWidth = 80;
      this.steps.step5 = false;
      this.steps.step6 = true;
    },
      step6Back() {
      this.stepsWidth = 70;
      this.steps.step6 = false;
      this.steps.step5 = true;
    },
      step6Go() {
      this.stepsWidth = 90;
      this.steps.step6 = false;
      this.steps.step7 = true;
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
    this.getUserDATA();
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
.fm {
  font-family: "Titillium Web", sans-serif !important;
}
* {
  box-sizing: border-box;
}
.rating {
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  flex-direction: row-reverse;
  height: 150px;
  position: relative;
}

.rating-0 {
  filter: grayscale(100%);
}

.rating > input {
  display: none;
}

.rating > label {
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-top: auto;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 76%;
  transition: 0.3s;
}

.rating > input:checked ~ label,
.rating > input:checked ~ label ~ label {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
}

.rating > input:not(:checked) ~ label:hover,
.rating > input:not(:checked) ~ label:hover ~ label {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
}

.emoji-wrapper {
  width: 100%;
  text-align: center;
  height: 100px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.emoji-wrapper:before,
.emoji-wrapper:after {
  content: "";
  height: 15px;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 1;
}

.emoji-wrapper:before {
  top: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 35%,
    rgba(255, 255, 255, 0) 100%
  );
}

.emoji-wrapper:after {
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 35%,
    rgba(255, 255, 255, 0) 100%
  );
}

.emoji {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
}

.emoji > svg {
  margin: 15px 0;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
}

#rating-1:checked ~ .emoji-wrapper > .emoji {
  transform: translateY(-100px);
}
#rating-2:checked ~ .emoji-wrapper > .emoji {
  transform: translateY(-200px);
}
#rating-3:checked ~ .emoji-wrapper > .emoji {
  transform: translateY(-300px);
}
#rating-4:checked ~ .emoji-wrapper > .emoji {
  transform: translateY(-400px);
}
#rating-5:checked ~ .emoji-wrapper > .emoji {
  transform: translateY(-500px);
}

.feedback {
  max-width: 360px;
  background-color: #fff;
  width: 100%;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}

.progress {
  height: 12px;
}
/* === Wrapper Styles === */
#FileUpload {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  margin: 30px;
  padding: 10px;
  /* box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); */
  border-radius: 20px;
  background-color: white;
  width: 465px;
}

/* === Upload Box === */
.upload {
  margin: 10px;
  height: 85px;
  border: 8px dashed #e6f5e9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.upload p {
  margin-top: 12px;
  line-height: 0;
  font-size: 22px;
  color: #0c3214;
  letter-spacing: 1.5px;
}
.upload__button {
  background-color: #e6f5e9;
  border-radius: 10px;
  padding: 0px 8px 0px 10px;
}
.upload__button:hover {
  cursor: pointer;
  opacity: 0.8;
}

/* === Uploaded Files === */
.uploaded {
  width: 395px;
  margin: 10px 10px 20px 10px;
  background-color: #e6f5e9;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.file {
  display: flex;
  flex-direction: column;
}
.file__name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 300px;
  line-height: 0;
  color: #0c3214;
  font-size: 18px;
  letter-spacing: 1.5px;
}
.fa-times:hover {
  cursor: pointer;
  opacity: 0.8;
}
.fa-file-pdf {
  padding: 15px;
  font-size: 40px;
  color: #0c3214;
}
.pop-up-info {
  width: 400px;
  height: 180px;
  position: fixed;
  bottom: 15px;
  right: 15px;
}
.img-all {
  object-fit: cover;

  border-radius: 40px;
}
.home-enter-active,
.home-leave-active {
  transition: opacity 0.2s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
.ct {
  /* background-color: red; */
  width: 100% !important ;
  height: 150px;
}
#checkboxes {
  background-color: #fff;
  min-height: 200px;
  padding: 10px;
  margin-top: 20px;
}

.checkbox label {
  min-height: 21px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
  line-height: 22px;
  font-size: 19px;
}

.sc {
  transition: all 1s;
}
.fm {
  font-family: "Titillium Web", sans-serif !important;
}

.photo {
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.sc:hover {
  transform: scale(1.04);
  cursor: pointer;
}
.br-left {
  border-radius: 20px 0px 0px 20px;
}
.br-right {
  border-radius: 0px 20px 20px 0px;
}

.c-checkbox span {
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin-left: -20px;
  width: 22px;
  height: 22px;
  border-radius: 3px;
  border: 1px solid #ff4444;
  text-align: center;
}

.c-checkbox span:before {
  position: absolute;
  top: 5;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  text-align: center !important;
  font-size: 20px;
  line-height: 18px;
  vertical-align: middle;
}

.c-checkbox input[type="checkbox"] {
  position: absolute;
  margin: 5px 0 0;
  opacity: 0;
}

.c-checkbox input[type="checkbox"]:checked {
  color: #fff;
  transition: color 0.3s ease-out;
}

.c-checkbox input[type="checkbox"]:checked + span {
  border-color: #ff4444;
  background-color: #ff4444;
  /* --background: #fff;
    --border: #D1D6EE;
    --border-hover: #BBC1E1;
    --border-active: #1E2235; */
}

.c-checkbox input[type="checkbox"]:checked + span:before {
  color: #fff;
  opacity: 1;
  transition: color 0.3s ease-out;
}
.containers {
  width: 80%;
  margin-right: auto !important;
  margin-left: auto !important;
}
@media (max-width: 762px) {
  .responsive-margin {
    margin-bottom: 130px !important;
  }
  .img-phone-screen {
    display: none;
  }
  .w-xs-100 {
    width: 100% !important;
  }
  .d-sm-inherit {
    display: inherit !important;
    margin-top: 40px !important;
  }
}
</style>