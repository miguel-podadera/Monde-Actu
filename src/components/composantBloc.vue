<template>
  <div id="test">
    <div class="card">
      <div id="div">
        <h3>{{ title }}</h3>
        <img :src="image" />
        <p>{{ content }}</p>
        <a :href="link">Lire l'article</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    image: String,
    link: String,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 240px;
}

.card {
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 450px;
  margin: 25px;
  box-shadow: 4px 5px 8px grey;
}
</style>
