(function(){

$(document).ready(function() {
	$('#firstRichCombo').richcombo();
	var second = $('#secondRichCombo').richcombo({appendTo: $('.second')});
	second.richcombo('refresh');
});

})();
