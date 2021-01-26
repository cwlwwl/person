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
			case "line": 
				g.drawLine = true;
				break;
			case "baseChange":
				g.baseChange = true;
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
		g.drawLine = false;
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
		
		if(g.drawLine) {
			line.innerHTML = "关画线";
			line.style.background = "green";
		}else {
			line.innerHTML = "开画线"
		}
		g.main.line.setDrawLine(g.drawLine);
		
		if(g.baseChange) {
			baseChange.innerHTML = "关基变换";
			baseChange.style.background = "green";
			begin.style.background = "green";
		}else {
			baseChange.innerHTML = "开基变换"
		}
		g.main.baseChange.setBaseChange(g.baseChange);
	} 
}
