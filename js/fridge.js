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
            //now_food_list: food_list[0],
            
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
            view_food: function (event) {
                var target = event.currentTarget;
                var food_id = $(target).attr("food_id");
                console.log(food_id);
                true_main_div.food_id = food_id;
                true_main_div.food_view = true;
            },
            close_view_food: function () {
                true_main_div.food_view = false;
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
