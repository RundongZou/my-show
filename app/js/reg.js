var reg={
    canReg:true,
    $name:$(".uName"),
    $password:$(".uPassword"),
    $cpassword:$(".cuPassword"),
    $reg:$(".to-reg"),
    //初始化页面
    init:function(){
        var _this=this;
        //给注册按钮加事件
        this.$reg.on("touchstart",function(){
            _this.toReg();
        })
    },
    //注册
    toReg:function(){
        this.check();
        if(this.canReg){
            var data={
               userID:this.$name.val(),
               password:this.$password.val(),
               status:"register"
            };
            console.log(data);
            $.get("http://datainfo.duapp.com/shopdata/userinfo.php",data,function(data, textStatus, jqXHR){
                console.log(data);
                if(data==1){
                    alert("注册成功");
                    window.location.href="login.html"
                }else if(data==0){
                    alert("用户名重名");
                }
            });
            
        }
    },
    check:function(){
        //检验用户名
        var _this=this;
         //确认密码
        var confirmPassword=function(){
            if(_this.$password.val()==_this.$cpassword.val()&&_this.$password.val()!==""){
                _this.canReg=true;
            }else{
                _this.canReg=false;
            }
        }
        //检验密码
        var checkPassword=function(){
            var re=/[a-zA-Z0-9]{6,13}/;
            if(re.test(_this.$name.val())){
                _this.canReg=true;
                confirmPassword();
            }else{
                _this.canReg=false;
            }
        };
        var checkName=function(){
            var re=/[a-zA-Z0-9]{6,13}/;
            if(re.test(_this.$name.val())){
                _this.canReg=true;
                checkPassword();
            }else{
                _this.canReg=false;
            }
        }();
    }
}
reg.init();