import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IntakeDropdown from '../components/Intake';
import FeeSlider from "../components/FeeSlider"; 
import UniContact from "../components/UniContact";
import UniRequirements from "../components/UniRequirements";
import UniScholarships from "../components/UniScholarships";
import UniOverview from "../components/UniOverview";


const DisciplineDropdown = ({ value, onChange }) => {
  const [disciplines, setDisciplines] = useState([]);

  useEffect(() => {
    fetch("http://v2.cloudedu.com.au/api/discipline/")
      .then((res) => res.json())
      .then((data) => setDisciplines(data))
      .catch(console.error);
  }, []);

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded-md w-[180px]"
    >
      <option value="">All Disciplines</option>
      {disciplines.slice(0, 6).map((d) => (
        <option key={d.id} value={d.discipline}>
          {d.discipline}
        </option>
      ))}
    </select>
  );
};

export default function UniversityDetails() {
  const { id } = useParams();
  const [university, setUniversity] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  

  // Filters state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedIntake, setSelectedIntake] = useState("");
  const [selectedFee, setSelectedFee] = useState("");
  const [showFeeSlider, setShowFeeSlider] = useState(false);


  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const res = await fetch(`http://v2.cloudedu.com.au/api/university/${id}`);
        const data = await res.json();
        setUniversity(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUniversity();
  }, [id]);

  if (!university) return <p>Loading...</p>;

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "programs", label: "Offered Programs" },
    { key: "scholarships", label: "Scholarships" },
    { key: "contact", label: "Contact" },
    { key: "requirements", label: "Requirements for Nepal" },
  ];

  // Utility to convert HTML to plain text
  const renderPlainText = (html) => {
    if (!html) return "";
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent.replace(/\s+/g, " ").trim();
  };

  // Filtered programs
  const filteredPrograms = university.programs?.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiscipline = selectedDiscipline ? p.discipline === selectedDiscipline : true;
    const matchesProgram = selectedProgram ? p.degree === selectedProgram : true;
    const matchesIntake = selectedIntake ? p.intake === selectedIntake : true;
    const matchesFee = selectedFee ? p.fee === selectedFee : true;
    return matchesSearch && matchesDiscipline && matchesProgram && matchesIntake && matchesFee;
  });

  return (
    <div>
      {/* University header */}
      <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
        <img
          src={university.cover_image}
          alt={university.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-4 left-6 flex items-center text-white">
          <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-white">
            <img
              src={university.logo}
              alt="logo"
              className="w-full h-full object-contain bg-white p-1"
            />
          </div>
          <div>
            <h2 className="font-bold text-xl">{university.name}</h2>
            <p className="text-sm opacity-90">
              {university.city}, {university.country?.name}
            </p>
          </div>
        </div>
      </div>

      {/* Vertical Tabs */}
      <div className="flex gap-6">
        {/* Left: Tab buttons */}
        <div className="flex flex-col gap-2 w-60">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded text-left ${
                activeTab === tab.key ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right: Tab content */}
        <div className="flex-1 bg-white text-left p-4 rounded-2xl shadow">
          
          {activeTab === "overview" && (
            <UniOverview description={university.description} />
          )}

          {activeTab === "programs" && (
            <div className="flex flex-col gap-4">
              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Search programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border p-2 rounded-md w-[200px]"
                />
                <DisciplineDropdown value={selectedDiscipline} onChange={setSelectedDiscipline} />
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="border p-2 rounded-md w-[180px]"
                >
                  <option value="">All Programs</option>
                  {/* You can dynamically populate this from university.programs if needed */}
                  {[...new Set(university.programs?.map((p) => p.degree))].slice(0, 6).map((prog) => (
                    <option key={prog} value={prog}>
                      {prog}
                    </option>
                  ))}
                </select>

                <IntakeDropdown value={selectedIntake} onChange={setSelectedIntake} />

              <div className="relative">
                {/* Button styled like the select */}
                <button
                  type="button"
                  onClick={() => setShowFeeSlider(!showFeeSlider)}
                  className="border p-2 rounded-md w-[180px] text-left bg-white flex justify-between items-center"
                >
                  {selectedFee ? `Fee: $${selectedFee}` : "All Fees"}
                  <span className="ml-2">▼</span>
                </button>

                {/* Dropdown with FeeSlider */}
                {showFeeSlider && (
                  <div className="absolute z-10 mt-2 bg-white p-4 rounded shadow w-[250px]">
                    <FeeSlider
                      value={selectedFee || 100}
                      onChange={setSelectedFee}
                      onReset={() => setSelectedFee("")}
                    />
                  </div>
                )}
              </div>

              </div>
              
            </div>
          )}

          {activeTab === "scholarships" && <UniScholarships entryDetail={university.entry_detail} />}

          {activeTab === "contact" && ( <UniContact universityId={id}/>)}

          {activeTab === "requirements" && <UniRequirements universityId={id} />}

        </div>
      </div>
    </div>
  );
}
