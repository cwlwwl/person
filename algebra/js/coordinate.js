const coordinate = {
	/*把自定义坐标转换成canvas坐标
	 *selfCoordinate数组，表示自定义坐标系下的坐标值
	 */
	toCanvas(selfCoordinate) {
		let a = [selfCoordinate[0]+g.x0, g.y0-selfCoordinate[1]];
		return a;
	},
	/**
	 * 把canvas坐标转换成自定义坐标
	 * canvasCoordinate数组，表示canvas坐标系下的坐标值
	 */
	toSelf(canvasCoordinate) {
		let a = [canvasCoordinate[0]-g.x0, g.y0-canvasCoordinate[1]];
		return a;
	}
}

