function rand() {
	return ~~(Math.random() * 62)
}

function randword() {
	var code = rand()
	if (code < 10) return String.fromCharCode(code + 48)
	if (code < 36) return String.fromCharCode(code + 55)
	else return String.fromCharCode(code + 61)
}

function randpwd(len) {
	return new Array(len).fill('0').map(randword).join('')
}

var len = parseInt(location.pathname.slice(1) || 16)
document.write(randpwd(len))