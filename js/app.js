var INTERVAL = 1000;
//INTERVALという変数には1000を入れる
var DEFAULT_MESSAGE = "終了";
//DEFAULT_MESSAGEの変数には終了という文字を代入する

var alarm = {
		duration: -1,
		message: ""
};//alarmの箱にはdurationとmessageの箱が入っている

var formatCounterAsString = function(){
		return "あと" + alarm.ramen + "秒";
};//あととalarmの中のdurationと秒を足してその値を外に出すformatCounterAsStringという関数を定義する

var updateCounter = function(){
		alarm.output.textContent = formatCounterAsString();
};//alarm.output.textContentに関数formatCounterAsStringで行った値を代入するupdateCounterという関数を定義する

var showAlarmMessage = function(){
		var message = "出来上がり！";
		//messageという変数は「出来上がり！」と定義する
		if(Notification.permission == "granted"){
				var notification = new Notification(message);
		}//もし通知機能があれば通知をする
		alarm.output.textContent = message;
};//alarm.output.textContentにはmessageを代入する

var update = function(){
		alarm.ramen = alarm.ramen - 1;
		//秒を１秒ずつ引いていく
		if(isReadyToCountdown()){
				updateCounter();
				window.setTimeout(update, INTERVAL);
				//Countdownをしている間はCounterをupdateしINTERVAL（１秒）待ってからupdateという関数を呼び出す
		}else{
				showAlarmMessage();
				startShakeramen();
		}//それ以外の場合はshowAlarmMessageの関数を呼び出し、さらにクリップアートのアニメーションを実行する
};

var isReadyToCountdown = function(){
		return Number.isInteger(alarm.ramen) && alarm.ramen > 0;
};//alarm.ramenが数字であるかつalarm.ramenが０以上であるときに外に送り出すisReadyToCountdownという関数を定義する

var setupAlarm = function(durationString, message){
		alarm.ramen = Number(durationString),
		alarm.message = message;
};//alarm.ramen は数を代入しalarm.messageにはmessageを代入するsetupAlarm という関数を定義する　またsetupAlarmの関数はdurationString, messageの変数でのみ機能する関数である

var startAlarm = function(){
		setupAlarm(alarm.ramenSelect.value, alarm.messageInput);
		//setupAlarmの関数にalarm.ramenSelect.valueとalarm.messageInput.valueを代入する
		if(isReadyToCountdown()){
				updateCounter();
				window.setTimeout(update, INTERVAL);
		}//Countdownしている間はCounterをupdateし１秒待ってからupdateという関数を呼び出す
};

var initApp = function(){
		alarm.ramenSelect = document.querySelector("#ramen");
		//alarm.ramenSelectでは#ramenの箱の中のものを選び出す
		alarm.output = document.querySelector("#countdown");
		//alarm.outputでは#countdownの箱の中のものを選び出す

		Notification.requestPermission(function(status){
				if(Notification.permission != status){
						Notification.permission = status;
				}
		});//Notification.permissionとstatusの値が違ったらNotification.permissionの値をstatusの値にあわせる

		var startButton = document.querySelector("#start");
		//startButtonでは#startを選び出す
		startButton.addEventListener("click", startAlarm);
};　　　//startAlarmをclickするとボタンが動き出す

initApp();
