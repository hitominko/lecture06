var INTERVAL = 1000;
//INTERVALという変数には1000を入れる
var DEFAULT_MESSAGE = "終了";
//DEFAULT_MESSAGEの変数には終了という文字を代入する

var alarm = {
		duration: -1,
		message: ""
};//alarmの箱にはdurationとmessageの箱が入っている

var formatCounterAsString = function(){
		return "あと" + alarm.duration + "秒";
};//あととalarmの中のdurationと秒を足してその値を外に出すformatCounterAsStringという関数を定義する

var updateCounter = function(){
		alarm.output.textContent = formatCounterAsString();
};//alarm.output.textContentに関数formatCounterAsStringで行った値を代入するupdateCounterという関数を定義する

var showAlarmMessage = function(){
		var message = DEFAULT_MESSAGE;
		if(alarm.message.length > 0){
				message = alarm.message;
		}//もしalarm.message.の文字数が一文字以上ならmessageとしてalarm.messageを入れる
		if(Notification.permission == "granted"){
				var notification = new Notification(message);
		}//もし通知機能があれば通知をする
		alarm.output.textContent = message;
};//alarm.output.textContentにはmessageを代入する

var update = function(){
		alarm.duration = alarm.duration - 1;
		//秒を１秒ずつ引いていく
		if(isReadyToCountdown()){
				updateCounter();
				window.setTimeout(update, INTERVAL);
				//Countdownをしている間はCounterをupdateしINTERVAL（１秒）待ってからupdateという関数を呼び出す
		}else{
				showAlarmMessage();
		}//それ以外の場合はshowAlarmMessageの関数を呼び出す
};

var isReadyToCountdown = function(){
		return Number.isInteger(alarm.duration) && alarm.duration > 0;
};//alarm.durationが数字であるかつalarm.durationが０以上であるときに外に送り出すisReadyToCountdownという関数を定義する

var setupAlarm = function(durationString, message){
		alarm.duration = Number(durationString),
		alarm.message = message;
};//alarm.duration は数を代入しalarm.messageにはmessageを代入するsetupAlarm という関数を定義する　またsetupAlarmの関数はdurationString, messageの変数でのみ機能する関数である
   
var startAlarm = function(){
		setupAlarm(alarm.durationSelect.value, alarm.messageInput.value);
		//setupAlarmの関数にalarm.durationSelect.valueとalarm.messageInput.valueを代入する
		if(isReadyToCountdown()){
				updateCounter();
				window.setTimeout(update, INTERVAL);
		}//Countdownしている間はCounterをupdateし１秒待ってからupdateという関数を呼び出す
};

var initApp = function(){
		alarm.durationSelect = document.querySelector("#duration");
		//alarm.durationSelectでは#durationの箱の中のものを選び出す
		alarm.messageInput = document.querySelector("#message");
		//alarm.messageInputでは#messageの箱の中のものを選び出す
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
