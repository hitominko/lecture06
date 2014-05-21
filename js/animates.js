//踊るラーメン Part
var reverseShakeramen = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	window.setTimeout(startShakeramen2, 0);
};

var endShakeramen = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("mouseover", startShakeramen);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "");
};

var startShakeramen = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen);
	//アニメーション終了とともにendFlipramenを実行
	ramen.setAttribute("class", "shakeright");
	//前のアニメーション終了と同時にflip
};	

var reverseShakeramen2 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen2);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	window.setTimeout(startShakeramen3, 0);
};

var startShakeramen2 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen2);
	//アニメーション終了とともにendFlipramenを実行
	ramen.setAttribute("class", "shakeright");
	//前のアニメーション終了と同時にflip
};	

var reverseShakeramen3 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen3);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	window.setTimeout(startShakeramen4, 0);
};

var startShakeramen3 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen3);
	//アニメーション終了とともにendFlipramenを実行
	ramen.setAttribute("class", "shakeright");
	//前のアニメーション終了と同時にflip
};	

var reverseShakeramen4 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen4);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	window.setTimeout(startShakeramen5, 0);
};

var startShakeramen4 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen4);
	//アニメーション終了とともにendFlipramenを実行
	ramen.setAttribute("class", "shakeright");
	//前のアニメーション終了と同時にflip
};	
	
var reverseShakeramen5 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen5);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	window.setTimeout(startShakeramen6, 0);
};

var startShakeramen5 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen5);
	//アニメーション終了とともにendFlipramenを実行
	ramen.setAttribute("class", "shakeright");
	//前のアニメーション終了と同時にflip
};	
	
var reverseShakeramen6 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen6);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	window.setTimeout(startShakeramen7, 0);
};

var startShakeramen6 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen6);
	//アニメーション終了とともにendFlipramenを実行
	ramen.setAttribute("class", "shakeright");
	//前のアニメーション終了と同時にflip
};	

var reverseShakeramen7 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen7);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	window.setTimeout(startShakeramen8, 0);
};

var startShakeramen7 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen7);
	//アニメーション終了とともにendFlipramenを実行
	ramen.setAttribute("class", "shakeright");
	//前のアニメーション終了と同時にflip
};	
var reverseShakeramen8 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen8);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	window.setTimeout(startShakeramen9, 0);
};

var startShakeramen8 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen8);
	//アニメーション終了とともにendFlipramenを実行
	ramen.setAttribute("class", "shakeright");
	//前のアニメーション終了と同時にflip
};	

var reverseShakeramen9 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen9);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	window.setTimeout(startShakeramen10, 0);
};

var startShakeramen9 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen9);
	//アニメーション終了とともにendFlipramenを実行
	ramen.setAttribute("class", "shakeright");
	//前のアニメーション終了と同時にflip
};	

var reverseShakeramen10 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen10);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	window.setTimeout(startShakeramen11, 0);
};

var startShakeramen10 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen10);
	//アニメーション終了とともにendFlipramenを実行
	ramen.setAttribute("class", "shakeright");
	//前のアニメーション終了と同時にflip
};	

var reverseShakeramen11 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen11);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	window.setTimeout(endShakeramen, 0);
};

var startShakeramen11 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen11);
	//アニメーション終了とともにendFlipramenを実行
	ramen.setAttribute("class", "shakeright");
	//前のアニメーション終了と同時にflip
};	


