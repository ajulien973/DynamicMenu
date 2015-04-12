function Node(id, name, children) {
	this.id = id;
	this.name = name;
	this.children = children;
}

function MenuMaker(options) {
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
	this.view = options.view;
}

MenuMaker.prototype = {
	init : function() {
		var nodes = this.source.nodes;
		for(var i = 0; i < nodes.length; i++) {
			var node = new Node(nodes[i].id, nodes[i].name, nodes[i].children);
			this.view.addNode(node, this.view.getEl());
		}
	}
}

MenuMaker.View = function(options) {
	this.options = options;
}

MenuMaker.View.prototype = {
	getEl : function() {
		return document.getElementById(this.options.el);
	},
	addNode : function(node, el) {
		var li = document.createElement("LI");
		var new_link = document.createElement('a');
		new_link.setAttribute('href', '#');
		var text = document.createTextNode(node.name);
		new_link.appendChild(text);
		li.appendChild(new_link); 
		if(node.children.length > 0) {
			var ul = document.createElement("UL");
			for(var i = 0; i < node.children.length; i++) {
				this.addNode(node.children[i], ul);
			}
			li.appendChild(ul);
		}
		el.appendChild(li);
	}
}

window.onload = function(){
	this.id = "menu";
	this.menu = new MenuMaker({
		view : new MenuMaker.View({
			el : "menu"
		})
	});
	this.menu.init();
}