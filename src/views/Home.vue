<template>
<div v-if="s">
  <div class="home">

    <div class="box"><input type="text">
    <div class="seach"><img class="img-auto" src="/imager/搜索.png" alt=""></div>
    </div>
    <div class="wheel">
     <div class="Container">
        <div id="carousel">
            <figure><img class="imger" src="/imager/1.jpg" alt=""></figure>
			<figure><img class="imger" src="/imager/2.jpg" alt=""></figure>
			<figure><img class="imger" src="/imager/3.jpg" alt=""></figure>
            <figure><img class="imger" src="/imager/4.jpg" alt=""></figure>
            <figure><img class="imger" src="/imager/5.jpg" alt=""></figure>
            <figure><img class="imger" src="/imager/6.jpg" alt=""></figure>
        </div>
    </div>
      <!-- <img class="auto-img" src="/imager/1.jpg" alt=""> -->
    </div>
    <div>
      <ul class="list">
        
        
           <router-link :to='{name:"Class",params:{dishlist:(song[4].list),foodclass:(song[4].name),id:224}}'><li class="cook">
          <div class="food-one">
            <div class="img"><img class="img-auto" src="/imager/菜品排序.png" alt=""></div>
            <div>菜系</div>
            </div>
            </li></router-link>
          
         <router-link :to='{name:"Class",params:{dishlist:(song[5].list),foodclass:(song[5].name),id:270}}'> 
        <li class="cook">
          <div class="food-one">
            <div class="img"><img class="img-auto" src="/imager/小吃.png" alt=""></div>
            <div>小吃</div>
          </div>
          </li>
          </router-link>
          <router-link :to='{name:"Class",params:{dishlist:(song[6].list),foodclass:(song[6].name),id:303}}'>
        <li class="cook">
          <div class="food-one">
            <div class="img"><img class="img-auto" src="/imager/菜系.png" alt=""></div>
            <div>菜品</div>
          </div>
          </li></router-link>
          
          <router-link :to='{name:"Class",params:{dishlist:(song[7].list),foodclass:(song[7].name),id:391}}'>
        <li class="cook">
          <div class="food-one">
            <div class="img"><img class="img-auto" src="/imager/口味.png" alt=""></div>
            <div>口味</div>
          </div>
          </li></router-link>

          <router-link :to='{name:"Class",params:{dishlist:(song[10].list),foodclass:(song[10].name),id:562}}'>
        <li class="cook">
          <div class="food-one">
            <div class="img"><img class="img-auto" src="/imager/场景.png" alt=""></div>
            <div>场景</div>
          </div>
          </li></router-link>
          <router-link :to='{name:"Class",params:{dishlist:(song[1].list),foodclass:(song[1].name),id:114}}'>
        <li class="cook">
          <div class="food-one">
            <div class="img"><img class="img-auto" src="/imager/人群2.png" alt=""></div>
            <div>人群</div>
          </div>
          </li></router-link>
      </ul>
    </div>
    <!-- <div class="cut">
      <div class="left fl">
        <ul>
          
          <li>青菜</li>
          </ul>
          

      </div>
      <div class="right fl">
        <ul><li><div class="food-one">
            <div class="imgs"><img class="img-auto" src="/imager/菜品排序.png" alt=""></div>
            <div class="food-name">菜系</div>
          </div></li>
          <li><div class="food-one">
            <div class="imgs"><img class="img-auto" src="/imager/菜品排序.png" alt=""></div>
            <div class="food-name">菜系</div>
          </div></li>
          <li><div class="food-one">
            <div class="imgs"><img class="img-auto" src="/imager/菜品排序.png" alt=""></div>
            <div class="food-name">菜系</div>
          </div></li>
          </ul>
      </div>
    </div> -->
  </div>
  </div>
</template>

<script>
import swiper from '../components/swiper.vue'

export default {
  name: 'home',
    data() {
    return {
       //菜谱名
      song:[], // 菜谱类
      s: false
    }
  },
  component:{
    swiper
  },
  methods: {
    getInfo(){
      this.axios('/api?appkey=2872823131c879a0').then(res => {
        this.song = res.data.result
        this.s = true;
        window.console.log(this.song)
      })
    },
    
  },
  mounted() {
    this.getInfo()
    
    
            // if(localStorage.getItem('collectsong') == undefined){
            //   this.axios('/data?classid=226&start=0&num=20&appkey=2872823131c879a0').then(res => 
            //   localStorage.setItem('collectsong', JSON.stringify(res))
            //  )
            // }
            // this.list = JSON.parse(localStorage.getItem('collectsong'));
            //  console.log('菜谱名',this.list)

            //  if(localStorage.getItem('song') == undefined){
            //   this.axios('/class?appkey=2872823131c879a0').then(res => 
            //   localStorage.setItem('song', JSON.stringify(res))
            //  )
            //  }
            //  if(localStorage.getItem('song')){
            //   this.song = JSON.parse(localStorage.getItem('song')).data.result;
            //  }
            
            // console.log('菜谱类',this.song)

        },
  
}
</script>
<style scoped>
.fl{
  float: left;
}
.box{
  width:50%;
  height: 25px;
  margin: 10px auto;
  border-radius:12px;
  background-color: #f5f5f5;
  position: relative;
  margin-bottom: 20px;
}
.box>input{
  width: calc(100% - 25px);
  height: 100%;
  border: 0;
  padding: 0;
  margin-left: 12px;
background-color: #f5f5f5;
  outline: none; 
}
.seach{
  width: 23px;
  height: 23px;
  
  position: absolute;
  right:-25px;
  top: 0
}
.img-auto{
  width: 100%;
  display: block
}
ul{
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  
}
.cook{
  float: left;
  width: 33.3%;
  padding-bottom: 10px;
  padding-top: 10px
}
.img{
  width: 60%;
  margin-left: 20%;
  height: 0.7rem;
}
.food-one{
  text-align: center;
 width: clac(100% - 14px);
 margin-right: 7px;
 margin-left: 7px;
 border: 1px solid rgb(0, 0, 0,0.5);
 border-radius:6px 
 
}
.left{
  width: 25%;
  max-height: 435px;
  overflow-y: auto
}
.right{
  width:75%;
   margin-top: 10px;
}
.left>ul>li{
  margin-top: 10px;
  margin-left: 5px
}
.right>ul>li{
  width: 50%;
  float: left;
}
.imgs{
  width: 60%;
  margin-left: 20%;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f5f5f5;
  margin-bottom: 10px;
}
.food-name{
  max-width: 1.2rem;
  margin: 0 auto;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}
.list{
  box-shadow: 0 0 5px #000 inset;
    border-radius: 5px;
}
.home{
  position: fixed;
  top: 0;
    left: 0;
    right: 0px;
    bottom: 65px;
    background: url("/imager/pp.jpg") no-repeat ;
  background-size: cover
}
.wheel{
  
  max-height: 300px;
  margin-bottom: 110px
}
.auto-img{
  width: 100%
}

.Container{
      margin: 4% auto;
      width: 210px;
      height: 140px;
      position: relative;
      perspective: 1000px;
  }
 #carousel{
            width: 100%;
            height: 100%;
            position: absolute;
            transform-style:preserve-3d;
            animation: rotation 20s infinite linear;
        }
        
        #carousel figure{
            display: block;
            position: absolute;
            width: 220px;
            height: 120px;
            left: 10px;
            top: 10px;
            background: black;
            overflow: hidden;
            border: solid 3px black;
            
        }
        .imger{
           
            cursor: pointer;
            transition:all 0.3s ease 0s;
            width: 100%;
            height: 100%;
        }
        
        #carousel figure:nth-child(1){transform: rotateY(0deg) translateZ(288px);}
        #carousel figure:nth-child(2) { transform: rotateY(60deg) translateZ(288px);}
        #carousel figure:nth-child(3) { transform: rotateY(120deg) translateZ(288px);}
        #carousel figure:nth-child(4) { transform: rotateY(180deg) translateZ(288px);}
        #carousel figure:nth-child(5) { transform: rotateY(240deg) translateZ(288px);}
        #carousel figure:nth-child(6) { transform: rotateY(300deg) translateZ(288px);}

        @keyframes rotation{
            from{
                transform: rotateY(0deg);
            }
            to{
                transform: rotateY(360deg);
            }
        }
</style>