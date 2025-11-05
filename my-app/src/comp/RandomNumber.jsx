import { useEffect, useState } from "react";

export default function RandomNum() {
     const [number, setNumber] = useState(0);
     const [loading, setLoading] = useState(true);

     useEffect( () => {
        getNumber().then( 
                (num) => {
                    setNumber(num)
                    setLoading(false)
                }
        )
     }, [])

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

if (loading) return <div>Loading...</div>

return(
    <div>
        <p>The number is: {number}</p>
    </div>
)
}

