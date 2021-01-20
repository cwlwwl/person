/**
 * 在界面上任意画一个实心圆，画小一点就是点。
 * 当基坐标变换时，实心圆也跟着一起线性变化
 */
class Point {
	constructor(main) {
		this.canvas = main.canvas;
		this.ctx = main.ctx;
		this.spirit = main.spirit;
		this.setListener();
		//保存点击事件得到的相对于自定义的坐标值
		this.a = [10000, 10000];
		//求出(x,y)变换后baseI和baseJ中的坐标值
		this.x = 11110;
		this.y = 11110;
	}
	setListener() {
		this.canvas.onclick = e => {
			if (State.drawPoint == false) {
				return;
			}
			//相对于canvas的坐标值
			let mouseP = [e.offsetX, e.offsetY];
			//相对于自定义坐标值
			this.a = coordinate.coordinateToSelf(mouseP);
			let baseI = this.spirit.baseI;
			let baseJ = this.spirit.baseJ;
			
			let D = baseI.x * baseJ.y - baseJ.x * baseI.y;
			let D1 = this.a[0] * baseJ.y - baseJ.x * this.a[1];
			let D2 = baseI.x * this.a[1] - this.a[0] * baseI.y;
			if (D != 0) {
				// 在baseI:(mtp, 0)和baseJ(0,mtp)坐标系中的坐标值
				this.m = D1 / D;
				this.n = D2 / D;
			}

		}
	}
	draw() {
		util.drawArc1(this.ctx, [this.x, this.y]);
	}
	update() {
		//转换为自定义的坐标值
		// util.drawArc1(this.ctx, this.a); 
		//a是在spirit.baseI和spirit.baseJ坐标系下的坐标值，
		//求a在baseI:(mtp, 0)和baseJ(0,mtp)坐标系中的坐标值
		// console.log(this.spirit);
		//求出(x,y)变换后baseI和baseJ中的坐标值
		let baseI = this.spirit.baseI;
		let baseJ = this.spirit.baseJ;
		
		//this.a (m,n) baseI, baseJ, 
		mydiv.innerHTML = `a: (${this.a[0]},${this.a[1]})`
		mydiv1.innerHTML = `baseI:${baseI.x} ${baseI.y} baseJ:${baseJ.x} ${baseJ.y}`;
		this.x = baseI.x * this.m + baseJ.x * this.n;
		this.y = baseJ.y * this.m + baseI.y * this.n;
		mydiv2.innerHTML = `(x,y) (${this.x}, ${this.y})`;
	}
}
