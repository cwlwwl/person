//输入bi和bj的值，把当前bi,bj变换到新输入的bi和bj
class BaseChange {
	constructor() {
		console.log("BaseChange创建了")
		this.beginHandle=null;
		this.initHandle();
	}
	//flag的true或false来决定加入或移除事件处理函数
	setBaseChange(flag) {
		if (flag) { //加入事件处理函数
			begin.addEventListener("click", this.beginHandle);
		} else { //移除事件处理函数
			begin.removeEventListener("click", this.beginHandle);
		}
	}
	draw() {}
	update() {}
	initHandle() {
		this.beginHandle = e=>{
			change(g.bi, bix.value*g.unit, biy.value*g.unit);
			change(g.bj, bjx.value*g.unit, bjy.value*g.unit);
		}
		let change = (base, x, y)=>{
			console.log(base, x, y);
			let endx = false;
			let endy = false;
			let id = window.setInterval((e)=>{
				if(base.x<x) {
					base.x++;
				}else if(base.x>x) {
					base.x--;
				} else {
					endx = true;
				}
				
				if(base.y<y) {
					base.y++;
				}else if(base.y>y) {
					base.y--;
				} else {
					endy = true;
				}
				if(endx&&endy) {
					window.clearInterval(id);
				}
			}, 10)
		};
	}
}
