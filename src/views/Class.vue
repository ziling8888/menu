<template>
<div v-if="w">
  <div class="cut">
    <div class="navs">
      <div class="navs-before" @click="go">
        <router-link to="/"><img class="img-auto" src="/imager/上一步 .png" alt /></router-link>
      </div>
      <span>{{foodclass}}</span>
    </div>
    <div class="left fl">
      <ul>                                  
        <li v-for="itme in dishlist" :key="itme.name" class="lefts "  id='itme.classid' @click="chose(itme.classid)">
               <div :class="{active:itme.classid==id}" class="lefts-box">{{itme.name}}</div> 
              </li>
        
      </ul>
    </div>
    <div class="right fl">
      <ul>
        <li class="right-box" v-for="item in list" :key="item.id"><router-link :to="{name:'Food',params:{food:item.id}}" tag="div"><div class="food-one">
            <div class="imgs">
              
              <img class="img-auto" :src='item.pic' alt />
            </div>
            <div class="food-name">{{item.name}}</div>
          </div></router-link>
          
        </li>
        
      </ul>
    </div>
  </div>
  <div v-show="q" class="cut"><div class="cut-show">
    <div><img class="img-auto" src="/imager/404_h331.png" alt=""></div>
    
    <p>数据无法获取</p>
    <router-link to='/' tag="div">点击此处返回首页</router-link></div></div>
  </div>
</template>
<script>
export default {
  name: "Class",
  
  data() {
    return {
        list:{},
        dishlist:this.$route.params.dishlist,
        foodclass:this.$route.params.foodclass,
        id:this.$route.params.id,
        // 
        num:20,
        w: false,
        q:false
    };
  },
  methods: {
      getint(){//菜谱名
      // let res = await this.axios('/data?classid=226&start=0&num=20&appkey=2872823131c879a0')
      this.axios('/data?classid='+this.id+'&start=0&num='+this.num+'&appkey=2872823131c879a0').then( res =>{
        this.list = res.data.result.list
          // window.console.log(this.list)
          this.w= true
          window.console.log('菜谱名=>',this.list)
          if(this.list==undefined){
            window.console.log('菜谱名77777')
            this.q= true
            
          }
        
        
        
      }) },
      chose(num){
          this.id = num;
          this.getint()
      },
      go(){

      }         
  },
  mounted() {
    this.getint()
  
  }
};
</script>
<style  scoped>
.fl {
  float: left;
}

.img-auto {
  width: 100%;
  display: block;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}
.list > li {
  float: left;
  width: 33.3%;
  padding-bottom: 10px;
  padding-top: 10px;
}
.img {
  width: 60%;
  margin-left: 20%;
  height: 0.7rem;
}
.food-one {
  text-align: center;
}
.left {
  width: 27%;
  max-height: 639px;
  overflow-y: auto;
  box-shadow:-5px 0px 5px #0f0f0f inset 
}
.right {
  width: 73%;
  
  max-height: 639px;
  overflow-y: auto;
}
.right>ul{
  margin-top: 10px;
}
.lefts {
  margin-top: 10px;
  margin-left: 5px;
  
}
.lefts-box{
  display: inline-block;
  padding: 0 8px;
  border-radius: 4px; 
}
.right-box {
  width: 50%;
  float: left;
}
.imgs {
  width: 80%;
  height: 112px;
  margin-left: 10%;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  background: url("/imager/tu.png") no-repeat ;
  background-size: cover
}
.food-name {
  max-width: 1.2rem;
  margin: 0 auto;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
 padding: 0 10px;
 margin: 10px 0
}
.navs-before {
  width: 0.3rem;
  height: 0.2rem;

  position: absolute;
  left: 0.1rem;
}
.navs {
  position: relative;
  background-color: #f5f5f5;
  text-align: center;
  line-height: 30px;
  opacity: 0.8;
}
.cut {
    height: 6.7rem;
    position: relative;
  background: url("/imager/背景.jpg") no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10
}
.active{
    background-color: rgb(0, 0, 0,0.4);
    border: 1px solid red;
    font-size: 18px
    
}
.cut-show{
  width: 250px;
  text-align: center;
  margin: 100px auto
}
</style>