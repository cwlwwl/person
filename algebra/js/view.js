//专门处理界面上按钮事件
const view = {
	onoff(flag) {
		this.closeAllState();
		switch(flag) {
			case "arrow": 
				g.drawArrow = true;
				break;
			case "point":
				g.drawPoint = true;
				break;
			case "all": 
				break;
		}
		this.show();
	},
	closeAllState() {
		g.drawArrow = false;
		g.drawPoint = false;
		g.baseChange = false;
		let a = document.querySelectorAll(".onoff>button");
		for(let i=0; i<a.length; i++) {
			a[i].style.background="red";
		}
	},
	show() {
		if(g.drawArrow) {
			 arrow.innerHTML = "关箭头"
			 arrow.style.background = "green";
		}else {
			arrow.innerHTML = "开箭头"
		}
		g.main.arrow.setDrawArrow(g.drawArrow)
		
		if(g.drawPoint) {
			point.innerHTML = "关画点"
			point.style.background = "green";
		}else {
			point.innerHTML = "开画点"
		}
		g.main.point.setDrawPoint(g.drawPoint);
	} 
}
