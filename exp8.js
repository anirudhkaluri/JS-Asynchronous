
/*

const getTodos= async() =>{ //by putting the word async infront of the function, getTodos becomes an asynchronous function
//regardless of what we write inside getTodos(), it will return a promise.


}

const exp=getTodos();
console.log(exp); // it will show a promise in the console.

*/


const getTodos=async() =>{  //the entire block is asynchronous so its being executed in a different part of the browser.
    
    const response=await  fetch('todos/foods.json'); //do the fetch //await stops javascript from assigning a value to response variable until promise resolve
    //once fetch promise is resolved, we can take the value from the resolve function i.e. take response and assign it to the variable 
    //we are stalling inside the asynchronous function. its not blocking
    // console.log(response.json()); //we will see the response object. use json to show the object.but json() is a promise. so do this:
     const data=await response.json(); //so data is assigned the response returned by resolve() function of the .json() promise
     //console.log(data);
     return data; //this is the data which is received by the call back function in the "then" block 


}
//any function which is defined asynchronous will return a promise
//await keyword will stall the process until the promise is resolved, this stalling happens in an asynchronous function which itself is non-blocking


console.log('1');
console.log('2');

//getTodos(); //this receives a promise. so it wont receive the data directly. So tack on the .then method.
getTodos()
    .then(data=>console.log('resolved',data));

console.log('3');
console.log('4');


/*

Since getTodos() is non-blocking, the output will be
1
2
3
4
resolved, json data

*/