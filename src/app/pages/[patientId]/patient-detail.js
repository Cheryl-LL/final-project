'use client'

import AdditionalNote from "@/app/components/PatientDetailTabs/AdditionalNote";
import MedicalInfo from "@/app/components/PatientDetailTabs/MedicalInfo";
import PatientInfo from "@/app/components/PatientDetailTabs/PersonalInfo";
import TeamMember from "@/app/components/PatientDetailTabs/TeamMember";
import { useState } from "react";



export default function PatientDetail({patientObj}) {

  const [activeTab, setActiveTab] = useState('personal');

  const patientData = {
    firstName: patientObj.firstName,
    lastName: patientObj.lastName,
    fscdId: patientObj.fscdId,
    dateOfBirth: patientObj.dateOfBirth,
    gender: patientObj.gender,
    age: patientObj.age,
    school: patientObj.school,
    grade: patientObj.grade,
    address: patientObj.address,
    city: patientObj.city,
    province: patientObj.province,
    postalCode: patientObj.postalCode,
    isActive: patientObj.isActive,
    note: patientObj.note
  };

  const primaryGuardian = patientObj.primaryGuardian || {};
  const secondaryGuardian = patientObj.secondaryGuardian || {};
  const medicalInfo = patientObj.medicalInfo || {};

  const primaryGuardianData = {
    name: primaryGuardian.name || '',
    relation: primaryGuardian.relation || '',
    address: primaryGuardian.address || '',
    city: primaryGuardian.city || '',
    province: primaryGuardian.province || '',
    postalCode: primaryGuardian.postalCode || '',
    phoneNumber: primaryGuardian.phoneNumber || '',
    email: primaryGuardian.email || '',
  };

  const secondaryGuardianData = {
    name: secondaryGuardian.name || '',
    relation: secondaryGuardian.relation || '',
    address: secondaryGuardian.address || '',
    city: secondaryGuardian.city || '',
    province: secondaryGuardian.province || '',
    postalCode: secondaryGuardian.postalCode || '',
    phoneNumber: secondaryGuardian.phoneNumber || '',
    email: secondaryGuardian.email || '',
  };

  const medicalInfoData = {
    diagnosis: medicalInfo.diagnosis,
    typical: medicalInfo.typical
  }

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
  {/* <TopMenu>
    <button className='btn' onClick={handleContractClick}>Contract</button>
    <button className='btn' onClick={handleConsentClick}>Consent</button>
    <button className='btn' onClick={handleInsuranceClick}>Insurance</button>
  </TopMenu> */}


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
        primaryGuardian={primaryGuardianData}
        secondaryGuardian={secondaryGuardianData}
      />
    )}
    {activeTab === 'medical' && (
      <MedicalInfo medicalInfo={medicalInfoData}/>
    )}
    {activeTab === 'team' && (
      <div>
        <section>
        <h1>Current Team Member</h1>
        <TeamMember />
        </section>
        <section>
        <h1>Previous Team Member</h1>
        <TeamMember />
        </section>
        </div>
    )}
    {activeTab === 'notes' && (
      <AdditionalNote additionalNote={patientData.note} />
    )}
  </div>
</div>
  );
};