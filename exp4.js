
const getTodos=(resource)=>{

   return new Promise((resolve,reject)=>{
        const request=new XMLHttpRequest(); //WE HAVE A REQUEST OBJECT //WE WILL USE this object to send a request to get data
        request.addEventListener('readystatechange',()=>{
        if(request.readyState===4 && request.status===200){ 
            const data=JSON.parse(request.responseText); 
            resolve(data); 
        }
        else if(request.readyState===4){
           reject('error getting resource');
        }
        });
        request.open('GET',resource);
        request.send()

    });
}


getTodos('./todos/foods.json')
.then((data)=>{
    console.log('Promise resolved:',data);
})
.catch((err)=>{
    console.log('Promise rejected:',err);
});


//lets chain promises here
getTodos('todos/foods.json')
.then((data)=>{
    console.log('Promise1 success',data);
    return getTodos('todos/hobbies.json');  //this statement returns a promise. So for that we can attach another then
}).then((data)=>{ //we added then here because its parent is a promise returned by the statement "return getTodos('todos/hobbies.json')" in the previous then
    console.log('promise 2 success',data);
    return getTodos('todos/todos.json'); 
}).then((data)=>{
    console.log('promise 3 success',data); //similarly this
})
.catch((err)=>{ //in the end no matter the length of the chain we can use a single catchh. that would suffice
    console.log(err);
});

