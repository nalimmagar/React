import React, { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const UniRequirements = ({ universityId }) => {
  const [requirements, setRequirements] = useState(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const res = await fetch(`http://v2.cloudedu.com.au/api/university/${universityId}`);
        const data = await res.json();
        setRequirements(data.requirements);
      } catch (err) {
        console.error("Error fetching requirements:", err);
      }
    };

    fetchRequirements();
  }, [universityId]);

  if (!requirements) return <p>Loading requirements...</p>;

  const renderRequirements = () => {
    const div = document.createElement("div");
    div.innerHTML = requirements;

    return Array.from(div.childNodes).map((node, idx) => {
      if (node.tagName === "UL") {
        const items = Array.from(node.querySelectorAll("li")).map((li, i) => (
          <li key={i} className="flex items-start gap-2 mb-1">
            <FiCheckCircle className="text-green-500 mt-1" />
            <span>{li.textContent.trim()}</span>
          </li>
        ));
        return <ul key={idx} className="ml-1">{items}</ul>;
      } else {
        // Highlight headings like <strong> if any
        return (
          <p key={idx} className="mb-3 text-gray-700 leading-relaxed">
            {node.textContent.trim()}
          </p>
        );
      }
    });
  };

  return (
    <div className="bg-white  rounded-xl space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Admission Requirements</h3>
      {renderRequirements()}
    </div>
  );
};

export default UniRequirements;
