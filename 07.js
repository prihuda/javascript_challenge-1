const lyrics = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`;

['aku', 'ingin', 'dapat'].forEach(function(word) {
	let count = 0;
	let find = new RegExp("\\b" + word + "\\b", "gi");
	lyrics.replace(find, function (a) {
	   count++;
	})
	console.log(word + ": " + count);
 });
