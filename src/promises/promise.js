/*function doTask(name){
    console.log(`${name} has started`)
    const duration = Math.floor(Math.random() * 5000)
    setTimeout(() => {
        console.log(`${name} has ended after ${duration} milliseconds`)
    }, duration)
}

doTask('A');
doTask('B');
doTask('C');
doTask('D');
doTask('E');*/

/*const p1 = new Promise((resolve, reject) => {
    console.log('Running the asynchronous code here')
    const duration = Math.floor(Math.random() * 5000)
    setTimeout(() => {
        console.log('About to fail')
        resolve(42)
    }, duration);
})

p1.then(value => {
    console.log('The promise completed successfully')
    console.log(value)
}).catch(err => {
    console.log('The promise has failed')
    console.log(err)
})*/

function doTask(name){
    const p = new Promise((resolve, reject) => {
        console.log(`${name} has started`)
        const duration = Math.floor(Math.random() * 5000)
        setTimeout(() => {
            resolve(`${name} has ended after ${duration} milliseconds`)
        }, duration)
    })

    return p
}

doTask('A')
    .then(result => {
        console.log(result)
    })

doTask('B')
    .then(result => {
        console.log(result)
    })

doTask('D')
    .then(result => {
        console.log(result)
        return doTask('C')
    })
    .then(result => {
        console.log(result)
    })

Promise
    .all([
        doTask('G'),
        doTask('H'),
        doTask('I')
    ])
    .then(results => {
        results.forEach(result => console.log(result))
        return doTask('Z')
    })
    .then(result => {
        console.log(result)
    })