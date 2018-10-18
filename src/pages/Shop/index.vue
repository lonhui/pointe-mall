<template>
    <div class="shop">
        <h2>Cara Berbelanja</h2>
        <li><p>1.Pilih barang yang kamu inginkan.</p></li>
        <li><p>2.Klik <span>“beli”</span>.</p></li>
        <li><p>3.Kemudian kamu akan dialihkan langsung ke halaman <span>JD.id</span> untuk melanjutkan proses transaksi.</p></li>
        <li><p>4.Ikuti instruksinya hingga proses transaksi selesai.</p></li>
    </div>
</template>

<script>
export default {
    mounted(){
        document.title="Cara Berbelanja"
    }
}
</script>

<style scoped>
.shop{
    width: 90%;
    padding-top: 20px;
    margin: 0 auto;
}
h2{
    color: #3a3a3a;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    margin-bottom: 10px;
    font-family: Hind-SemiBold;
}
p{
    text-align: left;
    margin: 0;
    padding: 0;
    color: #3a3a3a;
    font-size: 14px;
    line-height: 24px;
    font-family: Hind-Regular;
}
li{
    list-style: none;
    padding: 0;
    margin: 0;
    padding-left: 12px;
    text-indent: -12px;
}
span{
    font-weight: bold;
    font-family: Hind-SemiBold;
}
@media only screen and (min-width: 720px) {
    .shop{
        padding-top: 40px;
    }
    h2{
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 20px;
    }
    p{
        font-size: 28px;
        line-height: 48px;
    }
    li{
        padding-left: 24px;
        text-indent: -24px;
    }
}
</style>
