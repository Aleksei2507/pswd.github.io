function gen_fun(l,cls){
	var chars = 'abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ0123456789­';
	var i;
	var rnd;
	for (var i = 1; i <= l; i++) {
	  rnd = Math.floor((Math.random() * chars.length));
	  $(cls).append(chars[rnd]);
	}
}

$(document).ready(function(){
	var leng = 8;
	$('.start').on('click', function(){
		$('.gen').text('');
		gen_fun(leng,'.gen');
		var t = $('.gen').text().replace(/(\&shy;|­|&#173;)/gi, "");
		$('.gen').text(t);
		if ($('.gen').text().length < leng){
			// console.log($('.gen').text());
			$('.gen').text('');
			gen_fun(leng,'.gen');
		}
	})
})