<template>
  <div>
    <body>
      <div id="photo"></div>
      <div id="title">
        <h2>Actus autour du monde</h2>
      </div>
      <div id="container">
        <composantBloc
          v-for="(value, index) in news"
          :key="index"
          :title="value.title"
          :content="value.description"
          :image="value.urlToImage"
          :link="value.url"
        />
      </div>
    </body>
  </div>
</template>

<script>
import composantBloc from "../components/composantBloc.vue";
export default {
  name: "actus",
  components: {
    composantBloc,
  },

  data: () => ({
    news: [],
  }),

  mounted: async function() {
    const response = await fetch(
      "http://newsapi.org/v2/top-headlines?country=fr&pageSize=4&category=business&apiKey=23021ab3528a46a0a3f25d871fb74027",
      { method: "GET" }
    );

    const data = await response.json();

    this.news = data.articles;
  },
};
</script>

<style scoped>
body {
  background-color: #e5e5e5;
  margin-left: -8px;
  margin-right: -8px;
}

#photo {
  background-image: url(../image/earth.jpg);
  background-attachment: fixed;
  height: 670px;
  width: 100%;
  background-size: cover;
  margin-top: -10px;
}

#title {
  width: 100%;
  background-color: #14213d;
}

h2 {
  height: 100px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fca311;
  margin: 0px;
}

#container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 50px;
  height: 1040px;
  margin-bottom: -7px;
}
</style>
