/*
* @Author: Marte
* @Date:   2016-12-16 08:55:22
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-16 08:55:22
*/

var login={
    $uName:$(".uName"),
    $password:$(".password"),
    $showpas:$("#showpas"),
    $forget:$(".forget"),
    $rem:$("#rem"),
    $login:$(".login-btn"),
    $reg:$(".to-reg"),
    canRem:false,
    init:function(){
        this.bindEvent();
        this.getUserData();
    },
    login:function(){
        var _this=this;
        var uName=this.$uName.val();
        var uPassword=this.$password.val();
        var logindata={
            "status":"login",
            "userID":uName,
            "password":uPassword
        };
        $.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php",logindata,function(data){
            console.log(data);
            if(data==0){
                console.log("用户名不存在");
            }else if(data==2){
                console.log("用户名密码不符");
            }else{
                console.log("登录成功");
                console.log(data);
                if(_this.canRem){
                    data.password=uPassword;
                    localStorage.setItem("logindata",JSON.stringify(data));
                }
                window.location.href="shoplist.html";
            }
        });
    },
    bindEvent:function(){
        var _this=this;
        this.$showpas.on("click",function(){
            var checked=$(this).prop("checked");
            if(checked){
                _this.$password.attr("type","text");
            }else{
                _this.$password.attr("type","password");
            }
        })
        this.$rem.on("click",function(){
            var checked=$(this).prop("checked");
            if(checked){
                _this.canRem=true;
            }else{
                _this.canRem=false;
            }
        })
        this.$reg.on("click",function(){
            window.location.href="reg.html";
        });
        this.$login.on("click",function(){
            _this.login();
        });
    },
    getUserData:function(){
        var obj=JSON.parse(localStorage["logindata"]);
        if(obj){
            console.log(obj);
            this.$uName.val(obj.userID);
            this.$password.val(obj.password);
        }else{
            console.log("没有");
        }

    }
}
login.init();