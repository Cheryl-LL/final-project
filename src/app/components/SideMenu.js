"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('view-patient');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };

  return (
    <div className="sidebar bg-gray-100 h-screen p-5">
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Bridging Abilities</h1>
      </div>
      <nav className="mb-5">
        <ul>
        <li className={`mb-3 ${activeTab === 'view-patient' ? 'active-link' : ''}`}>
            <Link href="/pages/view-patient-list" className="flex items-center text-lg cursor-pointer"
            onClick={() => handleTabClick('view-patient')}>
              <span className="ml-2">View Patient</span>
            </Link>
          </li>
          <li className={`mb-3 ${activeTab === 'add-new-patient' ? 'active-link' : ''}`}>
            <Link href="/pages/add-new-patient" className="flex items-center text-lg cursor-pointer"
            onClick={() => handleTabClick('add-new-patient')}>
              <span className="ml-2">Add New Patient</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
