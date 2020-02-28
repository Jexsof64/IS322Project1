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
			description: 'A dagger used during Wiccan rituals',
			img: 'img/Kukri.jpg'
		},

		/**
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
		*/
	];

	function getRandomInt(min, max)
	{
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max-min)) + min;
	}
	var randomInt = getRandomInt(1, 8);
	var product = mockDatabase[randomInt];

	document.querySelector('#productPageTitle').innerHTML = 'Untouchable | ' + product.name;
	document.querySelector('#pageTitle').innerHTML = product.name;
	document.querySelector('#productImg').src = product.img;
	document.querySelector('#price').innerHTML = product.price + ' Yen';
	document.querySelector('#productType').innerHTML = 'Product Type: ' + product.type.toUpperCase();
	document.querySelector('#productCategory').innerHTML = 'Product Category: ' + product.category.toUpperCase();
	document.querySelector('#attack').innerHTML = 'Attack: ' + product.attack;
	document.querySelector('#accuracy').innerHTML = 'Accuracy: ' + product.accuracy;
	document.querySelector('#effect').innerHTML = 'Effect: ' + product.effect;
	document.querySelector('.product-description').innerHTML = product.description;

})();