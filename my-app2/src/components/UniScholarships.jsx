import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const UniScholarships = ({ entryDetail }) => {
  if (!entryDetail) return <p>No scholarship info available.</p>;

  const parseEntryDetail = () => {
    const items = entryDetail
      .split(/<\/p>|<li>/)
      .map((item) => item.replace(/<[^>]+>/g, "").trim())
      .filter(Boolean);

    return items;
  };

  const scholarships = parseEntryDetail();

  return (
    <div className="bg-white shadow-lg p-6 rounded-2xl space-y-4 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
        Scholarships & Fees
      </h3>
      {scholarships.map((text, idx) => (
        <div
          key={idx}
          className="bg-gray-50 border-l-4 border-green-500 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
        >
          <p className="flex items-start gap-2 text-gray-700">
            <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
            <span>{text}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default UniScholarships;
