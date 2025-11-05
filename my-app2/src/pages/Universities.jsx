import React, { useState, useEffect } from "react";
import UniSection from "../components/UniSection";
import { useNavigate } from "react-router-dom";

export default function Universities() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState(""); 
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const navigate = useNavigate();

  // Fetch universities
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const res = await fetch("http://v2.cloudedu.com.au/api/university/");
        let data = await res.json();
        data.sort((a, b) => a.name.localeCompare(b.name));
        setUniversities(data);
        setFilteredUniversities(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUniversities();
  }, []);

  // Filter based on search and country
  useEffect(() => {
    const filtered = universities.filter((uni) => {
      const matchesName = uni.name.toLowerCase().includes(query.toLowerCase());
      const matchesCountry = country ? uni.country?.name === country : true;
      return matchesName && matchesCountry;
    });
    setFilteredUniversities(filtered);
    setCurrentPage(1);
  }, [query, country, universities]);

  const countries = [...new Set(universities.map((u) => u.country?.name))];

  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredUniversities.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    const lastPage = totalPages;

    if (currentPage <= 3) {
      for (let i = 1; i <= currentPage + 1; i++) pages.push(i);
      pages.push('...');
      pages.push(lastPage);
    } else if (currentPage >= lastPage - 2) {
      pages.push(1);
      pages.push('...');
      for (let i = currentPage - 1; i <= lastPage; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push('...');
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push('...');
      pages.push(lastPage);
    }

    return pages;
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Universities</h2>
      <p className="text-gray-600 mb-6">Explore our partnered universities and discover the right fit for you.</p>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap mb-8">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded-lg w-[280px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border p-2 rounded-lg w-[180px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">All Countries</option>
          {countries.map((c, idx) => (
            <option key={idx} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* University Cards */}
      {currentItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentItems.map((uni) => (
            <div
              key={uni.id}
              onClick={() => navigate(`/universities/${uni.id}`)}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 bg-white"
            >
              <UniSection university={uni} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No universities found.</p>
      )}

      {/* Pagination */}
      {/* Pagination */}
{totalPages > 1 && (
  <div className="flex justify-between items-center mt-10 flex-wrap gap-2">
    {/* Prev button - left */}
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition"
    >
      {"<"} Prev
    </button>

    {/* Page numbers - centered */}
    <div className="flex gap-2 justify-center flex-1">
      {getPageNumbers().map((num, idx) =>
        num === "..." ? (
          <span key={idx} className="px-3 py-2 text-gray-500">...</span>
        ) : (
          <button
            key={idx}
            onClick={() => setCurrentPage(num)}
            className={`px-4 py-2 rounded-lg transition ${
              num === currentPage
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {num}
          </button>
        )
      )}
    </div>

    {/* Next button - right */}
    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition"
    >
      Next {">"}
    </button>
  </div>
)}

    </div>
  );
}
