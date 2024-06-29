let laptop2 = {
    cpu: 'i9',
    ram: '16',
    brand: 'HP',
    newfun: function() { // Changed getconfig to getConfig for consistency
        console.log(laptop2.cpu); // Use this keyword to reference the object's property
    }
}

let laptop1 = {
    cpu: 'i7',
    ram: '16',
    brand: 'HP',
    hello: function() {
        console.log(laptop1.cpu);
    }
}

// Testing the methods
laptop1.hello(); // Should print 'i7'
laptop2.newfun(); // Should print 'i9'

 
