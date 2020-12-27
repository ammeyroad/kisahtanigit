var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.items =
  [
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/avocado-3210885_1920.jpg",
        "name": "ALPUKAT MENTEGA",
        "category": "Pangan",
        "price": "30000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
        
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/tamarind-1549217_1920.jpg",
        "name": "ASAM BUAH",
        "category": "sayuran",
        "price": "31000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/green-beans-1018624_1920.jpg",
        "name": "BABY BUNCIS",
        "category": "Pangan",
        "price": "27.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/baby-caisim.jpg",
        "name": "BABY CAISIM",
        "category": "Pangan",
        "price": "13.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/kailan-1.jpg",
        "name": "BABY KAILAN",
        "category": "Buah",
        "price": "22.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/baby-pakchoy.jpg",
        "name": "BABY PAKCHOY",
        "category": "Rempah",
        "price": "18.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/bawang-bombai.jpg",
        "name": "BAWANG BOMBAI",
        "category": "Rempah",
        "price": "22.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/bang-merah.jpg",
        "name": "BAWANG MERAH",
        "category": "Rempah",
        "price": "34.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/bang-merah.jpg",
        "name": "BAWANG MERAH BREBES",
        "category": "Rempah",
        "price": "46.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/bawang-putih.jpg",
        "name": "BAWANG PUTIH",
        "category": "Rempah",
        "price": "28.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/bawang-putih.jpg",
        "name": "BAWANG PUTIH KATING",
        "category": "Rempah",
        "price": "33.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/bayam.jpg",
        "name": "BAYAM HIJAU",
        "category": "Rempah",
        "price": "15.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/bayam.jpg",
        "name": "BAYAM HIJAU HIDROPONIK",
        "category": "Umbi",
        "price": "50.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/bayam.jpg",
        "name": "BAYAM HIJAU ORGANIK",
        "category": "Umbi",
        "price": "60.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/9/1/103851769/103851769_23f91fab-403c-477e-9c97-6bcda343e121_1080_1080.webp",
        "name": "BAYAM MERAH HIDROPONIK",
        "category": "sayuran",
        "price": "40.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/bengkuang.jpg",
        "name": "BENGKUANG",
        "category": "Pangan",
        "price": "17.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/21/9418c007-8ef5-4cae-bc84-bf266f2954ee.png.webp",
        "name": "BERAS 5KG",
        "category": "sayuran",
        "price": "60.500",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/21/29fd2979-2416-4e1d-9a1b-064b1e6a69f9.png.webp",
        "name": "BERAS MERAH",
        "category": "sayuran",
        "price": "25.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/lada-hitam-scaled.jpg",
        "name": "BIJI LADA HITAM 100G",
        "category": "sayuran",
        "price": "13.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/brokoli-baby.jpg",
        "name": "BROKOLI",
        "category": "Umbi",
        "price": "27.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/brokoli-baby.jpg",
        "name": "BROKOLI BERSIH",
        "category": "Umbi",
        "price": "41.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/Buah-Bit.jpg",
        "name": "BUAH BIT",
        "category": "Pangan",
        "price": "22.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/buah-naga.jpg",
        "name": "BUAH NAGA PCS",
        "category": "Pangan",
        "price": "25.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/bukan-emping-original.png",
        "name": "BUKAN EMPING",
        "category": "Umbi",
        "price": "5.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/bukan-emping-pedas.jpg",
        "name": "BUKAN EMPING SPICY",
        "category": "Umbi",
        "price": "5.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/buncis-segar.jpg",
        "name": "BUNCIS SUPER",
        "category": "Umbi",
        "price": "19.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/cabai-hijau-besar.jpg",
        "name": "CABAI HIJAU BESAR",
        "category": "Pangan",
        "price": "32.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/cabai-keriting-hijau-1.jpg",
        "name": "CABAI KERITING HIJAU",
        "category": "Umbi",
        "price": "26.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/cabai-keriting-merah.jpg",
        "name": "CABAI KERITING MERAH",
        "category": "Umbi",
        "price": "44.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/cabai-merah-besar.jpg",
        "name": "CABAI MERAH BESAR",
        "category": "Umbi",
        "price": "53.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/cabai-rawit-hijau.jpg",
        "name": "CABAI RAWIT HIJAU",
        "category": "Pangan",
        "price": "26.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/cabai-rawit.jpg",
        "name": "CABAI RAWIT MERAH",
        "category": "Umbi",
        "price": "38.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/caisim.jpg",
        "name": "CAESIM HIDROPONIK",
        "category": "Umbi",
        "price": "45.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/caisim.jpg",
        "name": "CAISIM",
        "category": "Umbi",
        "price": "12.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/caisim.jpg",
        "name": "CAISIM ORGANIK",
        "category": "Umbi",
        "price": "60.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/cuciwis-scaled.jpg",
        "name": "CUCIWIS",
        "category": "Pangan",
        "price": "12.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/daun-bawang.jpg",
        "name": "DAUN BAWANG",
        "category": "Umbi",
        "price": "20.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/daun-gingseng.jpg",
        "name": "DAUN GINSENG",
        "category": "Umbi",
        "price": "21.500",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/daun-jeruk.jpg",
        "name": "DAUN JERUK",
        "category": "Pangan",
        "price": "40.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/daun-kenikir.jpg",
        "name": "DAUN KENIKIR",
        "category": "sayuran",
        "price": "28.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/daun-kucai.jpg",
        "name": "DAUN KUCAI",
        "category": "Pangan",
        "price": "27.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/daun-melinjo.jpg",
        "name": "DAUN MELINJO",
        "category": "sayuran",
        "price": "40.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/mint-scaled.jpg",
        "name": "DAUN MINT",
        "category": "Rempah",
        "price": "130.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/Daun-Pepaya.png",
        "name": "DAUN PEPAYA",
        "category": "Pangan",
        "price": "15.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/daun-salam-1.jpg",
        "name": "DAUN SALAM",
        "category": "Umbi",
        "price": "17.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/seledri.jpg",
        "name": "DAUN SELEDRI",
        "category": "Labu",
        "price": "40.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/sereh-1.jpg",
        "name": "DAUN SEREH",
        "category": "Labu",
        "price": "13.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/daun-singkong.jpg",
        "name": "DAUN SINGKONG",
        "category": "Umbi",
        "price": "12.500",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/20201021_142756.jpg",
        "name": "EDAMAME",
        "category": "sayuran",
        "price": "30.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/9/21/265d4cf7-5d4b-45aa-ad7b-2071a4d58eb4.png",
        "name": "GULA AREN",
        "category": "Rempah",
        "price": "42.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/21/01f49bf7-1ff1-4d37-890b-f54f4a5de03f.png.webp",
        "name": "GULA MATAHARI",
        "category": "sayuran",
        "price": "15.500",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/gulavit.png",
        "name": "GULAVIT",
        "category": "Umbi",
        "price": "20.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/jagung-manis-kulit-scaled.jpg",
        "name": "JAGUNG MANIS KULIT",
        "category": "Pangan",
        "price": "11.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/jagung-manis-lepas-1.jpg",
        "name": "JAGUNG MANIS LEPAS",
        "category": "Umbi",
        "price": "14.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/jahe-gajah-1.jpg",
        "name": "JAHE GAJAH",
        "category": "Umbi",
        "price": "47.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/21/1f847991-2522-4d8a-a3e3-41fd4b04dcfd.png.webp",
        "name": "JAHE MERAH",
        "category": "sayuran",
        "price": "63.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/Jamur-Kancing-scaled.jpg",
        "name": "JAMUR KANCING",
        "category": "Pangan",
        "price": "50.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/Jamur-Kuping.jpg",
        "name": "JAMUR KUPING KERING 100GR",
        "category": "Pangan",
        "price": "18.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/Jamur-Tiram.jpg",
        "name": "JAMUR TIRAM",
        "category": "Pangan",
        "price": "32.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/9/21/e57ff031-00f0-4216-8fd4-0ff33de47b7e.png",
        "name": "JENGKOL",
        "category": "Rempah",
        "price": "60.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/jeruk-bali.jpg",
        "name": "JERUK BALI MADU PCS",
        "category": "sayuran",
        "price": "22.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/6/1/103851769/103851769_379c07cf-de0f-45a1-b4f5-50f096922257_700_700.webp",
        "name": "JERUK LEMON LOKAL",
        "category": "sayuran",
        "price": "21.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/jeruk-limau-1.jpg",
        "name": "JERUK LIMAU",
        "category": "Buah",
        "price": "68.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/Jeruk-Medan-22rb_kg.png",
        "name": "JERUK MEDAN",
        "category": "sayuran",
        "price": "35.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/6/1/103851769/103851769_0b26c588-60c4-4a7b-bded-380293f2e3c5_700_700.webp",
        "name": "JERUK NIPIS",
        "category": "sayuran",
        "price": "21.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/21/a0d97510-2c01-4cf7-80ef-da9d82d74e34.png.webp",
        "name": "JERUK PERAS",
        "category": "sayuran",
        "price": "15.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/21/2b156150-25fa-4a62-9089-98c7fdd37dda.png.webp",
        "name": "KACANG HIJAU AUS",
        "category": "sayuran",
        "price": "35.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/21/59ee935d-83dc-4967-92d5-7a5e4f23e311.png.webp",
        "name": "KACANG MERAH",
        "category": "sayuran",
        "price": "45.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/9/21/8d357523-7314-43de-94aa-570322ccb755.png",
        "name": "KACANG PANJANG",
        "category": "Rempah",
        "price": "19.500",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/kacang-tanah-scaled.jpg",
        "name": "KACANG TANAH KULIT MENTAH",
        "category": "sayuran",
        "price": "25.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/kale-hidroponik-scaled.jpg",
        "name": "KALE HIDROPONIK",
        "category": "sayuran",
        "price": "70.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/kangkung.jpg",
        "name": "KANGKUNG",
        "category": "Buah",
        "price": "14.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/kangkung.jpg",
        "name": "KANGKUNG ORGANIK",
        "category": "Buah",
        "price": "60.000",
        "atribute": "/500 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/cinnamon.jpg",
        "name": "KAYU MANIS",
        "category": "sayuran",
        "price": "110.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/kluwek.jpg",
        "name": "KELUWEK",
        "category": "sayuran",
        "price": "38.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/kembang-kol-1.jpg",
        "name": "KEMBANG KOL PCS",
        "category": "Buah",
        "price": "25.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/kencur.jpg",
        "name": "KENCUR",
        "category": "Buah",
        "price": "53.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7.tokopedia.net/img/cache/900/product-1/2020/6/1/103851769/103851769_71e88ecc-7cab-4ddf-b890-eb3948ddb3dd_700_700",
        "name": "KENTANG DIENG",
        "category": "Rempah",
        "price": "17.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/21/6fc80487-af2e-45a8-b4fc-1bd92d3919fd.png.webp",
        "name": "KENTANG RENDANG",
        "category": "sayuran",
        "price": "17.500",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/kol-merah.jpg",
        "name": "KOL MERAH PCS",
        "category": "sayuran",
        "price": "49.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/kol-putih.jpg",
        "name": "KOL PUTIH PCS",
        "category": "Buah",
        "price": "13.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/kunyit-1.jpg",
        "name": "KUNYIT",
        "category": "Buah",
        "price": "17.500",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/butternut.jpg",
        "name": "LABU MADU",
        "category": "sayuran",
        "price": "42.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/Labu-Parang-22rb_pc.png",
        "name": "LABU PARANG",
        "category": "sayuran",
        "price": "22.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/21/89dbaa0d-d852-4862-ba3f-3c0f5c51447c.png.webp",
        "name": "LABU SIAM",
        "category": "sayuran",
        "price": "10.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/lengkuas-1.jpg",
        "name": "LENGKUAS",
        "category": "Buah",
        "price": "20.500",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/lobak-putih.jpg",
        "name": "LOBAK",
        "category": "Buah",
        "price": "13.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/lolorosa.png",
        "name": "LOLOROSA HIDROPONIK",
        "category": "sayuran",
        "price": "54.500",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/melinjo.jpg",
        "name": "MELINJO",
        "category": "sayuran",
        "price": "21.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/melon-hijau.jpg",
        "name": "MELON HIJAU PCS 1800-2300GR",
        "category": "Rempah",
        "price": "26.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/melon-orange.jpg",
        "name": "MELON ORANGE PCS 1-2KG",
        "category": "Rempah",
        "price": "28.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/Nai-Bai.jpg",
        "name": "NAIBAI ORGANIK",
        "category": "Rempah",
        "price": "54.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "gambar",
        "name": "Nama",
        "category": "Kategori",
        "price": "harga",
        "atribute": "satuan",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/nanas.jpg",
        "name": "NANAS GRADE A PCS",
        "category": "Rempah",
        "price": "20.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/Nangka-Muda.jpg",
        "name": "NANGKA MUDA PCS",
        "category": "Rempah",
        "price": "14.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/okra.jpg",
        "name": "OKRA",
        "category": "Rempah",
        "price": "42.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/opak-original.jpg",
        "name": "OPAK SIANTAR",
        "category": "Buah",
        "price": "55.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/opak-vegetarian.jpg",
        "name": "OPAK SIANTAR VEGE",
        "category": "Buah",
        "price": "55.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/oyong-1.jpg",
        "name": "OYONG",
        "category": "Buah",
        "price": "17.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/pakchoy.jpg",
        "name": "PAHA UTUH",
        "category": "Labu",
        "price": "43.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/pakchoy.jpg",
        "name": "PAKCHOY",
        "category": "Labu",
        "price": "13.500",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/pakchoy.jpg",
        "name": "PAKCHOY HIDROPONIK",
        "category": "Labu",
        "price": "40.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/6/7/103851769/103851769_5529d4e2-728b-4ecc-93ef-0dc6dabc8cc9_700_700.webp",
        "name": "PAPRIKA HIJAU",
        "category": "sayuran",
        "price": "55.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7.tokopedia.net/img/cache/900/product-1/2020/6/7/103851769/103851769_0de5ebfb-ff01-4c43-b0c0-c61231d9f1ca_700_700",
        "name": "PAPRIKA KUNING",
        "category": "Rempah",
        "price": "65.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/6/7/103851769/103851769_e247e5be-fa4f-4d31-a118-0da086c67480_700_700.webp",
        "name": "PAPRIKA MERAH",
        "category": "sayuran",
        "price": "60.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/pare-hijau.jpg",
        "name": "PARE HIJAU",
        "category": "Labu",
        "price": "17.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/pepaya-california.jpg",
        "name": "PEPAYA CALIFORNIA PCS 1-1.5KG",
        "category": "Rempah",
        "price": "15.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/pepaya-muda.jpeg",
        "name": "PEPAYA MUDA",
        "category": "Rempah",
        "price": "12.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/petai.jpg",
        "name": "PETAI KUPAS 100GR",
        "category": "Labu",
        "price": "32.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/petai.jpg",
        "name": "PETAI PAPAN PCS",
        "category": "Labu",
        "price": "10.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/6/1/103851769/103851769_7aaae9b1-1eba-424a-9692-28049241d26e_700_700.webp",
        "name": "PISANG AMBON MATANG",
        "category": "sayuran",
        "price": "36.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/6/1/103851769/103851769_7aaae9b1-1eba-424a-9692-28049241d26e_700_700.webp",
        "name": "PISANG AMBON MUDA",
        "category": "sayuran",
        "price": "38.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/cavendish-scaled.jpg",
        "name": "PISANG CAVENDISH SISIR",
        "category": "sayuran",
        "price": "26.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/21/f3974329-ee9d-44ab-87b4-f3b454ab3ff0.png.webp",
        "name": "PISANG KEPOK",
        "category": "sayuran",
        "price": "28.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/pisang-tanduk.png",
        "name": "PISANG TANDUK PCS",
        "category": "Rempah",
        "price": "7.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/pucuk-labu.jpg",
        "name": "PUCUK LABU",
        "category": "Labu",
        "price": "15.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/salak-pondoh.jpg",
        "name": "SALAK PONDOH KG",
        "category": "Rempah",
        "price": "17.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/sawi-pahit.jpg",
        "name": "SAWI PAHIT ORGANIK",
        "category": "Rempah",
        "price": "54.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/sawi-putih.jpeg",
        "name": "SAWI PUTIH PCS",
        "category": "sayuran",
        "price": "15.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/6/1/103851769/103851769_59758d80-eaad-4211-b96d-29e16c32b140_700_700.webp",
        "name": "SELADA AIR",
        "category": "sayuran",
        "price": "25.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/selada-keriting.jpg",
        "name": "SELADA KERITING",
        "category": "Labu",
        "price": "21.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/selada-keriting.jpg",
        "name": "SELADA KERITING HIDROPONIK",
        "category": "Labu",
        "price": "65.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/9/1/103851769/103851769_38df7063-f832-45bd-a824-14e26bb6c252_1080_1080.webp",
        "name": "SELADA ROMAINE HIDROPONIK",
        "category": "sayuran",
        "price": "50.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/semangka-merah.png",
        "name": "SEMANGKA MERAH PCS 3-4KG",
        "category": "Umbi",
        "price": "30.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/singkong-1.jpg",
        "name": "SINGKONG",
        "category": "Labu",
        "price": "9.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/siomak-1.jpg",
        "name": "SIOMAK",
        "category": "Labu",
        "price": "40.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/tauge-1.jpg",
        "name": "TAUGE",
        "category": "Labu",
        "price": "17.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/telur-ayam-1.jpg",
        "name": "TELUR AYAM 6 PACK",
        "category": "Labu",
        "price": "12.500",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/telur-ayam-1.jpg",
        "name": "TELUR AYAM KAMPUNG 10 PACK",
        "category": "Labu",
        "price": "30.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/telur-ayam-1.jpg",
        "name": "TELUR AYAM KAMPUNG KG",
        "category": "Labu",
        "price": "60.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/telur-ayam-1.jpg",
        "name": "TELUR AYAM KG",
        "category": "Labu",
        "price": "32.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/21/b9bdfa54-2c2c-4f37-8d68-6c8ce4efb13d.png.webp",
        "name": "TEMPE",
        "category": "sayuran",
        "price": "12.000",
        "atribute": "/pcs",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/temulawak.jpg",
        "name": "TEMULAWAK",
        "category": "Umbi",
        "price": "27.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/terong-ijo.jpg",
        "name": "TERING HIJAU BULAT",
        "category": "Umbi",
        "price": "19.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/terong-belanda.jpg",
        "name": "TERONG BELANDA",
        "category": "Umbi",
        "price": "33.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/terong-1.jpg",
        "name": "TERONG UNGU",
        "category": "Pangan",
        "price": "13.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/kyuri-1.jpg",
        "name": "TIMUN KYURI",
        "category": "Buah",
        "price": "17.500",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/timun-lokal.jpg",
        "name": "TIMUN LOKAL",
        "category": "Pangan",
        "price": "11.500",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/tomat-hijau-scaled.jpg",
        "name": "TOMAT HIJAU LOKAL",
        "category": "Umbi",
        "price": "15.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/terong-merah-lokal.jpg",
        "name": "TOMAT MERAH LOKAL",
        "category": "Pangan",
        "price": "15.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/ubi-jepang-1.jpg",
        "name": "UBI JEPANG",
        "category": "Pangan",
        "price": "13.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/ubi-ungu.jpg",
        "name": "UBI MERAH",
        "category": "Pangan",
        "price": "12.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/ubi-putih-1.jpg",
        "name": "UBI PUTIH",
        "category": "Pangan",
        "price": "11.000",
        "atribute": "/1kg",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/ubi-ungu.jpg",
        "name": "UBI UNGU",
        "category": "Pangan",
        "price": "13.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/udang-vaname.png",
        "name": "UDANG VANAME TAMBAK SEGAR L",
        "category": "Pangan",
        "price": "155.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/udang-vaname.png",
        "name": "UDANG VANAME TAMBAK SEGAR M",
        "category": "Pangan",
        "price": "120.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/udang-vaname.png",
        "name": "UDANG VANAME TAMBAK SEGAR S",
        "category": "Pangan",
        "price": "110.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/udang-vaname.png",
        "name": "UDANG VANAME TAMBAK SEGAR XL",
        "category": "Pangan",
        "price": "175.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://www.tokopedia.com/kisahtani/vitacare-ester-c-forte",
        "name": "VITACARE ESTER-C FORTE",
        "category": "Umbi",
        "price": "120.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/11/wortel_berastagi_premium_2_mobile_product_4x.jpg",
        "name": "WORTEL BRASTAGI",
        "category": "sayuran",
        "price": "15.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/wortel-2.jpg",
        "name": "WORTEL LOKAL",
        "category": "Pangan",
        "price": "12.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/12/wortel-organik-scaled.jpg",
        "name": "WORTEL ORGANIK",
        "category": "Umbi",
        "price": "30.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    },
    {
        "id": "https://kisahtani.com/wp-content/uploads/2020/07/zucchini-1.jpg",
        "name": "ZUKINI",
        "category": "Pangan",
        "price": "20.000",
        "atribute": "/250 gr",
        "qty": "100",
        "stock": "in stock"
    }
]
  $scope.myItems = [];
  $scope.addItem = function(newItem) {
    if($scope.myItems.length === 0) {
      newItem.count = 1;
      $scope.myItems.push(newItem);
    }else {
      var repeat = false;
      for( var i = 0; i < $scope.myItems.length; i++ ) {
        if($scope.myItems[i].id == newItem.id) {
          $scope.myItems[i].count++;
          repeat = true;
        }
      }
      if(!repeat) {
        newItem.count = 1;
        $scope.myItems.push(newItem);
      }
    }

    updatePrice();
  };
  var updatePrice = function() {
    var totalPrice = 0;
	var totalPrice1 = 0;
	var totalPrice2 = 0;
	var totalPrice3 = 0;
    for( var i = 0; i < $scope.myItems.length; i++ ) {
      totalPrice += ($scope.myItems[i].count) * ($scope.myItems[i].price);
	  totalPrice1 += ($scope.myItems[i].count) * ($scope.myItems[i].price1);
	  totalPrice2 += ($scope.myItems[i].count) * ($scope.myItems[i].price2);
	  totalPrice3 += ($scope.myItems[i].count) * ($scope.myItems[i].price3);
    }
    $scope.totalPrice = totalPrice;
	$scope.totalPrice1 = totalPrice1;
	$scope.totalPrice2 = totalPrice2;
	$scope.totalPrice3 = totalPrice3;
  };
  
  //sepeti boşalt - empty your cart
  $scope.removeBasket = function() {
    $scope.myItems.splice(0, $scope.myItems.length);
    updatePrice();
  };
  
});

app.filter('reverse', function() {
  return function(items) {
    var x = items.slice().reverse();
    if( items.length > 1 ) {
      angular.element('#ok tr').css('background','#fff');
      angular.element('#ok tr').filter(':first').css('background','lightyellow');
      setTimeout(function() {
        angular.element('#ok tr') .filter(':first').css('background','#fff');
      }, 500);
    }
    return x;
  };
});