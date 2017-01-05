/**
 * Created by hasee on 2016/12/29.
 */

let Tools = {
	getUserID:function(){
		let id =JSON.parse(window.sessionStorage.getItem("user")||"{}").id || JSON.parse(window.localStorage.getItem("user")||"{}").id;
		if(!id){
			window.location.hash = "#/login"
		}
		return id
	}
}

export  {Tools}
