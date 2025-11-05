import React, { useEffect, useState } from "react";
import { FiMail, FiPhone, FiGlobe, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const UniversityContact = ({ universityId }) => {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await fetch(`http://v2.cloudedu.com.au/api/university-contact/${universityId}`);
        const data = await res.json();
        setContactInfo(data);
      } catch (err) {
        console.error("Error fetching contact info:", err);
      }
    };

    fetchContact();
  }, [universityId]);

  if (!contactInfo) return <p>Loading contact information...</p>;

  return (
    <div className="bg-white p-6 rounded-2xl max-w-3xl mx-auto">
      <h3 className="font-bold text-2xl text-gray-800 mb-4">Contact Information</h3>

      {/* General Contact */}
      <div className="space-y-3 text-gray-700">
        {contactInfo.email && (
          <p className="flex items-center gap-2">
            <FiMail className="text-blue-500" /> Email: {contactInfo.email}
          </p>
        )}
        {contactInfo.phone && (
          <p className="flex items-center gap-2">
            <FiPhone className="text-green-500" /> Phone: {contactInfo.phone}
          </p>
        )}
        {contactInfo.website && (
          <p className="flex items-center gap-2">
            <FiGlobe className="text-purple-500" /> Website:{" "}
            <a href={contactInfo.website} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              {contactInfo.website}
            </a>
          </p>
        )}
        {contactInfo.address && (
          <p className="flex items-center gap-2">
            <FiMapPin className="text-red-500" /> Address: {contactInfo.address}
          </p>
        )}
      </div>

      {/* Social Media */}
      <div>
        <p className="font-semibold text-gray-800 mb-2">Follow on Social Media:</p>
        <div className="flex flex-wrap gap-4">
          {contactInfo.facebook && (
            <a href={contactInfo.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline">
              <FaFacebook /> Facebook
            </a>
          )}
          {contactInfo.twitter && (
            <a href={contactInfo.twitter} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-400 hover:underline">
              <FaTwitter /> Twitter
            </a>
          )}
          {contactInfo.linkedin && (
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-700 hover:underline">
              <FaLinkedin /> LinkedIn
            </a>
          )}
          {contactInfo.youtube && (
            <a href={contactInfo.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-red-600 hover:underline">
              <FaYoutube /> YouTube
            </a>
          )}
          {contactInfo.instagram && (
            <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-pink-500 hover:underline">
              <FaInstagram /> Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversityContact;
