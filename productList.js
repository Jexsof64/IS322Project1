(function () {
	
	var mockDatabase = [
		{ _id: '1', 
			name: 'Blizz Dagger', 
			price: 2800, 
			type: 'melee', 
			category: 'knife', 
			attack: 56,
			accuracy: 90,
			effect: 'Freeze (low)',
			description: 'A dagger with a pale blue blade.',
			img: 'img/BlizzDagger.jpg'
		},
		{ _id: '2',
			name: 'Kukri',
			price: 3600,
			type: 'melee',
			category: 'knife',
			attack: 68,
			accuracy: 96,
			effect: 'No Effect',
			description: 'Curved, Nealese knife also used as a tool.',
			img: 'img/Kukri.jpg'
		},
		{ _id: '3',
			name: 'Mace',
			price: 2800,
			type: 'melee',
			category: 'bludgeon',
			attack: 54,
			accuracy: 92,
			effect: 'No Effect',
			description: 'A replica modeled after a medieval club.',
			img: 'img/Mace.jpg'
		},
		{ _id: '4',
			name: 'Hell Slugger',
			price: 4000,
			type: 'melee',
			category: 'bludgeon',
			attack: 64,
			accuracy: 94,
			effect: 'No Effect',
			description: 'A baseball bat with nails hammered into it.',
			img: 'img/HellSlugger.jpg'
		},
		{ _id: '5',
			name: 'Tkachev',
			price: 1400,
			type: 'ranged',
			category: 'pistol',
			attack: 66,
			accuracy: 88,
			effect: 'No Effect',
			description: 'Model gun typically seen in mafia films.',
			img: 'img/Tkachev.jpg'
		},
		{ _id: '6',
			name: 'Governance',
			price: 3000,
			type: 'ranged',
			category: 'pistol',
			attack: 76,
			accuracy: 96,
			effect: 'No Effect',
			description: 'Model gun of a bsic high-caliber handgun.',
			img: 'img/Governance.jpg'
		},
		{ _id: '7',
			name: 'Levinson M31',
			price: 1400,
			type: 'ranged',
			category: 'shotgun',
			attack: 64,
			accuracy: 86,
			effect: 'No Effect',
			description: 'Model gun based on the short-barreled shotgun.',
			img: 'img/LevinsonM31.jpg'
		},
		{ _id: '8',
			name: 'Granelli M3',
			price: 4400,
			type: 'ranged',
			category: 'shotgun',
			attack: 88,
			accuracy: 90,
			effect: 'No Effect',
			description: 'Model gun based on an oversized shotgun.',
			img: 'img/GranelliM3.jpg'
		},
	];

	function renderList (results) {
		var listBody = document.querySelector('.list-container');

		// Clear out the inner HTML to get rid of any older results
		listBody.innerHTML = '';
		
		// Maps each database record to a string containing the HTML for it's row
		var listItems = results.map(function (result, index) {
			return '<div class="product-item"><img src="'+result.img+'">'+
			'<div class="product-data"><h3>'+result.name+'</h3><div class="price">'+result.price+'</div></div></div>';
		});

		// Set the contents of the table body to the new set of rendered HTML rows
		listItems.forEach(function (row) {

			// += adds to HTML instead of overwriting it entirely
			listBody.innerHTML += row; 
		});
	}

	renderList(mockDatabase);

	// Function to Order results list 
	function orderBy(sortValue) {
		var sortedResults;
	 
		if (sortValue === 'name') 
		{
			sortedResults = mockDatabase.sort(function (a, b) 
			{
				var nameA = a.name.toUpperCase(); 
				var nameB = b.name.toUpperCase(); 
				
				// Sorts alphabetically.  -1 puts it before. 1 puts it after
				if (nameA < nameB) {
				    return -1;
				}
				if (nameA > nameB) {
				    return 1;
				}
			});
		} 
		else 
		{
			sortedResults = mockDatabase.sort(function (a, b) 
			{ 
				return a[sortValue] - b[sortValue];
			});
		}
	
		renderList(sortedResults);
	}

	// Change events trigger after the value of a form input changes
	document.querySelector('#orderBy').addEventListener('change', function(event)
	{
		// Event is the JavaScript event that transpired, in our change a CHANGE event.
		// Target is the element it was performed on, useful for when the event targets 
		// multiple elements.
		// Value has the name implies is the current value of the input element, if there is one
		orderBy(event.target.value);
	});

	function filterPriceRange (priceDescrip) 
	{
		var priceRanges = {
			veryCheap: [1, 10000], 
			cheap: [10001, 20000], 
			medium: [20001, 30000],
			expensive: [30001, 40000],
			veryExpensive: [40001, 60000]
		};
		var range = priceRanges[priceDescrip];

		if (!range) 
			return renderList(mockDatabase);

		var filteredResults = mockDatabase.filter(function (row) {
			return row.price > range[0] && row.price < range[1];
		});
		renderList(filteredResults);
	}

	document.querySelector('#priceRange').addEventListener('change', function (event) {
		filterPriceRange(event.target.value);
	});

	function filterType (type)
	{
		if (!type)
			return renderList(mockDatabase);

		var filteredResults = mockDatabase.filter(function (row) {
			return row.type === type;
		});
		renderList(filteredResults);
	}

	document.querySelector('#type').addEventListener('change', function (event) {
		filterType(event.target.value);
	});

	function filterCategory (category) 
	{
		if (!category) 
			return renderList(mockDatabase);

		var filteredResults = mockDatabase.filter(function (row) {
			return row.category === category;
		});
		renderList(filteredResults);
	}

	document.querySelector('#category').addEventListener('change', function (event) {
		filterCategory(event.target.value);
	});



})();