const para = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

let censored = function(str) {
	['dolor', 'elit', 'quis', 'nisi', 
	 'fugiat', 'proident', 'laborum'].forEach(function(word) {
		let find = new RegExp("\\b" + word + "\\b", "gi");
		let repl = Array(word.length+1).join("*");
		str = str.replace(find, repl);
	 });
	 return str;
}
console.log(censored(para));