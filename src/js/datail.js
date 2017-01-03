
var datail={
    shopID:fnBase.request("goodsId"),
    init:function(){
        this.addData();
        this.bindEvent();
        fnBase.myalert();
    },
    addData:function(){
        $("#loading").show();
        var _this=this;
        $.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:_this.shopID},function(data){
            var aImgs=JSON.parse(data[0].imgsUrl);
           console.log(aImgs);
            var str="";
            for(var i=0;i<aImgs.length;i++){
                str+='<div class="swiper-slide"><img src="'+aImgs[i]+'" alt=""></div>'
            }
            console.log(str);
            $(".swiper-wrapper").html(str);
            var swiper = new Swiper('.swiper-container', {
                loop:true,
                pagination: '.mypagination',
                slidesPerView: 3,
                paginationClickable: true,
                spaceBetween: 30
            });
            $(".goodsName").html(data[0].goodsName);
            $(".price").html("￥"+data[0].price);
            $(".buyNum").html("购买人数："+data[0].buynumber);
            $("#loading").fadeOut();
            
        })
    },
    bindEvent:function(){
        var _this=this;
        $(".addCar").on("click",function(){
            var userID=JSON.parse(localStorage["logindata"]).userID;
            var Updata={
                "userID":userID,
                "goodsID":_this.shopID,
                "number":1
            };
            console.log(Updata);
            $.get("http://datainfo.duapp.com/shopdata/updatecar.php",Updata,function(data){
                if(data==1){
                    alert("添加成功！");
                }
            });
       });
    }
}
datail.init();