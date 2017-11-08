$(document).ready(function() {
    console.log("fridge page show ...");
    
    
    var timestamp = Date.parse(new Date());
    //timestamp = timestamp / 1000;
    now_date = format_date(timestamp);
    now_time = format_time(timestamp);
    
    
    console.log(now_date);
    console.log(now_time);
    
    
    var header_wrapper = new Vue({
        el: '.header-wrapper',
        data: {
            now_date: now_date,
            now_time: now_time,
            temperature: 4,
            rate: 35,
        }
    })
    
    
    
    var true_main_div = new Vue({
        el: '.true_main_div',
        data: {
            main_flag: 0,
            food_type: 0,
            food_id: 1,
            food_view: false,
            food_page: 0,
            cook_book_view: false,
            view_cart_list_detail: false,
            cook_book_descrpition: "",
            food_page_list: {
                0: [1,1,1,1,2,3,1,1,1],
                1: [1,2,1,1,1,1,1,1,1],
                2: [1,3,1,1,2,3,1,2,3],
            },
            food_page_icons: [0, 1, 2],
            food_list: {
                1: {
                    id: 1,
                    name: "苹果",
                    english_name: "apple",
                    weight: "2",
                    left_day: 15,
                    cycle: '2017.11.3 - 2017.11.20',
                    image_src: 'images/1/苹果.png',
                    detail: {
                        sale_company: "承德市蓝旗商贸有限公司",
                        production_company: "江苏省徐州市科技大棚基地",
                        sale_place: "承德市华润超市",
                        orgin_area: "江苏省徐州市沛县河口镇黄庄村",
                        sale_track: "河北省内公路网络运输",
                        farmer: "黄庄村 周先生",
                    },
                    description: "一种碳水化合物、水分、纤维、钾含量都较高的水果，对于缓解便秘，消除水肿均有一定帮助适宜减肥时食用。",
                    nutrition:{
                        heat: "54.00",
                        carbohydrate: "12.30",
                        fibre: "1.20",
                        fat: "0.20",
                    }
                },
                2: {
                    id: 2,
                    name: "猕猴桃",
                    english_name: "kiwifruit",
                    weight: "2",
                    left_day: 3,
                    cycle: '2017.11.3 - 2017.11.20',
                    image_src: 'images/1/猕猴桃.png',
                    detail: {
                        sale_company: "承德市蓝旗商贸有限公司",
                        production_company: "江苏省徐州市科技大棚基地",
                        sale_place: "承德市华润超市",
                        orgin_area: "江苏省徐州市沛县河口镇黄庄村",
                        sale_track: "河北省内公路网络运输",
                        farmer: "黄庄村 周先生",
                    },
                    description: "一种碳水化合物、水分、纤维、钾含量都较高的水果，对于缓解便秘，消除水肿均有一定帮助适宜减肥时食用。",
                    nutrition:{
                        heat: "54.00",
                        carbohydrate: "12.30",
                        fibre: "1.20",
                        fat: "0.20",
                    }
                },
                3: {
                    id: 3,
                    name: "柠檬",
                    english_name: "lemon",
                    weight: "0.6",
                    left_day: 0,
                    cycle: '2017.11.3 - 2017.11.20',
                    image_src: 'images/1/柠檬.png',
                    detail: {
                        sale_company: "承德市蓝旗商贸有限公司",
                        production_company: "江苏省徐州市科技大棚基地",
                        sale_place: "承德市华润超市",
                        orgin_area: "江苏省徐州市沛县河口镇黄庄村",
                        sale_track: "河北省内公路网络运输",
                        farmer: "黄庄村 周先生",
                    },
                    description: "一种碳水化合物、水分、纤维、钾含量都较高的水果，对于缓解便秘，消除水肿均有一定帮助适宜减肥时食用。",
                    nutrition:{
                        heat: "54.00",
                        carbohydrate: "12.30",
                        fibre: "1.20",
                        fat: "0.20",
                    }
                },
            },  
            cookbook_types: {
                "0": "湘菜",
                "1": "鲁菜",
                "2": "川菜",
                "3": "京菜",
                "4": "淮阳菜",
                "5": "晋菜",
            },
            cookbook_type: 0,
            cookbook_list: {
                0: {
                    1: {
                       id: 1,
                       name: "口水鸡",
                       material: "土鸡 花生 湘菜 独蒜 花椒",
                       diffculty: "初级",
                       skill: "炖",
                       time: "30-60分钟",
                       image_src: "images/koushuiji.png",
                       description: "详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法",
                    },
                    2: {
                       id: 2,
                       name: "口水鸡2",
                       material: "土鸡 花生 湘菜 独蒜 花椒",
                       diffculty: "初级",
                       skill: "炖",
                       time: "30-60分钟",
                       image_src: "images/koushuiji.png",
                       description: "详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法",
                    },
                    3: {
                       id: 3,
                       name: "口水鸡3",
                       material: "土鸡 花生 湘菜 独蒜 花椒",
                       diffculty: "初级",
                       skill: "炖",
                       time: "30-60分钟",
                       image_src: "images/koushuiji.png",
                       description: "详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法",
                    },
                    4: {
                       id: 4,
                       name: "口水鸡4",
                       material: "土鸡 花生 湘菜 独蒜 花椒",
                       diffculty: "初级",
                       skill: "炖",
                       time: "30-60分钟",
                       image_src: "images/koushuiji.png",
                       description: "详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法",
                    },
                },
                1: {
                    1: {
                       id: 1,
                       name: "口水鸡",
                       material: "土鸡 花生 湘菜 独蒜 花椒",
                       diffculty: "初级",
                       skill: "炖",
                       time: "30-60分钟",
                       image_src: "images/koushuiji.png",
                       description: "详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法",
                    },
                    2: {
                       id: 2,
                       name: "口水鸡2",
                       material: "土鸡 花生 湘菜 独蒜 花椒",
                       diffculty: "初级",
                       skill: "炖",
                       time: "30-60分钟",
                       image_src: "images/koushuiji.png",
                       description: "详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法",
                    },
                    3: {
                       id: 3,
                       name: "口水鸡3",
                       material: "土鸡 花生 湘菜 独蒜 花椒",
                       diffculty: "初级",
                       skill: "炖",
                       time: "30-60分钟",
                       image_src: "images/koushuiji.png",
                       description: "详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法",
                    },
                    4: {
                       id: 4,
                       name: "口水鸡4",
                       material: "土鸡 花生 湘菜 独蒜 花椒",
                       diffculty: "初级",
                       skill: "炖",
                       time: "30-60分钟",
                       image_src: "images/koushuiji.png",
                       description: "详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法详细做法",
                    },
                },
            },
            mall_type_list: {
                0: "海产类",
                1: "肉类",
                2: "家禽类",
                3: "果蔬类",
                4: "面点类",
                5: "干货调料",
            },
            mall_type_id: 0,
            market_list:{
                0: "XXX超市",
                1: "YYY超市",
            },
            choose_market_id: 0,
            brand_list:{
                0: "XXX品牌",
                1: "YYY品牌",
            },
            choose_brand_id: 0,
            total_count: 0,
            total_price: 0.00,
            good_list: {
                1: {
                    id:1,
                    name: "太古白菜",
                    market: "XX超市",
                    price: "5.60",
                    image_src: "images/cabbage",
                },
                2: {
                    id:2,
                    name: "太古白菜",
                    market: "XX超市",
                    price: "5.60",
                    image_src: "images/cabbage",
                },
                3: {
                    id:3,
                    name: "太古白菜",
                    market: "XX超市",
                    price: "5.60",
                    image_src: "images/cabbage",
                },
                4: {
                    id:4,
                    name: "太古白菜",
                    market: "XX超市",
                    price: "5.60",
                    image_src: "images/cabbage",
                },
                5: {
                    id:5,
                    name: "太古白菜",
                    market: "XX超市",
                    price: "5.60",
                    image_src: "images/cabbage",
                },
            },
            cart_good_list: [],
        },

        
        methods: {
            change_main_flag: function (event) {
                var target = event.currentTarget;
                var main_flag = $(target).attr("main_flag");
                console.log(main_flag);
                true_main_div.main_flag = main_flag;
            },
            choose_food_page: function (event) {
                var target = event.currentTarget;
                var page_id = $(target).attr("page_id");
                console.log(page_id);
                true_main_div.food_page = page_id;
                //console.log(now_food_list);
            },
            choose_cookbook_type: function (event) {
                var target = event.currentTarget;
                var cookbook_type = $(target).attr("cb_type");
                console.log(cookbook_type);
                true_main_div.cookbook_type = cookbook_type;
            },
            choose_mall_type: function (event) {
                var target = event.currentTarget;
                var mall_id = $(target).attr("mall_id");
                console.log(mall_id);
                true_main_div.mall_type_id = mall_id;
            },
            choose_market: function (event) {
                var target = event.currentTarget;
                var market_id = $(target).attr("market_id");
                console.log(market_id);
                true_main_div.choose_market_id = market_id;
            },
            choose_brand: function (event) {
                var target = event.currentTarget;
                var brand_id = $(target).attr("brand_id");
                console.log(brand_id);
                true_main_div.choose_brand_id = brand_id;
            },
            view_food: function (event) {
                var target = event.currentTarget;
                var food_id = $(target).attr("food_id");
                console.log(food_id);
                true_main_div.food_id = food_id;
                true_main_div.food_view = true;
            },
            view_cook_book: function (event) {
                var target = event.currentTarget;
                var description = $(target).attr("descrpition");
                console.log(description);
                true_main_div.cook_book_description = description;
                true_main_div.cook_book_view = true;
            },
            close_view_food: function () {
                true_main_div.food_view = false;
            },
            close_view_cookbook: function () {
                true_main_div.cook_book_view = false;
            },
            close_view_cart: function () {
                true_main_div.view_cart_list_detail = false;
            },
            add_good: function () {
                var target = event.currentTarget;
                var good_id = $(target).attr("good_id");
                console.log(good_id);
                true_main_div.cart_good_list.push(good_id);
                true_main_div.refresh_good_list();
            },
            refresh_good_list: function () {
                console.log(true_main_div.cart_good_list);
                true_main_div.total_price = 0;
                for (var i in true_main_div.cart_good_list) {
                    var good_id = true_main_div.cart_good_list[i];
                    true_main_div.total_price += parseFloat(true_main_div.good_list[good_id].price);
                }
                true_main_div.total_price = true_main_div.total_price.toFixed(2);
                true_main_div.total_count = true_main_div.cart_good_list.length;
            },
            show_cart_list_detail: function () {
                console.log(true_main_div.cart_good_list);
                true_main_div.view_cart_list_detail = true;
            }
        },
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});

function add0(m){
    return m < 10 ? '0' + m : m;
}

function format_date(timestamp) {
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y+'年' + add0(m)+'月' + add0(d)+'日';
}
function format_time(timestamp){
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return add0(h)+'：'+add0(mm);
}
