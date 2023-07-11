module.exports = Number.prototype.pow = function(n) {
	/**Возвращает число в степени n*/
	return Math.pow(this, n);
}

module.exports = Number.prototype.sqrt = function () {
	/**Квадратный корень из числа.*/
	return Math.sqrt(this);
}

module.exports = Number.prototype.sqr = function () {
	/**Квадрат числа.*/
	return Math.pow(this, 2);
}

module.exports = Number.prototype.cbrt = function () {
	/**Квадрат числа.*/
	return Math.cbrt(this);
}

module.exports = Number.prototype.sign = function () {
		/**Знак (сигнум) числа.*/
		return Math.sign(this);
	}

module.exports = Number.prototype.abs = function () {
	/**Модуль числа.*/
	return Math.abs(this);
}

module.exports = Number.prototype.floor = function () {
	/**Округлить число до целых в меньшую сторону.*/
	return Math.floor(this);
}

module.exports = Number.prototype.ceil = function () {
	/**Округлить число до целых в большую сторону.*/
	return Math.ceil(this);
}

module.exports = Number.prototype.arctg = function () {
		/**Арктангенс числа.*/
		return Math.atan(this);
	}

module.exports = Number.prototype.arcsin = function () {
		/**Арксинус числа.*/
		return Math.asin(this);
	}

module.exports = Number.prototype.arccos =	function () {
		/**Арккосинус числа.*/
		return Math.acos(this);
	}

module.exports = Number.prototype.arcctg = function () {
	/**Аркотангенс числа.*/
	return Math.atan(1 / this);
}

module.exports = Number.prototype.sin = function () {
	/**Синус числа.*/
	return Math.sin(this);
}

module.exports = Number.prototype.cos = function () {
	/**Косинус числа.*/
	return Math.cos(this);
}

module.exports = Number.prototype.tan = function () {
		/**Тангенс числа.*/
		return Math.tan(this);
	}

module.exports = Number.prototype.ctg = function () {
	/**Котангенс числа.*/
	return 1 / Math.tan(this);
}

module.exports = Number.prototype.round = function () {
	/**Округление числа до целых.*/
	return Math.round(this);
}
