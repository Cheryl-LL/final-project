import { useState } from "react";


const teamData = [
    {
      "role": "Psychologist",
      "name": "Jacob Holmes",
      "organization": "Independent",
      "phone": "403-123-4567",
      "email": "jhomes@gmail.com",
      "dateStarted": "05-30-24",
      "dateEnded": "05-30-25"
    },
    {
      "role": "OT",
      "name": "Kevin Huang",
      "organization": "Bridging Abilities",
      "phone": "403-123-8888",
      "email": "kevin@gmail.com",
      "dateStarted": "04-30-24",
      "dateEnded": "11-30-24"
    },
    {
      "role": "BC",
      "name": "Jonathan Banks",
      "organization": "Ascend Pediatrics",
      "phone": "403-123-5432",
      "email": "jbanks@gmail.com",
      "dateStarted": "04-30-24",
      "dateEnded": "11-30-24"
    },
    {
      "role": "SLP",
      "name": "Chris Puck",
      "organization": "Sahaara Therapy",
      "phone": "587-888-1234",
      "email": "chris@gmail.com",
      "dateStarted": "04-30-24",
      "dateEnded": "04-30-25"
    },
    {
      "role": "Aide",
      "name": "Bella Jones",
      "organization": "Bridging Abilities",
      "phone": "587-324-7656",
      "email": "bella@gmail.com",
      "dateStarted": "04-30-24",
      "dateEnded": "04-30-25"
    }
  ]
  
export default function TeamMember(){
    
    const [team, setTeam] = useState(teamData);
    const headStyle = "px-4 py-2 text-left text-sm font-medium text-gray-700 border-b"
    const contentStyle = "px-4 py-2 text-sm text-gray-700 border-b"

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th className={headStyle}>Role</th>
                        <th className={headStyle}>Name</th>
                        <th className={headStyle}>Organization</th>
                        <th className={headStyle}>Phone</th>
                        <th className={headStyle}>Email</th>
                        <th className={headStyle}>Date Started</th>
                        <th className={headStyle}>Date Ended</th>
                    </tr>
                </thead>
                <tbody>
                    {team.map((provider, index)=>(
                        <tr key={index}>
                            <td className={contentStyle}>{provider.role}</td>
                            <td className={contentStyle}>{provider.name}</td>
                            <td className={contentStyle}>{provider.organization}</td>
                            <td className={contentStyle}>{provider.phone}</td>
                            <td className={contentStyle}>{provider.email}</td>
                            <td className={contentStyle}>{provider.dateStarted}</td>
                            <td className={contentStyle}>{provider.dateEnded}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    );
}