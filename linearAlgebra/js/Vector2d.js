class Vector2d {
	constructor(x=0,y=0) {
	    this.x = x;
		this.y = y;
	}
	setX(x) {
		this.x = x;
	}
	getX() {
		return this.x;
	}
	setY(y) {
		this.y = y;
	}
	getY() {
		return this.y;
	}
	selfAdd(v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	}
	newAdd(v) {
		let newv = new Vector2d(this.x+v.x, this.y+v.y);
		return newv;
	}
	selfSub(v) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}
	newSub(v) {
		let newv = new Vector2d(this.x-v.x, this.y-v.y);
		return newv;
	}
	// 数乘
	selfNumberMultiplicate(number) {
		this.x *= number;
		this.y *= number;
		return this;
	}
	//数每次，得到新的向量
	newNumberMultiplicate(number) {
		let v = new Vector2d(this.x*number,this.y*number);
		return v;
	}
}


















