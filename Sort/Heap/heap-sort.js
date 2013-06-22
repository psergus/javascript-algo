

var a = [];


var Heap = function(u) {
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
	//console.log('element index ' + i + ' has value : ' + u[i] + ' has a parent: ' + u[parent] + ' (' + parent + ') and left child: ' + u[left] + ' and right child: ' + u[right]);
	if(u[parent] < u[i]) {
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

for(var i = 0; i < 10; i++) { a.push( Math.floor( Math.random()*100) ); }

console.log(a);
var h = new Heap(a);
console.log('do heap');
var heaped = h.make_heap();
console.log('heaped: ' + heaped);
h.add(45).add(45);
console.log('heaped: ' + heaped);
var sorted = [];
console.log('sorting');
for(var i = 0, n = a.length; i < n; i++) {
	var top = h.extract_top(heaped);
	//console.log(a.length + ' extract top: ' + top);
	//console.log(h.getHeap());
	sorted.push(top);
}
console.log(sorted);
