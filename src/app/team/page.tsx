'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
};

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=12');
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {teamMembers.map((user, index) => (
          <div key={index} className="bg-slate-100 p-4 rounded-lg shadow-md">
            <Image
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="w-32 h-32 object-cover rounded-full mx-auto"
              width={128} 
              height={128} 
            />
            <h2 className="text-xl font-semibold mt-4 text-center">{`${user.name.first} ${user.name.last}`}</h2>
            <p className="text-center">{user.email}</p>
            <p className="text-center">{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
