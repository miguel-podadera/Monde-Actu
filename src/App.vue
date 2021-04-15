<template>
  <div id="app">
    <div id="main-container">
      <h1 class="main-title">BIENVENUE SUR MONDE ACTUS</h1>
      <div id="nav">
        <router-link class="lien" to="/Home">Home /</router-link>
        <router-link class="lien" to="/actus">Actu /</router-link>
      </div>
    </div>

    <router-view />

    <footer id="footer">
      &copy; Kiliakaa Productions
    </footer>
  </div>
</template>

<style scoped>
#main-container {
  background-color: #14213d;
  position: sticky;
  top: 0px;
  margin-top: -10px;
  height: 100px;
  box-shadow: 0px 1px 10px #fca311;
  margin-left: -8px;
  margin-right: -8px;
}
.main-title {
  color: #fca311;
  letter-spacing: 3px;
  font-size: 40px;
  margin-top: 0px;
  margin-left: 15px;
  margin-bottom: 0px;
  position: relative;
  top: 5px;
}

#nav {
  float: right;
  position: relative;
  top: 25px;
  margin-right: 15px;
}

.lien {
  margin: 5px;
  letter-spacing: 3px;
  font-size: 20px;
  text-decoration: none;
  color: #fca311;
}

#footer {
  text-align: center;
  position: relative;
  margin-right: -8px;
  margin-left: -8px;
  margin-bottom: -8px;
  font-size: 20px;
  background-color: #14213d;
  color: #fca311;
  height: 75px;
}
</style>
