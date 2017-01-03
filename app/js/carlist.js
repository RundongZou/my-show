var carlist={
    userID:JSON.parse(localStorage["logindata"]).userID,
    $goodsnum:$(".goodsnum"),
    $total:$(".total"),
    $carlist:$(".carlist"),
    init:function(){
        console.log(this);
        //创建一个IScroll
        this.myScroll = new IScroll(".content",{
            scrollbars:true,
            fadeScrollbars:true,
            shrinkScrollbars:"scale",
            bounce:true,
            probeType:2,
        });
        this.addData();
        this.bindEvent();
    },
    addData:function(){
        var _this=this;
        $("#loading").show();
        $.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:this.userID},function(data){
            console.log(data);
            var str="";
            for(var i=0;i<data.length;i++){
                str+='<li class="caritem">'+
                        '<div class="imgbox">'+
                            '<img src="'+data[i].goodsListImg+'" alt="">'+
                        '</div>'+
                        '<div class="shopinf" data-id='+data[i].goodsID+'>'+
                            '<p class="goodsName">'+data[i].goodsName+'</p>'+
                            '<p class="price">单价：<span>￥'+data[i].price+'</span></p>'+
                            '<p class="numope">数量：'+
                                '<button class="sub btn">-</button>'+
                                '<input type="text" name="" value="'+data[i].number+'" class="gooditemsnum">'+
                                '<button class="add btn">+</button>'+
                            '</p>'+
                        '</div>'+
                        '<button  class="del btn icon-shanchu2 iconfont"></button>'+
                     '</li>'
            }
            _this.$carlist.append(str);
            $("#loading").fadeOut();
            _this.total();
        })
    },
    bindEvent:function(){
         var _this=this;
         this.$carlist.on("click",".btn",function(){
            var $gooditemsnum=$(this).siblings(".gooditemsnum");
            if($(this).hasClass("sub")){
                console.log("-");
                $gooditemsnum.val(Math.max(parseInt($gooditemsnum.val())-1,1));
            }else{
                console.log("+");
                 $gooditemsnum.val(parseInt($gooditemsnum.val())+1);
            }
            var Updata={
                "userID":_this.userID,
                "goodsID":$(this).parent().parent().data("id"),
                "number":$(this).siblings(".gooditemsnum").val()
            };
            if($(this).hasClass("del")){
                Updata={
                    "userID":_this.userID,
                    "goodsID":$(this).siblings(".shopinf").data("id"),
                    "number":0
                };
                $(this).parent().remove();
            }
            console.log(Updata);
            _this.total();
            $.get("http://datainfo.duapp.com/shopdata/updatecar.php",Updata,function(data){
                
            });

        })
    },
    total:function(){
        var caritems=$(".caritem");
        var quality=0;
        var total=0;
        for(var i=0;i<caritems.length;i++){
            var price=caritems.eq(i).find(".price").children("span").html().slice(1); 
            var gooditemsnum=caritems.eq(i).find(".gooditemsnum").val();
            quality+=parseInt(gooditemsnum);
            total+=price*gooditemsnum
        }
        total=total.toFixed(2);
        console.log(total);
        $(".goodsnum").html(quality);
        $(".total").html("￥"+total);
    }
}
carlist.init();
String.prototype.nospace=function(){
    var str=this.split(" ").join("");

}
var str="as sa da da   fa  fa";
str.nospace();