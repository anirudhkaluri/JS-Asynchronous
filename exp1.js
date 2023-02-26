



const getTodos=(callback)=>{
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

    request.open('GET','./todos/todos.json'); //2 arguments //first argument is a string, type of request we make //2nd argument is the endpoint, where we want to get the data from
        //request is still not made
    request.send()
}
getTodos((err,data)=>{ //this is the callback function. it is called after getTodos is executed.
    console.log('call back fired');
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

