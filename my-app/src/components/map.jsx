import React from "react";

export default function FruitList() {
  const fruits = ["Apple", "Banana", "Mango"];
  const peoples = [{name: "Milan" , age: 22},
    {name: "Wilan" , age: 23}
  ];
  const no = [3,4,5];

  return (
    <div>
    <ul className="mb-2">
        {fruits.map( fruit => (
            <li>{fruit}</li>
        ) )}
    </ul>
    <ol>
       {peoples.map( people => (
        <li>{people.name}</li>
       ))}
    </ol>
    
    <div className="mt-2">
        {no.map( n => (
            <p> {n%2 == 0 ? `${n} is even` : `${n} is odd`} </p>
        ))}
    </div>

    <div className="mt-2">
        {fruits.filter(fruit => fruit != "Banana").map(fruit => (<p>
            {fruit}
        </p>))}
    </div>
    </div>
  );
}

// function UsersList() {
//   const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" }
//   ];

//   return (
//     <div>
//       {users.map(user => (
//         <div key={user.id}>
//           <h3>{user.name}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function MaptoJSX() {
// const numbers = [1, 2, 3, 4, 5];

// return (
//     <div>
//         {numbers.map(num => (
//             <p key={num}>
//                 {num % 2 === 0 ? `${num} is even` : `${num} is odd`}
//             </p>
//         ))}
//     </div>
// );
// }




{/* 
    
const elements = [];
for(let i = 0; i < fruits.length; i++){
  elements.push(<li key={i}>{fruits[i]}</li>);
}
return <ul>{elements}</ul>;


*/}
