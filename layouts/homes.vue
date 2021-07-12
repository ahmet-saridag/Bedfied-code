<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
import vClickOutside from "v-click-outside";

export default {
  middleware:"session-control",
   directives: {
    clickOutside: vClickOutside.directive,
  },
};
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Truculenta:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: "Titillium Web", sans-serif !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
