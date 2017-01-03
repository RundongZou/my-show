var myBase={
    requestID:function(){
        var id=window.location.href.split("?")[1].split("=")[1];
        return id;
    }
}