<template>
  <div>
    <div id="pap">
      <Composanthome :titre="text" />
    </div>
  </div>
</template>

<script>
import Composanthome from "@/components/Composanthome.vue";
export default {
  name: "Home",
  components: { Composanthome },

  data: () => ({
    text: "",
  }),
};
</script>

<style>
body {
  background-color: #e5e5e5;
  margin-left: -8px;
  margin-right: -8px;
}

#pap {
  background-image: url(../image/earth.jpg);
  background-attachment: fixed;
  height: 670px;
  width: 100%;
  background-size: cover;
  margin-top: -10px;
}
</style>
