const input= document.getElementById("input");
console.log("input",input);

function printInput (e) {
    console.log(e.target.value);
}

function debaunce(fn,dalay=100) {
    let timeout;
    console.log("timeout", timeout)
    return (...args) =>{
        console.log("inside return  top timeout", timeout)
        clearTimeout(timeout);
        timeout= setTimeout(()=>{
            console.log("Executing function after delay:", timeout);
            fn(...args);
        }, dalay);
        console.log("After Set:", timeout);

    }

}

const debFn = debaunce(printInput,5000);