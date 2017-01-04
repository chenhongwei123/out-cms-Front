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
            console.log(json);
            var typeData = json.Module;

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

