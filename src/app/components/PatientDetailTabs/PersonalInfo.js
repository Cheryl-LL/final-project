const PatientInfo = ({ patient, primaryGuardian, secondaryGuardian }) => {
  
  const InfoItem = ({ label, value }) => (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      <p className="font-medium">{value}</p>
    </div>
  );
  
  const GuardianInfo = ({ guardian }) => (
    <div className="grid grid-cols-4 gap-4">
      <InfoItem label="Name" value={guardian.name} />
      <InfoItem label="Relation to Patient" value={guardian.relation} />
      <InfoItem label="Address" value={guardian.address} />
      <InfoItem label="City" value={guardian.city} />
      <InfoItem label="Province" value={guardian.province} />
      <InfoItem label="Postal Code" value={guardian.postalCode} />
      <InfoItem label="Phone Number" value={guardian.phoneNumber} />
      <InfoItem label="Email" value={guardian.email} />
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-4 gap-4">
        <InfoItem label="First Name" value={patient.firstName} />
        <InfoItem label="Last Name" value={patient.lastName} />
        <InfoItem label="FSCD ID#" value={patient.fscdId} />
        <InfoItem label="Date Of Birth" value={patient.dateOfBirth} />
        
        <InfoItem label="Gender" value={patient.gender} />
        <InfoItem label="Age" value={patient.age} />
        <InfoItem label="School" value={patient.school} />
        <InfoItem label="Grade" value={patient.grade} />
        
        <InfoItem label="Address" value={patient.address} />
        <InfoItem label="City" value={patient.city} />
        <InfoItem label="Province" value={patient.province} />
        <InfoItem label="Postal Code" value={patient.postalCode} />
        
        <InfoItem label="Phone Number" value={patient.phoneNumber} />
        <InfoItem label="Email" value={patient.email} />
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Primary Guardian</h3>
        <GuardianInfo guardian={primaryGuardian} />
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Secondary Guardian</h3>
        <GuardianInfo guardian={secondaryGuardian} />
      </div>
    </div>
  );
};

  
  export default PatientInfo;