/**
 * Created by HJJ on 2017/1/4.
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
 版本管理
 */

$(document).ready(function () {
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
        document.location.href ="login.html";
    });

    /**
     * 浏览版本
     */
    var index1 = null;
    $.ajax({
        type:"get",
        url:"http://admin.honganjk.com/admin/versions.action",
        headers:{
            "code":$.cookie("code"),
            "token":$.cookie("token")
        },
        dataType: "json",
        success:function (json) {
            $.each(json.data, function (index,item) {
                console.log(json.data[index].id);
                // console.log(json.objs[index].id);
                var a = json.data[index].id;
                var $tr = ("<tr>" +
                "<td goodid=" + a + ">" + json.data[index].id + "</td>" +
                "<td><input class='input1'  style='border: none;' type='text' value='" + json.data[index].version + "' disabled='disabled'  /></td>" +
                "<td>" +
                "<span class='span1'>" + changeType(json.data[index].type) + "</span>" +
                "<select class='select1' style='display: none;'>" +
                "<option>用户</option>" +
                "<option>商户</option>" +
                "</select>" +
                "</td>" +
                "<td><input class='input1'  style='border: none;' type='text' value='" + json.data[index].url + "' disabled='disabled'  /></td>" +
                "<td><input class='input1'  style='border: none;' type='text' value='" + json.data[index].descs + "' disabled='disabled'  /></td>" +
                "<td>" + formatDate(json.data[index].create_time) + "</td>" +
                "<td>" + formatDate(json.data[index].update_time) + "</td>" +
                "<td class='amend' ><a  class='a1'>修改</a><a class='a2' >保存</a></td></tr>");
                $("#tbody1").append($tr)

            });
        }

    });

    /**
     * 添加版本
     */
    $('.add-version').on("click",function () {
        console.log('aaaa'+changeStr($('#select option:selected').val()));
        $.ajax({
            type:'post',
            url:'http://admin.honganjk.com/admin/addVersion.action',
            headers:{
                "code":$.cookie("code"),
                "token":$.cookie("token")
            },
            dataType: "json",
            data:{
                "version":$("#version").val() ,
                "type":changeStr($('#select option:selected').val()),
                "url":$("#url").val(),
                "descs":$("#descs").val()
            },
            success: function(data){
                console.log(data);
                switch(JSON.stringify(data.code))
                {
                    case '"A00000"':
                        // alert("添加成功")
                        swal('添加成功','','success');
                        location.reload();
                        break;
                    default:
                        swal('请求失败','','false');
                }
            },
            error:function(XmlHttpRequest,textStatus, errorThrown){
                console.log("请求失败"+XmlHttpRequest.responseText);
            }
        });
    });









    /**
     * 类型转换
     */
    function changeType(e) {
        switch(e) {
            case 1:
                return '用户'
                break;
            case 2:
                return '商户'
                break;
        };
    };


    /**
     * 转换2
     */
    function changeStr(str) {
        switch(str) {
            case '用户':
                return 1
                break;
            case '商户':
                return 2
                break;
        };
    };

    /**
     * 去除null
     */
    // function killNull(str) {
    //     if($('input').text(null)){
    //         input.text='';
    //     }
    // }

    /**
     * 时间戳
     */
    function formatDate(data) {
        return $.myTime.UnixToDate(data,true,8);
    }

});

