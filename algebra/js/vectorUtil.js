const vectorUtil = {
	add(v1, v2) {
		let v = new Vector(v1.x+v2.x, v1.y+v2.y);
		return v;
	},
	sub(v1,v2) {
		let v = new Vector(v1.x-v2.x, v1.y-v2.y);
		return v;
	},
	numMultip(v, num) {
		let newV = new Vector(v.x*num, v.y*num);
		return newV;
	},
	/**2*2方阵 左乘 2*1矩阵, 即方阵左乘向量, 返回一个新的向量
	*matrixMultiplyVector方阵乘以向量,简称mmv
	*参数v1,v2,v3都是向量Vector对象,把v1和v2两向量合二为一成方阵.
	* 返回新的向量
	*/
	mmv(v1,v2,v3) {
		let a = v1.x*v3.x+v2.x*v3.y;
		let b = v1.y*v3.x+v2.y*v3.y;
		return new Vector(a,b);
	},
	/**
	 * 2*2方阵左乘未知2*1矩阵等于一个2*1矩阵，求未知矩阵
	 * 即一个已经2阶方阵左乘未知向量等于一个已知向量，求未知向量
	 * matrixDivideVector方阵除以向量,简称mdv
	 * 参数v1,v2,v3都是向量Vector对象，把v1和v2两向量全二为一成方阵。
	 * 参数要求方陈(2阶矩阵的行列式值不能为0),
	 * 算法采用了行列式方程的求解方式
	 * 返回null或所求向量
	 */
	mdv(v1, v2, v3) {
		//判断方阵的行列式值是否为0
		let D = v1.x*v2.y-v2.x*v1.y;
		if(D==0) {
			return null;
		}
		let D1 = v3.x*v2.y-v2.x*v3.y;
		let D2 = v1.x*v3.y-v3.x*v1.y;
		let m = D1/D;
		let n = D2/D;
		return new Vector(m,n);
	}
}
 