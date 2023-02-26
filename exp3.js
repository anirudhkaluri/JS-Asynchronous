



const getTodos=(resource,callback)=>{
    const request=new XMLHttpRequest(); //WE HAVE A REQUEST OBJECT //WE WILL USE this object to send a request to get data

    request.addEventListener('readystatechange',()=>{
    // console.log(request,request.readyState); //request.readyState will tell us the state we are in. There are 4 different states for request.
    if(request.readyState===4 && request.status===200){ //the response is ready. we cant do it at 0,1,2,3 states.
        const data=JSON.parse(request.responseText); //takes json string and converts into java script objects.   //we get an array of java script object
        callback(undefined,data);
    }
    else if(request.readyState===4){
       callback('couldnt fetch data',undefined);
    }
    }); //every time there is a state change in the request, there are 4 in total, 

    request.open('GET',resource); //2 arguments //first argument is a string, type of request we make //2nd argument is the endpoint, where we want to get the data from
        //request is still not made
    request.send()
}

const getSomething=()=>{

    return new Promise((resolve, reject)=>{  //a promise takes a function as an argument. In this function we automatically get access to two parameters: resolve and reject
        //resolve and reject are functions which are built into Promise API
        //WE MAKE A NETWORK REQUEST
        //IF OUR REQUEST IS SUCCESSFUL WE PASS THE DATA THROUGH RESOLVE
        //resolve('some data'); //or reject('error')
        reject('error');


    });
}


getSomething().then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err);
}); 

//getSomething() returns a promise. To that we can attach .then method. When we resolve in a promise, it fires a callback function in the then method.
//that callback function takes the data that is passed from the resolve function
//if we reject a promise, we also get a second call back function as second method in the then method.
//but putting two functions as arguments in then is clumsy so what we can do is

getSomething()
.then(data=>{console.log(data);})
.catch(err=>{console.log(err);})

