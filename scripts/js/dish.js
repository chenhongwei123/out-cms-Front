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
 菜品管理脚本
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
     * 添加菜品弹出框
     */
    document.querySelector('div.row .col-md-12 button').onclick = function () {
        swal({
                title: '添加菜品',
                type: "input",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: 'slide-from-top',
                inputPlaceholder: '条目名称',
                inputPlaceholder2: '条目类型'

            },
            function (inputValue) {
                if(inputValue === false){
                    return false;
                }

                if(inputValue === ""){
                    swal.showInputError('不能为空');
                    return false;
                } else
                //验证条目类型
                if(/^[0-9]*[1-9][0-9]*$/.test(inputValue) == false){
                    swal.showInputError('请输入正整数');
                    return false;
                } else
                if(parseInt(inputValue,10) > 127){
                    swal.showInputError('请输入小于128的正整数');
                    return false;
                }
                //ajax
                $.ajax({
                    type:"get",
                    url:"http://admin.honganjk.com/admin/addItem.action",
                    async:true,
                    headers:{
                        "code":$.cookie("code"),
                        "token":$.cookie("token")
                    },
                    dataType: "json",
                    data:{
                        "type":$("#one").val() ,
                        "title":$("#two").val()
                    },
                    success: function(data){
                        console.log(data)
                        switch(JSON.stringify(data.code))
                        {
                            case '"A00000"':
                                // alert("添加成功")
                                swal('添加成功','','success');
                                location.reload()
                                break;
                            default:
                                console.log("请求失败")
                        }
                    },
                    error:function(XmlHttpRequest,textStatus, errorThrown){
                        console.log("请求失败"+XmlHttpRequest.responseText);
                    }
                });
                 console.log(inputValue);
            });
    };
    
    
    
});