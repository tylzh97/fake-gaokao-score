const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
	info: {
		name: "请输入姓名", 
		id: "4012199709065062",
		zkz: "00076182",
		bmh: "202192816293",
	},
	score: {
		yw: 87,
		sx: 143,
		yy: 145,
		zh: 291,
	}
  },
  mounted() {
  	const url = window.location.href;
	const b64para = url.match(/b64=(.+)/g);
	if (b64para) {
		const b64 = b64para[0].replace('b64=', '');
		const b64str = Base64.decode(b64);
		const data = JSON.parse(b64str);
		this.info.name = data.name;
		this.score = data.score;
	} else {
		console.log("无数据源");
	}
  },
});
