'use client'

import { useState } from 'react';
import PatientInfo from '../components/PatientDetailTabs/PersonalInfo';
import TopMenu from '../components/TopMenu';

export default function PatientDetail() {

  const [activeTab, setActiveTab] = useState('personal');


  const patientData = {
    firstName: 'Albert',
    lastName: 'Christoff',
    fscdId: '2343345667',
    dateOfBirth: '07/08/2013',
    gender: 'Male',
    age: '8',
    school: "Saint Michael's",
    grade: '3',
    address: '1234 Placeholder Hill SE',
    city: 'Calgary',
    province: 'Alberta',
    postalCode: 'T3R 1A2',
    // ... other fields
  };

  const primaryGuardian = {
    name: 'Shiela Christoff',
    relation: 'Parent',
    address: '1234 Placeholder Hill SE',
    city: 'Calgary',
    province: 'Alberta',
    postalCode: 'T3R 1A2',
    phoneNumber: '123-456-7890',
    email: 'shiela@gmail.com',
  };

  const secondaryGuardian = {
    name: 'Leonard Christoff',
    relation: 'Parent',
    // ... other fields
  };

  const handleContractClick = () => {
    console.log("A")
  };

  const handleConsentClick = () => {
    console.log("A")
  };

  const handleInsuranceClick = () => {
    console.log("A")
  };


  return (
  <div>
      <div className="container mx-auto px-4 pt-16 mt-4">
    <h1 className="text-2xl font-bold mb-4 flex items-center">
      {patientData.firstName} {patientData.lastName}
      {patientData.isActive ? (
        <span className="ml-4 text-green-500">• Active</span>
      ) : (
        <span className="ml-4 text-red-500 flex items-center">
          • <span className="ml-1 text-gray-500">Archived</span>
        </span>
      )}
    </h1>
  <TopMenu>
    <button className='btn' onClick={handleContractClick}>Contract</button>
    <button className='btn' onClick={handleConsentClick}>Consent</button>
    <button className='btn' onClick={handleInsuranceClick}>Insurance</button>
  </TopMenu>


    <div className="tabs mb-4">
      <button
        className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
        onClick={() => setActiveTab('personal')}
      >
        Personal Info
      </button>
      <button
        className={`tab ${activeTab === 'medical' ? 'active' : ''}`}
        onClick={() => setActiveTab('medical')}
      >
        Medical Info
      </button>
      <button
        className={`tab ${activeTab === 'team' ? 'active' : ''}`}
        onClick={() => setActiveTab('team')}
      >
        Team
      </button>
      <button
        className={`tab ${activeTab === 'notes' ? 'active' : ''}`}
        onClick={() => setActiveTab('notes')}
      >
        Additional Notes
      </button>
    </div>

    {activeTab === 'personal' && (
      <PatientInfo 
        patient={patientData}
        primaryGuardian={primaryGuardian}
        secondaryGuardian={secondaryGuardian}
      />
    )}
    {activeTab === 'medical' && (
      <div>Medical Info Content</div>
    )}
    {activeTab === 'team' && (
      <div>Team Content</div>
    )}
    {activeTab === 'notes' && (
      <div>Additional Notes Content</div>
    )}
  </div>
</div>
  );
};
