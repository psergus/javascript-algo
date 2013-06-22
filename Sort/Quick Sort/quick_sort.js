var a = [5,7,2,9,3,5,1,8, 89, 73, 12, 43, 324];

function quick_sort(u) {

	if(u.length <= 1) {
		return u
	}

	var pivot_indx = Math.floor(u.length/2), pivot = u[pivot_indx];
	u.splice(pivot_indx, 1);

	var less = [], greater = [];
	for(var i = 0; i < u.length; i++) {
		if(pivot >= u[i]) {
			less.push(u[i]);
		}
		else {
			greater.push(u[i]);
		}
	}

	return [].concat(quick_sort(less), [pivot], quick_sort(greater) );
}

console.log(a);
var sorted = quick_sort(a);
console.log(sorted);