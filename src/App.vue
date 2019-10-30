<template>
  <div id="app">
    

    <router-view/>
    <div id="nav">
      
      <div class="but">
        <div class="box"><router-link :to='{name:"Home"}'>菜谱</router-link></div>
        <div class="box"><router-link to="/about">健康资讯</router-link></div>
      </div>
      
    </div>
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  font-size: 16px;
}

#nav {
  line-height: 65px;
  position:fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f5f5f5
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none
}

#nav a.router-link-exact-active {
  color: #42b983;
  
  
}
.but{
  /* position: fixed;
  left: 0;
  bottom: 0; */
  display:flex;
  text-align: center;
}
.box{
  flex: 1;
}

</style>
