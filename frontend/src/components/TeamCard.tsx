import React from "react";

interface Team {
  tid: number;
  name: string;
  abbrev: string;
  city: string;
  state: string;
}

const TeamCard: React.FC<{ team: Team }> = ({ team }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border-2 border-gray-300 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-center mb-4">{team.name}</h3>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Abbreviation: </span>{team.abbrev}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">City: </span>{team.city}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">State: </span>{team.state}
      </p>
    </div>
  );
};

export default TeamCard;
