$(document).ready(function() {
    console.log("fridge page show ...");
    
    var mist = false;
    var timestamp = Date.parse(new Date());
    //timestamp = timestamp / 1000;
    now_date = format_date(timestamp);
    now_time = format_time(timestamp);
    
    console.log(now_date);
    console.log(now_time);
    
    var ws_url = '';
    
	
    var stompClient = null;
    
    var socket = new SockJS('/endpoint');
    stompClient = Stomp.over(socket);
    var stomp_connect = stompClient.connect({}, function (frame) {
        console.log('Connected:' + frame);
        stompClient.subscribe('/topic/refrigerator', function (response) {
        	console.log("aaaaaa:"+response.body);
        	var received_msg = JSON.parse( response.body);
            console.log(received_msg);
            var operation = received_msg.operation;
            if (operation == "TEMPERATURE") {
                var server_temperature = received_msg.target;
                header_wrapper.temperature = server_temperature;
                return;
            }
            if (operation == "ON") {
                black_mist.mist_flag = true;
                return;
            }
            if (operation == "OFF") {
                black_mist.mist_flag = false;
                return;
            }
        	
        })
    },error_callback());
    
    stompClient.heartbeat.outgoing = 5 * 60000;
    stompClient.disconnect(function() {
        reconnect();
    });
    
    var error_callback = function() {
        reconnect();
    };
    
    var reconnect = function () {
        var socket = new SockJS('/endpoint');
        stompClient = Stomp.over(socket);
        stomp_connect();
    }
	
    // var ws = new WebSocket("ws://192.168.1.234:8080/topic/refrigerator");
//    var ws = new WebSocket("ws://localhost:8080/topic/refrigerator");
//    ws.onopen = function() {
//        ws.send("give me flag and temperature and rate !");
//        console.log("give me flag and temperature and rate !");
//    };
//    ws.onmessage = function (evt) { 
//        var received_msg = evt.data;
//        console.log(received_msg);
//        var operation = received_msg.operation;
//        if (operation == "TEMPERATURE") {
//            var server_temperature = received_msg.target;
//            header_wrapper.temperature = server_temperature;
//            return;
//        }
//        if (operation == "ON") {
//            black_mist.mist_flag = true;
//            return;
//        }
//        if (operation == "OFF") {
//            black_mist.mist_flag = false;
//            return;
//        }
//      
//    };
//    ws.onclose = function(){ 
//        //black_mist.mist_flag = true;
//        console.log("ws now is closed...");
//    };


    var header_wrapper = new Vue({
        el: '.header-wrapper',
        data: {
            now_date: now_date,
            now_time: now_time,
            temperature: 4,
            rate: 35,
            show: 1,
            items: {
                1:{ id:1, text: "111"},
                2:{ id:2, text: "222"},
                3:{ id:3, text: "333"},
            },
            activeIndex: 0,
            prizeList: [
                { name: "HI， 早上好，美好的早餐会让您活力充沛一整天" },
                { name: "更具冰箱中储存的食材，为您推荐菜单" },
                { name: "您可在冰箱操作页面在线预订食材" },
            ],
        },
        computed: {
            top() {
              return - this.activeIndex * 38 + 'px';
            }
        },
        mounted() {
            setInterval(_ => {
              if(this.activeIndex < this.prizeList.length - 1) {
                this.activeIndex += 1;
              } else {
                this.activeIndex = 0;
              }
			  this.refresh_now_time();
			  
            }, 3000);
        },
		methods: {
			refresh_now_time() {
				var i = 1;
				var timestamp = Date.parse(new Date());
				//timestamp = timestamp / 1000;
				var now_date = format_date(timestamp);
				var now_time = format_time(timestamp);
				
				console.log(now_date);
				console.log(now_time);
				header_wrapper.now_time = now_time;
				header_wrapper.now_date = now_date;
			},
		}
    })
    
    var black_mist = new Vue({
        el: ".black_mist",
        data: {
            mist_flag: mist,
        },
        method:{
            
        }
            
    });
    
    var true_main_div = new Vue({
        el: '.true_main_div',
        data: {
            fly_top: 0,
            fly_left: 0,
            main_flag: 0,
            food_type: 0,
            food_id: 1,
            food_view: false,
            food_page: 0,
            cook_book_view: false,
            view_cart_list_detail: false,
            fly_show: false,
            cook_book_descrpition: "",
            view_cart_list_detail_flag: 0,
            food_page_list: {
                0: [1,1,1,1,2,3,1,1,1,2,3,2],
                1: [1,2,1,1,1,1,1,1,1,1,2,1],
                2: [1,3,1,1,2,3,1,2,3,3,1,2],
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
            cookbook_id: 1,
            page_cookbook_list : [1,2,3,1,2],
            cookbook_list: {
                1: {
                   id: 1,
                   name: "西红柿炒鸡蛋",
                   user_num: "1-2人",
                   material: "鸡蛋 西红柿 葱花",
                   diffculty: "新手尝试",
                   skill: "炒",
                   time: "30-60分钟",
                   image_src: "images/3/图片-2.png",
                   big_image_src: "images/3/20171114104403.png",
                   description: "",
                   intruction: "",
                },
                2: {
                   id: 2,
                   name: "干锅鸡翅",
                   user_num: "1-2人",
                   material: "鸡蛋 西红柿 葱花",
                   diffculty: "新手尝试",
                   skill: "炒",
                   time: "30-60分钟",
                   image_src: "images/3/图片-1.png",
                   big_image_src: "../IMG_0491.PNG",
                   description: "菜如其名，番茄炒蛋，就是红红的番茄配上嫩黄蓬松的鸡蛋，隔上简单的配料和佐料，炒好后在撒上几粒碧绿的葱花，红亮亮黄灿灿的颜色，顿时让人食欲大开",
                   intruction: "菜如其名，番茄炒蛋，就是红红的番茄配上嫩黄蓬松的鸡蛋，隔上简单的配料和佐料，炒好后在撒上几粒碧绿的葱花，红亮亮黄灿灿的颜色，顿时让人食欲大开",
                },
                3: {
                   id: 3,
                   name: "白菜木耳",
                   user_num: "1-2人",
                   material: "鸡蛋 西红柿 葱花",
                   diffculty: "新手尝试",
                   skill: "炒",
                   time: "30-60分钟",
                   image_src: "images/3/图片-3.png",
                   big_image_src: "../IMG_0549.JPG",
                   description: "菜如其名，番茄炒蛋，就是红红的番茄配上嫩黄蓬松的鸡蛋，隔上简单的配料和佐料，炒好后在撒上几粒碧绿的葱花，红亮亮黄灿灿的颜色，顿时让人食欲大开",
                   intruction: "菜如其名，番茄炒蛋，就是红红的番茄配上嫩黄蓬松的鸡蛋，隔上简单的配料和佐料，炒好后在撒上几粒碧绿的葱花，红亮亮黄灿灿的颜色，顿时让人食欲大开",
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
            food_list_by_type: {
                0: [1,1,1,1,2,1,1,1,1,],
                1: [1,2,1,1,1,1,1,1,1,],
                2: [1,1,1,1,2,2,1,2,2,],
                3: [1,1,1,1,2,1,1,2,2,],
                4: [1,2,1,1,2,2,1,2,1,],
                5: [2,1,1,1,2,2,1,2,1,],
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
                    name: "每日坚果混合坚果仁",
                    market: "洪湖农家旗舰店",
                    price: "5.60",
                    image_src: "images/2/商品-水果.png",
                },
                2: {
                    id:2,
                    name: "每日坚果混合坚果仁",
                    market: "洪湖农家旗舰店",
                    price: "5.60",
                    image_src: "images/2/坚果.png",
                },
            },
            //cart_good_list: [1,2,2,1,2,1,2,1,],
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
                var mall_type_id = $(target).attr("mall_type_id");
                console.log(mall_type_id);
                true_main_div.mall_type_id = mall_type_id;
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
                var cookbook_id = $(target).attr("cookbook_id");
                console.log(cookbook_id);
                true_main_div.cookbook_id = cookbook_id;
                true_main_div.cook_book_view = true;
            },
            close_view_food: function () {
                true_main_div.food_view = false;
            },
            close_cb_v_icon: function () {
                true_main_div.cook_book_view = false;
            },
            close_view_cart: function () {
                true_main_div.view_cart_list_detail = false;
            },
            add_good: function () {
                var target = event.currentTarget;
                var good_id = $(target).attr("good_id");
                console.log(good_id);
				true_main_div.fly_good_id = good_id;
                true_main_div.cart_good_list.push(good_id);
                true_main_div.refresh_good_list();
				true_main_div.fly_show = true;
				
				var x = $(target).parents('.good_item').offset().top; 
				var y = $(target).parents('.good_item').offset().left; 
				console.log(x);
				console.log(y);
				var fly_item = $('.fly_item');
				console.log(fly_item);
				true_main_div.fly_top = x;
				true_main_div.fly_left = y;

				setTimeout(function() {true_main_div.fly_show = false;}, 1000);

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
                true_main_div.view_cart_list_detail_flag = 0;
                true_main_div.view_cart_list_detail = true;
            },
            back_view_cart: function () {
                if (true_main_div.view_cart_list_detail_flag == 2) {
                    true_main_div.view_cart_list_detail = false;
                    return;
                }
                true_main_div.view_cart_list_detail_flag = 0;
                true_main_div.view_cart_list_detail = true;
            },
            make_order: function () {
                if (true_main_div.cart_good_list.length == 0) {
                    return;
                }
                true_main_div.view_cart_list_detail_flag = 1;
                true_main_div.view_cart_list_detail = true;
            },
            finger_click: function() {
                true_main_div.view_cart_list_detail_flag = 2;
                true_main_div.view_cart_list_detail = true;
                true_main_div.cart_good_list = [];
                true_main_div.refresh_good_list();
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
