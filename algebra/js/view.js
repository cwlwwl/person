//专门处理界面上按钮事件
const view = {
	closeDrawArrow(target) {
		let c = target.innerHTML;
		this.closeAll();
		if(c=="关闭拖动箭头") {
			g.drawArrow = false;
			g.main.arrow.setDrawArrow(false);
			target.innerHTML="打开拖动箭头"
		}else if(c=="打开拖动箭头") {
			g.drawArrow = true;
			g.main.arrow.setDrawArrow(true);
			target.innerHTML="关闭拖动箭头"
		}
	},
	closeAll(state) {
		g.drawArrow = false;
		g.drawPoint = false;
		g.baseChange = false;
	}
}