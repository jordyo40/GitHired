
import React from "react";

const CandidateCard = ({ candidateNumber }) => {
  return (
    <div className="bg-[#373873] rounded-2xl p-6 shadow-lg">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Candidate {candidateNumber}</h2>
      </div>
      <div className="bg-[#484a83] p-4 rounded-xl mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-gray-200 h-4 w-4 rounded-full" />
          <span className="text-sm font-semibold">Name</span>
        </div>
        <p className="text-sm">Skills: Backend, Frontend, Quality Assurance</p>
        <p className="text-sm">Languages: Java, Python</p>
        <p className="text-sm">Status: Pending</p>
        <p className="text-sm font-semibold text-green-300">Skill Match: 90%</p>
      </div>
    </div>
  );
};

export default CandidateCard;
