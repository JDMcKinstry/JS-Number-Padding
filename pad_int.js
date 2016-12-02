;(function() {
	function notNum(a) {
		try {
			var b = a.constructor && a.constructor.name ? a.constructor.name : Object.prototype.toString.call(a).slice(8, -1);
			return b != 'Number';
		}
		catch(e) { return false; }
	}
	function pad_int() {
		var x = this, y;
		if (notNum(x)) {
			var err = "`this` is " + (typeof x) + ". Must be a Number";
			try {
				if (parseFloat(x) == x) x = parseFloat(x);
				else throw err.replace(/(?!^`)this(?=`)/, x.toString());
			}
			catch(e) { throw err; }
		}
		if (void 0 == arguments[0]) y = 2;
		else {
			y = arguments[0];
			if (notNum(y)) {
				var err = "`this` is " + (typeof y) + ". Must be a Number";
				try {
					if (parseFloat(y) == y) y = parseFloat(y);
					else throw err.replace(/(?!^`)this(?=`)/, y.toString());
				}
				catch(e) { throw err; }
			}
			if (y > 0) y++;
			else if (y < 0) y--;
		}
		var a = 0 <= x,	//	if num is pos|neg
			c = Math.abs(x),	//	pos of x
			d = 0 < y,	//	if size is pos|neg
			b = parseInt(Math.abs(y)) - (~~c + "").length + 1,	//	Array length
			b = Array(b).join("0"),	//	the padding of 0's
			a = a ? "" : "-",
			f = a + b + c,	//	pad 0's to the left
			g = parseFloat(a + c + b),	//	pad 0's to the right
			h = g == (a + c + b) ? g : (a + c + b);	//	for right padding, see if it's capable of being a Float (NUMBER)
		
		return d ? f : h;
	};
	window.padInt = function padInt(num, size) { return pad_int.call(num, size); }
	Object['defineProperty'] && !Number.prototype.hasOwnProperty('pad')
		? Object.defineProperty(Number.prototype, 'pad', { value: pad_int }) : Number.prototype['pad'] = pad_int;
})();
