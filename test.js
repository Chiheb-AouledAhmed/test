const wait = new Promise((resolve,reject)=> {
    setTimeout(()=> {resolve('Thank you for waiting ');},1000);
})
wait.then(()=> console.log('waiting done !! '))