// src/pages/SearchResults.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  // Dummy results (backend will replace later)
  const dummyActivities = [
    "Rafting in Rishikesh",
    "Bungee Jumping",
    "Camping by the Ganga",
    "Reverse Bungee",
    "Giant Swing",
  ];

  const results = dummyActivities.filter((a) =>
    a.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for: <span className="text-purple-600">{query}</span>
      </h1>
      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((item, i) => (
            <li
              key={i}
              className="p-4 bg-white shadow rounded-lg hover:shadow-md transition"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
