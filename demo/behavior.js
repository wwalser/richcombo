(function(){

$(document).ready(function() {
	$('#firstRichCombo').richcombo();

	var second = $('#secondRichCombo').richcombo({containerClass: 'secondComboContainer'});
	second.richcombo('refresh');

	var third = $('#thirdRichCombo').richcombo({containerClass: 'thirdComboContainer'});
	third.richcombo('refresh');
});

})();
