/**
 * Created by HJJ on 2017/2/13.
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
/**
 * Created by HJJ on 2017/1/13.
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
    $("#tbody1").empty($tr)
//--------------------全部食堂------------------------------------------
    $.ajax({
        type:"get",
        url:"http://admin.honganjk.com/admin/nurses.action",
        async:true,
        headers:{
            "code":$.cookie("code"),
            "token":$.cookie("token")
        },

        dataType: "json",

        data: {
            "start":0,
            "size":20,

            //"type":0
        },
        success:function(data){
            console.log(data)

            $.each(data.data.objs, function(index) {
                var a=data.data.objs[index].id
                var b=data.data.objs[index].type
                console.log(data.data.objs[index].ctype)

                // $tr=("<tr >"+
                // "<td goodid=" + a + ">"+data.data.objs[index].id+"</td> <td goodid2=" + b + ">"+shanghu(data.data.objs[index].type)+"</td> <td>"+data.data.objs[index].name+"</td> <td>"+data.data.objs[index].area+"</td> <td>"+data.data.objs[index].mobile+"</td> <td>"+data.data.objs[index].owner+"</td> <td>"+formatDate(data.data.objs[index].create_time)+"</td> <td>"+formatDate(data.data.objs[index].update_time)+"</td>"
                // +"<td class='q'><a  class='a1'>更多</a></td> <td class='jump'><a class='a3' data-toggle='modal' data-target='#myModal'>"+zhuangtai1(data.data.objs[index].ctype)+"</a>"
                // +"<td><div class='box1'>" +
                // "<div class='jumbotron jumbotron-style'>" +
                // "<div class='container'>" +
                // "<h3>商户详细信息</h3>" +
                // "</div> " +
                // "</div> "
                // +"<ul class='adddishesUl'>"
                // +"<img class='xx' src='../images/xxafter.png'/><li><span>食堂名称:</span><input type='text'value='"+data.data.objs[index].name+"'/></li>"
                // +"<li><span>商户类型:</span><input type='text'value='"+shanghu(data.data.objs[index].type)+"'/></li>"
                // +"<li><span>状态类型:</span><input type='text'value='"+zhuangtai(data.data.objs[index].ctype)+"'/></li>"
                // +"<li><span>区域:</span><input type='text'value='"+data.data.objs[index].area+"'/></li>"
                // +"<li><span>地址:</span><input type='text'value='"+data.data.objs[index].address+"'/></li>"
                // +"<li><span>经度:</span><input type='text'value='"+data.data.objs[index].longitude+"'/></li>"
                // +"<li><span>纬度:</span><input type='text'value='"+data.data.objs[index].latitude+"'/></li>"
                // +"<li><span>简介:</span><textarea disabled='disabled'>"+data.data.objs[index].descs+"</textarea></li>"
                // +"<li><span>服务范围:</span><input type='text'value='"+data.data.objs[index].extent+"'/>公里</li>"
                // +"<li><span>联系电话:</span><input type='text'value='"+data.data.objs[index].contact+"'/></li>"
                // +"<li><span>营业时间:</span><input type='text'value='"+data.data.objs[index].hours+"'/></li>"
                // +"<li><span>起送价:</span><input type='text'value='"+data.data.objs[index].lowest+"'/></li>"
                // +"<li><span>配送费:</span><input type='text'value='"+data.data.objs[index].fare+"'/></li>"
                // +"<li><span>公告:</span><textarea disabled='disabled'>"+data.data.objs[index].bulletin+"</textarea></li>"
                // +"<li><span>商户联系人:</span><input type='text'value='"+data.data.objs[index].owner+"'/></li>"
                // +"<li><span>联系人号码:</span><input type='text'value='"+data.data.objs[index].mobile+"'/></li>"
                // +"<li><span>银行卡号:</span><input type='text'value='"+data.data.objs[index].card+"'/></li>"
                // +"<li><span>支行信息:</span><input type='text'value='"+data.data.objs[index].bank+"'/></li>"
                // +"<li><span>账号:</span><input type='text'value='"+data.data.objs[index].account+"'/></li>"
                // +"<li><span>密码:</span><input type='text'value='"+data.data.objs[index].password+"'/></li>"
                // +"<li><span>备注:</span><textarea disabled='disabled'>"+data.data.objs[index].remark+"</textarea></li>"
                // +"<li><span>营业执照图:</span><img src='"+data.data.objs[index].license_img_url+"'/></li><br>"
                // +"<li><span>许可证图片:</span><img src='"+data.data.objs[index].permit_img_url+"'/></li><br>"
                // +"<li><span>身份证正面:</span><img src='"+data.data.objs[index].positive_img_url+"'/></li><br>"
                // +"<li><span>身份证反面:</span><img src='"+data.data.objs[index].obverse_img_url+"'/></li><br>"
                // +"<li><span>商户图片:</span><img src='"+data.data.objs[index].img+"'/></li><br>"
                // +"<li><span>商户头像:</span><img src='"+data.data.objs[index].head+"'/></li><br>"
                //
                // +"</ul>"
                // +"</div></td>"
                // +"</tr>");

                $tr=("<tr >"+
                "<td goodid=" + a + ">"+data.data.objs[index].id+"</td>  <td goodid2=" + b + ">"+shanghu(data.data.objs[index].dtype)+"</td> <td>"+data.data.objs[index].name+"</td> <td>"+data.data.objs[index].mobile+"</td> <td>"+sex(data.data.objs[index].sex)+"</td> <td>"+data.data.objs[index].sn+"</td> <td>"+data.data.objs[index].years+"</td> <td>"+formatDate(data.data.objs[index].createTime)+"</td> <td>"+formatDate(data.data.objs[index].updateTime)+"</td>"
                +"<td class='q'><a  class='a1'>更多</a></td> <td class='jump'><a class='a3' data-toggle='modal' data-target='#myModal'>"+zhuangtai1(data.data.objs[index].type)+"</a>"
                +"<td><div class='box1'>"+
                "<div class='jumbotron jumbotron-style'>" +
                "<div class='container'>" +
                "<h3>护工详细信息</h3>" +
                "</div> " +
                "</div> "
                +"<ul class='adddishesUl'>"
                +"<img class='xx' src='../images/xxafter.png'/>"
                +"<li><span>护工头像:</span><img id='flexible-img' class='small' src='"+data.data.objs[index].img+"' /></li>"
                +"<li><span>护工名称:</span><input type='text'value='"+data.data.objs[index].name+"'/></li>"
                +"<li><span>性别:</span><input type='text'value='"+sex(data.data.objs[index].sex)+"'/></li>"
                +"<li><span>服务类型:</span><input type='text'value='"+shanghu(data.data.objs[index].dtype)+"'/></li>"
                +"<li><span>状态类型:</span><input type='text'value='"+zhuangtai1(data.data.objs[index].type)+"'/></li>"
                +"<li><span>账号:</span><input type='text'value='"+data.data.objs[index].account+"'/></li>"
                +"<li><span>联系人号码:</span><input type='text'value='"+data.data.objs[index].mobile+"'/></li>"
                +"<li><span>身份证号:</span><input type='text'value='"+data.data.objs[index].sn+"'/></li>"
                +"<li><span>出生日期:</span><input type='text'value='"+data.data.objs[index].born+"'/></li>"
                +"<li><span>籍贯:</span><input type='text'value='"+data.data.objs[index].birthplace+"'/></li>"
                +"<li><span>现住址:</span><input type='text'value='"+data.data.objs[index].address+"'/></li>"
                +"<li><span>服务区域:</span><input type='text'value='"+data.data.objs[index].area+"'/></li>"
                +"<li><span>工作年限:</span><input type='text'value='"+data.data.objs[index].years+"'/></li>"
                +"<li><span>介绍:</span><input type='text'value='"+data.data.objs[index].introduction+"'/></li>"
                +"<li><span>银行卡号:</span><input type='text'value='"+data.data.objs[index].card+"'/></li>"
                +"<li><span>开户行:</span><input type='text'value='"+data.data.objs[index].bank+"'/></li>"
                +"<li><span>身份证正面:</span><img  src='"+data.data.objs[index].positiveImg+"'/></li><br>"
                +"<li><span>身份证反面:</span><img  src='"+data.data.objs[index].obverseImg+"'/></li><br>"
                +"<li><span>资格证:</span><img  src='"+data.data.objs[index].licenseImg+"'/></li><br>"
                +"</ul>"
                +"</div></td>"
                +"</tr>")

                $("#tbody1").append($tr)


            });

            //-------------------------------------
            $("#PrevPage").attr("disabled",true);
            $("#NextPage").attr("disabled",true);

            if(JSON.stringify(data.data.total) <20){
                $("#NextPage").attr("disabled",true);
            }else{
                $("#NextPage").removeAttr("disabled");
            }
            //------------------------------------进行审核-------------------------------------------------
            $(".jump").on('click',function(){

                var index1=$(this).parent('tr').children("td").eq(0).attr('goodid');
                console.log(index1);
                console.log($("#select1").val().substring(0,1));
                console.log($(this).parent().children("td").eq(9).children('a').text());

                if($(this).parent().children("td").eq(10).children('a').text()==='已审核'){
                    $('.a3').attr('data-target','#outModal');

                    // $(".remodal-wrapper").css("display","none");
                    // $("#audit4").css("display","block");

                    $(this).parent().children("td").eq(9).children('a').eq(0).attr("href","#modal2")
                    $(".Xbutton").on("click",function(){
                        if($("#outTextArea").val().length==''){
                            console.log($("#outTextArea").val());
                            swal("请填写下架原因!!");
                            // alert("请填写下 架的原因")
                        }else{
                            $.ajax({
                                type:"post",
                                url:"http://admin.honganjk.com/admin/unShelveNurse.action",
                                headers:{
                                    "code":$.cookie("code"),
                                    "token":$.cookie("token")
                                },
                                dataType: "json",
                                data:{

                                    "id":index1,
                                    "reason":$("#outTextArea").val()
                                },
                                success: function(data){
                                    console.log(data)
                                    switch(JSON.stringify(data.code))
                                    {
                                        case '"A00000"':

                                            alert("短信已发送至护工")

                                            location.reload();
                                            // $(".remodal-wrapper").css("display","none")
                                            // $(".remodal-overlay").css("display","none")

                                            break;
                                        default:
                                            alert("请求失败")

                                    }
                                },
                                error:function(XmlHttpRequest,textStatus, errorThrown){
                                    console.log("请求失败"+XmlHttpRequest.responseText);
                                }
                            });//下架
                        }

                    });
                    /**解绑**/
                    $(".Xbutton").unbind('click').click(function(e){
                        if($("#outTextArea").val().length==''){
                            swal("请填写下架原因!!");
                        }else{
                            $.ajax({
                                type:"post",
                                url:"http://admin.honganjk.com/admin/unShelveNurse.action",
                                headers:{
                                    "code":$.cookie("code"),
                                    "token":$.cookie("token")
                                },
                                dataType: "json",
                                data:{

                                    "id":index1,
                                    "reason":$("#outTextArea").val()
                                },
                                success: function(data){
                                    console.log(data)
                                    switch(JSON.stringify(data.code))
                                    {
                                        case '"A00000"':

                                            alert("短信已发送至护工")

                                            location.reload();
                                            // $(".remodal-wrapper").css("display","none")
                                            // $(".remodal-overlay").css("display","none")

                                            break;
                                        default:
                                            alert("请求失败")

                                    }
                                },
                                error:function(XmlHttpRequest,textStatus, errorThrown){
                                    console.log("请求失败"+XmlHttpRequest.responseText);
                                }
                            });//下架
                        }

                    })
                } else {
                    $('.a3').attr('data-target','#myModal');
                    $(".btn1").on("click", function () {
                        $.ajax({
                            type: "post",
                            url: "http://admin.honganjk.com/admin/verifyNurse.action",
                            headers: {
                                "code": $.cookie("code"),
                                "token": $.cookie("token")
                            },
                            dataType: "json",
                            data: {

                                "id": index1,
                                "type": $("#select1").val().substring(0, 1)
                            },
                            success: function (data) {
                                console.log(data)
                                switch (JSON.stringify(data.code)) {
                                    case '"A00000"':
                                        alert("审核成功")
                                        // $(".remodal-wrapper").css("display", "none")
                                        // $(".remodal-overlay").css("display", "none")
                                        location.reload()
                                        break;
                                    default:
                                        alert("请求失败")

                                }
                            },
                            error: function (XmlHttpRequest, textStatus, errorThrown) {
                                console.log("请求失败" + XmlHttpRequest.responseText);
                            }
                        });//审核成功
                    });
                    /**解绑**/
                    $(".btn1").unbind('click').click(function () {
                        $.ajax({
                            type: "post",
                            url: "http://admin.honganjk.com/admin/verifyNurse.action",
                            headers: {
                                "code": $.cookie("code"),
                                "token": $.cookie("token")
                            },
                            dataType: "json",
                            data: {

                                "id": index1,
                                "type": $("#select1").val().substring(0, 1)
                            },
                            success: function (data) {
                                console.log(data)
                                switch (JSON.stringify(data.code)) {
                                    case '"A00000"':
                                        alert("审核成功")
                                        // $(".remodal-wrapper").css("display", "none")
                                        // $(".remodal-overlay").css("display", "none")
                                        location.reload()
                                        break;
                                    default:
                                        alert("请求失败")

                                }
                            },
                            error: function (XmlHttpRequest, textStatus, errorThrown) {
                                console.log("请求失败" + XmlHttpRequest.responseText);
                            }
                        });//审核成功
                    });
                    /**************/

                    $(".btn2").on("click", function () {
                        if ($("#bustTextArea").val().length == '') {
                            swal("请填写审核失败的原因");
                        } else {
                            $.ajax({
                                type: "post",
                                url: "http://admin.honganjk.com/admin/forbidNurse.action",
                                headers: {
                                    "code": $.cookie("code"),
                                    "token": $.cookie("token")
                                },
                                dataType: "json",
                                data: {

                                    "id": index1,
                                    "reason": $("#bustTextArea").val()
                                },
                                success: function (data) {
                                    console.log(data)
                                    switch (JSON.stringify(data.code)) {
                                        case '"A00000"':

                                            alert("短信已发送至护工")
                                            // $(".remodal-wrapper").css("display", "none")
                                            // $(".remodal-overlay").css("display", "none")
                                            location.reload()
                                            break;
                                        default:
                                            alert("请求失败")

                                    }
                                },
                                error: function (XmlHttpRequest, textStatus, errorThrown) {
                                    console.log("请求失败" + XmlHttpRequest.responseText);
                                }
                            });//审核失败
                        }

                    });
                    /**解绑click事件**/
                    $(".btn2").unbind('click').click(function (e) {
                        if ($("#bustTextArea").val().length == '') {
                            swal("请填写审核失败的原因");
                        } else {
                            $.ajax({
                                type: "post",
                                url: "http://admin.honganjk.com/admin/forbidNurse.action",
                                headers: {
                                    "code": $.cookie("code"),
                                    "token": $.cookie("token")
                                },
                                dataType: "json",
                                data: {

                                    "id": index1,
                                    "reason": $("#bustTextArea").val()
                                },
                                success: function (data) {
                                    console.log(data)
                                    switch (JSON.stringify(data.code)) {
                                        case '"A00000"':

                                            alert("短信已发送至护工")
                                            // $(".remodal-wrapper").css("display", "none")
                                            // $(".remodal-overlay").css("display", "none")
                                            location.reload()
                                            break;
                                        default:
                                            alert("请求失败")

                                    }
                                },
                                error: function (XmlHttpRequest, textStatus, errorThrown) {
                                    console.log("请求失败" + XmlHttpRequest.responseText);
                                }
                            });//审核失败
                        }

                    })
                }

            })
            //-----------------------------------显示遮罩层与更多信息---------------------------------------------------------
            $(".a1").on("click",function(){
                console.log($(this).parents('tr').children("td").eq(11))
                $(this).parents('tr').children("td").eq(11).children('div').eq(0).css('display','block')
                $("#cover").addClass("cover1")
            })
            $(".xx").on("click",function(){
                $(this).parents('tr').children("td").eq(11).children('div').eq(0).css('display','none')
                $("#cover").removeClass("cover1")
            })

        }
    })
//-------------------------------------状态显示食堂-----------------------------------------------------------------------
    $("#type1").on("change",function(){
        var $tr=null;
        $("#tbody1").empty($tr)
        // $("#audit1").css("display","none")
        // $("#audit2").css("display","block")
        $("#Paging").css("display","none")
        // $("#Paging1").css("display","block")
        //console.log($("#type1").val().substring(0,1))

        $.ajax({
            type:"get",
            url:"http://admin.honganjk.com/admin/nurses.action",
            async:true,
            headers:{
                "code":$.cookie("code"),
                "token":$.cookie("token")
            },

            dataType: "json",

            data: {
                "start":0,
                "size":1000,
                "type":$("#type1").val().substring(0,2)
                //"type":0
            },
            success:function(data){
                console.log(data)

                $.each(data.data.objs, function(index) {
                    var a=data.data.objs[index].id
                    var b=data.data.objs[index].type

                    $tr=("<tr >"+
                    "<td goodid=" + a + ">"+data.data.objs[index].id+"</td>  <td goodid2=" + b + ">"+shanghu(data.data.objs[index].dtype)+"</td> <td>"+data.data.objs[index].name+"</td> <td>"+data.data.objs[index].mobile+"</td> <td>"+sex(data.data.objs[index].sex)+"</td> <td>"+data.data.objs[index].sn+"</td> <td>"+data.data.objs[index].years+"</td> <td>"+formatDate(data.data.objs[index].createTime)+"</td> <td>"+formatDate(data.data.objs[index].updateTime)+"</td>"
                    +"<td class='q'><a  class='a1'>更多</a></td> <td class='jump'><a class='a3' data-toggle='modal' data-target='#myModal'>"+zhuangtai1(data.data.objs[index].type)+"</a>"
                    +"<td><div class='box1'>"+
                    "<div class='jumbotron jumbotron-style'>" +
                    "<div class='container'>" +
                    "<h3>护工详细信息</h3>" +
                    "</div> " +
                    "</div> "
                    +"<ul class='adddishesUl'>"
                    +"<img class='xx' src='../images/xxafter.png'/>"
                    +"<li><span>护工头像:</span><img id='flexible-img' class='small' src='"+data.data.objs[index].img+"' /></li>"
                    +"<li><span>护工名称:</span><input type='text'value='"+data.data.objs[index].name+"'/></li>"
                    +"<li><span>性别:</span><input type='text'value='"+sex(data.data.objs[index].sex)+"'/></li>"
                    +"<li><span>服务类型:</span><input type='text'value='"+shanghu(data.data.objs[index].dtype)+"'/></li>"
                    +"<li><span>状态类型:</span><input type='text'value='"+zhuangtai1(data.data.objs[index].type)+"'/></li>"
                    +"<li><span>账号:</span><input type='text'value='"+data.data.objs[index].account+"'/></li>"
                    +"<li><span>联系人号码:</span><input type='text'value='"+data.data.objs[index].mobile+"'/></li>"
                    +"<li><span>身份证号:</span><input type='text'value='"+data.data.objs[index].sn+"'/></li>"
                    +"<li><span>出生日期:</span><input type='text'value='"+data.data.objs[index].born+"'/></li>"
                    +"<li><span>籍贯:</span><input type='text'value='"+data.data.objs[index].birthplace+"'/></li>"
                    +"<li><span>现住址:</span><input type='text'value='"+data.data.objs[index].address+"'/></li>"
                    +"<li><span>服务区域:</span><input type='text'value='"+data.data.objs[index].area+"'/></li>"
                    +"<li><span>工作年限:</span><input type='text'value='"+data.data.objs[index].years+"'/></li>"
                    +"<li><span>介绍:</span><input type='text'value='"+data.data.objs[index].introduction+"'/></li>"
                    +"<li><span>银行卡号:</span><input type='text'value='"+data.data.objs[index].card+"'/></li>"
                    +"<li><span>开户行:</span><input type='text'value='"+data.data.objs[index].bank+"'/></li>"
                    +"<li><span>身份证正面:</span><img src='"+data.data.objs[index].positiveImg+"'/></li><br>"
                    +"<li><span>身份证反面:</span><img src='"+data.data.objs[index].obverseImg+"'/></li><br>"
                    +"<li><span>资格证:</span><img src='"+data.data.objs[index].licenseImg+"'/></li><br>"
                    +"</ul>"
                    +"</div></td>"
                    +"</tr>")

                    $("#tbody1").append($tr)

                    if($("#type1").val().substring(0,2) == 0){
                        // console.log(changeType($("#type1").val().substring(0,5)));
                        // console.log($("#type1").val().substring(0,1));
                        $(".a3").html("审核")
                        // return false;
//		                       	 $(".a2").attr("href","#modal")
//		                       	 console.log($('.a2').parents('tr').children("td").eq(0).attr('goodid'))
                    }else if($("#type1").val().substring(0,2)==+1){
                        $(".a3").html("已审核");
                        // $(".a2").css("color","green")
                        $(".a3").attr("href","#");
                    }else if($("#type1").val().substring(0,2)==-1){
                        $(".a2").html("下架食堂")
                    }
                });
                //--------------------------------------------------------
                $("#PrevPage1").attr("disabled",true);
                $("#NextPage1").attr("disabled",true);

                if(JSON.stringify(data.data.total) < 20){
                    $("#NextPage1").attr("disabled",true);
                }else{
                    $("#NextPage1").removeAttr("disabled");
                }
                //------------------------------------进行审核-------------------------------------------------
                $(".jump").on('click',function(){

                    var index1=$(this).parent('tr').children("td").eq(0).attr('goodid')
                    console.log($(this).parent().children("td").eq(9).children('a').text());

                    if($(this).parent().children("td").eq(10).children('a').text()==='已审核'){
                        // $(".remodal-wrapper").css("display","none");
                        // $("#audit4").css("display","block");
                        $('.a3').attr('data-target','#outModal');

                        $(this).parent().children("td").eq(9).children('a').eq(0).attr("href","#modal2")
                        $(".Xbutton").on("click",function(){
                            if($("#outTextArea").val().length == ''){
                                swal("请填写下架的原因");
                            }else{
                                $.ajax({
                                    type:"post",
                                    url:"http://admin.honganjk.com/admin/unShelveNurse.action",
                                    headers:{
                                        "code":$.cookie("code"),
                                        "token":$.cookie("token")
                                    },
                                    dataType: "json",
                                    data:{

                                        "id":index1,
                                        "reason":$("#outTextArea").val()
                                    },
                                    success: function(data){
                                        console.log(data)
                                        switch(JSON.stringify(data.code))
                                        {
                                            case '"A00000"':

                                                swal("短信已发送至护工");
                                                // $(".remodal-wrapper").css("display","none")
                                                // $(".remodal-overlay").css("display","none")
                                                location.reload()
                                                break;
                                            default:
                                                alert("请求失败")

                                        }
                                    },
                                    error:function(XmlHttpRequest,textStatus, errorThrown){
                                        console.log("请求失败"+XmlHttpRequest.responseText);
                                    }
                                });//下架
                            }

                        });

                        /**解绑**/
                        $(".Xbutton").unbind('click').click(function(e){
                            if($("#outTextArea").val().length == ''){
                                swal("请填写下 架的原因");
                            }else{
                                $.ajax({
                                    type:"post",
                                    url:"http://admin.honganjk.com/admin/unShelveNurse.action",
                                    headers:{
                                        "code":$.cookie("code"),
                                        "token":$.cookie("token")
                                    },
                                    dataType: "json",
                                    data:{

                                        "id":index1,
                                        "reason":$("#outTextArea").val()
                                    },
                                    success: function(data){
                                        console.log(data)
                                        switch(JSON.stringify(data.code))
                                        {
                                            case '"A00000"':

                                                swal("短信已发送至护工");

                                                location.reload();
                                                // $(".remodal-wrapper").css("display","none")
                                                // $(".remodal-overlay").css("display","none")

                                                break;
                                            default:
                                                alert("请求失败")

                                        }
                                    },
                                    error:function(XmlHttpRequest,textStatus, errorThrown){
                                        console.log("请求失败"+XmlHttpRequest.responseText);
                                    }
                                });//下架
                            }

                        });

                    } else {
                        // $(".remodal-wrapper").css("display","block")
                        // $(".remodal-overlay").css("display","block")

                        $(".btn1").on("click", function () {
                            $.ajax({
                                type: "post",
                                url: "http://admin.honganjk.com/admin/verifyNurse.action",
                                headers: {
                                    "code": $.cookie("code"),
                                    "token": $.cookie("token")
                                },
                                dataType: "json",
                                data: {

                                    "id": index1,
                                    "type": $("#select1").val().substring(0, 1)
                                },
                                success: function (data) {
                                    console.log(data)
                                    switch (JSON.stringify(data.code)) {
                                        case '"A00000"':
                                            swal("审核成功");
                                            // $(".remodal-wrapper").css("display", "none")
                                            // $(".remodal-overlay").css("display", "none")
                                            location.reload()
                                            break;
                                        default:
                                            alert("请求失败")

                                    }
                                },
                                error: function (XmlHttpRequest, textStatus, errorThrown) {
                                    console.log("请求失败" + XmlHttpRequest.responseText);
                                }
                            });//审核成功
                        });

                        /**解绑**/
                        $(".btn1").unbind('click').click(function () {
                            $.ajax({
                                type: "post",
                                url: "http://admin.honganjk.com/admin/verifyNurse.action",
                                headers: {
                                    "code": $.cookie("code"),
                                    "token": $.cookie("token")
                                },
                                dataType: "json",
                                data: {

                                    "id": index1,
                                    "type": $("#select1").val().substring(0, 1)
                                },
                                success: function (data) {
                                    console.log(data)
                                    switch (JSON.stringify(data.code)) {
                                        case '"A00000"':
                                            swal("审核成功");
                                            // $(".remodal-wrapper").css("display", "none")
                                            // $(".remodal-overlay").css("display", "none")
                                            location.reload()
                                            break;
                                        default:
                                            alert("请求失败")

                                    }
                                },
                                error: function (XmlHttpRequest, textStatus, errorThrown) {
                                    console.log("请求失败" + XmlHttpRequest.responseText);
                                }
                            });//审核成功
                        });
                        /**************/

                        $(".btn2").on("click", function () {
                            if ($("#bustTextArea").val().length == '') {
                                swal("请填写审核失败的原因");
                            } else {
                                $.ajax({
                                    type: "post",
                                    url: "http://admin.honganjk.com/admin/forbidNurse.action",
                                    headers: {
                                        "code": $.cookie("code"),
                                        "token": $.cookie("token")
                                    },
                                    dataType: "json",
                                    data: {

                                        "id": index1,
                                        "reason": $("#bustTextArea").val()
                                    },
                                    success: function (data) {
                                        console.log(data)
                                        switch (JSON.stringify(data.code)) {
                                            case '"A00000"':

                                                swal("短信已发送至护工");
                                                // $(".remodal-wrapper").css("display", "none")
                                                // $(".remodal-overlay").css("display", "none")
                                                location.reload()
                                                break;
                                            default:
                                                alert("请求失败")

                                        }
                                    },
                                    error: function (XmlHttpRequest, textStatus, errorThrown) {
                                        console.log("请求失败" + XmlHttpRequest.responseText);
                                    }
                                });//审核失败
                            }

                        });

                        /**解绑click事件**/
                        $(".btn2").unbind('click').click(function (e) {
                            if ($("#bustTextArea").val().length == '') {
                                swal("请填写审核失败的原因");
                            } else {
                                $.ajax({
                                    type: "post",
                                    url: "http://admin.honganjk.com/admin/forbidNurse.action",
                                    headers: {
                                        "code": $.cookie("code"),
                                        "token": $.cookie("token")
                                    },
                                    dataType: "json",
                                    data: {

                                        "id": index1,
                                        "reason": $("#bustTextArea").val()
                                    },
                                    success: function (data) {
                                        console.log(data)
                                        switch (JSON.stringify(data.code)) {
                                            case '"A00000"':

                                                swal("短信已发送至护工");
                                                // $(".remodal-wrapper").css("display", "none")
                                                // $(".remodal-overlay").css("display", "none")
                                                location.reload()
                                                break;
                                            default:
                                                alert("请求失败")

                                        }
                                    },
                                    error: function (XmlHttpRequest, textStatus, errorThrown) {
                                        console.log("请求失败" + XmlHttpRequest.responseText);
                                    }
                                });//审核失败
                            }

                        })
                    }

                });
                //-----------------------------------显示遮罩层与更多信息---------------------------------------------------------
                $(".a1").on("click",function(){
                    console.log($(this).parents('tr').children("td").eq(11).children('div').eq(0))
                    $(this).parents('tr').children("td").eq(11).children('div').eq(0).css('display','block')
                    $("#cover").addClass("cover1")
                })
                $(".xx").on("click",function(){
                    $(this).parents('tr').children("td").eq(11).children('div').eq(0).css('display','none')
                    $("#cover").removeClass("cover1")
                })

            }
        })
    })

    //----------------------------搜索-------------------------------------------------

    /**
     * 护工名称搜索
     */
    $("#searchOrder").on("click",function(){
        // $("#audit1").css("display","none")
        // $("#audit2").css("display","none")
        // $("#audit3").css("display","block")
//              	$("#dishpageval").val(0);
        $("#Paging").css("display","none")
        $("#tbody1").empty($tr)
        $("#change1").text(1)
        if($(".select").val()=="通过护工姓名搜索"){
            //alert("111")
            $.ajax({
                type: "get",
                url: "http://admin.honganjk.com/admin/nurses.action",
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
                        var b=data.data.objs[index].type
                        console.log(data.data.objs[index].ctype)

                        $tr=("<tr >"+
                        "<td goodid=" + a + ">"+data.data.objs[index].id+"</td>  <td goodid2=" + b + ">"+shanghu(data.data.objs[index].dtype)+"</td> <td>"+data.data.objs[index].name+"</td> <td>"+data.data.objs[index].mobile+"</td> <td>"+sex(data.data.objs[index].sex)+"</td> <td>"+data.data.objs[index].sn+"</td> <td>"+data.data.objs[index].years+"</td> <td>"+formatDate(data.data.objs[index].createTime)+"</td> <td>"+formatDate(data.data.objs[index].updateTime)+"</td>"
                        +"<td class='q'><a  class='a1'>更多</a></td> <td class='jump'><a class='a3' data-toggle='modal' data-target='#myModal'>"+zhuangtai1(data.data.objs[index].type)+"</a>"
                        +"<td><div class='box1'>"+
                        "<div class='jumbotron jumbotron-style'>" +
                        "<div class='container'>" +
                        "<h3>护工详细信息</h3>" +
                        "</div> " +
                        "</div> "
                        +"<ul class='adddishesUl'>"
                        +"<img class='xx' src='../images/xxafter.png'/>"
                        +"<li><span>护工头像:</span><img id='flexible-img' class='small' src='"+data.data.objs[index].img+"' /></li>"
                        +"<li><span>护工名称:</span><input type='text'value='"+data.data.objs[index].name+"'/></li>"
                        +"<li><span>性别:</span><input type='text'value='"+sex(data.data.objs[index].sex)+"'/></li>"
                        +"<li><span>服务类型:</span><input type='text'value='"+shanghu(data.data.objs[index].dtype)+"'/></li>"
                        +"<li><span>状态类型:</span><input type='text'value='"+zhuangtai1(data.data.objs[index].type)+"'/></li>"
                        +"<li><span>账号:</span><input type='text'value='"+data.data.objs[index].account+"'/></li>"
                        +"<li><span>联系人号码:</span><input type='text'value='"+data.data.objs[index].mobile+"'/></li>"
                        +"<li><span>身份证号:</span><input type='text'value='"+data.data.objs[index].sn+"'/></li>"
                        +"<li><span>出生日期:</span><input type='text'value='"+data.data.objs[index].born+"'/></li>"
                        +"<li><span>籍贯:</span><input type='text'value='"+data.data.objs[index].birthplace+"'/></li>"
                        +"<li><span>现住址:</span><input type='text'value='"+data.data.objs[index].address+"'/></li>"
                        +"<li><span>服务区域:</span><input type='text'value='"+data.data.objs[index].area+"'/></li>"
                        +"<li><span>工作年限:</span><input type='text'value='"+data.data.objs[index].years+"'/></li>"
                        +"<li><span>介绍:</span><input type='text'value='"+data.data.objs[index].introduction+"'/></li>"
                        +"<li><span>银行卡号:</span><input type='text'value='"+data.data.objs[index].card+"'/></li>"
                        +"<li><span>开户行:</span><input type='text'value='"+data.data.objs[index].bank+"'/></li>"
                        +"<li><span>身份证正面:</span><img  src='"+data.data.objs[index].positiveImg+"'/></li><br>"
                        +"<li><span>身份证反面:</span><img  src='"+data.data.objs[index].obverseImg+"'/></li><br>"
                        +"<li><span>资格证:</span><img  src='"+data.data.objs[index].licenseImg+"'/></li><br>"
                        +"</ul>"
                        +"</div></td>"
                        +"</tr>")

                        $("#tbody1").append($tr)


                    });

                    //-------------------------------------
                    $("#PrevPage").attr("disabled",true);
                    $("#NextPage").attr("disabled",true);

                    if(JSON.stringify(data.data.total) <20){
                        $("#NextPage").attr("disabled",true);
                    }else{
                        $("#NextPage").removeAttr("disabled");
                    }
                    //------------------------------------进行审核-------------------------------------------------
                    $(".jump").on('click',function(){
                        // $(".remodal-wrapper").css("display","block")
                        // $(".remodal-overlay").css("display","block")
                        var index1=$(this).parent('tr').children("td").eq(0).attr('goodid')
                        // console.log($("#select3").val().substring(0,1))

                        if($(this).parent().children("td").eq(10).children('a').eq(0).html()=="已审核"){

                            $('.a3').attr('data-target','#outModal');

                            // $(".remodal-wrapper").css("display","none");
                            // $('.audit').css("display",'none');
                            // $("#audit4").css("display","block");

                            // $(this).parent().children("td").eq(9).children('a').eq(0).attr("href","#modal2")
                            $(".Xbutton").on("click",function(){
                                if($("#outTextArea").val().length==''){
                                    swal("请填写下架的原因");
                                }else{
                                    $.ajax({
                                        type:"post",
                                        url:"http://admin.honganjk.com/admin/unShelveNurse.action",
                                        headers:{
                                            "code":$.cookie("code"),
                                            "token":$.cookie("token")
                                        },
                                        dataType: "json",
                                        data:{

                                            "id":index1,
                                            "reason":$("#outTextArea").val()
                                        },
                                        success: function(data){
                                            console.log(data)
                                            switch(JSON.stringify(data.code))
                                            {
                                                case '"A00000"':

                                                    swal("短信已发送至护工");
                                                    // $(".remodal-wrapper").css("display","none")
                                                    // $(".remodal-overlay").css("display","none")
                                                    location.reload()
                                                    break;
                                                default:
                                                    alert("请求失败")

                                            }
                                        },
                                        error:function(XmlHttpRequest,textStatus, errorThrown){
                                            console.log("请求失败"+XmlHttpRequest.responseText);
                                        }
                                    });//下架
                                }

                            })

                            /**解绑**/

                            $(".Xbutton").unbind('click').click(function(e){
                                if($("#outTextArea").val().length==''){
                                    swal("请填写下架的原因");
                                }else{
                                    $.ajax({
                                        type:"post",
                                        url:"http://admin.honganjk.com/admin/unShelveNurse.action",
                                        headers:{
                                            "code":$.cookie("code"),
                                            "token":$.cookie("token")
                                        },
                                        dataType: "json",
                                        data:{

                                            "id":index1,
                                            "reason":$("#outTextArea").val()
                                        },
                                        success: function(data){
                                            console.log(data)
                                            switch(JSON.stringify(data.code))
                                            {
                                                case '"A00000"':

                                                    swal("短信已发送至护工");
                                                    // $(".remodal-wrapper").css("display","none")
                                                    // $(".remodal-overlay").css("display","none")
                                                    location.reload()
                                                    break;
                                                default:
                                                    alert("请求失败")

                                            }
                                        },
                                        error:function(XmlHttpRequest,textStatus, errorThrown){
                                            console.log("请求失败"+XmlHttpRequest.responseText);
                                        }
                                    });//下架
                                }

                            });

                        } else {
                            // $(".remodal-wrapper").css("display","block");
                            // $(".remodal-overlay").css("display","block");

                            $('.a3').attr('data-target','#myModal');

                            // $(".sold-out").css('display','none');

                            $(".btn1").on("click", function () {
                                $.ajax({
                                    type: "post",
                                    url: "http://admin.honganjk.com/admin/verifyNurse.action",
                                    headers: {
                                        "code": $.cookie("code"),
                                        "token": $.cookie("token")
                                    },
                                    dataType: "json",
                                    data: {

                                        "id": index1,
                                        "type": $("#select1").val().substring(0, 1)
                                    },
                                    success: function (data) {
                                        console.log(data)
                                        switch (JSON.stringify(data.code)) {
                                            case '"A00000"':
                                                swal("审核成功");
                                                // $(".remodal-wrapper").css("display", "none")
                                                // $(".remodal-overlay").css("display", "none")
                                                location.reload()
                                                break;
                                            default:
                                                alert("请求失败")

                                        }
                                    },
                                    error: function (XmlHttpRequest, textStatus, errorThrown) {
                                        console.log("请求失败" + XmlHttpRequest.responseText);
                                    }
                                });//审核成功
                            });

                            /**解绑**/
                            $(".btn1").unbind('click').click(function (e) {
                                $.ajax({
                                    type: "post",
                                    url: "http://admin.honganjk.com/admin/verifyNurse.action",
                                    headers: {
                                        "code": $.cookie("code"),
                                        "token": $.cookie("token")
                                    },
                                    dataType: "json",
                                    data: {

                                        "id": index1,
                                        "type": $("#select1").val().substring(0, 1)
                                    },
                                    success: function (data) {
                                        console.log(data)
                                        switch (JSON.stringify(data.code)) {
                                            case '"A00000"':
                                                swal("审核成功");
                                                // $(".remodal-wrapper").css("display", "none")
                                                // $(".remodal-overlay").css("display", "none")
                                                location.reload()
                                                break;
                                            default:
                                                alert("请求失败")

                                        }
                                    },
                                    error: function (XmlHttpRequest, textStatus, errorThrown) {
                                        console.log("请求失败" + XmlHttpRequest.responseText);
                                    }
                                });//审核成功
                            });

                            $(".btn2").on("click", function () {
                                if ($("#bustTextArea").val().length == '') {
                                    // console.log($("#textarea3").val());
                                    swal("请填写审核失败的原因");
                                } else {
                                    $.ajax({
                                        type: "post",
                                        url: "http://admin.honganjk.com/admin/forbidNurse.action",
                                        headers: {
                                            "code": $.cookie("code"),
                                            "token": $.cookie("token")
                                        },
                                        dataType: "json",
                                        data: {

                                            "id": index1,
                                            "reason": $("#bustTextArea").val()
                                        },
                                        success: function (data) {
                                            console.log(data)
                                            switch (JSON.stringify(data.code)) {
                                                case '"A00000"':

                                                    swal("短信已发送至护工");
                                                    // $(".remodal-wrapper").css("display", "none")
                                                    // $(".remodal-overlay").css("display", "none")
                                                    location.reload()
                                                    break;
                                                default:
                                                    alert("请求失败")

                                            }
                                        },
                                        error: function (XmlHttpRequest, textStatus, errorThrown) {
                                            console.log("请求失败" + XmlHttpRequest.responseText);
                                        }
                                    });//审核失败
                                }

                            });


                            /**解绑事件**/
                            $(".btn2").unbind('click').click(function (e) {
                                if ($("#bustTextArea").val().length == '') {
                                    // console.log($("#textarea3").val());
                                    swal("请填写审核失败的原因");
                                } else {
                                    $.ajax({
                                        type: "post",
                                        url: "http://admin.honganjk.com/admin/forbidNurse.action",
                                        headers: {
                                            "code": $.cookie("code"),
                                            "token": $.cookie("token")
                                        },
                                        dataType: "json",
                                        data: {

                                            "id": index1,
                                            "reason": $("#bustTextArea").val()
                                        },
                                        success: function (data) {
                                            console.log(data)
                                            switch (JSON.stringify(data.code)) {
                                                case '"A00000"':

                                                    swal("短信已发送至护工");
                                                    // $(".remodal-wrapper").css("display", "none")
                                                    // $(".remodal-overlay").css("display", "none")
                                                    location.reload()
                                                    break;
                                                default:
                                                    alert("请求失败")

                                            }
                                        },
                                        error: function (XmlHttpRequest, textStatus, errorThrown) {
                                            console.log("请求失败" + XmlHttpRequest.responseText);
                                        }
                                    });//审核失败
                                }

                            });
                        }

                    })
//-----------------------------------显示遮罩层与更多信息---------------------------------------------------------
                    /**
                     * 联系方式搜索
                     */
                    $(".a1").on("click",function(){
                        console.log($(this).parents('tr').children("td").eq(11))
                        $(this).parents('tr').children("td").eq(11).children('div').eq(0).css('display','block')
                        $("#cover").addClass("cover1")
                    })
                    $(".xx").on("click",function(){
                        $(this).parents('tr').children("td").eq(11).children('div').eq(0).css('display','none')
                        $("#cover").removeClass("cover1")
                    })
                },
                error:function(XmlHttpRequest,textStatus,errorThrown){
                    console.log("请求失败"+XmlHttpRequest.responseText);
                }
            })
        }else{
            $.ajax({
                type: "get",
                url: "http://admin.honganjk.com/admin/nurses.action",
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
                        var b=data.data.objs[index].type
                        console.log(data.data.objs[index].ctype)

                        $tr=("<tr >"+
                        "<td goodid=" + a + ">"+data.data.objs[index].id+"</td>  <td goodid2=" + b + ">"+shanghu(data.data.objs[index].dtype)+"</td> <td>"+data.data.objs[index].name+"</td> <td>"+data.data.objs[index].mobile+"</td> <td>"+sex(data.data.objs[index].sex)+"</td> <td>"+data.data.objs[index].sn+"</td> <td>"+data.data.objs[index].years+"</td> <td>"+formatDate(data.data.objs[index].createTime)+"</td> <td>"+formatDate(data.data.objs[index].updateTime)+"</td>"
                        +"<td class='q'><a  class='a1'>更多</a></td> <td class='jump'><a class='a3' data-toggle='modal' data-target='#myModal'>"+zhuangtai1(data.data.objs[index].type)+"</a>"
                        +"<td><div class='box1'>"+
                        "<div class='jumbotron jumbotron-style'>" +
                        "<div class='container'>" +
                        "<h3>护工详细信息</h3>" +
                        "</div> " +
                        "</div> "
                        +"<ul class='adddishesUl'>"
                        +"<img class='xx' src='../images/xxafter.png'/>"
                        +"<li><span>护工头像:</span><img id='flexible-img' class='small' src='"+data.data.objs[index].img+"' /></li>"
                        +"<li><span>护工名称:</span><input type='text'value='"+data.data.objs[index].name+"'/></li>"
                        +"<li><span>性别:</span><input type='text'value='"+sex(data.data.objs[index].sex)+"'/></li>"
                        +"<li><span>服务类型:</span><input type='text'value='"+shanghu(data.data.objs[index].dtype)+"'/></li>"
                        +"<li><span>状态类型:</span><input type='text'value='"+zhuangtai1(data.data.objs[index].type)+"'/></li>"
                        +"<li><span>账号:</span><input type='text'value='"+data.data.objs[index].account+"'/></li>"
                        +"<li><span>联系人号码:</span><input type='text'value='"+data.data.objs[index].mobile+"'/></li>"
                        +"<li><span>身份证号:</span><input type='text'value='"+data.data.objs[index].sn+"'/></li>"
                        +"<li><span>出生日期:</span><input type='text'value='"+data.data.objs[index].born+"'/></li>"
                        +"<li><span>籍贯:</span><input type='text'value='"+data.data.objs[index].birthplace+"'/></li>"
                        +"<li><span>现住址:</span><input type='text'value='"+data.data.objs[index].address+"'/></li>"
                        +"<li><span>服务区域:</span><input type='text'value='"+data.data.objs[index].area+"'/></li>"
                        +"<li><span>工作年限:</span><input type='text'value='"+data.data.objs[index].years+"'/></li>"
                        +"<li><span>介绍:</span><input type='text'value='"+data.data.objs[index].introduction+"'/></li>"
                        +"<li><span>银行卡号:</span><input type='text'value='"+data.data.objs[index].card+"'/></li>"
                        +"<li><span>开户行:</span><input type='text'value='"+data.data.objs[index].bank+"'/></li>"
                        +"<li><span>身份证正面:</span><img src='"+data.data.objs[index].positiveImg+"'/></li><br>"
                        +"<li><span>身份证反面:</span><img src='"+data.data.objs[index].obverseImg+"'/></li><br>"
                        +"<li><span>资格证:</span><img src='"+data.data.objs[index].licenseImg+"'/></li><br>"
                        +"</ul>"
                        +"</div></td>"
                        +"</tr>")

                        $("#tbody1").append($tr)


                    });

                    //-------------------------------------
                    $("#PrevPage").attr("disabled",true);
                    $("#NextPage").attr("disabled",true);

                    if(JSON.stringify(data.data.total) <20){
                        $("#NextPage").attr("disabled",true);
                    }else{
                        $("#NextPage").removeAttr("disabled");
                    }
                    //------------------------------------进行审核-------------------------------------------------
                    $(".jump").on('click',function(){
                        // $(".remodal-wrapper").css("display","block")
                        // $(".remodal-overlay").css("display","block")
                        var index1=$(this).parent('tr').children("td").eq(0).attr('goodid')
                        // console.log($("#select3").val().substring(0,1))

                        if($(this).parent().children("td").eq(10).children('a').text()==='已审核'){
                            $('.a3').attr('data-target','#outModal');

                            // $(".remodal-wrapper").css("display","none");
                            // $("#audit4").css("display","block");

                            $(this).parent().children("td").eq(9).children('a').eq(0).attr("href","#modal2")
                            $(".Xbutton").on("click",function(){
                                if($("#outTextArea").val().length==''){
                                    console.log($("#outTextArea").val());
                                    swal("请填写下架原因!!");
                                    // alert("请填写下 架的原因")
                                }else{
                                    $.ajax({
                                        type:"post",
                                        url:"http://admin.honganjk.com/admin/unShelveNurse.action",
                                        headers:{
                                            "code":$.cookie("code"),
                                            "token":$.cookie("token")
                                        },
                                        dataType: "json",
                                        data:{

                                            "id":index1,
                                            "reason":$("#outTextArea").val()
                                        },
                                        success: function(data){
                                            console.log(data)
                                            switch(JSON.stringify(data.code))
                                            {
                                                case '"A00000"':

                                                    swal("短信已发送至客户")

                                                    location.reload();
                                                    // $(".remodal-wrapper").css("display","none")
                                                    // $(".remodal-overlay").css("display","none")

                                                    break;
                                                default:
                                                    alert("请求失败")

                                            }
                                        },
                                        error:function(XmlHttpRequest,textStatus, errorThrown){
                                            console.log("请求失败"+XmlHttpRequest.responseText);
                                        }
                                    });//下架
                                }

                            });
                            /**解绑**/
                            $(".Xbutton").unbind('click').click(function(e){
                                if($("#outTextArea").val().length==''){
                                    swal("请填写下架原因!!");
                                }else{
                                    $.ajax({
                                        type:"post",
                                        url:"http://admin.honganjk.com/admin/unShelveNurse.action",
                                        headers:{
                                            "code":$.cookie("code"),
                                            "token":$.cookie("token")
                                        },
                                        dataType: "json",
                                        data:{

                                            "id":index1,
                                            "reason":$("#outTextArea").val()
                                        },
                                        success: function(data){
                                            console.log(data)
                                            switch(JSON.stringify(data.code))
                                            {
                                                case '"A00000"':

                                                    alert("短信已发送至护工")

                                                    location.reload();
                                                    // $(".remodal-wrapper").css("display","none")
                                                    // $(".remodal-overlay").css("display","none")

                                                    break;
                                                default:
                                                    alert("请求失败")

                                            }
                                        },
                                        error:function(XmlHttpRequest,textStatus, errorThrown){
                                            console.log("请求失败"+XmlHttpRequest.responseText);
                                        }
                                    });//下架
                                }

                            })
                        } else {
                            $('.a3').attr('data-target', '#myModal');
                            $(".btn1").on("click", function () {
                                $.ajax({
                                    type: "post",
                                    url: "http://admin.honganjk.com/admin/verifyNurse.action",
                                    headers: {
                                        "code": $.cookie("code"),
                                        "token": $.cookie("token")
                                    },
                                    dataType: "json",
                                    data: {

                                        "id": index1,
                                        "type": $("#select1").val().substring(0, 1)
                                    },
                                    success: function (data) {
                                        console.log(data)
                                        switch (JSON.stringify(data.code)) {
                                            case '"A00000"':
                                                swal("审核成功");
                                                location.reload()
                                                break;
                                            default:
                                                alert("请求失败")

                                        }
                                    },
                                    error: function (XmlHttpRequest, textStatus, errorThrown) {
                                        console.log("请求失败" + XmlHttpRequest.responseText);
                                    }
                                });//审核成功
                            });

                            /**解绑**/
                            $(".btn1").unbind('click').click(function (e) {
                                $.ajax({
                                    type: "post",
                                    url: "http://admin.honganjk.com/admin/verifyNurse.action",
                                    headers: {
                                        "code": $.cookie("code"),
                                        "token": $.cookie("token")
                                    },
                                    dataType: "json",
                                    data: {

                                        "id": index1,
                                        "type": $("#select1").val().substring(0, 1)
                                    },
                                    success: function (data) {
                                        console.log(data)
                                        switch (JSON.stringify(data.code)) {
                                            case '"A00000"':
                                                swal("审核成功");
                                                location.reload()
                                                break;
                                            default:
                                                alert("请求失败")

                                        }
                                    },
                                    error: function (XmlHttpRequest, textStatus, errorThrown) {
                                        console.log("请求失败" + XmlHttpRequest.responseText);
                                    }
                                });//审核成功
                            });

                            $(".btn2").on("click", function () {
                                if ($("#bustTextArea").val().length == '') {
                                    // console.log($("#textarea3").val());
                                    swal("请填写审核失败的原因");
                                } else {
                                    $.ajax({
                                        type: "post",
                                        url: "http://admin.honganjk.com/admin/forbidNurse.action",
                                        headers: {
                                            "code": $.cookie("code"),
                                            "token": $.cookie("token")
                                        },
                                        dataType: "json",
                                        data: {

                                            "id": index1,
                                            "reason": $("#bustTextArea").val()
                                        },
                                        success: function (data) {
                                            console.log(data)
                                            switch (JSON.stringify(data.code)) {
                                                case '"A00000"':

                                                    swal("短信已发送至护工");
                                                    // $(".remodal-wrapper").css("display","none")
                                                    // $(".remodal-overlay").css("display","none")
                                                    location.reload()
                                                    break;
                                                default:
                                                    alert("请求失败")

                                            }
                                        },
                                        error: function (XmlHttpRequest, textStatus, errorThrown) {
                                            console.log("请求失败" + XmlHttpRequest.responseText);
                                        }
                                    });//审核失败
                                }

                            });

                            /**解绑**/


                            $(".btn2").unbind('click').click(function (e) {
                                if ($("#bustTextArea").val().length == '') {
                                    // console.log($("#textarea3").val());
                                    swal("请填写审核失败的原因");
                                } else {
                                    $.ajax({
                                        type: "post",
                                        url: "http://admin.honganjk.com/admin/forbidNurse.action",
                                        headers: {
                                            "code": $.cookie("code"),
                                            "token": $.cookie("token")
                                        },
                                        dataType: "json",
                                        data: {

                                            "id": index1,
                                            "reason": $("#bustTextArea").val()
                                        },
                                        success: function (data) {
                                            console.log(data)
                                            switch (JSON.stringify(data.code)) {
                                                case '"A00000"':

                                                    swal("短信已发送至护工");
                                                    // $(".remodal-wrapper").css("display","none")
                                                    // $(".remodal-overlay").css("display","none")
                                                    location.reload()
                                                    break;
                                                default:
                                                    alert("请求失败")

                                            }
                                        },
                                        error: function (XmlHttpRequest, textStatus, errorThrown) {
                                            console.log("请求失败" + XmlHttpRequest.responseText);
                                        }
                                    });//审核失败
                                }

                            });
                        }
                    });
                    //-----------------------------------显示遮罩层与更多信息---------------------------------------------------------
                    $(".a1").on("click",function(){
                        console.log($(this).parents('tr').children("td").eq(11))
                        $(this).parents('tr').children("td").eq(11).children('div').eq(0).css('display','block')
                        $("#cover").addClass("cover1")
                    })
                    $(".xx").on("click",function(){
                        $(this).parents('tr').children("td").eq(11).children('div').eq(0).css('display','none')
                        $("#cover").removeClass("cover1")
                    })
                },
                error:function(XmlHttpRequest,textStatus,errorThrown){
                    console.log("请求失败"+XmlHttpRequest.responseText);
                }
            });
        }
    })


//---------------------------------------------------全部列表分页----------------------------------------------
    if($("#dishpageval").val() == 0){
//	      			console.log("0")
        $("#PrevPage").attr("disabled",true);
    }//菜品列表分页相关


    $("#NextPage").click(function(){
        $("#tbody1").empty($tr)
        $("#change1").text(1)
        $("#PrevPage").removeAttr("disabled");
        var dishstart = ($("#dishpageval").val()-0) + 20;
        $.ajax({
            type: "get",
            url: "http://admin.honganjk.com/admin/nurses.action",
            data: {

                "start":dishstart,
                "size":20
            },
            dataType: "json",
            headers:{
                "code":$.cookie("code"),
                "token":$.cookie("token")
            },
            success: function (data) {

                $.each(data.data.objs, function(index) {
                    var a=data.data.objs[index].id
                    var b=data.data.objs[index].type
                    $tr=("<tr >"+
                    "<td goodid=" + a + ">"+data.data.objs[index].id+"</td>  <td goodid2=" + b + ">"+shanghu(data.data.objs[index].dtype)+"</td> <td>"+data.data.objs[index].name+"</td> <td>"+data.data.objs[index].mobile+"</td> <td>"+sex(data.data.objs[index].sex)+"</td> <td>"+data.data.objs[index].sn+"</td> <td>"+data.data.objs[index].years+"</td> <td>"+formatDate(data.data.objs[index].createTime)+"</td> <td>"+formatDate(data.data.objs[index].updateTime)+"</td>"
                    +"<td class='q'><a  class='a1'>更多</a></td> <td class='jump'><a class='a3' data-toggle='modal' data-target='#myModal'>"+zhuangtai1(data.data.objs[index].type)+"</a>"
                    +"<td><div class='box1'>"+
                    "<div class='jumbotron jumbotron-style'>" +
                    "<div class='container'>" +
                    "<h3>护工详细信息</h3>" +
                    "</div> " +
                    "</div> "
                    +"<ul class='adddishesUl'>"
                    +"<img class='xx' src='../images/xxafter.png'/>"
                    +"<li><span>护工头像:</span><img id='flexible-img' class='small' src='"+data.data.objs[index].img+"' /></li>"
                    +"<li><span>护工名称:</span><input type='text'value='"+data.data.objs[index].name+"'/></li>"
                    +"<li><span>性别:</span><input type='text'value='"+sex(data.data.objs[index].sex)+"'/></li>"
                    +"<li><span>服务类型:</span><input type='text'value='"+shanghu(data.data.objs[index].dtype)+"'/></li>"
                    +"<li><span>状态类型:</span><input type='text'value='"+zhuangtai1(data.data.objs[index].type)+"'/></li>"
                    +"<li><span>账号:</span><input type='text'value='"+data.data.objs[index].account+"'/></li>"
                    +"<li><span>联系人号码:</span><input type='text'value='"+data.data.objs[index].mobile+"'/></li>"
                    +"<li><span>身份证号:</span><input type='text'value='"+data.data.objs[index].sn+"'/></li>"
                    +"<li><span>出生日期:</span><input type='text'value='"+data.data.objs[index].born+"'/></li>"
                    +"<li><span>籍贯:</span><input type='text'value='"+data.data.objs[index].birthplace+"'/></li>"
                    +"<li><span>现住址:</span><input type='text'value='"+data.data.objs[index].address+"'/></li>"
                    +"<li><span>服务区域:</span><input type='text'value='"+data.data.objs[index].area+"'/></li>"
                    +"<li><span>工作年限:</span><input type='text'value='"+data.data.objs[index].years+"'/></li>"
                    +"<li><span>介绍:</span><input type='text'value='"+data.data.objs[index].introduction+"'/></li>"
                    +"<li><span>银行卡号:</span><input type='text'value='"+data.data.objs[index].card+"'/></li>"
                    +"<li><span>开户行:</span><input type='text'value='"+data.data.objs[index].bank+"'/></li>"
                    +"<li><span>身份证正面:</span><img src='"+data.data.objs[index].positiveImg+"'/></li><br>"
                    +"<li><span>身份证反面:</span><img src='"+data.data.objs[index].obverseImg+"'/></li><br>"
                    +"<li><span>资格证:</span><img src='"+data.data.objs[index].licenseImg+"'/></li><br>"
                    +"</ul>"
                    +"</div></td>"
                    +"</tr>")

                    $("#tbody1").append($tr)
                });
                $("#dishpageval").val(dishstart);
                $("#change1").text($("#dishpageval").val()/20+1)

                if(JSON.stringify(data.data.total) - 20 <= $("#dishpageval").val()){
                    $("#NextPage").attr('disabled',true);
                }

                //-----------------------------------显示遮罩层与更多信息---------------------------------------------------------
                $(".a1").on("click",function(){
                    $(this).parents('tr').children("td").eq(11).children('div').eq(0).css('display','block')
                    $("#cover").addClass("cover1")
                })
                $(".xx").on("click",function(){
                    $(this).parents('tr').children("td").eq(11).children('div').eq(0).css('display','none')
                    $("#cover").removeClass("cover1")
                })
                //------------------------------------进行审核-------------------------------------------------
                $(".jump").on('click',function(){
                    // $(".remodal-wrapper").css("display","block")
                    // $(".remodal-overlay").css("display","block")
                    var index1=$(this).parent('tr').children("td").eq(0).attr('goodid')
                    // console.log($("#select1").val().substring(0,1))
                    $('.a3').attr('data-target','#myModal');
                    $(".btn1").on("click",function(){

                        $.ajax({
                            type:"post",
                            url:"http://admin.honganjk.com/admin/verifyNurse.action",
                            headers:{
                                "code":$.cookie("code"),
                                "token":$.cookie("token")
                            },
                            dataType: "json",
                            data:{

                                "id":index1,
                                "type":$("#select1").val().substring(0,1)
                            },
                            success: function(data){
                                console.log(data)
                                switch(JSON.stringify(data.code))
                                {
                                    case '"A00000"':
                                        swal("审核成功");
                                        // $(".remodal-wrapper").css("display","none")
                                        // $(".remodal-overlay").css("display","none")
                                        location.reload()
                                        break;
                                    default:
                                        alert("请求失败")

                                }
                            },
                            error:function(XmlHttpRequest,textStatus, errorThrown){
                                console.log("请求失败"+XmlHttpRequest.responseText);
                            }
                        });//审核成功
                    });

                    /**解绑**/
                    $(".btn1").unbind('click').click(function(e){

                        $.ajax({
                            type:"post",
                            url:"http://admin.honganjk.com/admin/verifyNurse.action",
                            headers:{
                                "code":$.cookie("code"),
                                "token":$.cookie("token")
                            },
                            dataType: "json",
                            data:{

                                "id":index1,
                                "type":$("#select1").val().substring(0,1)
                            },
                            success: function(data){
                                console.log(data)
                                switch(JSON.stringify(data.code))
                                {
                                    case '"A00000"':
                                        swal("审核成功");
                                        // $(".remodal-wrapper").css("display","none")
                                        // $(".remodal-overlay").css("display","none")
                                        location.reload()
                                        break;
                                    default:
                                        alert("请求失败")

                                }
                            },
                            error:function(XmlHttpRequest,textStatus, errorThrown){
                                console.log("请求失败"+XmlHttpRequest.responseText);
                            }
                        });//审核成功
                    });

                    $(".btn2").on("click",function(){
                        if($("#bustTextArea").val().length==''){
                            swal("请填写审核失败的原因");
                        }else{
                            $.ajax({
                                type:"post",
                                url:"http://admin.honganjk.com/admin/forbidNurse.action",
                                headers:{
                                    "code":$.cookie("code"),
                                    "token":$.cookie("token")
                                },
                                dataType: "json",
                                data:{

                                    "id":index1,
                                    "reason":$("#bustTextArea").val()
                                },
                                success: function(data){
                                    console.log(data)
                                    switch(JSON.stringify(data.code))
                                    {
                                        case '"A00000"':

                                            swal("短信已发送至护工");
                                            // $(".remodal-wrapper").css("display","none")
                                            // $(".remodal-overlay").css("display","none")
                                            location.reload()
                                            break;
                                        default:
                                            alert("请求失败")

                                    }
                                },
                                error:function(XmlHttpRequest,textStatus, errorThrown){
                                    console.log("请求失败"+XmlHttpRequest.responseText);
                                }
                            });//审核失败
                        }

                    });

                    /**解绑**/
                    $(".btn2").unbind('click').click(function(e){
                        if($("#bustTextArea").val().length==''){
                            swal("请填写审核失败的原因");
                        }else{
                            $.ajax({
                                type:"post",
                                url:"http://admin.honganjk.com/admin/forbidNurse.action",
                                headers:{
                                    "code":$.cookie("code"),
                                    "token":$.cookie("token")
                                },
                                dataType: "json",
                                data:{

                                    "id":index1,
                                    "reason":$("#bustTextArea").val()
                                },
                                success: function(data){
                                    console.log(data)
                                    switch(JSON.stringify(data.code))
                                    {
                                        case '"A00000"':

                                            swal("短信已发送至护工");
                                            // $(".remodal-wrapper").css("display","none")
                                            // $(".remodal-overlay").css("display","none")
                                            location.reload()
                                            break;
                                        default:
                                            alert("请求失败")

                                    }
                                },
                                error:function(XmlHttpRequest,textStatus, errorThrown){
                                    console.log("请求失败"+XmlHttpRequest.responseText);
                                }
                            });//审核失败
                        }

                    });

                })

            },
            error:function(XmlHttpRequest,textStatus, errorThrown)
            {
                console.log("请求失败"+XmlHttpRequest.responseText);
            }
        });
    });//下一页

    $("#PrevPage").click(function(){
        $("#tbody1").empty($tr)
        var dishstart = $("#dishpageval").val() - 20;
        $("#NextPage").removeAttr("disabled");
        if(dishstart < 0){
            return dishstart = 0;
        }
        $.ajax({
            type: "get",
            url: "http://admin.honganjk.com/admin/nurses.action",
            data: {

                "start":dishstart,
                "size":20
            },
            dataType: "json",
            headers:{
                "code":$.cookie("code"),
                "token":$.cookie("token")
            },

            success: function (data) {

                $.each(data.data.objs, function(index) {
                    var a=data.data.objs[index].id
                    var b=data.data.objs[index].type
                    $tr=("<tr >"+
                    "<td goodid=" + a + ">"+data.data.objs[index].id+"</td>  <td goodid2=" + b + ">"+shanghu(data.data.objs[index].dtype)+"</td> <td>"+data.data.objs[index].name+"</td> <td>"+data.data.objs[index].mobile+"</td> <td>"+sex(data.data.objs[index].sex)+"</td> <td>"+data.data.objs[index].sn+"</td> <td>"+data.data.objs[index].years+"</td> <td>"+formatDate(data.data.objs[index].createTime)+"</td> <td>"+formatDate(data.data.objs[index].updateTime)+"</td>"
                    +"<td class='q'><a  class='a1'>更多</a></td> <td class='jump'><a class='a3' data-toggle='modal' data-target='#myModal'>"+zhuangtai1(data.data.objs[index].type)+"</a>"
                    +"<td><div class='box1'>"+
                    "<div class='jumbotron jumbotron-style'>" +
                    "<div class='container'>" +
                    "<h3>护工详细信息</h3>" +
                    "</div> " +
                    "</div> "
                    +"<ul class='adddishesUl'>"
                    +"<img class='xx' src='../images/xxafter.png'/>"
                    +"<li><span>护工头像:</span><img id='flexible-img' class='small' src='"+data.data.objs[index].img+"' /></li>"
                    +"<li><span>护工名称:</span><input type='text'value='"+data.data.objs[index].name+"'/></li>"
                    +"<li><span>性别:</span><input type='text'value='"+sex(data.data.objs[index].sex)+"'/></li>"
                    +"<li><span>服务类型:</span><input type='text'value='"+shanghu(data.data.objs[index].dtype)+"'/></li>"
                    +"<li><span>状态类型:</span><input type='text'value='"+zhuangtai1(data.data.objs[index].type)+"'/></li>"
                    +"<li><span>账号:</span><input type='text'value='"+data.data.objs[index].account+"'/></li>"
                    +"<li><span>联系人号码:</span><input type='text'value='"+data.data.objs[index].mobile+"'/></li>"
                    +"<li><span>身份证号:</span><input type='text'value='"+data.data.objs[index].sn+"'/></li>"
                    +"<li><span>出生日期:</span><input type='text'value='"+data.data.objs[index].born+"'/></li>"
                    +"<li><span>籍贯:</span><input type='text'value='"+data.data.objs[index].birthplace+"'/></li>"
                    +"<li><span>现住址:</span><input type='text'value='"+data.data.objs[index].address+"'/></li>"
                    +"<li><span>服务区域:</span><input type='text'value='"+data.data.objs[index].area+"'/></li>"
                    +"<li><span>工作年限:</span><input type='text'value='"+data.data.objs[index].years+"'/></li>"
                    +"<li><span>介绍:</span><input type='text'value='"+data.data.objs[index].introduction+"'/></li>"
                    +"<li><span>银行卡号:</span><input type='text'value='"+data.data.objs[index].card+"'/></li>"
                    +"<li><span>开户行:</span><input type='text'value='"+data.data.objs[index].bank+"'/></li>"
                    +"<li><span>身份证正面:</span><img src='"+data.data.objs[index].positiveImg+"'/></li><br>"
                    +"<li><span>身份证反面:</span><img src='"+data.data.objs[index].obverseImg+"'/></li><br>"
                    +"<li><span>资格证:</span><img src='"+data.data.objs[index].licenseImg+"'/></li><br>"
                    +"</ul>"
                    +"</div></td>"
                    +"</tr>")

                    $("#tbody1").append($tr)
                });
                $("#dishpageval").val(dishstart);
                $("#change1").text($("#dishpageval").val()/20+1)
                if(dishstart == 0){
                    $("#PrevPage").attr("disabled",true);
                }
                //-----------------------------------显示遮罩层与更多信息---------------------------------------------------------
                $(".a1").on("click",function(){
                    $(this).parents('tr').children("td").eq(11).children('div').eq(0).css('display','block')
                    $("#cover").addClass("cover1")
                })
                $(".xx").on("click",function(){
                    $(this).parents('tr').children("td").eq(11).children('div').eq(0).css('display','none')
                    $("#cover").removeClass("cover1")
                })
                //------------------------------------进行审核-------------------------------------------------
                $(".jump").on('click',function(){
                    // $(".remodal-wrapper").css("display","block")
                    // $(".remodal-overlay").css("display","block")
                    var index1=$(this).parent('tr').children("td").eq(0).attr('goodid')
                    // console.log($("#select1").val().substring(0,1))
                    $('.a3').attr('data-target','#myModal');
                    $(".btn1").on("click",function(){
                        $.ajax({
                            type:"post",
                            url:"http://admin.honganjk.com/admin/verifyNurse.action",
                            headers:{
                                "code":$.cookie("code"),
                                "token":$.cookie("token")
                            },
                            dataType: "json",
                            data:{

                                "id":index1,
                                "type":$("#select1").val().substring(0,1)
                            },
                            success: function(data){
                                console.log(data)
                                switch(JSON.stringify(data.code))
                                {
                                    case '"A00000"':
                                        swal("审核成功");
                                        // $(".remodal-wrapper").css("display","none")
                                        // $(".remodal-overlay").css("display","none")
                                        location.reload()
                                        break;
                                    default:
                                        alert("请求失败")

                                }
                            },
                            error:function(XmlHttpRequest,textStatus, errorThrown){
                                console.log("请求失败"+XmlHttpRequest.responseText);
                            }
                        });//审核成功
                    });


                    /**解绑**/
                    $(".btn1").unbind('click').click(function(e){
                        $.ajax({
                            type:"post",
                            url:"http://admin.honganjk.com/admin/verifyNurse.action",
                            headers:{
                                "code":$.cookie("code"),
                                "token":$.cookie("token")
                            },
                            dataType: "json",
                            data:{

                                "id":index1,
                                "type":$("#select1").val().substring(0,1)
                            },
                            success: function(data){
                                console.log(data)
                                switch(JSON.stringify(data.code))
                                {
                                    case '"A00000"':
                                        swal("审核成功");
                                        // $(".remodal-wrapper").css("display","none")
                                        // $(".remodal-overlay").css("display","none")
                                        location.reload()
                                        break;
                                    default:
                                        alert("请求失败")

                                }
                            },
                            error:function(XmlHttpRequest,textStatus, errorThrown){
                                console.log("请求失败"+XmlHttpRequest.responseText);
                            }
                        });//审核成功
                    });



                    $(".btn2").on("click",function(){
                        if($("#bustTextArea").val().length==''){
                            swal("请填写审核失败的原因");
                        }else{
                            $.ajax({
                                type:"post",
                                url:"http://admin.honganjk.com/admin/forbidNurse.action",
                                headers:{
                                    "code":$.cookie("code"),
                                    "token":$.cookie("token")
                                },
                                dataType: "json",
                                data:{

                                    "id":index1,
                                    "reason":$("#bustTextArea").val()
                                },
                                success: function(data){
                                    console.log(data)
                                    switch(JSON.stringify(data.code))
                                    {
                                        case '"A00000"':

                                            swal("短信已发送至护工");

                                            location.reload();
                                            break;
                                        default:
                                            alert("请求失败")

                                    }
                                },
                                error:function(XmlHttpRequest,textStatus, errorThrown){
                                    console.log("请求失败"+XmlHttpRequest.responseText);
                                }
                            });//审核失败
                        }

                    });


                    /**解绑**/
                    $(".btn2").on("click",function(){
                        if($("#bustTextArea").val().length==''){
                            swal("请填写审核失败的原因");
                        }else{
                            $.ajax({
                                type:"post",
                                url:"http://admin.honganjk.com/admin/forbidNurse.action",
                                headers:{
                                    "code":$.cookie("code"),
                                    "token":$.cookie("token")
                                },
                                dataType: "json",
                                data:{

                                    "id":index1,
                                    "reason":$("#bustTextArea").val()
                                },
                                success: function(data){
                                    console.log(data)
                                    switch(JSON.stringify(data.code))
                                    {
                                        case '"A00000"':

                                            swal("短信已发送至护工");

                                            location.reload();
                                            break;
                                        default:
                                            alert("请求失败")

                                    }
                                },
                                error:function(XmlHttpRequest,textStatus, errorThrown){
                                    console.log("请求失败"+XmlHttpRequest.responseText);
                                }
                            });//审核失败
                        }

                    });

                })
            },
            error:function(XmlHttpRequest,textStatus, errorThrown)
            {
                console.log("请求失败"+XmlHttpRequest.responseText);
            }
        });
    });//上一页










    //-------------------------------商户类型转换-------------------------------------------------

    function shanghu(e) {
        switch(e) {

            case 1:
                return '全天'
                break;
            case 2:
                return '钟点'
                break;

        };
    };

    //-------------------------------状态类型转换-------------------------------------------------

    function zhuangtai(e) {
        switch(e) {

            case -1:
                return '下架护工'
                break;
            case 0:
                return '未审核护工'
                break;
            case 1:
                return '杭州地区护工(已审核)'
                break;
            case 2:
                return '暂无'
                break;

        };
    };
    function zhuangtai1(e) {
        switch(e) {

            case -1:
                return '下架护工'
                break;
            case 0:
                return '未审核'
                break;
            case 1:
                return '已审核'
                break;
            case 2:
                return '暂无'
                break;

        };
    };


    function sex(e) {
        switch (e){
            case 1:
                return '女'
                break;
            case 2:
                return '男'
                break;
        };
    }



    //---------------------时间戳-------------------------------------------

    function formatDate(data) {
        return $.myTime.UnixToDate(data,true,8);
    }

});