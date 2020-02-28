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
			description: 'Curved, Nepalese knife also used as a tool.',
			img: 'img/Kukri.jpg'
		},
		{ _id: '3',
			name: 'Athame',
			price: 9400,
			type: 'melee',
			category: 'knife',
			attack: 82,
			accuracy: 96,
			effect: 'No Effect',
			description: 'A dagger used during Wiccan rituals.',
			img: 'img/Athame.jpg'
		},
		{ _id: '4',
			name: 'Igniter',
			price: 11600,
			type: 'melee',
			category: 'knife',
			attack: 90,
			accuracy: 92,
			effect: 'Burn (low)',
			description: 'A dagger forged in fire that burns with intensity.',
			img: 'img/Igniter.jpg'
		},
		{ _id: '5',
			name: 'Skinning Knife',
			price: 11800,
			type: 'melee',
			category: 'knife',
			attack: 102,
			accuracy: 96,
			effect: 'No Effect',
			description: 'A dagger used for skinning prey.',
			img: 'img/SkinningKnife.jpg'
		},
		{ _id: '6',
			name: 'Kopis',
			price: 15000,
			type: 'melee',
			category: 'knife',
			attack: 122,
			accuracy: 98,
			effect: 'No Effect',
			description: 'A curved blade used by Ancient Greeks.',
			img: 'img/Kopis.jpg'
		},
		{ _id: '7',
			name: 'Killing Scalpel',
			price: 16000,
			type: 'melee',
			category: 'knife',
			attack: 130,
			accuracy: 96,
			effect: 'No Effect',
			description: 'A deadly tool used by medical professionals.',
			img: 'img/KillingScalpel.jpg'
		},
		{ _id: '8',
			name: 'Quality Kopis',
			price: 21000,
			type: 'melee',
			category: 'knife',
			attack: 140,
			accuracy: 98,
			effect: 'No Effect',
			description: 'A sharper variant of one used in Ancient Greece.',
			img: 'img/QualityKopis.jpg'
		},
		{ _id: '9',
			name: 'Pro Skinning Knife',
			price: 21600,
			type: 'melee',
			category: 'knife',
			attack: 154,
			accuracy: 96,
			effect: 'No Effect',
			description: 'A sharper, higher-grade skinning knife.',
			img: 'img/ProSkinningKnife.jpg'
		},
		{ _id: '10',
			name: 'Dirk',
			price: 26400,
			type: 'melee',
			category: 'knife',
			attack: 170,
			accuracy: 98,
			effect: 'No Effect',
			description: 'A dagger tempered using advanced techniques.',
			img: 'img/Dirk.jpg'
		},
		{ _id: '11',
			name: 'Parrying Dagger',
			price: 28800,
			type: 'melee',
			category: 'knife',
			attack: 184,
			accuracy: 96,
			effect: 'Ag+2',
			description: 'A light dagger that makes evasion easier.',
			img: 'img/ParryingDagger.jpg'
		},
		{ _id: '12',
			name: 'Machete',
			price: 30400,
			type: 'melee',
			category: 'knife',
			attack: 204,
			accuracy: 98,
			effect: 'No Effect',
			description: 'A heavy knife with a lot of heft to it.',
			img: 'img/Machete.jpg'
		},
		{ _id: '13',
			name: 'Baselard',
			price: 32000,
			type: 'melee',
			category: 'knife',
			attack: 218,
			accuracy: 96,
			effect: 'No Effect',
			description: 'Replica of a dagger used in medieval Europe.',
			img: 'img/Baselard.jpg'
		},
		{ _id: '14',
			name: 'Frenzy Dagger',
			price: 35200,
			type: 'melee',
			category: 'knife',
			attack: 232,
			accuracy: 92,
			effect: 'Rage (high)',
			description: 'A replice dagger capable of enraging enemies.',
			img: 'img/FrenzyDagger.jpg'
		},
		{ _id: '15',
			name: 'Pro Parrying Dagger',
			price: 40000,
			type: 'melee',
			category: 'knife',
			attack: 252,
			accuracy: 96,
			effect: 'En+2/Ag+2',
			description: 'A dagger best used for parrying and defense.',
			img: 'img/ProParryingDagger.jpg'
		},
		{ _id: '16',
			name: 'Misericorde',
			price: 44600,
			type: 'melee',
			category: 'knife',
			attack: 280,
			accuracy: 98,
			effect: 'No Effect',
			description: 'A medieval dagger used to deliver a killing strike.',
			img: 'img/Misericorde.jpg'
		},
		{ _id: '17',
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
		{ _id: '18',
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
		{ _id: '19',
			name: 'Heavy Steel Pipe',
			price: 8400,
			type: 'melee',
			category: 'bludgeon',
			attack: 68,
			accuracy: 86,
			effect: 'Confuse (low)',
			description: 'A reinforced iron pipe.',
			img: 'img/HeavySteelPipe.jpg'
		},
		{ _id: '20',
			name: 'Battle Hammer',
			price: 11200,
			type: 'melee',
			category: 'bludgeon',
			attack: 92,
			accuracy: 94,
			effect: 'No Effect',
			description: 'Replica of a metal hammer used in battle.',
			img: 'img/BattleHammer.jpg'
		},
		{ _id: '21',
			name: 'Iron Pipe',
			price: 12200,
			type: 'melee',
			category: 'bludgeon',
			attack: 104,
			accuracy: 92,
			effect: 'No Effect',
			description: 'A crude, but effective, blunt instrument.',
			img: 'img/IronPipe.jpg'
		},
		{ _id: '22',
			name: 'Heavy Mace',
			price: 15400,
			type: 'melee',
			category: 'bludgeon',
			attack: 124,
			accuracy: 94,
			effect: 'No Effect',
			description: 'Replica with even more heft to it.',
			img: 'img/HeavyMace.jpg'
		},
		{ _id: '23',
			name: 'Spiked Rod',
			price: 16400,
			type: 'melee',
			category: 'bludgeon',
			attack: 132,
			accuracy: 92,
			effect: 'No Effect',
			description: 'Blunt instrument affixed with caltrops.',
			img: 'img/SpikeRod.jpg'
		},
		{ _id: '24',
			name: 'Bush Hammer',
			price: 21400,
			type: 'melee',
			category: 'bludgeon',
			attack: 142,
			accuracy: 94,
			effect: 'No Effect',
			description: 'Replica of a hammer with a notable history.',
			img: 'img/BushHammer.jpg'
		},
		{ _id: '25',
			name: 'Demon Pipe',
			price: 22000,
			type: 'melee',
			category: 'bludgeon',
			attack: 156,
			accuracy: 92,
			effect: 'No Effect',
			description: 'A pipe tainted by demonic energy.',
			img: 'img/DemonPipe.jpg'
		},
		{ _id: '26',
			name: 'Boss Bush Hammer',
			price: 27000,
			type: 'melee',
			category: 'bludgeon',
			attack: 172,
			accuracy: 94,
			effect: 'No Effect',
			description: 'Replica of a hammer with an admirable past.',
			img: 'img/BossBushHammer.jpg'
		},
		{ _id: '27',
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
		{ _id: '28',
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
		{ _id: '29',
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
		{ _id: '30',
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
			return '<a href="productPage.html">'+'<div class="product-item"><img src="'+result.img+'">'+
			'<div class="product-data"><h3>'+result.name+'</h3><div class="price">'+result.price+'</div></div></a></div>';
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