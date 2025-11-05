import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-100 p-5 flex flex-col gap-4">
      <NavLink
        to="/universities"
        className={({ isActive }) =>
          isActive ? "font-bold text-blue-600" : "text-gray-700 hover:text-blue-500"
        }
      >
        Universities
      </NavLink>

      <NavLink
        to="/courses"
        className={({ isActive }) =>
          isActive ? "font-bold text-blue-600" : "text-gray-700 hover:text-blue-500"
        }
      >
        Courses
      </NavLink>
    </div>
  );
}
