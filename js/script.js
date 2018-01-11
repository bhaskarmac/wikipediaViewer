$(document).ready(function () {

	$('#txtSearchText').focus();

	var searchTerm = '';
	$('#txtSearchText').keypress(function (e) {
		if(e.which == 13) {
			searchTerm = $(this).val();
			console.log('searchTerm =>', searchTerm);
			if(searchTerm){
				APISearch(searchTerm);
			}
		}
	});

	function APISearch(searchTerm) {
		$.ajax({
			url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchTerm + "&prop=info&inprop=url&utf8=&format=json",
			dataType: "jsonp",
			success: function(response) {
				console.log('response=>', response);
				if (response.query.searchinfo.totalhits === 0) {
					alert("No results found!");
				} else {
					createUI(response.query.search);
				}
			},
			error: function () {
				alert("Oops! something went wrong!");
			}
		});
	}

	function createUI(results) {
		console.log('createUI=>', results);
		$('.searchResults').empty();
		for (var i = 0; i < results.length; i++) {
			$('.searchResults').append('<div>'+ results[i].title +'</div>');
		}
	}

});
