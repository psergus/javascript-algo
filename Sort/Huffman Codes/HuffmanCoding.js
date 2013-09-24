var fs = require('fs');
var Transform = require('stream').Transform;

var filename = './data1.txt';

/*
*	Tree Data Structure
*/

var TreeNode = function(parent, el, fr) {
	this.el = el;
	this.fr = fr;
	this.parent = parent;

	this.child_left = null;
	this.child_right = null;

	if(this.parent) {
		this.parent.addChild( this );
	}
}
TreeNode.prototype.setParent = function(parent) {
	this.parent = parent;
	return this;
}
TreeNode.prototype.getParent = function() {
	return this.parent;
}
TreeNode.prototype.addChild = function(el) {
	if(!this.child_left) {
		this.child_left = el;
	}
	else {
		this.child_right = el;
	}
	return this;
}
TreeNode.prototype.getLeftChild = function() {
	return this.child_left;
}

TreeNode.prototype.getRighChild = function() {
	return this.child_right;
}


/*
*	Heap Data Structure
*/

var Heap = function(u, compare) {
	this.compare = compare;
	this.heap = u.slice(0);
}

Heap.prototype.getHeap = function() { return this.heap; }

Heap.prototype.make_heap = function() {
	for(var i = this.heap.length - 1; i >= 0; i--){
		this.heap = this.bubble_up(this.heap, i);
	}
	return this.heap;
}

Heap.prototype.bubble_up = function(u, i) {
	var parent = (i === 0)? -1 : Math.floor((i - 1)/2);
	var left = 2*i + 1, right = 2*i + 2;
	if(parent == -1) {
		return u; //we are at the top
	}
	if(this.compare(u[parent], u[i])) {
		var tmp = u[parent];
		u[parent] = u[i];
		u[i] = tmp;
		u = this.bubble_up(u, i);
	}
	return u;
}

Heap.prototype.extract_top = function() {
	var el = this.heap.shift();
	this.make_heap();
	return el;
}

Heap.prototype.add = function(el) {
	this.heap.push(el);
	this.heap = this.make_heap();
	return this;
}



var Huffman = function Huffman(options) {
	if( !(this instanceof Huffman) ) {
		return new Huffman(options);
	}

	options = options || {};

	Transform.call(this, options);

	this.heap = new Heap([], function(a,b) {
		return a.fr > b.fr;
	});

	this.data = '';
	this.friequencies = {};
	this.Alphabet = [];

	this.on('error', function(err){
		console.log(err);
	});
};


Huffman.prototype = Object.create( Transform.prototype, { constuctor: { value: Huffman}});

Huffman.prototype.end = function() {
	var self = this;

	//console.log( 'end of data');
	//console.log( this.friequencies );
	//console.log( this.Alphabet );

	for(var i in this.friequencies) {
		//this.heap.add( { key: i, fr: ( (this.friequencies[i] / this.data.length) * 100 ).toFixed(4) } );
		this.heap.add( new TreeNode(null, i, (this.friequencies[i] / this.data.length) * 100  ) );
	}
	//this.heapify();

	var run = true;
	while(run) {
		var left_el = this.heap.extract_top(), 
			right_el = this.heap.extract_top();

		if( ! right_el) {
			this.heap.add( left_el );
			run = false;
		}
		else {
			//console.log( 'left: ' + left_el.el );
			//console.log( 'right: ' + right_el.el );
			var sub_tree = new TreeNode(null, left_el.el + right_el.el, left_el.fr + right_el.fr );
			//left_el.setParent(sub_tree);
			//right_el.setParent(sub_tree);
			sub_tree.addChild(right_el).addChild(left_el);
			//this.heap.add( { key: left_el.key + right_el.key, fr: left_el.fr + right_el.fr } );
			this.heap.add( sub_tree );
		}
	}

	//console.info( JSON.stringify(this.heap) );
	var encoding = {};
	var traverseTree = function(tree, code) {
		var el = null;
		if( el = tree.getRighChild()) {
			//console.log('Going right to element: ' + el.el + ' with friequency: ' + el.fr  + ' and code: ' + code);
			if(el.el.length == 1) {
				encoding[el.el] = code + '1';
			}
			traverseTree(el, code + '1');
		}
		
		if(el = tree.getLeftChild()) {
			//console.log('Going left to element: ' + el.el + ' with friequency: ' + el.fr + ' and code: ' + code );
			if(el.el.length == 1) {
				encoding[el.el] = code + '0';
			}
			traverseTree(el, code + '0');
		}
		//console.log('reached the bottom');
		return;
	}
	traverseTree(this.heap.extract_top(), '');

	console.log(encoding);


	var symbols = this.data.toString().split('');

	var encoded_text = '';
	//go through each symbol
	for(var i = 0; i < symbols.length; i++) {
		encoded_text += encoding[ symbols[i] ];
	}

	console.log(encoded_text);

	self.push( this.friequencies.toString() );
	self.push(null);
}

Huffman.prototype._transform = function(chunk, encoding, done) {
	//console.log('Chunk: ' + chunk);

	//concat the data
	this.data += chunk.toString();

	var symbols = chunk.toString().split('');

	//go through each symbol
	for(var i = 0; i < symbols.length; i++) {
			if(this.friequencies[ symbols[i] ] === undefined) {
				this.friequencies[ symbols[i] ] = 0;
			}
			this.friequencies[ symbols[i] ] += 1;
			if( this.Alphabet.indexOf( symbols[i] ) === -1 ) {
				this.Alphabet.push( symbols[ i] );
			}
	}
};

fs.createReadStream(filename, { bufferSize: 4*1024, encoding: 'utf8' }).pipe( new Huffman( {encoding: 'utf8'} ) ).pipe(process.stdout);
