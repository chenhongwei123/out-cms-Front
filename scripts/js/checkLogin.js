/**
 * Created by HJJ on 2016/12/27.
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
    /**
     * 页面一开始加载时候用户框会聚焦
     */
    $('#mobile').focus();
   /*****************************/

    /**
     * 失焦判断
     */
    $('input').blur(function () {
        $(".spa").css('color','#FF4364'); //设置提示字体为红色

        /**
         * 判断手机号
         */
        if($(this).is('#mobile')){ //进行手机号的判断
            var ph = /^1[3|5|7|8][0-9]{9}$/
                if ($("#mobile").val() != '') {
                    if (!(ph.test($('#mobile').val()))) { //使用test()正则验证函数验证输入是否符合售价好规范
                        $(".spa1").text('啊哦,手机号输错啦肿么办T~T');
                        $(this).css('border', '1px solid #FF4364'); //边框变红
                        return false;
                    } else if (ph) {
                        $(".spa1").text('');
                        return true;
                    }
                } else {
                $(".spa1").text('');
            }
        }


        /**
         * 判断密码
         */
        //使用ajax判断密码是否符合
        if($(this).is('#pwd')){ //判断密码
            $.ajax({
                type: 'post',
                url: 'http://admin.honganjk.com/bz/login.action',
                data:{
                    'mobile':$('#mobile').val, //获取手机号
                    'pwd':$.md5($('#pwd').val) //获取MD5加密后的密码
                },
                dataType:'json',
                success: function(data){
                    switch(JSON.stringify(data.code)){
                        case 'A00000':
                            $.cookie('code',data.data.code);
                            $.cookie('token',data.data.token);
                            break;
                        case 'A00001':
                            $('#warning-content').text('哇哦,token失效啦!T~T');
                            break;
                    }
                }

            })
        }

        
    });

    /**
     * 聚焦显示
     */
    $("input").focus(function () {
        if($(this).is("#mobile")){
            $(".spa1").text("一定要是11位手机号哦^_^").css("color","#D4D3D1");
            $(this).css("border","1px solid #D4D3D1");
        }

        if($(this).is('#pwd')){
            $('.spa2').text('记得输入正确的密码哦^_^').css('color','#D4D3D1');
            $(this).css('border','1px solid #D4D3D1');
        }
    });
});