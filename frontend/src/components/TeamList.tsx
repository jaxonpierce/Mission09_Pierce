import { useEffect, useState } from "react";
import TeamCard from "./TeamCard"; // ✅ Ensure correct path

interface Team {
  tid: number;
  name: string;
  abbrev: string;
  city: string;
  state: string;
  pop: number;
}

const TeamList = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch("/teams.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Debugging
        setTeams(data.teams); // ✅ Access the correct key
      })
      .catch((error) => console.error("Error fetching teams:", error));
  }, []);
  

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">NCAA Basketball Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <TeamCard key={team.tid} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
