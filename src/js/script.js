var links = document.querySelectorAll('h2');
	links.forEach(function(link) {

		link.addEventListener('click', function(e) {
			var data = e.target.getAttribute('id');
		    e.preventDefault();

				history.replaceState(null, null, data);

				//byt ut mot data-page ...någonting!
				if(data === 'page-one') {
					$('.page').hide();
					$('#onePage').show();
				} else if (data === 'page-two') {
					$('.page').hide();
					$('#secondPage').show();
				} else if (data === 'page-three') {
					$('.page').hide();
					$('#thirdPage').show();
				} else if (data === 'home') {
          $('.page').hide();
        }
				
		 	e.stopPropagation();
		}, false);

	});