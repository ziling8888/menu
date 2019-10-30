<template>
    <div class="wrapper">
        <swiper :options="swiperOption" class="swiper-container" >
        <!-- slides -->
        <swiper-slide class="swiper-item" v-for='item in swiperList' :key='item.id'>
            <img class='swiper-img' :src='item.imgUrl' alt="去哪儿门票" />
        </swiper-slide>
        <!-- Optional controls ,显示小点-->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>

export default {
    name:'HomeSwiper',
    //es6的写法，相当于data:function(){return{swiperOption:{}}}
    data(){
        return{
            swiperOption:{
                // 参数选项,显示小点
                pagination:'.swiper-pagination',
                //循环
                loop:true,
                //每张播放时长3秒，自动播放
                autoplay:2000,
                //滑动速度
                speed:1000,
                // delay:1000
                
               
            },
            //三张轮播，使用变量循环
            swiperList:[
                {
                    id:'001',
                    imgUrl:"/imager/3.jpg"
                },
                {
                    id:'002',
                    imgUrl:"/imager/2.jpg"
                },
                {
                    id:'003',
                    imgUrl:"/imager/1.jpg"
                }
            ]
        }
    },
      
}
</script>
<style  scoped>
.wrapper{
    overflow:hidden
        width 100%;
        height:0;
        padding-bottom:26.6666667%;
        background :#ccc
}
.swiper-item{
    width:100%
}
.swiper-img{
width:100%
}
                
</style>