<template>
  <div class="about">
    <div class="return"><router-link to="/"><img class="img-auto" src="/imager/返回.png" alt=""></router-link></div>
    <div class="k"></div>
    <ul><li v-for="(item,index) in  view" :key="item.title">
      <div class="box" v-if="id===index">
      <h3 class="b"><span>{{item.title}}</span></h3>
      <div class="box-img"><img class="img-auto" :src="item.pic" alt=""></div>
      <p class="conts" v-html="item.content"></p>
      <p class="y"><a class="left" :href="item.url" >点击查看链接原文</a><span class="right">来源:{{item.src}}</span></p>
      <p class="y"><span class="right">时间:{{item.time}}</span></p>

      <p class="y"><span class="right" @click="hid">点击收起</span></p>
     </div>

      <div class="box" v-else >
      <h3 class="b"><span>{{item.title}}</span></h3>
      <div class="cont" v-html="item.content"></div>
      <p class="y"><span class="right" @click="show(index)">点击查看全文</span></p>
     </div>

     
      </li></ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      view:'',
      id:''
    }
  },
  methods: {
    getview(){
      this.axios('/view?channel=健康&start=0&num=20&appkey=2872823131c879a0').then(res =>{
        this.view=res.data.result.list
        window.console.log('新闻',this.view)

      })
    },
    show(num){
      this.id=num
    },
    hid(){
      this.id=''
    }
  },
  mounted() {
    this.getview()
  },
}
</script>
<style  scoped >
.about{
  position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:white;
    z-index: 10;
    font-size: 0.14rem;
    overflow-y: auto
}
.return{
    width: 30px;
    height: 30px;
    position: absolute;
}
.k{
  width: 100%;
    height: 35px;
    background-color: rgb(0, 0, 0,0.4)
}
.img-auto {
  width: 100%;
  display: block;
}
ul{
  margin: 0;
  padding: 0;
  list-style: none;  
}
.box{
  width: 100%;
  border-bottom: 1px solid #000
}
.cont>>>p{
  padding: 0 50px;
  max-width: 275px;
  
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

}
.cont>>>p:nth-child(n+3){
  display:none;
}
.cont>>>img{
  max-width: 320px;
}
.conts>>>img{
  max-width: 320px;
  margin-right: 0.25rem;
}
.conts{
  padding: 0 50px;
  
}
.y{
  overflow: hidden;
}
.right{
  float: right;
  margin-right: 0.2rem
}
.left{
  float: left;
  margin-left: 0.2rem
}
.b{
  text-align: center;
  padding: 0 0.25rem;
  color: red
  
}
.box-img{
  width: 2rem;
  margin: 0 auto
}
</style>
