export default function MedicalInfo({ medicalInfo }) {
    const InfoItem = ({ label, value }) => (
      <div>
        <label className="text-sm text-gray-500">{label}</label>
        <p className="font-medium">{value}</p>
      </div>
    );
  
    const CheckboxItem = ({ label, checked }) => (
      <div>
        <label className="text-sm text-gray-500">{label}</label>
        <input type="checkbox" checked={checked} readOnly className="ml-2" />
      </div>
    );
  
    return (
      <div className="grid grid-cols-4 gap-4">
        <InfoItem label="Diagnosis" value={medicalInfo.diagnosis} />
        <CheckboxItem label="Typical" checked={medicalInfo.typical} />
      </div>
    );
  }
  