'use client'

import Button from '../components/Button';
import PatientInfo from '../components/PatientDetailTabs/PersonalInfo';
import TopMenu from '../components/TopMenu';

export default function PatientDetail() {

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
     <TopMenu>
     <Button onClick={handleContractClick}>Contract</Button>
  <Button onClick={handleConsentClick}>Consent</Button>
  <Button onClick={handleInsuranceClick}>Insurance</Button>
      </TopMenu>
      <div className="container mx-auto px-4 pt-16 mt-4"> {/* Add padding-top and margin-top to account for fixed TopMenu */}
        <PatientInfo 
          patient={patientData}
          primaryGuardian={primaryGuardian}
          secondaryGuardian={secondaryGuardian}
        />
      </div>
    </div>
  );
};
