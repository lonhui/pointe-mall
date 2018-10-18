<template>
    <div class="terms">
        <h2>Syarat & Ketentuan</h2>
        <li><p>1.User wajib menggunakan Caping versi terbaru.</p></li>
        <li><p>2.User hanya dapat berpartisipasi apabila sudah login ke akun Caping.</p></li>
        <li><p>3.Pada event Caping x JD Fans ini, akan terdapat berbagai macam barang yang bisa kamu beli.</p></li>
        <li><p>4.Dengan berbelanja lewat Caping, kamu bisa mendapatkan harga diskon yang lebih murah.</p></li>
        <li><p>5.Ketika kamu memilih barang yang akan kamu beli, kamu akan dialihkan ke halaman JD Fans untuk melanjutkan proses transaksi.</p></li>
        <li><p>6.Silahkan ikuti instruksi yang ada hingga proses transaksi selesai.</p></li>
        <li><p>7.Kamu dapat berbelanja sebanyak-banyaknya selama stok masih tersedia.</p></li>
        <li><p>8.Apabila ada pertanyaan terkait dengan event ini, silahkan menghubungi:</p></li>
        <h3>Customer Service JD.ID</h3>
        <p>Senin - Minggu ( 24 Jam )</p>
        <p>Nomor Telepon : 1500 618 atau 021 8062 7007</p>
        <p>Twitter : @csjd_id</p>
        <p>Web Live Chat : Link Live Chat</p>
        <p class="time">Senin - Jumat  ( 09.00 - 18.00 )</p>
        <p>Phone Order : 1500 618 ext 6</p>
    </div>
</template>

<script>
export default {
    mounted(){
        document.title="Syarat & Ketentuan"
    }
}
</script>

<style scoped>
.terms{
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
h3{
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
    font-family: Hind-SemiBold;
}
.time{
    margin-top: 10px;
}
@media only screen and (min-width: 720px) {
    .terms{
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
    h3{
        font-size: 28px;
        margin-top: 20px;
    }
    .time{
        margin-top: 20px;
    }
}
</style>
