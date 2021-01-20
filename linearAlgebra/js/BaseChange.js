class BaseChange {
	constructor(main) {
	    this.canvas = main.canvas;
		this.spirit = main.spirit;
	}
	draw() {
		
	}
	update() {
	}
	change() {
		let vI = JSON.parse(baseI.value);
		let vJ = JSON.parse(baseJ.value);
		this.move(this.spirit.baseI, vI);
		this.move(this.spirit.baseJ, vJ);
	}
	move(base, v) {
		let lenx = v[0]*config.mtp-base.x;
		let num1 = 0;
		let len1 = null;
		if(lenx>0) {
			len1 = 1;
		}else if(lenx<0) {
			len1 = -1
		}
		let id1 = window.setInterval(()=>{
			num1++;
			base.x += len1;
			if(num1>=Math.abs(lenx)) {
				window.clearInterval(id1);
				base.x = v[0]*config.mtp;
			}
		},50)
		
		let leny = v[1]*config.mtp-base.y;
		let num2 = 0;
		let len2 = null;
		if(leny>0) {
			len2 = 1;
		}else if(leny<0) {
			len2 = -1
		}
		let id2 = window.setInterval(()=>{
			num2++;
			base.y += len2;
			if(num2>=Math.abs(leny)) {
				window.clearInterval(id2);
				base.y = v[1]*config.mtp;
			}
		},20)
		
	}
}