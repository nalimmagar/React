import React, { useState, useEffect } from "react";

export default function TrueStatusList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("https://api.example.com/items"); // Replace with your API
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();

        // Filter items with status true
        const filtered = data.filter((item) => item.status === true);
        setItems(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Items with True Status</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Status: {item.status.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
