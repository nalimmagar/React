// src/components/UniOverview.jsx
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const UniOverview = ({ description }) => {
  if (!description) return <p>Loading overview...</p>;

  // Process description from API
  const lines = description
    .replace(/<br\s*\/?>/gi, "\n") // convert <br> to line breaks
    .replace(/<\/p>/gi, "\n") // convert paragraph ends to line breaks
    .replace(/<li>/gi, "• ") // convert list items to bullets
    .replace(/<[^>]+>/g, "") // remove all other HTML tags
    .split("\n")
    .filter(Boolean);

  return (
    <div className="space-y-6 text-gray-800">
      {lines.map((line, idx) => {
        if (line.startsWith("•")) {
          return (
            <div
              key={idx}
              className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
            >
              <FiChevronRight className="text-blue-500 mt-1 flex-shrink-0" />
              <span>{line.replace("•", "").trim()}</span>
            </div>
          );
        }
        return (
          <p key={idx} className="text-gray-700 leading-relaxed my-2">
            {line.trim()}
          </p>
        );
      })}
    </div>
  );
};

export default UniOverview;
