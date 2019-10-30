<template>
    <div class="u">
        <div class="food-box">
            <div class="return"><router-link to="/"><img class="img-auto" src="/imager/返回.png" alt=""></router-link></div>
            <div><img class="img-auto aa" :src='result.pic' alt=""></div>
            <div class="food-name"><h2>{{result.name}}</h2><p>({{result.tag}})</p>
              制作时间:{{result.cookingtime}} 
            </div>
            <div class="item">
                <div><h2>简介:</h2></div>
                <div v-html="result.content" class="word"></div>
                <div> <h2>主料<span class="food-num">{{foodType.length}}种</span></h2>
                    <ul><li class="eat-list" v-for="(item,index) in foodType" :key="index"><div class="food-eat"><span class="eat">{{item.mname}}</span><span class="g">{{item.amount}}</span></div></li></ul>
                </div>
                <div > <h2>辅料<span class="food-num">{{foodfu.length}}种</span></h2>
                    <ul class="food-fu-list"><li class="food-fu" v-for="(item,index) in foodfu" :key="index"><div class="food-eat gg"><span class="eat ">{{item.mname}}</span><span class="g ">{{item.amount}}</span></div></li>
                        
                    </ul>
                </div>
                <div> <h2>烹饪步骤 <span class="food-num">{{result.process.length}}步</span></h2>
                <ul>
                    <li v-for="(t,index) in result.process" :key="index">
                        <div>
                            <p class="food-way-pp">步骤{{index+1}}</p>
                            <div class="food-way">
                                <img class="img-auto" :src="t.pic" alt="">
                            </div>
                            <p class="food-way-p" v-html="t.pcontent"></p>
                        </div>
                    </li>
                 </ul>
                
                </div>
                <div class="end">一道美味<span class="end-name">{{result.name}}</span>就完成了</div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            result:'',
            id:this.$route.params.food,
            u:false
        }
    },
    computed: {
        foodType:function(){
           
                return this.result.material.filter(t => {
                if(t.type==1){
                    return t
                }
                
        })                       
    },
    foodfu:function(){
           
                return this.result.material.filter(t => {
                if(t.type==0){
                    return t
                }
                
        })                       
    }
    },
    methods: {
        foodDetail(){
            this.axios('/word?id='+this.id+'&appkey=2872823131c879a0').then(res => {
                this.result=res.data.result
                this.u= true
                window.console.log(this.result)
                window.console.log(this.id)
            })
        }
        // goodType(){
        //     this.foodType=this.result.material.filter(t =>{
        //         if(t.type==1){
        //             return t
        //         }
        //     })
        //     window.console.log(this.foodType)
        // }
    },
    mounted() {
        this.foodDetail()
        // setTimeout(this.goodType(),1000)
         
    },    
    
}
</script>
<style  scoped>
ul{
  margin: 0;
  padding: 0;
  list-style: none;
 
  
}
.return{
    width: 30px;
    height: 30px;
    position: absolute;
}
.img-auto {
  width: 100%;
  display: block;
}
.aa{
    height: 2.7rem;
}
.food-box{
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
.food-name{
    text-align: center;
    padding:10px 0 5px 0;
   background-color: #FAFAFA;
    font-size: 0.12rem;
    
    box-shadow: 0px 0px 6px #000 inset;
    border-radius: 2px;
}
.food-name>h2{
    margin-top: 0;
    font-size: 0.24rem;
}
.item{
    padding-left:5px 
}
.word{
    padding: 10px;
}
.food-num{
    color: #999999;
    margin-left: 10px;
   font-size: 14px;
}
.eat-list{
    overflow: hidden;
    border: 1px solid #eee;
    width: 2.5rem;
    height: 45px;
    background: #fafafa;
    margin: 0 auto
}
.food-eat{
    line-height: 45px;
}
.gg{
    line-height: 40px;
    overflow: hidden;
}
.eat{
    float: left;
    margin-left: 0.1rem;
    font-size: 14px;
    font-weight: 600;
}
.g{
    float: right;
    margin-right: 0.2rem
}
.end{
    padding: 0  0.3rem
}
.end-name{
    font-size: 18px;
    color: red
}
.food-fu{
    float: left;
    width: 49%;
    
    border: 1px solid #eee;
    
    height: 40px;
    background: #fafafa;
}
.item>div{
    margin-bottom: 0.1rem
}
.food-fu-list{
    overflow: hidden;
}
.food-way{
    width: 3rem;
    margin: 0 auto;
}
.food-way-p{
    padding: 0  0.35rem
}
.food-way-pp{
    font-weight: 600
}
</style>