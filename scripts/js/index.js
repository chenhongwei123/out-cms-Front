/**
 * Created by HJJ on 2017/1/3.
 *
 ━━━━━━神兽出没━━━━━━
 　　　┏┓　　　┏┓
 　　┏┛┻━━━┛┻┓
 　　┃　　　　　　　┃
 　　┃　　　━　　　┃
 　　┃　┳┛　┗┳　┃
 　　┃　　　　　　　┃
 　　┃　　　┻　　　┃
 　　┃　　　　　　　┃
 　　┗━┓　　　┏━┛Code is far away from bug with the animal protecting
 　　　　┃　　　┃    神兽保佑,代码无bug
 　　　　┃　　　┃
 　　　　┃　　　┗━━━┓
 　　　　┃　　　　　　　┣┓
 　　　　┃　　　　　　　┏┛
 　　　　┗┓┓┏━┳┓┏┛
 　　　　　┃┫┫　┃┫┫
 　　　　　┗┻┛　┗┻┛
 ━━━━━━感觉萌萌哒━━━━━━
 首页脚本
 */

$(document).ready(function () {

    var dataArray = [];


    /**
     *  读取cookie,添加到显示位置
     */
    //读取cookie放在变量中
    var name = $.cookie('name');
    $('.admin-name').text(name);

    /**
     * 退出
     */
    $('.logout').on('click',function () {
        $.cookie("name","", { expires: -1}); //清除cookie
        $.cookie("code","", { expires: -1});
        $.cookie("token","", { expires: -1});
        document.location.href ="../login.html";
    });

    /**
     * 用户统计
     */
    $.ajax({
        type:"get",
        url:"http://admin.honganjk.com/admin/users.action",
        async:true,
        headers:{
            "code":$.cookie("code"),
            "token":$.cookie("token")
        },

        dataType: "json",

        data: {
            "start":0,
            "size":10
        },
        success:function(data){
            var totla = data.data.total;
            $('.user-count').append(totla)
            console.log(totla);
        },
        error: function (msg) {
            alert("请求失败")
        }
    });

    /**
     * 食堂统计
     */
    $.ajax({
        type:'get',
        url:'http://admin.honganjk.com/admin/business.action',
        async:true,
        headers:{
            "code":$.cookie("code"),
            "token":$.cookie("token")
        },
        dataType: "json",

        data: {
            "start":0,
            "size":10
        },
        success:function(data){
            var totla = data.data.total;
            $('.shop-count').append(totla)
            console.log(totla);
        },
        error: function (msg) {
            alert("请求失败")
        }

    });

    /**
     * 订单统计
     */
    $.ajax({
        type:'get',
        url:'http://admin.honganjk.com/admin/orders.action',
        async:true,
        headers:{
            "code":$.cookie("code"),
            "token":$.cookie("token")
        },
        dataType: "json",

        data: {
            "start":0,
            "size":10
        },
        success:function(data){
            var totla = data.data.total;
            $('.order-count').append(totla)
            console.log(totla);
        },
        error: function (msg) {
            alert("请求失败")
        }

    });

    /**
     * 护工统计
     */
    $.ajax({

        type:'get',
        url:'http://admin.honganjk.com/admin/nurses.action',
        async:true,
        headers:{
            "code":$.cookie("code"),
            "token":$.cookie("token")
        },
        dataType: "json",

        data: {
            "start":0,
            "size":20
        },
        success:function(data){
            var totla = data.data.total;
            $('.nurse-count').append(totla);
            console.log(totla);
        },
        error: function (msg) {
            alert("请求失败")
        }

    });
    
    // console.log(dataArray);
});