$(document).ready(function() {
    console.log("fridge page show ...");
    
    
    var timestamp = Date.parse(new Date());
    //timestamp = timestamp / 1000;
    now_date = format_date(timestamp);
    now_time = format_time(timestamp);
    
    
    console.log(now_date);
    console.log(now_time);
    
    
    var right_header = new Vue({
        el: '.right-header',
        data: {
            now_date: now_date,
            now_time: now_time
        }
    })
    
    
    
    var true_main_div = new Vue({
        el: '.true_main_div',
        data: {
            main_flag: 0,
            food_type: 0,
            food_id: 0,
            food_view: false,
            cook_book_view: false,
            view_cart_list_detail: false,
            cook_book_descrpition: "",
            food_list: 
            {
                0:{
                    1: {
                        id: 1,
                        name: "西红柿",
                        weight: "500",
                        limit_time: 3,
                        icon_src: 'images/potato.png',
                        image_src: 'images/image_potato.png',
                    },
                    2: {
                        id: 2,
                        name: "西红柿2",
                        weight: "500",
                        limit_time: 3,
                        icon_src: 'images/potato.png',
                        image_src: 'images/image_potato.png',
                    },
                    3: {
                        id: 3,
                        name: "西红柿3",
                        weight: "500",
                        limit_time: 3,
                        icon_src: 'images/potato.png',
                        image_src: 'images/image_potato.png',
                    },
                    4: {
                        id: 4,
                        name: "西红柿4",
                        weight: "500",
                        limit_time: 3,
                        icon_src: 'images/potato.png',
                        image_src: 'images/image_potato.png',
                    },
                },
                1: {
                    1: {
                        id: 1,
                        name: "水果",
                        weight: "500",
                        limit_time: 3,
                        icon_src: 'images/potato.png',
                        image_src: 'images/image_potato.png',
                    },
                    2: {
                        id: 2,
                        name: "水果2",
                        weight: "500",
                        limit_time: 3,
                        icon_src: 'images/potato.png',
                        image_src: 'images/image_potato.png',
                    },
                    3: {
                        id: 3,
                        name: "水果3",
                        weight: "500",
                        limit_time: 3,
                        icon_src: 'images/potato.png',
                        image_src: 'images/image_potato.png',
                    },
                    4: {
                        id: 4,
                        name: "水果4",
                        weight: "500",
                        limit_time: 3,
                        icon_src: 'images/potato.png',
                        image_src: 'images/image_potato.png',
                    },
                },
                2: {
                    1: {
                        id: 1,
                        name: "肉",
                        weight: "500",
                        limit_time: 3,
                        icon_src: 'images/potato.png',
                        image_src: 'images/image_potato.png',
                    },
                    2: {
                        id: 2,
                        name: "肉2",
                        weight: "500",
                        limit_time: 3,
                        icon_src: 'images/potato.png',
                        image_src: 'images/image_potato.png',
                    },
                    3: {
                        id: 3,
                        name: "肉3",
                        weight: "500",
                        limit_time: 3,
                        icon_src: 'images/potato.png',
                        image_src: 'images/image_potato.png',
                    },
                    4: {
                        id: 4,
                        name: "肉4",
                        weight: "500",
                        limit_time: 3,
                        icon_src: 'images/potato.png',
                        image_src: 'images/image_potato.png',
                    },
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
            change_food_type: function (event) {
                var target = event.currentTarget;
                var food_type = $(target).attr("food_type");
                console.log(food_type);
                true_main_div.food_type = food_type;
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
    return y+'.' + add0(m)+'.' + add0(d);
}
function format_time(timestamp){
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return add0(h)+' : '+add0(mm);
}
