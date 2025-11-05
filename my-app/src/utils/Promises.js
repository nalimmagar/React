//function that returns a Promise
function getNumber(){
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    const randomNumber = Math.floor(
                        Math.random() * 100) + 1; //random number between 1 to 100
                    
                    resolve(randomNumber);
                } , 2000)
        }
    );
}

console.log("Starting to get number using .then()....")

getNumber().then( //regitsers itself as a callback function and returns when 2sec is up, if there was a print loc, it would execute and the flow would come back to this line
    (number) => {
        console.log("Number received using .then():", number)
        return number * 2;
    }
).then( //chaining then
    (doubledNumber) => {
        console.log("Doubled Number:", doubledNumber)
    }
)

//Using async/await to handle the Promise
async function getNumberAsync(params) {
    console.log("Starting to get number using async/await...")

    try{
        const number = await getNumber();
        console.log("Number received using async/await:", number)

        const doubledNumber = number * 2;
        console.log("Doubled number:", doubledNumber)

        return doubledNumber;
    } catch (error){
        console.error("Error:", error)
        throw error;
    }
}

getNumberAsync().then(
    (number) =>{
        console.log("Final result from async function:", number)
    }
)