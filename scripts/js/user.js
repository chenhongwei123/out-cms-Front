/**
 * Created by HJJ on 2017/1/9.
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


 */
$(document).ready(function () {

    //----------------------验证登录---------------------------------------------
    if( $.cookie("name") && $.cookie("name")!==null){
        //alert("1111")
        console.log($.cookie("name"))
        $(".n1").text($.cookie("name"))
        $(".n2").css("display","block")
    }else{
        document.location.href ="login.html"
    };

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

    var $tr=null;
    var $tr2=null;
    var $tr3=null;
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
            console.log(data)
            $.each(data.data.objs, function(index) {
                var a=data.data.objs[index].id
                var $tr=("<tr>"
                +"<td goodid=" + a + ">"+data.data.objs[index].id+"</td>"
                +"<td>"+data.data.objs[index].name+"</td>"
                +"<td>"+data.data.objs[index].account+"</td>"
                +"<td><img id='flexible-img' src='"+data.data.objs[index].img+"'/></td>"
                +"<td>"+data.data.objs[index].balance+"</td>"
                +"<td>"+data.data.objs[index].mobile+" </td>"
                +"<td>"+data.data.objs[index].create_time+"</td>"
                +"<td>"+data.data.objs[index].update_time+"</td>"
                +"<td>"+related(data.data.objs[index].related)+"</td>"
                +"<td><a class='a1'>详情</a></td>"
                +"<td><a class='a2-user'>详情</a></td>"
                +"</tr>")
                $("#tbody1").append($tr)

            });
            //-------------------------------------收货地址详情---------------------------------------------
            $(".a1").on("click",function(){
                $("#tbody2").empty($tr2)
                var index1=$(this).parents('tr').children("td").eq(0).attr('goodid')
                console.log(index1)
                $("#cover").addClass("cover1")
                $("#box").css("display","block")

                $.ajax({
                    type:"get",
                    url:"http://admin.honganjk.com/admin/addrs.action",
                    async:true,
                    headers:{
                        "code":$.cookie("code"),
                        "token":$.cookie("token")
                    },
                    dataType: "json",
                    data: {
                        "uid":index1,
                    },
                    success:function(data){
                        console.log(data)
                        $.each(data.data, function(index) {
                            var $tr2=("<tr>"
                            +"<td>"+data.data[index].id+"</td>"
                            +"<td>"+data.data[index].name+"</td>"
                            +"<td>"+sex(data.data[index].sex)+"</td>"
                            +"<td>"+data.data[index].contact+"</td>"
                            +"<td>"+data.data[index].longitude+"</td>"
                            +"<td>"+data.data[index].latitude+"</td>"
                            +"<td>"+data.data[index].address+"</td>"
                            +"<td>"+data.data[index].createTime+"</td>"
                            +"</tr>")
                            $("#tbody2").append($tr2)
                        })
                    }
                });
            })
            //-------------------------------------收藏商户详情---------------------------------------------
            $(".a2-user").on("click",function(){
                $("#tbody3").empty($tr3)
                var index1=$(this).parents('tr').children("td").eq(0).attr('goodid')
                console.log(index1)
                $("#cover").addClass("cover1")
                $("#box1").css("display","block")

                $.ajax({
                    type:"get",
                    url:"http://admin.honganjk.com/admin/keeps.action",
                    async:true,
                    headers:{
                        "code":$.cookie("code"),
                        "token":$.cookie("token")
                    },
                    dataType: "json",
                    data: {
                        "uid":index1,
                    },
                    success:function(data){
                        console.log(data)
                        $.each(data.data, function(index) {
                            var $tr3=("<tr>"
                            +"<td>"+data.data[index].id+"</td>"
                            +"<td>"+data.data[index].name+"</td>"
                            +"<td>"+data.data[index].distance+"</td>"
                            +"<td><img id='flexible-img' src='"+data.data[index].img+"'></td>"
                            +"<td>"+data.data[index].score+"</td>"
                            +"<td>"+data.data[index].type+"</td>"
                            +"<td>"+data.data[index].rank+"</td>"
                            +"<td>"+data.data[index].sale+"</td>"
                            +"<td>"+data.data[index].time+"</td>"
                            +"<td>"+data.data[index].latitude+"</td>"
                            +"<td>"+data.data[index].longitude+"</td>"
                            +"<td>"+data.data[index].lowest+"</td>"
                            +"<td>"+data.data[index].fare+"</td>"
                            +"</tr>")
                            $("#tbody3").append($tr3)
                        })
                    }
                });
            })

            //------------------------------------------------------
            $("#PrevPage").attr("disabled",true);
            $("#NextPage").attr("disabled",true);
//                console.log(dishselect)
            if(JSON.stringify(data.data.total) < 10){
                $("#NextPage").attr("disabled",true);
            }else{
                $("#NextPage").removeAttr("disabled");
            }
        }
    });

    //---------------------------------------------------列表分页----------------------------------------------
    if($("#dishpageval").val() == 0){
//	      			console.log("0")
        $("#PrevPage").attr("disabled",true);
    }//菜品列表分页相关


    $("#NextPage").click(function(){
        $("#tbody1").empty($tr)
        $("#PrevPage").removeAttr("disabled");
        var dishstart = ($("#dishpageval").val()-0) + 10;
        $.ajax({
            type: "get",
            url: "http://admin.honganjk.com/admin/users.action",
            data: {

                "start":dishstart,
                "size":10
            },
            dataType: "json",
            headers:{
                "code":$.cookie("code"),
                "token":$.cookie("token")
            },
            success: function (data) {

                $.each(data.data.objs, function(index) {
                    var a=data.data.objs[index].id
                    var $tr=("<tr>"
                    +"<td goodid=" + a + ">"+data.data.objs[index].id+"</td>"
                    +"<td>"+data.data.objs[index].name+"</td>"
                    +"<td>"+data.data.objs[index].account+"</td>"
                    +"<td><img id='flexible-img' src='"+data.data.objs[index].img+"'/></td>"
                    +"<td>"+data.data.objs[index].balance+"</td>"
                    +"<td>"+data.data.objs[index].mobile+"</td>"
                    +"<td>"+data.data.objs[index].create_time+"</td>"
                    +"<td>"+data.data.objs[index].update_time+"</td>"
                    +"<td>"+related(data.data.objs[index].related)+"</td>"
                    +"<td><a class='a1'>详情</a></td>"
                    +"<td><a class='a2-user'>详情</a></td>"
                    +"</tr>")
                    $("#tbody1").append($tr)

                });
                //-------------------------------------收货地址详情---------------------------------------------
                $(".a1").on("click",function(){
                    $("#tbody2").empty($tr2)
                    var index1=$(this).parents('tr').children("td").eq(0).attr('goodid')
                    console.log(index1)
                    $("#cover").addClass("cover1")
                    $("#box").css("display","block")

                    $.ajax({
                        type:"get",
                        url:"http://admin.honganjk.com/admin/addrs.action",
                        async:true,
                        headers:{
                            "code":$.cookie("code"),
                            "token":$.cookie("token")
                        },
                        dataType: "json",
                        data: {
                            "uid":index1,
                        },
                        success:function(data){
                            console.log(data)
                            $.each(data.data, function(index) {
                                var $tr2=("<tr>"
                                +"<td>"+data.data[index].id+"</td>"
                                +"<td>"+data.data[index].name+"</td>"
                                +"<td>"+sex(data.data[index].sex)+"</td>"
                                +"<td>"+data.data[index].contact+"</td>"
                                +"<td>"+data.data[index].longitude+"</td>"
                                +"<td>"+data.data[index].latitude+"</td>"
                                +"<td>"+data.data[index].address+"</td>"
                                +"<td>"+data.data[index].createTime+"</td>"
                                +"</tr>")
                                $("#tbody2").append($tr2)
                            })
                        }
                    });
                })
                //-------------------------------------收藏商户详情---------------------------------------------
                $(".a2-user").on("click",function(){
                    $("#tbody3").empty($tr3)
                    var index1=$(this).parents('tr').children("td").eq(0).attr('goodid')
                    console.log(index1)
                    $("#cover").addClass("cover1")
                    $("#box1").css("display","block")

                    $.ajax({
                        type:"get",
                        url:"http://admin.honganjk.com/admin/keeps.action",
                        async:true,
                        headers:{
                            "code":$.cookie("code"),
                            "token":$.cookie("token")
                        },
                        dataType: "json",
                        data: {
                            "uid":index1,
                        },
                        success:function(data){
                            console.log(data)
                            $.each(data.data, function(index) {
                                var $tr3=("<tr>"
                                +"<td>"+data.data[index].id+"</td>"
                                +"<td>"+data.data[index].name+"</td>"
                                +"<td>"+data.data[index].distance+"</td>"
                                +"<td><img id='flexible-img' src='"+data.data[index].img+"'></td>"
                                +"<td>"+data.data[index].score+"</td>"
                                +"<td>"+data.data[index].type+"</td>"
                                +"<td>"+data.data[index].rank+"</td>"
                                +"<td>"+data.data[index].sale+"</td>"
                                +"<td>"+data.data[index].time+"</td>"
                                +"<td>"+data.data[index].latitude+"</td>"
                                +"<td>"+data.data[index].longitude+"</td>"
                                +"<td>"+data.data[index].lowest+"</td>"
                                +"<td>"+data.data[index].fare+"</td>"
                                +"</tr>")
                                $("#tbody3").append($tr3)
                            })
                        }
                    });
                })
                $("#dishpageval").val(dishstart);
                $("#change1").text($("#dishpageval").val()/10+1)

                if(JSON.stringify(data.data.total) - 10 <= $("#dishpageval").val()){
                    $("#NextPage").attr('disabled',true);
                }
            },
            error:function(XmlHttpRequest,textStatus, errorThrown)
            {
                console.log("请求失败"+XmlHttpRequest.responseText);
            }
        });
    });//下一页

    $("#PrevPage").click(function(){
        $("#tbody1").empty($tr)

        var dishstart = $("#dishpageval").val() - 10;
        $("#NextPage").removeAttr("disabled");
        if(dishstart < 0){
            return dishstart = 0;
        }
        $.ajax({
            type: "get",
            url: "http://admin.honganjk.com/admin/users.action",
            data: {

                "start":dishstart,
                "size":10
            },
            dataType: "json",
            headers:{
                "code":$.cookie("code"),
                "token":$.cookie("token")
            },
            success: function (data) {
                $.each(data.data.objs, function(index) {
                    var a=data.data.objs[index].id
                    var $tr=("<tr>"
                    +"<td goodid=" + a + ">"+data.data.objs[index].id+"</td>"
                    +"<td>"+data.data.objs[index].name+"</td>"
                    +"<td>"+data.data.objs[index].account+"</td>"
                    +"<td><img id='flexible-img' src='"+data.data.objs[index].img+"'/></td>"
                    +"<td>"+data.data.objs[index].balance+"</td>"
                    +"<td>"+data.data.objs[index].mobile+"</td>"
                    +"<td>"+data.data.objs[index].create_time+"</td>"
                    +"<td>"+data.data.objs[index].update_time+"</td>"
                    +"<td>"+related(data.data.objs[index].related)+"</td>"
                    +"<td><a class='a1'>详情</a></td>"
                    +"<td><a class='a2-user'>详情</a></td>"
                    +"</tr>")
                    $("#tbody1").append($tr)

                });
                //-------------------------------------收货地址详情---------------------------------------------
                $(".a1").on("click",function(){
                    $("#tbody2").empty($tr2)
                    var index1=$(this).parents('tr').children("td").eq(0).attr('goodid')
                    console.log(index1)
                    $("#cover").addClass("cover1")
                    $("#box").css("display","block")

                    $.ajax({
                        type:"get",
                        url:"http://admin.honganjk.com/admin/addrs.action",
                        async:true,
                        headers:{
                            "code":$.cookie("code"),
                            "token":$.cookie("token")
                        },
                        dataType: "json",
                        data: {
                            "uid":index1,
                        },
                        success:function(data){
                            console.log(data)
                            $.each(data.data, function(index) {
                                var $tr2=("<tr>"
                                +"<td>"+data.data[index].id+"</td>"
                                +"<td>"+data.data[index].name+"</td>"
                                +"<td>"+sex(data.data[index].sex)+"</td>"
                                +"<td>"+data.data[index].contact+"</td>"
                                +"<td>"+data.data[index].longitude+"</td>"
                                +"<td>"+data.data[index].latitude+"</td>"
                                +"<td>"+data.data[index].address+"</td>"
                                +"<td>"+data.data[index].createTime+"</td>"
                                +"</tr>")
                                $("#tbody2").append($tr2)
                            })
                        }
                    });
                })
                //-------------------------------------收藏商户详情---------------------------------------------
                $(".a2-user").on("click",function(){
                    $("#tbody3").empty($tr3)
                    var index1=$(this).parents('tr').children("td").eq(0).attr('goodid')
                    console.log(index1)
                    $("#cover").addClass("cover1")
                    $("#box1").css("display","block")

                    $.ajax({
                        type:"get",
                        url:"http://admin.honganjk.com/admin/keeps.action",
                        async:true,
                        headers:{
                            "code":$.cookie("code"),
                            "token":$.cookie("token")
                        },
                        dataType: "json",
                        data: {
                            "uid":index1,
                        },
                        success:function(data){
                            console.log(data)
                            $.each(data.data, function(index) {
                                var $tr3=("<tr>"
                                +"<td>"+data.data[index].id+"</td>"
                                +"<td>"+data.data[index].name+"</td>"
                                +"<td>"+data.data[index].distance+"</td>"
                                +"<td><img id='flexible-img' src='"+data.data[index].img+"'></td>"
                                +"<td>"+data.data[index].score+"</td>"
                                +"<td>"+data.data[index].type+"</td>"
                                +"<td>"+data.data[index].rank+"</td>"
                                +"<td>"+data.data[index].sale+"</td>"
                                +"<td>"+data.data[index].time+"</td>"
                                +"<td>"+data.data[index].latitude+"</td>"
                                +"<td>"+data.data[index].longitude+"</td>"
                                +"<td>"+data.data[index].lowest+"</td>"
                                +"<td>"+data.data[index].fare+"</td>"
                                +"</tr>")
                                $("#tbody3").append($tr3)
                            })
                        }
                    });
                })
                $("#dishpageval").val(dishstart);
                $("#change1").text($("#dishpageval").val()/10+1)
                if(dishstart == 0){
                    $("#PrevPage").attr("disabled",true);
                }
            },
            error:function(XmlHttpRequest,textStatus, errorThrown)
            {
                console.log("请求失败"+XmlHttpRequest.responseText);
            }
        });
    });//上一页

    //----------------------------搜索-------------------------------------------------

    $("#searchOrder").on("click",function(){
//              	$("#dishpageval").val(0);
        $("#Paging").css("display","none")
        $("#tbody1").empty($tr)
        $("#change1").text(1)
        if($(".select1").val()=="通过昵称搜索"){
            //alert("111")
            $.ajax({
                type: "get",
                url: "http://admin.honganjk.com/admin/users.action",
                data: {
                    "start":0,
                    "size":1000,
                    "name":$(".wd").val(),
                },
                dataType: "json",
                headers:{
                    "code":$.cookie("code"),
                    "token":$.cookie("token")
                },
                success: function (data) {
                    console.log(data)
                    $.each(data.data.objs, function(index) {
                        var a=data.data.objs[index].id
                        var $tr=("<tr>"
                        +"<td goodid=" + a + ">"+data.data.objs[index].id+"</td>"
                        +"<td>"+data.data.objs[index].name+"</td>"
                        +"<td>"+data.data.objs[index].account+"</td>"
                        +"<td><img id='flexible-img' src='"+data.data.objs[index].img+"'/></td>"
                        +"<td>"+data.data.objs[index].balance+"</td>"
                        +"<td>"+data.data.objs[index].mobile+"</td>"
                        +"<td>"+data.data.objs[index].create_time+"</td>"
                        +"<td>"+data.data.objs[index].update_time+"</td>"
                        +"<td>"+related(data.data.objs[index].related)+"</td>"
                        +"<td><a class='a1'>详情</a></td>"
                        +"<td><a class='a2-user'>详情</a></td>"
                        +"</tr>")
                        $("#tbody1").append($tr)

                    });
                    //-------------------------------------收货地址详情---------------------------------------------
                    $(".a1").on("click",function(){
                        $("#tbody2").empty($tr2)
                        var index1=$(this).parents('tr').children("td").eq(0).attr('goodid')
                        console.log(index1)
                        $("#cover").addClass("cover1")
                        $("#box").css("display","block")

                        $.ajax({
                            type:"get",
                            url:"http://admin.honganjk.com/admin/addrs.action",
                            async:true,
                            headers:{
                                "code":$.cookie("code"),
                                "token":$.cookie("token")
                            },
                            dataType: "json",
                            data: {
                                "uid":index1,
                            },
                            success:function(data){
                                console.log(data)
                                $.each(data.data, function(index) {
                                    var $tr2=("<tr>"
                                    +"<td>"+data.data[index].id+"</td>"
                                    +"<td>"+data.data[index].name+"</td>"
                                    +"<td>"+sex(data.data[index].sex)+"</td>"
                                    +"<td>"+data.data[index].contact+"</td>"
                                    +"<td>"+data.data[index].longitude+"</td>"
                                    +"<td>"+data.data[index].latitude+"</td>"
                                    +"<td>"+data.data[index].address+"</td>"
                                    +"<td>"+data.data[index].createTime+"</td>"
                                    +"</tr>")
                                    $("#tbody2").append($tr2)
                                })
                            }
                        });
                    })
                    //-------------------------------------收藏商户详情---------------------------------------------
                    $(".a2-user").on("click",function(){
                        $("#tbody3").empty($tr3)
                        var index1=$(this).parents('tr').children("td").eq(0).attr('goodid')
                        console.log(index1)
                        $("#cover").addClass("cover1")
                        $("#box1").css("display","block")

                        $.ajax({
                            type:"get",
                            url:"http://admin.honganjk.com/admin/keeps.action",
                            async:true,
                            headers:{
                                "code":$.cookie("code"),
                                "token":$.cookie("token")
                            },
                            dataType: "json",
                            data: {
                                "uid":index1,
                            },
                            success:function(data){
                                console.log(data)
                                $.each(data.data, function(index) {
                                    var $tr3=("<tr>"
                                    +"<td>"+data.data[index].id+"</td>"
                                    +"<td>"+data.data[index].name+"</td>"
                                    +"<td>"+data.data[index].distance+"</td>"
                                    +"<td><img id='flexible-img' src='"+data.data[index].img+"'></td>"
                                    +"<td>"+data.data[index].score+"</td>"
                                    +"<td>"+data.data[index].type+"</td>"
                                    +"<td>"+data.data[index].rank+"</td>"
                                    +"<td>"+data.data[index].sale+"</td>"
                                    +"<td>"+data.data[index].time+"</td>"
                                    +"<td>"+data.data[index].latitude+"</td>"
                                    +"<td>"+data.data[index].longitude+"</td>"
                                    +"<td>"+data.data[index].lowest+"</td>"
                                    +"<td>"+data.data[index].fare+"</td>"
                                    +"</tr>")
                                    $("#tbody3").append($tr3)
                                })
                            }
                        });
                    })
                    $("#PrevPage").attr("disabled",true);
                    $("#NextPage").attr("disabled",true);

                    if(JSON.stringify(data.data.total) < 10){
                        $("#NextPage").attr("disabled",true);
                    }else{
                        $("#NextPage").removeAttr("disabled");
                    }
                },
                error:function(XmlHttpRequest,textStatus,errorThrown){
                    console.log("请求失败"+XmlHttpRequest.responseText);
                }
            });
        }else{
            $.ajax({
                type: "get",
                url: "http://admin.honganjk.com/admin/users.action",
                data: {
                    "start":0,
                    "size":1000,
                    "mobile":$(".wd").val(),
                },
                dataType: "json",
                headers:{
                    "code":$.cookie("code"),
                    "token":$.cookie("token")
                },
                success: function (data) {
                    console.log(data)
                    $.each(data.data.objs, function(index) {
                        var a=data.data.objs[index].id
                        var $tr=("<tr>"
                        +"<td goodid=" + a + ">"+data.data.objs[index].id+"</td>"
                        +"<td>"+data.data.objs[index].name+"</td>"
                        +"<td>"+data.data.objs[index].account+"</td>"
                        +"<td><img id='flexible-img' src='"+data.data.objs[index].img+"'/></td>"
                        +"<td>"+data.data.objs[index].balance+"</td>"
                        +"<td>"+data.data.objs[index].mobile+"</td>"
                        +"<td>"+data.data.objs[index].create_time+"</td>"
                        +"<td>"+data.data.objs[index].update_time+"</td>"
                        +"</tr>")
                        $("#tbody1").append($tr)

                    });
                    $("#PrevPage").attr("disabled",true);
                    $("#NextPage").attr("disabled",true);

                    if(JSON.stringify(data.data.total) < 10){
                        $("#NextPage").attr("disabled",true);
                    }else{
                        $("#NextPage").removeAttr("disabled");
                    }
                },
                error:function(XmlHttpRequest,textStatus,errorThrown){
                    console.log("请求失败"+XmlHttpRequest.responseText);
                }
            });
        }

    })
    //---------------------退出遮罩层----------------------------------
    $(".xx").on("click",function(){
        $("#cover").removeClass("cover1")
        $("#box").css("display","none")
        $("#box1").css("display","none")
    })
    //---------------------时间戳-------------------------------------------

    function formatDate(data) {
        return $.myTime.UnixToDate(data,true,8);
    }




    //------------------------关联类型转换--------------------------------------------
    function related(e){
        switch(e) {

            case 0:
                return '未关联'
                break;
            case 1:
                return '已关联'
                break;

        };
    }
    //------------------------性别类型转换--------------------------------------------
    function sex(e){
        switch(e) {

            case 1:
                return '男'
                break;
            case 2:
                return '女'
                break;

        };
    }

});