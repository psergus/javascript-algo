//directed graph
var graph = {
	'a' : ['b', 'c'],
	'b' : ['c', 'd'],
	'c' : ['b', 'd', 'e'],
	'd' : ['e'],
	'e' : ['d']
};
var weights = {
	'ab': 10,
	'ac': 3,
	'bc': 1,
	'cb': 4,
	'bd': 2,
	'cd': 8,
	'ce': 2,
	'de': 7,
	'ed': 9
};

var priorityQueue = function() {
	this.queue = [];
}

priorityQueue.prototype.extract = function() {
	this.queue.sort(function(a,b) {
		return a[Object.keys(a)[0]] > b[Object.keys(b)[0]];
	});
	//console.log('sorted queue:');
	//console.log(this.queue);
	return this.queue.shift();
}
priorityQueue.prototype.add = function(el) {
	var found = false;
	for(var i = 0; i < this.queue.length; i++) {
		if( Object.keys( this.queue[i] )[0] == Object.keys(el)[0] ) {
			this.queue[i] = el;
			found = true;
		}
	}
	if(!found) {
		this.queue.push(el);
	}
}
priorityQueue.prototype.length = function() {
	return this.queue.length;
}

function dejkstra(G, s, W) {
	var d = [];
	var S = [];
	var Q = new priorityQueue();
	var P = {};
	var niddle = {};
	niddle[s] = 0;
	Q.add( niddle );
	var infinity = Math.pow(2,32);
	for(var i in G) {
		if(G.hasOwnProperty(i)) {
			d[i] = infinity;
			P[i] = null;
		}
	}
	d[s] = 0;
	while(Q.length()) {
		var v = Object.keys( Q.extract() )[0];
		//console.log('Take vertical ' + v);
		S.push(v);
		for(var i = 0; i < G[v].length; i++) {
			var u = G[v][i];
			//console.log('check vertical ' + u);
			vuLength = d[v] + W[ v + u ];
			if(d[u] > vuLength) {
				//console.log('Reduce vertical ' + u + ' to ' + vuLength);
				d[u] = vuLength;
				var niddle = {};
				niddle[u] = vuLength;
				Q.add(niddle);
				P[u] = v;
			}
		}
	}

	return {
		path_weights: d,
		predicessor: P
	}
}

function dejkstra_dp() {

}

console.log(dejkstra(graph, 'a', weights));