import React, { useState } from "react";

export default function PostExample() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      // 1. Build the request
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", // 👈 very important (default is GET)
        headers: {
          "Content-Type": "application/json", // tells API we’re sending JSON
        },
        body: JSON.stringify({
          name: name,
          age: age,
        }), // 👈 convert JS object to JSON string
      });

      // 2. Check if response is OK
      if (!res.ok) {
        throw new Error("Failed to post data");
      }

      // 3. Parse response JSON
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">POST Example</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-purple-600 text-white px-4 py-2"
      >
        Submit
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {response && (
        <div className="mt-4 border p-2">
          <p>✅ Data posted successfully!</p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
