var StringOps = (function() {

    function permutations(str) {
        var pers = '',
            permute = function permute(prefix, str) {
                var n = str.length;

                if (n == 0) {
                    pers += prefix + ' ';
                } else {
                    for (var i = 0; i < n; i++) {
                        permute(prefix + str[i], str.substring(0, i) + str.substring(i + 1, n));
                    }
                }
            }
        permute('', str);
        return pers;
    }

    function swap(str, a, b) {
        var t = str[a];
        str = replaceAt(str, a, str[b]);
        str = replaceAt(str, b, t);
        return str;
    }

    function replaceAt(s, index, character) {
        return s.substr(0, index) + character + s.substr(index + character.length);
    }
	
	return {
		permutations: permutations,
		swap: swap,
		replaceAt: replaceAt
	}
})();