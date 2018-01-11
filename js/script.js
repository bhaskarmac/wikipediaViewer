$(document).ready(function () {

	var searchTerm = '';
	$('#txtSearchText').keypress(function (e) {
		if(e.which == 13) {
			searchTerm = $(this).val();
			console.log('searchTerm =>', searchTerm);
		}
	});

});
