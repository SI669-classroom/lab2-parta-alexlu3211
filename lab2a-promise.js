///// Problem 1 - Fun with Promises

function flip() {
    let p = new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) resolve();
        else reject();
    });
    return p;
}

for (let i = 0; i < 10; i++) {
	flip().then(
        () => {console.log("Heads!")}, 
        () => {console.log("Tails!")}
    )
}


///// Problem 2 - More fun...

function countBig(bignum) {
	return new Promise((resolve, reject) => {
		if (bignum < 0) reject();
    	else {
    		for (let i = 0; i <= bignum; i++) {
    			if (i == bignum) {
    				resolve();
    			}
    		}

    	}
	});
}


start = Date.now();
bignum = 1000000000;
countBig(1000000000).then(()=> {
    console.log("It took " + (Date.now() - start) + " ms to count to " + bignum);
}, () => {
    console.log("A problem occurred while trying to count to " + bignum);
})