!(function() {
	/** 计时起始时间，自行修改 **/
	var start = new Date("2024/04/05 00:00:00");
  
	function update() {
	  var now = new Date();
	  now.setTime(now.getTime()+250);
	  days = (now - start) / 1000 / 60 / 60 / 24;
	  dnum = Math.floor(days);
	  hours = (now - start) / 1000 / 60 / 60 - (24 * dnum);
	  hnum = Math.floor(hours);
	  if(String(hnum).length === 1 ){
		hnum = "0" + hnum;
	  }
	  minutes = (now - start) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
	  mnum = Math.floor(minutes);
	  if(String(mnum).length === 1 ){
		mnum = "0" + mnum;
	  }
	  seconds = (now - start) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
	  snum = Math.round(seconds);
	  if(String(snum).length === 1 ){
		snum = "0" + snum;
	  }
	  document.getElementById("timeDate").innerHTML = "这里已经存在了"+dnum+"天";
	  document.getElementById("timeDate").style.color = "#FFA48D";
	  document.getElementById("times").innerHTML = hnum + "小时" + mnum + "分" + snum + "秒";
	  document.getElementById("times").style.color = "#67FFCA";
	}
  
	update();
	setInterval(update, 1000);
  })();