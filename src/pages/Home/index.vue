<template>
    <div>
        <div class="header">
            <div class="button">
                <router-link to="/Terms"><button>Syarat&Ketentuan</button></router-link>
                <router-link to="/Shop"><button>Cara Berbelanja</button></router-link>
            </div>
        </div>
        <div class="list">
            <div class="commodity" v-for="item in list" :key="item.id">
                <div class="commodity-img">
                    <img :src="item.image">
                </div>
                <div class="commodity-button" v-if="buttonShow">
                    <a :href="item.sourceWeb"><button>BELI</button></a>
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
            buttonShow:true
        }
    },
    mounted(){
        this.getUid()
        this.getProductList()
    },
    methods:{
        getProductList(){
            this.$axios.get(process.env.API_ROOT+'/cms/product/list')
            .then((res)=>{
                this.list = res.data.data.data
            })
        },
        getUid(){
            const url = window.location.href
            let uid = url.match(/[^a-zA-Z0-9]u{1,1}=([0-9]+)/)
            let did = url.match(/[^a-zA-Z0-9]c{1,1}=([a-z0-9]+)/)
            if(uid&&did){
                this.user.uid=uid[1]
                this.user.device_id=did[1]
            }else{
                alert('请先登录！')
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
