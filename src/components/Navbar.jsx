
import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-[#1a1a1a] text-white py-4 px-6 rounded-b-2xl shadow-md mb-8">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-4">
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <div className="bg-white w-10 h-10 rounded-lg" />
          <h1 className="text-2xl font-bold tracking-wide">GitHired</h1>
        </div>

        {/* Navigation buttons */}
        <nav className="flex flex-wrap gap-4">
          {["Home", "Make Post", "My Posts", "Saved Devs"].map((label) => (
            <button
              key={label}
              className="bg-[#484a83] hover:bg-[#373873] text-white px-6 py-2 rounded-full font-semibold text-sm transition"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Search & Profile */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-black rounded-full px-4 py-2 text-sm min-w-[200px]"
          />
          <div className="bg-gray-300 w-8 h-8 rounded-full" />
        </div>
      </div>
    </header>
  );
}
