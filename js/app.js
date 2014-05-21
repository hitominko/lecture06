var INTERVAL = 1000;
//INTERVALという変数には1000を入れる
var DEFAULT_MESSAGE = "終了";
//DEFAULT_MESSAGEの変数には終了という文字を代入する

var alarm = {
		duration: -1,
		message: ""
};//alarmの箱にはdurationとmessageの箱が入っている

var formatCounterAsStringFirst = function(){
		return "あと" + alarm.durationFirst + "秒";
};//あととalarmの中のdurationと秒を足してその値を外に出すformatCounterAsStringという関数を定義する

var formatCounterAsStringPres = function(){
		return "あと" + alarm.durationPres + "秒";
};

var formatCounterAsStringQues = function(){
		return "あと" + alarm.durationQues + "秒";
};

var updateCounterFirst = function(){
		alarm.output.textContent = formatCounterAsStringFirst();
};//alarm.output.textContentに関数formatCounterAsStringで行った値を代入するupdateCounterという関数を定義する

var updateCounterPres = function(){
		alarm.output.textContent = formatCounterAsStringPres();
};

var updateCounterQues = function(){
		alarm.output.textContent = formatCounterAsStringQues();
};

var showAlarmMessageFirst = function(){
		var message = "予鈴";
		if(Notification.permission == "granted"){
				var notification = new Notification(message);
		}//もし通知機能があれば通知をする
		alarm.output.textContent = message;
};//alarm.output.textContentにはmessageを代入する

var showAlarmMessagePres = function(){
		var message = "発表終了";
		if(Notification.permission == "granted"){
				var notification = new Notification(message);
		}//もし通知機能があれば通知をする
		alarm.output.textContent = message;
};//alarm.output.textContentにはmessageを代入する

var showAlarmMessageQues = function(){
		var message = "質疑応答終了";
		if(Notification.permission == "granted"){
				var notification = new Notification(message);
		}//もし通知機能があれば通知をする
		alarm.output.textContent = message;
};//alarm.output.textContentにはmessageを代入する

var update = function(){
		alarm.durationFirst = alarm.durationFirst - 1;
		//秒を１秒ずつ引いていく
		if(isReadyToCountdown()){
				updateCounterFirst();
				window.setTimeout(update, INTERVAL);
				//Countdownをしている間はCounterをupdateしINTERVAL（１秒）待ってからupdateという関数を呼び出す
		}else{
				showAlarmMessageFirst();
				window.setTimeout(startAlarmPres, 0);
		}//それ以外の場合はshowAlarmMessageの関数を呼び出す
};

var updatePres = function(){
		alarm.durationPres = alarm.durationPres - 1;
		//秒を１秒ずつ引いていく
		if(isReadyToCountdownPres()){
				updateCounterPres();
				window.setTimeout(updatePres, INTERVAL);
		}else{
				showAlarmMessagePres();
				window.setTimeout(startAlarmQues, 0);
		}
};

var updateQues = function(){
		alarm.durationQues = alarm.durationQues - 1;
		//秒を１秒ずつ引いていく
		if(isReadyToCountdownQues()){
				updateCounterQues();
				window.setTimeout(updateQues, INTERVAL);
		}else{
				showAlarmMessageQues();
		}
};

var isReadyToCountdown = function(){
		return Number.isInteger(alarm.durationFirst) && alarm.durationFirst > 0;
};//alarm.durationが数字であるかつalarm.durationが０以上であるときに外に送り出すisReadyToCountdownという関数を定義する

var isReadyToCountdownPres = function(){
		return Number.isInteger(alarm.durationPres) && alarm.durationPres > 0;
};

var isReadyToCountdownQues = function(){
		return Number.isInteger(alarm.durationQues) && alarm.durationQues > 0;
};

var setupAlarm = function(durationString, message){
		alarm.durationFirst = Number(durationString),
		alarm.message = message;
};//alarm.duration は数を代入しalarm.messageにはmessageを代入するsetupAlarm という関数を定義する　またsetupAlarmの関数はdurationString, messageの変数でのみ機能する関数である

var setupAlarmPres = function(durationString, message){
		alarm.durationPres = Number(durationString),
		alarm.message = message;
};//alarm.duration は数を代入しalarm.messageにはmessageを代入するsetupAlarm という関数を定義する　またsetupAlarmの関数はdurationString, messageの変数でのみ機能する関数である

var setupAlarmQues = function(durationString, message){
		alarm.durationQues = Number(durationString),
		alarm.message = message;
};//alarm.duration は数を代入しalarm.messageにはmessageを代入するsetupAlarm という関数を定義する　またsetupAlarmの関数はdurationString, messageの変数でのみ機能する関数である

var startAlarm = function(){
		setupAlarm(alarm.durationSelectFirst.value, alarm.messageInput);
		//setupAlarmの関数にalarm.durationSelect.valueとalarm.messageInput.valueを代入する
		if(isReadyToCountdown()){
				updateCounterFirst();
				window.setTimeout(update, INTERVAL);
		}//Countdownしている間はCounterをupdateし１秒待ってからupdateという関数を呼び出す
};

var startAlarmPres = function(){
		setupAlarmPres(alarm.durationSelectPres.value, alarm.messageInput);
		if(isReadyToCountdownPres()){
				updateCounterPres();
				window.setTimeout(updatePres, INTERVAL);
		}
};

var startAlarmQues = function(){
		setupAlarmQues(alarm.durationSelectQues.value, alarm.messageInput);
		if(isReadyToCountdownQues()){
				updateCounterQues();
				window.setTimeout(updateQues, INTERVAL);
		}//Countdownしている間はCounterをupdateし１秒待ってからupdateという関数を呼び出す
};

var initApp = function(){
		alarm.durationSelectFirst = document.querySelector("#durationFirst");
		//alarm.durationSelectでは#durationの箱の中のものを選び出す
		alarm.durationSelectPres = document.querySelector("#durationPres")
		alarm.durationSelectQues = document.querySelector("#durationQues")
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
