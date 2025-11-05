import React, { useState } from "react";

// Card component
function Card({ name }) {
  return (
    <div
      style={{
        padding: "10px",
        margin: "5px",
        border: "1px solid #333",
        borderRadius: "5px",
      }}
    >
      {name}
    </div>
  );
}

function List() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
  ]);

  // Remove Banana (id=2) when button clicked
  const removeBanana = () => {
    setItems(items.filter( (item) => item.id !== 2));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Without Key:</h2>
      {items.map(item => (
        <Card name={item.name} />
      ))}

      <h2>With Key:</h2>
      {items.map(item => (
        <Card key={item.id} name={item.name} />
      ))}

      <button
        onClick={removeBanana}
        style={{ marginTop: "20px", padding: "5px 10px" }}
      >
        Remove Banana
      </button>
    </div>
  );
}

export default List;
