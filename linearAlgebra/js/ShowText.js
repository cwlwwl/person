class ShowText {
	constructor(main) {
	    this.canvas = main.canvas;
		this.ctx = main.ctx;
		this.spirit = main.spirit;
	}
	draw() {
		this.showI(this.spirit.baseI);
		this.showI(this.spirit.baseJ);
	}
	showI(base) {
		this.ctx.save();
		this.ctx.font = "20px sans-serif";
		this.ctx.fillStyle = "green";
		if(base.x>=0) {
			let textV1 = base.newAdd(new Vector2d(0,5));
			let po1 = coordinate.coordinateToCanvas([textV1.x, textV1.y]);
			this.ctx.fillText(base.x/config.mtp,po1[0],po1[1]);
			
			let textV2 = base.newAdd(new Vector2d(0,-16));
			let po2 = coordinate.coordinateToCanvas([textV2.x, textV2.y]);
			this.ctx.fillText(base.y/config.mtp,po2[0],po2[1]);
		}else {
			let textV1 = base.newAdd(new Vector2d(-35, 0));
			let po1 = coordinate.coordinateToCanvas([textV1.x, textV1.y]);
			this.ctx.fillText(base.x/config.mtp,po1[0],po1[1]);
			
			let textV2 = base.newAdd(new Vector2d(-35,0));
			textV2 = textV2.newAdd(new Vector2d(0, -16));
			let po2 = coordinate.coordinateToCanvas([textV2.x, textV2.y]);
			this.ctx.fillText(base.y/config.mtp,po2[0],po2[1]);
		}
		this.ctx.restore();
	}
	update() {
		
	}
}