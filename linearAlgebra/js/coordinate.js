const coordinate = {
	//自定义坐标(0,0)在canvas坐标中的坐标值
	x0:0,
	y0:0,
	/*把自定义坐标转换成canvas坐标
	 *selfCoordinate数组，表示自定义坐标系下的坐标值
	 */
	coordinateToCanvas(selfCoordinate) {
		let a = [selfCoordinate[0]+this.x0, this.y0-selfCoordinate[1]];
		return a;
	},
	/**
	 * 把canvas坐标转换成自定义坐标
	 * canvasCoordinate数组，表示canvas坐标系下的坐标值
	 */
	coordinateToSelf(canvasCoordinate) {
		let a = [canvasCoordinate[0]-this.x0, this.y0-canvasCoordinate[1]];
		return a;
	}
}

