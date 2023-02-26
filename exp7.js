
fetch('./todos/foods.json') //fetch() returns a promise
.then((response)=>{
        console.log('resolved:',response); //however in the above code we cant see the data in the response object. we need to use response.json
        return response.json(); //this parses the data //response.json returns a promise. //so this returns a promise
})
.then((data)=>{ //this is the data which is returned by the resolved method of the response.json
    console.log(data);
})
.catch((error)=>{
    console.log('rejected:',error);
});