new Promise((resolve, reject)=> {
    console.log('initial state');
    reject();
})
    .then(() => {
        console.log('do this');
    })
    .catch(() => {
        console.log('do that');
    })
    .then(() => {
        console.log('do this ,no matter what happend before');
    })
    .then(() => {
        console.log('execute this too');
    })