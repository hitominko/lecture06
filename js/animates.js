//踊るラーメン Part
var reverseShakeramen = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	//アニメーション"shakeleft"を実行
	window.setTimeout(startShakeramen2, 0);
	//0秒後、startShakeramen[n]を実行する
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
	//rアニメーション終了時にreverseShakeramen[n]という関数を実行するイベントリスナーを追加
	ramen.setAttribute("class", "shakeright");
	//アニメーション"shakeright"を実行
};	

var reverseShakeramen2 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen2);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	//アニメーション"shakeleft"を実行
	window.setTimeout(startShakeramen3, 0);
	//0秒後、startShakeramen[n]を実行する
};

var startShakeramen2 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen2);
	//rアニメーション終了時にreverseShakeramen[n]という関数を実行するイベントリスナーを追加
	ramen.setAttribute("class", "shakeright");
	//アニメーション"shakeright"を実行
};	

var reverseShakeramen3 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen3);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	//アニメーション"shakeleft"を実行
	window.setTimeout(startShakeramen4, 0);
	//0秒後、startShakeramen[n]を実行する
};

var startShakeramen3 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen3);
	//rアニメーション終了時にreverseShakeramen[n]という関数を実行するイベントリスナーを追加
	ramen.setAttribute("class", "shakeright");
	//アニメーション"shakeright"を実行
};	

var reverseShakeramen4 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen4);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	//アニメーション"shakeleft"を実行
	window.setTimeout(startShakeramen5, 0);
	//0秒後、startShakeramen[n]を実行する
};

var startShakeramen4 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen4);
	//rアニメーション終了時にreverseShakeramen[n]という関数を実行するイベントリスナーを追加
	ramen.setAttribute("class", "shakeright");
	//アニメーション"shakeright"を実行
};	
	
var reverseShakeramen5 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen5);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	//アニメーション"shakeleft"を実行
	window.setTimeout(startShakeramen6, 0);
	//0秒後、startShakeramen[n]を実行する
};

var startShakeramen5 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen5);
	//rアニメーション終了時にreverseShakeramen[n]という関数を実行するイベントリスナーを追加
	ramen.setAttribute("class", "shakeright");
	//アニメーション"shakeright"を実行
};	
	
var reverseShakeramen6 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen6);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	//アニメーション"shakeleft"を実行
	window.setTimeout(startShakeramen7, 0);
	//0秒後、startShakeramen[n]を実行する
};

var startShakeramen6 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen6);
	//rアニメーション終了時にreverseShakeramen[n]という関数を実行するイベントリスナーを追加
	ramen.setAttribute("class", "shakeright");
	//アニメーション"shakeright"を実行
};	

var reverseShakeramen7 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen7);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	//アニメーション"shakeleft"を実行
	window.setTimeout(startShakeramen8, 0);
	//0秒後、startShakeramen[n]を実行する
};

var startShakeramen7 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen7);
	//rアニメーション終了時にreverseShakeramen[n]という関数を実行するイベントリスナーを追加
	ramen.setAttribute("class", "shakeright");
	//アニメーション"shakeright"を実行
};	
var reverseShakeramen8 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen8);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	//アニメーション"shakeleft"を実行
	window.setTimeout(startShakeramen9, 0);
	//0秒後、startShakeramen[n]を実行する
};

var startShakeramen8 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen8);
	//rアニメーション終了時にreverseShakeramen[n]という関数を実行するイベントリスナーを追加
	ramen.setAttribute("class", "shakeright");
	//アニメーション"shakeright"を実行
};	

var reverseShakeramen9 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen9);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	//アニメーション"shakeleft"を実行
	window.setTimeout(startShakeramen10, 0);
	//0秒後、startShakeramen[n]を実行する
};

var startShakeramen9 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen9);
	//rアニメーション終了時にreverseShakeramen[n]という関数を実行するイベントリスナーを追加
	ramen.setAttribute("class", "shakeright");
	//アニメーション"shakeright"を実行
};	

var reverseShakeramen10 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen10);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	//アニメーション"shakeleft"を実行
	window.setTimeout(startShakeramen11, 0);
	//0秒後、startShakeramen[n]を実行する
};

var startShakeramen10 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen10);
	//rアニメーション終了時にreverseShakeramen[n]という関数を実行するイベントリスナーを追加
	ramen.setAttribute("class", "shakeright");
	//アニメーション"shakeright"を実行
};	

var reverseShakeramen11 = function(){
	var ramen = document.querySelector("#ramenimg img");
	ramen.removeEventListener("animationend", reverseShakeramen11);
	//前のイベントリスナーの削除
	ramen.setAttribute("class", "shakeleft");
	//アニメーション"shakeleft"を実行
	window.setTimeout(endShakeramen, 0);
	//0秒後、endShakeramenを実行する
};

var startShakeramen11 = function(){
	var ramen = document.querySelector("#ramenimg img");

	ramen.addEventListener("animationend", reverseShakeramen11);
	//rアニメーション終了時にreverseShakeramen[n]という関数を実行するイベントリスナーを追加
	ramen.setAttribute("class", "shakeright");
	//アニメーション"shakeright"を実行
};	


