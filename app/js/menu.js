function MenuMaker() {
	this.source = {
		"lastModified" : 1428767401000,
		"name" : "simple menu",
		"nodes" : [{
				"id" : 0,
				"name" : "Game",
				"children" : []
			},{
				"id" : 1,
				"name" : "Community",
				"children" : []
			},{
				"id" : 2,
				"name" : "Media",
				"children" : []
			},{
				"id" : 3,
				"name" : "Forums",
				"children" : [{
						"id" : 0,
						"name" : "GamePlay",
						"children" : []
					},{
						"id" : 1,
						"name" : "Classes",
								"children" : [{
								"id" : 0,
								"name" : "Barbarian",
								"children" : []
							},{
								"id" : 1,
								"name" : "Demon Hunter",
								"children" : []
							},{
								"id" : 2,
								"name" : "Monk",
								"children" : []
							},{
								"id" : 3,
								"name" : "Witch Doctor",
								"children" : []
							},{
								"id" : 4,
								"name" : "Wizard",
								"children" : []
							}]
					},{
						"id" : 2,
						"name" : "Beta",
						"children" : []
					},{
						"id" : 3,
						"name" : "Support",
						"children" : []
					}]
			},{
				"id" : 4,
				"name" : "Services",
				"children" : []
			}]
	};
}

window.onload = function(){
	this.id = "menu";
	this.menu = new MenuMaker();
	console.dir(this.menu.source);
	alert(id);
}