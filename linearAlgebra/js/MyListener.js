class MyListener {
	constructor(main) {
		this.main = main;
		this.spirit = main.spirit;
		this.canvas = main.canvas;
		this.ctx = main.ctx;
		this.init();
		this.isDownBaseI = false;
		this.isDownBaseJ = false;
	}
	//拖动箭头
	drawArrow() {
		
	}
	init() {
		this.canvas.onmousedown = (e) => {
			if(State.drawArrow==false) {
				return;
			}
			let mouseP = [e.offsetX, e.offsetY];
			mouseP = coordinate.coordinateToSelf(mouseP);
			let baseIP = [this.spirit.baseI.x, this.spirit.baseI.y];
			let baseJP = [this.spirit.baseJ.x, this.spirit.baseJ.y];
			
			let len1 = util.getLen1(baseIP, mouseP);
			let len2 = util.getLen1(baseJP, mouseP);
			if(len1<10 && len2<10) {
				if(len1<=len2) {
					this.isDownBaseI = true;
				}else {
					this.isDownBaseJ = true;
				}
			}else if(len1<10) {
				this.isDownBaseI = true;
			}else if(len2<10) {
				this.isDownBaseJ = true;
			}
		}
		this.canvas.onmousemove = (e)=>{
			if(State.drawArrow==false) {
				return;
			}
			let mouseP = [e.offsetX, e.offsetY];
			mouseP = coordinate.coordinateToSelf(mouseP);
			if(this.isDownBaseI) {
				this.spirit.baseI.x = mouseP[0];
				this.spirit.baseI.y = mouseP[1];
			}
			if(this.isDownBaseJ) {
				this.spirit.baseJ.x = mouseP[0];
				this.spirit.baseJ.y = mouseP[1];
			}
		}
		this.canvas.onmouseup = (e)=>{
			if(State.drawArrow==false) {
				return;
			}
			//当BaseI箭头在格子交叉点的附近时，定位到交叉点
			if(this.isDownBaseI) {
				//整数
				let x = Math.floor(this.spirit.baseI.x/config.mtp);
				let y = Math.floor(this.spirit.baseI.y/config.mtp);
				// console.log(x,y);
				//箭头所在的格式的四个角的坐标
				let p1 = [x*config.mtp, y*config.mtp];
				let p2 = [(x+1)*config.mtp, (y+1)*config.mtp];
				let p3 = [(x+1)*config.mtp, y*config.mtp];
				let p4 = [x*config.mtp, (y+1)*config.mtp];
				// console.log(p1,p2,p3,p4);
				//求出箭头在四个角的距离
				let a = [this.spirit.baseI.x, this.spirit.baseI.y];
				let len1 = util.getLen1(a,p1);
				let len2 = util.getLen1(a,p2);
				let len3 = util.getLen1(a, p3);
				let len4 = util.getLen1(a, p4);
				// console.log(len1,len2,len3,len4);
				//求出最小距离
				let minLen = Math.min(len1, Math.min(len2, Math.min(len3,len4)));
				if(minLen>config.mtp/4) {
					this.isDownBaseI = false;
					this.isDownBaseJ = false;
					return;
				}
				if(minLen==len1) {
					this.spirit.baseI.x = x*config.mtp;
					this.spirit.baseI.y = y*config.mtp;
				}else if(minLen==len2) {
					this.spirit.baseI.x = (x+1)*config.mtp;
					this.spirit.baseI.y = (y+1)*config.mtp;
				}else if(minLen==len3) {
					this.spirit.baseI.x = (x+1)*config.mtp;
					this.spirit.baseI.y = y*config.mtp;
				}else if(minLen==len4) {
					this.spirit.baseI.x = x*config.mtp;
					this.spirit.baseI.y = (y+1)*config.mtp;
				}
			}
			//当BaseJ箭头在格子交叉点的附近时，定位到交叉点
			if(this.isDownBaseJ) {
				//整数
				let x = Math.floor(this.spirit.baseJ.x/config.mtp);
				let y = Math.floor(this.spirit.baseJ.y/config.mtp);
				// console.log(x,y);
				//箭头所在的格式的四个角的坐标
				let p1 = [x*config.mtp, y*config.mtp];
				let p2 = [(x+1)*config.mtp, (y+1)*config.mtp];
				let p3 = [(x+1)*config.mtp, y*config.mtp];
				let p4 = [x*config.mtp, (y+1)*config.mtp];
				// console.log(p1,p2,p3,p4);
				//求出箭头在四个角的距离
				let a = [this.spirit.baseJ.x, this.spirit.baseJ.y];
				let len1 = util.getLen1(a,p1);
				let len2 = util.getLen1(a,p2);
				let len3 = util.getLen1(a, p3);
				let len4 = util.getLen1(a, p4);
				// console.log(len1,len2,len3,len4);
				//求出最小距离
				let minLen = Math.min(len1, Math.min(len2, Math.min(len3,len4)));
				if(minLen>config.mtp/4) {
					this.isDownBaseI = false;
					this.isDownBaseJ = false;   
					return;
				}
				if(minLen==len1) {
					this.spirit.baseJ.x = x*config.mtp;
					this.spirit.baseJ.y = y*config.mtp;
				}else if(minLen==len2) {
					this.spirit.baseJ.x = (x+1)*config.mtp;
					this.spirit.baseJ.y = (y+1)*config.mtp;
				}else if(minLen==len3) {
					this.spirit.baseJ.x = (x+1)*config.mtp;
					this.spirit.baseJ.y = y*config.mtp;
				}else if(minLen==len4) {
					this.spirit.baseJ.x = x*config.mtp;
					this.spirit.baseJ.y = (y+1)*config.mtp;
				}
			}
			this.isDownBaseI = false;
			this.isDownBaseJ = false;
		}
	}
}
