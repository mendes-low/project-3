export { data, products }
const data = [
    {
        id: 1,
        img: 'https://imageproxy.wolt.com/venue/65ddb5802c5c8b36231d1bcb/3a2f01ca-dacd-11ee-b914-9ee0b06f2560_p1703594.jpg?w=1920',
        name: 'DIKIY DONER',
        description: 'Донер',
        priceRating: 1,
        rating: 8.5,
        deliveryTime: { from: 35, to: 45 },
        isNew: true,
        isHalal: false,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 2,
        img: 'https://imageproxy.wolt.com/venue/6576ebf3022e2ff592523b5f/beef9320-d460-11ee-9840-56435bceb8f7_f49247c2_af97_11ee_9124_669f6ac67b02_img_7790______.jpg?w=1920',
        name: 'LOVE IS COFFEE Кунаева',
        description: 'LOVE IS COFFEE',
        priceRating: 3,
        rating: 8.3,
        deliveryTime: { from: 25, to: 35 },
        isNew: true,
        isHalal: false,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 3,
        img: 'https://imageproxy.wolt.com/venue/5f8057ae72ba1a9670052fff/a6645c7a-0a2c-11eb-a23d-c68cdb8e12a5_7m3a7273.jpg?w=1920',
        name: 'Тагам Кунаева',
        description: 'Вкусно, как дома!',
        priceRating: 4,
        rating: 9.1,
        deliveryTime: { from: 45, to: 55 },
        isNew: false,
        isHalal: true,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 4,
        img: 'https://imageproxy.wolt.com/venue/6308d36bb030108a94cabfc7/879661a6-2548-11ed-8b55-7e7a98fc9902_d66a3bb4_d10f_11ec_9436_1662b6cd14e2_dsc_2395.jpg?w=1920',
        name: 'SULTAN Express Панфилова',
        description: 'Самые лучшие донеры, которые ты пробовал 🌯🍕 Лауреат Премии Wolt-2021 🏆',
        priceRating: 4,
        rating: 7.8,
        deliveryTime: { from: 35, to: 45 },
        isNew: true,
        isHalal: false,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 5,
        img: 'https://imageproxy.wolt.com/venue/65e04d1eb979168d2c58d771/7bc62c7c-dbb7-11ee-87b5-e2533b3d9ce4_______________2024_03_06___17.45.39.png?w=600',
        name: 'Lua Pastry Studio',
        description: 'Авторские и классические десерты',
        priceRating: 1,
        rating: '',
        deliveryTime: { from: 60, to: 65 },
        isNew: false,
        isHalal: true,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 6,
        img: 'https://imageproxy.wolt.com/venue/659539656c4ac297ac319c7b/69cfeaf8-b042-11ee-aebd-32a7b3d9f09c_img_0142______.jpg?w=600',
        name: 'Бостон Craft Kebab',
        description: 'Новый взгляд на давно полюбившееся блюдо',
        priceRating: 1,
        rating: 8.1,
        deliveryTime: { from: 60, to: 65 },
        isNew: true,
        isHalal: false,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 7,
        img: 'https://imageproxy.wolt.com/venue/656852db9353e9192e4c1cc5/b8c671ca-93f7-11ee-a266-8600d527d0f4_p1577267.jpg?w=600',
        name: 'M-eat by Khabib Ритц-Палас',
        description: 'Полезный фастфуд от Хабиба Нурмагомедова 🌯',
        priceRating: 2,
        rating: 8.6,
        deliveryTime: { from: 40, to: 50 },
        isNew: false,
        isHalal: false,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 8,
        img: 'https://imageproxy.wolt.com/venue/60420541a4ab17d687e6240b/0234d6ee-7d9e-11eb-b9c9-0efe48f461fd_d2cd24ec_516f_11eb_a3e1_5e96525bc8af_7m3a3101.jpeg?w=600',
        name: 'Tiger Food Globus',
        description: 'Еда для настоящих тигров',
        priceRating: 2,
        rating: 7.8,
        deliveryTime: { from: 40, to: 50 },
        isNew: false,
        isHalal: false,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 9,
        img: 'https://imageproxy.wolt.com/venue/61122ef5a9ad71cfe01bbf43/550a440a-0a41-11ec-b421-6211a2625d86_7m3a0541.jpg?w=600',
        name: '"Quelle Coffee" Кофейня',
        description: 'Насладись вкусным кофе и современным искусством! ☕️ 🎨',
        priceRating: 4,
        rating: 9.6,
        deliveryTime: { from: 30, to: 40 },
        isNew: false,
        isHalal: false,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 10,
        img: 'https://imageproxy.wolt.com/venue/5d91be126769d740c52a3304/88976960-1487-11ec-8d1b-cee0b8bee223_whatsapp_image_2021_09_13_at_08.28.43.jpeg?w=600',
        name: 'Pate & Pizza Khodzhanova',
        description: 'Натуральная пицца на тонком тесте и легендарные Шу! 🍕😍',
        priceRating: 3,
        rating: 7.8,
        deliveryTime: { from: 35, to: 40 },
        isNew: false,
        isHalal: true,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 11,
        img: 'https://imageproxy.wolt.com/venue/65d48006976e584d90eb895c/d1072d5e-d161-11ee-ab0b-d6d8acd7b71b_untitled_project__2_.jpg?w=600',
        name: 'Сеть Кафе Гульсарай Тургут Озала',
        description: 'Приготовлено с любовью 💙',
        priceRating: 1,
        rating: '',
        deliveryTime: { from: 45, to: 55 },
        isNew: false,
        isHalal: false,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 12,
        img: 'https://imageproxy.wolt.com/venue/5d7b4b646aba88a5d338f1dd/0149c06fe7047d89bf1da9cb0f2b1d45?w=600',
        name: 'United BRGRS',
        description: 'Настоящие Американские бургеры!',
        priceRating: 3,
        rating: 7.8,
        deliveryTime: { from: 35, to: 45 },
        isNew: false,
        isHalal: false,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 13,
        img: 'https://imageproxy.wolt.com/venue/64e2ece05749957a2bcb1344/9822a720-41b5-11ee-a8c0-eeb793a9997a_3b22cec4_51cf_11ec_adc7_da31800bc2df_p1152201.jpg?w=600',
        name: 'LEILANI Гоголя',
        description: 'Leilani Имбирные Шоты',
        priceRating: 2,
        rating: 9.6,
        deliveryTime: { from: 30, to: 45 },
        isNew: false,
        isHalal: false,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 14,
        img: 'https://imageproxy.wolt.com/venue/65a78bca2d213e034b891ffe/2cd1f372-b68b-11ee-bc8f-e6d6ca4c69f0_3c45e44a_fa24_11ed_a424_de46001c9c3a_0m0a6511.jpg?w=600',
        name: 'ЧебурекМи Сейфулина',
        description: 'Чебуреки на любой вкус 😍',
        priceRating: 2,
        rating: 7.8,
        deliveryTime: { from: 40, to: 50 },
        isNew: false,
        isHalal: false,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    },
    {
        id: 15,
        img: 'https://imageproxy.wolt.com/venue/644a099d7653159b537df13b/600f036c-e8d0-11ed-80cc-d604e27019da_img_5567_copy.jpg?w=600',
        name: 'Есть Хинкали Пить Вино',
        description: 'Самый большой выбор хинкали в мире 😍',
        priceRating: 2,
        rating: 8.4,
        deliveryTime: { from: 35, to: 45 },
        isNew: true,
        isHalal: false,
        isDeliveryFree: true,
        // workTime: { from: { hour: 10, minute: 30 }, to: { hour: 23, minute: 30 } }
    }
]

const products = [
    {
        id: 1,
        name: "Смартфон Vivo Y35 64GB Agate Black",
        img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2Fsmartfon_gsm_vivo_y35s_thx_655_50_4_64gb_agate_black_266984_1.jpg&w=256&q=100",
        rating: 4.9,
        reviews: 30,
        originalPrice: 109990,
        discountedPrice: 59990,
        deliveryTime: "Доставим за 2 часа",
    },
    {
        id: 2,
        name: "Саундбар JBL Cinema SB170",
        img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2Fsaundbar_jbl_cinema_sb170_268354_1.jpg&w=256&q=100",
        rating: 0,
        originalPrice: 179990,
        discountedPrice: 99990
    },
    {
        id: 3,
        name: "Электрическая варочная панель Electrolux EHF6232FOK",
        img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2Fvstraivaemaya_elektricheskaya_varochnaya_panel_electrolux_ehf6232fok_268730_1.jpg&w=256&q=100",
        rating: 5,
        reviews: 3,
        originalPrice: 379990,
        discountedPrice: 209990,
        deliveryTime: "Доставим за 2 часа",
    },
    {
        id: 4,
        name: "Велотренажер Genau Ergo XT-850",
        img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2Fvelotrenazher_genau_ergo_xt_850_271709_1a.jpg&w=256&q=100",
        rating: 0,
        originalPrice: 405290,
        discountedPrice: 198890
    },
    {
        id: 5,
        name: "Воздухоочиститель Tefal PT-2530",
        img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2Fvozduhoochistitel_tefal_pt_2530_277248_1.jpg&w=256&q=100",
        rating: 0,
        originalPrice: 155990,
        discountedPrice: 79990
    },
    {
        id: 6,
        name: "Смартфон Samsung Galaxy A25 5G 128GB Blue black",
        img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2Fsmartfon_samsung_galaxy_a25_5g_128gb_blue_black_277337_1.jpg&w=256&q=100",
        rating: 5,
        reviews: 1,
        originalPrice: 149990,
        discountedPrice: 129990,
        deliveryTime: "Доставим за 2 часа"
    }
];

export const sculptureList = [{
    name: 'Homenaje a la Neurocirugía',
    artist: 'Marta Colvin Andrade',
    description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
}, {
    name: 'Floralis Genérica',
    artist: 'Eduardo Catalano',
    description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
    url: 'https://i.imgur.com/ZF6s192m.jpg',
    alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}, {
    name: 'Eternal Presence',
    artist: 'John Woodrow Wilson',
    description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
    url: 'https://i.imgur.com/aTtVpES.jpg',
    alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
}, {
    name: 'Moai',
    artist: 'Unknown Artist',
    description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
    url: 'https://i.imgur.com/RCwLEoQm.jpg',
    alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
}, {
    name: 'Blue Nana',
    artist: 'Niki de Saint Phalle',
    description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
    url: 'https://i.imgur.com/Sd1AgUOm.jpg',
    alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
}, {
    name: 'Ultimate Form',
    artist: 'Barbara Hepworth',
    description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
    url: 'https://i.imgur.com/2heNQDcm.jpg',
    alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
}, {
    name: 'Cavaliere',
    artist: 'Lamidi Olonade Fakeye',
    description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
    url: 'https://i.imgur.com/wIdGuZwm.png',
    alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
}, {
    name: 'Big Bellies',
    artist: 'Alina Szapocznikow',
    description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
    url: 'https://i.imgur.com/AlHTAdDm.jpg',
    alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
}, {
    name: 'Terracotta Army',
    artist: 'Unknown Artist',
    description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
    url: 'https://i.imgur.com/HMFmH6m.jpg',
    alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
}, {
    name: 'Lunar Landscape',
    artist: 'Louise Nevelson',
    description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
    url: 'https://i.imgur.com/rN7hY6om.jpg',
    alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
}, {
    name: 'Aureole',
    artist: 'Ranjani Shettar',
    description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
    url: 'https://i.imgur.com/okTpbHhm.jpg',
    alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
}, {
    name: 'Hippos',
    artist: 'Taipei Zoo',
    description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
    url: 'https://i.imgur.com/6o5Vuyu.jpg',
    alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
}];


export const productsList = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/2/1.jpg",
            "https://cdn.dummyjson.com/product-images/2/2.jpg",
            "https://cdn.dummyjson.com/product-images/2/3.jpg",
            "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/3/1.jpg"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/4/1.jpg",
            "https://cdn.dummyjson.com/product-images/4/2.jpg",
            "https://cdn.dummyjson.com/product-images/4/3.jpg",
            "https://cdn.dummyjson.com/product-images/4/4.jpg",
            "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/5/1.jpg",
            "https://cdn.dummyjson.com/product-images/5/2.jpg",
            "https://cdn.dummyjson.com/product-images/5/3.jpg"
        ]
    },
    {
        "id": 6,
        "title": "MacBook Pro",
        "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
        "price": 1749,
        "discountPercentage": 11.02,
        "rating": 4.57,
        "stock": 83,
        "brand": "Apple",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
        "images": [
            "https://cdn.dummyjson.com/product-images/6/1.png",
            "https://cdn.dummyjson.com/product-images/6/2.jpg",
            "https://cdn.dummyjson.com/product-images/6/3.png",
            "https://cdn.dummyjson.com/product-images/6/4.jpg"
        ]
    },
    {
        "id": 7,
        "title": "Samsung Galaxy Book",
        "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        "price": 1499,
        "discountPercentage": 4.15,
        "rating": 4.25,
        "stock": 50,
        "brand": "Samsung",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/7/1.jpg",
            "https://cdn.dummyjson.com/product-images/7/2.jpg",
            "https://cdn.dummyjson.com/product-images/7/3.jpg",
            "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
        ]
    },
    {
        "id": 8,
        "title": "Microsoft Surface Laptop 4",
        "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        "price": 1499,
        "discountPercentage": 10.23,
        "rating": 4.43,
        "stock": 68,
        "brand": "Microsoft Surface",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/8/1.jpg",
            "https://cdn.dummyjson.com/product-images/8/2.jpg",
            "https://cdn.dummyjson.com/product-images/8/3.jpg",
            "https://cdn.dummyjson.com/product-images/8/4.jpg",
            "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
        ]
    },
    {
        "id": 9,
        "title": "Infinix INBOOK",
        "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        "price": 1099,
        "discountPercentage": 11.83,
        "rating": 4.54,
        "stock": 96,
        "brand": "Infinix",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/9/1.jpg",
            "https://cdn.dummyjson.com/product-images/9/2.png",
            "https://cdn.dummyjson.com/product-images/9/3.png",
            "https://cdn.dummyjson.com/product-images/9/4.jpg",
            "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg"
        ]
    },
    {
        "id": 10,
        "title": "HP Pavilion 15-DK1056WM",
        "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        "price": 1099,
        "discountPercentage": 6.18,
        "rating": 4.43,
        "stock": 89,
        "brand": "HP Pavilion",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
        "images": [
            "https://cdn.dummyjson.com/product-images/10/1.jpg",
            "https://cdn.dummyjson.com/product-images/10/2.jpg",
            "https://cdn.dummyjson.com/product-images/10/3.jpg",
            "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
        ]
    },
    {
        "id": 11,
        "title": "perfume Oil",
        "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
        "price": 13,
        "discountPercentage": 8.4,
        "rating": 4.26,
        "stock": 65,
        "brand": "Impression of Acqua Di Gio",
        "category": "fragrances",
        "thumbnail": "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/11/1.jpg",
            "https://cdn.dummyjson.com/product-images/11/2.jpg",
            "https://cdn.dummyjson.com/product-images/11/3.jpg",
            "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"
        ]
    },
    {
        "id": 12,
        "title": "Brown Perfume",
        "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        "price": 40,
        "discountPercentage": 15.66,
        "rating": 4,
        "stock": 52,
        "brand": "Royal_Mirage",
        "category": "fragrances",
        "thumbnail": "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/12/1.jpg",
            "https://cdn.dummyjson.com/product-images/12/2.jpg",
            "https://cdn.dummyjson.com/product-images/12/3.png",
            "https://cdn.dummyjson.com/product-images/12/4.jpg",
            "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg"
        ]
    },
    {
        "id": 13,
        "title": "Fog Scent Xpressio Perfume",
        "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
        "price": 13,
        "discountPercentage": 8.14,
        "rating": 4.59,
        "stock": 61,
        "brand": "Fog Scent Xpressio",
        "category": "fragrances",
        "thumbnail": "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
        "images": [
            "https://cdn.dummyjson.com/product-images/13/1.jpg",
            "https://cdn.dummyjson.com/product-images/13/2.png",
            "https://cdn.dummyjson.com/product-images/13/3.jpg",
            "https://cdn.dummyjson.com/product-images/13/4.jpg",
            "https://cdn.dummyjson.com/product-images/13/thumbnail.webp"
        ]
    },
    {
        "id": 14,
        "title": "Non-Alcoholic Concentrated Perfume Oil",
        "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
        "price": 120,
        "discountPercentage": 15.6,
        "rating": 4.21,
        "stock": 114,
        "brand": "Al Munakh",
        "category": "fragrances",
        "thumbnail": "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/14/1.jpg",
            "https://cdn.dummyjson.com/product-images/14/2.jpg",
            "https://cdn.dummyjson.com/product-images/14/3.jpg",
            "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg"
        ]
    },
    {
        "id": 15,
        "title": "Eau De Perfume Spray",
        "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
        "price": 30,
        "discountPercentage": 10.99,
        "rating": 4.7,
        "stock": 105,
        "brand": "Lord - Al-Rehab",
        "category": "fragrances",
        "thumbnail": "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/15/1.jpg",
            "https://cdn.dummyjson.com/product-images/15/2.jpg",
            "https://cdn.dummyjson.com/product-images/15/3.jpg",
            "https://cdn.dummyjson.com/product-images/15/4.jpg",
            "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg"
        ]
    },
    {
        "id": 16,
        "title": "Hyaluronic Acid Serum",
        "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
        "price": 19,
        "discountPercentage": 13.31,
        "rating": 4.83,
        "stock": 110,
        "brand": "L'Oreal Paris",
        "category": "skincare",
        "thumbnail": "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/16/1.png",
            "https://cdn.dummyjson.com/product-images/16/2.webp",
            "https://cdn.dummyjson.com/product-images/16/3.jpg",
            "https://cdn.dummyjson.com/product-images/16/4.jpg",
            "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg"
        ]
    },
    {
        "id": 17,
        "title": "Tree Oil 30ml",
        "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
        "price": 12,
        "discountPercentage": 4.09,
        "rating": 4.52,
        "stock": 78,
        "brand": "Hemani Tea",
        "category": "skincare",
        "thumbnail": "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/17/1.jpg",
            "https://cdn.dummyjson.com/product-images/17/2.jpg",
            "https://cdn.dummyjson.com/product-images/17/3.jpg",
            "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg"
        ]
    },
    {
        "id": 18,
        "title": "Oil Free Moisturizer 100ml",
        "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
        "price": 40,
        "discountPercentage": 13.1,
        "rating": 4.56,
        "stock": 88,
        "brand": "Dermive",
        "category": "skincare",
        "thumbnail": "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/18/1.jpg",
            "https://cdn.dummyjson.com/product-images/18/2.jpg",
            "https://cdn.dummyjson.com/product-images/18/3.jpg",
            "https://cdn.dummyjson.com/product-images/18/4.jpg",
            "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg"
        ]
    },
    {
        "id": 19,
        "title": "Skin Beauty Serum.",
        "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
        "price": 46,
        "discountPercentage": 10.68,
        "rating": 4.42,
        "stock": 54,
        "brand": "ROREC White Rice",
        "category": "skincare",
        "thumbnail": "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/19/1.jpg",
            "https://cdn.dummyjson.com/product-images/19/2.jpg",
            "https://cdn.dummyjson.com/product-images/19/3.png",
            "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg"
        ]
    },
    {
        "id": 20,
        "title": "Freckle Treatment Cream- 15gm",
        "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
        "price": 70,
        "discountPercentage": 16.99,
        "rating": 4.06,
        "stock": 140,
        "brand": "Fair & Clear",
        "category": "skincare",
        "thumbnail": "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/20/1.jpg",
            "https://cdn.dummyjson.com/product-images/20/2.jpg",
            "https://cdn.dummyjson.com/product-images/20/3.jpg",
            "https://cdn.dummyjson.com/product-images/20/4.jpg",
            "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg"
        ]
    },
    {
        "id": 21,
        "title": "- Daal Masoor 500 grams",
        "description": "Fine quality Branded Product Keep in a cool and dry place",
        "price": 20,
        "discountPercentage": 4.81,
        "rating": 4.44,
        "stock": 133,
        "brand": "Saaf & Khaas",
        "category": "groceries",
        "thumbnail": "https://cdn.dummyjson.com/product-images/21/thumbnail.png",
        "images": [
            "https://cdn.dummyjson.com/product-images/21/1.png",
            "https://cdn.dummyjson.com/product-images/21/2.jpg",
            "https://cdn.dummyjson.com/product-images/21/3.jpg"
        ]
    },
    {
        "id": 22,
        "title": "Elbow Macaroni - 400 gm",
        "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
        "price": 14,
        "discountPercentage": 15.58,
        "rating": 4.57,
        "stock": 146,
        "brand": "Bake Parlor Big",
        "category": "groceries",
        "thumbnail": "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/22/1.jpg",
            "https://cdn.dummyjson.com/product-images/22/2.jpg",
            "https://cdn.dummyjson.com/product-images/22/3.jpg"
        ]
    },
    {
        "id": 23,
        "title": "Orange Essence Food Flavou",
        "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
        "price": 14,
        "discountPercentage": 8.04,
        "rating": 4.85,
        "stock": 26,
        "brand": "Baking Food Items",
        "category": "groceries",
        "thumbnail": "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/23/1.jpg",
            "https://cdn.dummyjson.com/product-images/23/2.jpg",
            "https://cdn.dummyjson.com/product-images/23/3.jpg",
            "https://cdn.dummyjson.com/product-images/23/4.jpg",
            "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg"
        ]
    },
    {
        "id": 24,
        "title": "cereals muesli fruit nuts",
        "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
        "price": 46,
        "discountPercentage": 16.8,
        "rating": 4.94,
        "stock": 113,
        "brand": "fauji",
        "category": "groceries",
        "thumbnail": "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/24/1.jpg",
            "https://cdn.dummyjson.com/product-images/24/2.jpg",
            "https://cdn.dummyjson.com/product-images/24/3.jpg",
            "https://cdn.dummyjson.com/product-images/24/4.jpg",
            "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg"
        ]
    },
    {
        "id": 25,
        "title": "Gulab Powder 50 Gram",
        "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
        "price": 70,
        "discountPercentage": 13.58,
        "rating": 4.87,
        "stock": 47,
        "brand": "Dry Rose",
        "category": "groceries",
        "thumbnail": "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/25/1.png",
            "https://cdn.dummyjson.com/product-images/25/2.jpg",
            "https://cdn.dummyjson.com/product-images/25/3.png",
            "https://cdn.dummyjson.com/product-images/25/4.jpg",
            "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg"
        ]
    },
    {
        "id": 26,
        "title": "Plant Hanger For Home",
        "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
        "price": 41,
        "discountPercentage": 17.86,
        "rating": 4.08,
        "stock": 131,
        "brand": "Boho Decor",
        "category": "home-decoration",
        "thumbnail": "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/26/1.jpg",
            "https://cdn.dummyjson.com/product-images/26/2.jpg",
            "https://cdn.dummyjson.com/product-images/26/3.jpg",
            "https://cdn.dummyjson.com/product-images/26/4.jpg",
            "https://cdn.dummyjson.com/product-images/26/5.jpg",
            "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg"
        ]
    },
    {
        "id": 27,
        "title": "Flying Wooden Bird",
        "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
        "price": 51,
        "discountPercentage": 15.58,
        "rating": 4.41,
        "stock": 17,
        "brand": "Flying Wooden",
        "category": "home-decoration",
        "thumbnail": "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
        "images": [
            "https://cdn.dummyjson.com/product-images/27/1.jpg",
            "https://cdn.dummyjson.com/product-images/27/2.jpg",
            "https://cdn.dummyjson.com/product-images/27/3.jpg",
            "https://cdn.dummyjson.com/product-images/27/4.jpg",
            "https://cdn.dummyjson.com/product-images/27/thumbnail.webp"
        ]
    },
    {
        "id": 28,
        "title": "3D Embellishment Art Lamp",
        "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
        "price": 20,
        "discountPercentage": 16.49,
        "rating": 4.82,
        "stock": 54,
        "brand": "LED Lights",
        "category": "home-decoration",
        "thumbnail": "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/28/1.jpg",
            "https://cdn.dummyjson.com/product-images/28/2.jpg",
            "https://cdn.dummyjson.com/product-images/28/3.png",
            "https://cdn.dummyjson.com/product-images/28/4.jpg",
            "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg"
        ]
    },
    {
        "id": 29,
        "title": "Handcraft Chinese style",
        "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
        "price": 60,
        "discountPercentage": 15.34,
        "rating": 4.44,
        "stock": 7,
        "brand": "luxury palace",
        "category": "home-decoration",
        "thumbnail": "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
        "images": [
            "https://cdn.dummyjson.com/product-images/29/1.jpg",
            "https://cdn.dummyjson.com/product-images/29/2.jpg",
            "https://cdn.dummyjson.com/product-images/29/3.webp",
            "https://cdn.dummyjson.com/product-images/29/4.webp",
            "https://cdn.dummyjson.com/product-images/29/thumbnail.webp"
        ]
    },
    {
        "id": 30,
        "title": "Key Holder",
        "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        "price": 30,
        "discountPercentage": 2.92,
        "rating": 4.92,
        "stock": 54,
        "brand": "Golden",
        "category": "home-decoration",
        "thumbnail": "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/30/1.jpg",
            "https://cdn.dummyjson.com/product-images/30/2.jpg",
            "https://cdn.dummyjson.com/product-images/30/3.jpg",
            "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg"
        ]
    }
]