<template>
    <div>
        <div class="header">
            <div class="button">
                <router-link to="/Terms"><button>Syarat&Ketentuan</button></router-link>
                <router-link to="/Shop"><button>Cara Berbelanja</button></router-link>
            </div>
        </div>
        <!-- 未登录提示 -->
        <div class="noLogin" v-if="!buttonShow">
            Kamu harus login dulu untuk ikutan event ini
        </div>
        <!-- 网络错误提示 -->
        <div class="internetError" v-if="internetErrorShow">
            Oops, mohon cek koneksi internetnya terlebih dahulu
            <img src="@/assets/Refresh.png" @click="getUid">
        </div>
        <!-- 加载中动画 -->
        <div class="loading" v-show="loading">
            <img src="@/assets/5-121204194032.gif" @click="getProductList">
        </div>
        <div class="list" v-show="!loading">
            <div class="commodity" v-for="item in list" :key="item.id">
                <div class="commodity-img">
                    <img :src="item.image">
                </div>
                <div class="commodity-button" v-if="buttonShow">
                    <a :href="item.source_web"><button>BELI</button></a>
                </div>
                <div class="Disable-button" v-else>
                    <button>BELI</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[],
            user:{},
            buttonShow:true,
            internetErrorShow:false,
            loading:false
        }
    },
    mounted(){
        this.getUid()
    },
    methods:{
        getProductList(){
            this.loading=true
            // process.env.API_ROOT+
            this.$axios.get('/v2/product/h5/list?limit=10000&offset=0')
            .then((res)=>{
                this.list = res.data.data.list
                this.loading=false
            },(error)=>{
                this.internetErrorShow=true
                this.loading=false
            })
        },
        getUid(){
            const url = window.location.href
            let uid = url.match(/[^a-zA-Z0-9]u{1,1}=([0-9]+)/)
            let did = url.match(/[^a-zA-Z0-9]c{1,1}=([a-z0-9]+)/)
            if(uid&&did){
                 this.loading=true
                // process.env.API_ROOT+
                 this.$axios.get('/v2/ccsp/user/'+uid[1]+'/'+did[1])
                .then((res)=>{
                    if(res.data.code==301){
                         this.buttonShow=false
                        // alert('用户不存在！')
                    }else if(res.data.code==0){
                        this.user.uid=uid[1]
                        this.user.device_id=did[1]
                        this.getProductList()
                    }
                },(error)=>{
                    this.loading=false
                    this.internetErrorShow=true
                })
            }else{
                this.buttonShow=false
            }
        }
    }

}
</script>

<style scoped>
.header{
    height: 240px;
    width: 100%;
    background: url("../../assets/JD_Banner.jpg") no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.header .button{
    width: 140px;
    height: 100px;
    position:absolute;
    bottom: 0;
    right: 0;
}
.header .button button{
    width: 120px;
    height: 30px;
    color: #fff;
    float: right;
    margin-right: 20px;
    margin-top: 12px;
    border: 0px;
    border-radius: 5px;
    background: linear-gradient(#b4ec51, #429321);
}
.list{
    width: 96%;
    margin: 0 auto 40px;
    /* flex布局 */
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:flex-start;
    align-content:flex-start;
}
.commodity{
    width: 106px;
    height: 156px;
    margin-top: 15px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #a3a3a3;
}
.commodity-img{
    width: 86px;
    height: 86px;
    margin: 10px auto 0;
    border-radius: 1px;
    border: #e6e6e6 1px solid;
}
.commodity-img img{
    width: 100%;
    height: 100%;
    border-radius: 1px;
}
.commodity-button{
    width: 86px;
    height: 40px;
    margin: 10px auto 0;
    border-radius: 5px;
}
.commodity-button button{
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    background-color: #82c345
}
.Disable-button{
    width: 86px;
    height: 40px;
    margin: 10px auto 0;
    border-radius: 5px;
}
.Disable-button button{
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    background-color: #a3a3a3
}
.noLogin{
    border:#f5dab1 1px solid;
    width: 80%;
    line-height: 40px;
    border-radius: 5px;
    background-color: #fdf6ec;
    color: #e6a23c;
    text-align: center;
    margin: 10px auto 0;
}
.internetError{
    border:#fbc4c4 1px solid;
    width: 90%;
    line-height: 40px;
    border-radius: 5px;
    background-color: #fef0f0;
    color: #f56c6c;
    text-align: center;
    margin: 10px auto 0;
}
.internetError img{
    height: 26px;
    position: relative;
    top:7px;
    left: 10px;
}
.loading{
    text-align: center;
    margin-top: 20px;
}

@media only screen and (min-width: 720px) {
    .header {
       height: 620px;
    }
    .header .button{
        width: 500px;
        height: 260px;
    }
    .header .button button{
        width: 340px;
        height: 90px;
        font-size: 30px;
        margin-right: 40px;
        margin-top: 24px;
        border-radius: 15px;
        font-family: opensans;
    }

    .list{
        margin: 0 auto 40px;
    }
    .commodity{
        width: 318px;
        height: 468px;
        margin-top: 45px;
        border-radius: 15px;
        box-shadow: 0px 0px 30px #a3a3a3;
    }
    .commodity-img{
        width: 256px;
        height: 256px;
        margin: 30px auto 0;
        border-radius: 3px;
        border: #e6e6e6 3px solid;
    }
    .commodity-img img{
        border-radius: 3px;
    }
    .commodity-button{
        width: 256px;
        height: 120px;
        margin: 30px auto 0;
        border-radius: 15px;
    }
    .commodity-button button{
        font-size: 40px;
        font-family: opensans;
        border-radius: 15px;
    }
    .Disable-button{
        width: 256px;
        height: 120px;
        margin: 30px auto 0;
        border-radius: 15px;
    }
    .Disable-button button{
        font-size: 40px;
        font-family: opensans;
        border-radius: 15px;
    }

}
</style>
