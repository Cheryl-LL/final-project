"use client";
import { useState } from "react";
import { dbAddNewPatient } from "@/app/_services/patient-services";
import { useUserAuth } from "@/app/_utils/auth-context";

export default function AddNewPatientPage() {
  const { user } = useUserAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fscdId, setFscdId] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [pGuardianName, setPGuardianName] = useState("");
  const [pGuardianRelation, setPGuardianRelation] = useState("");
  const [pGuardianAddress, setPGuardianAddress] = useState("");
  const [pGuardianCity, setPGuardianCity] = useState("");
  const [pGuardianProvince, setPGuardianProvince] = useState("");
  const [pGuardianPostalCode, setPGuardianPostalCode] = useState("");
  const [pGuardianPhone, setPGuardianPhone] = useState("");
  const [pGuardianEmail, setPGuardianEmail] = useState("");

  const [sGuardianName, setSGuardianName] = useState("");
  const [sGuardianRelation, setSGuardianRelation] = useState("");
  const [sGuardianAddress, setSGuardianAddress] = useState("");
  const [sGuardianCity, setSGuardianCity] = useState("");
  const [sGuardianProvince, setSGuardianProvince] = useState("");
  const [sGuardianPostalCode, setSGuardianPostalCode] = useState("");
  const [sGuardianPhone, setSGuardianPhone] = useState("");
  const [sGuardianEmail, setSGuardianEmail] = useState("");

  const [diagnosis, setDiagnosis] = useState("");
  const [typical, setTypical] = useState(false);
  const [errors, setErrors] = useState({});
  const [note, setNote] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleFscdIdChange = (event) => setFscdId(event.target.value);
  const handleBirthdayChange = (event) => setBirthday(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handleSchoolChange = (event) => setSchool(event.target.value);
  const handleGradeChange = (event) => setGrade(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handleCityChange = (event) => setCity(event.target.value);
  const handleProvinceChange = (event) => setProvince(event.target.value);
  const handlePostalCodeChange = (event) => setPostalCode(event.target.value);

  const handlePGuardianNameChange = (event) =>
    setPGuardianName(event.target.value);
  const handlePGuardianRelationChange = (event) =>
    setPGuardianRelation(event.target.value);
  const handlePGuardianAddressChange = (event) =>
    setPGuardianAddress(event.target.value);
  const handlePGuardianCityChange = (event) =>
    setPGuardianCity(event.target.value);
  const handlePGuardianProvinceChange = (event) =>
    setPGuardianProvince(event.target.value);
  const handlePGuardianPostalCodeChange = (event) =>
    setPGuardianPostalCode(event.target.value);
  const handlePGuardianPhoneChange = (event) =>
    setPGuardianPhone(event.target.value);
  const handlePGuardianEmailChange = (event) =>
    setPGuardianEmail(event.target.value);

  const handleSGuardianNameChange = (event) =>
    setSGuardianName(event.target.value);
  const handleSGuardianRelationChange = (event) =>
    setSGuardianRelation(event.target.value);
  const handleSGuardianAddressChange = (event) =>
    setSGuardianAddress(event.target.value);
  const handleSGuardianCityChange = (event) =>
    setSGuardianCity(event.target.value);
  const handleSGuardianProvinceChange = (event) =>
    setSGuardianProvince(event.target.value);
  const handleSGuardianPostalCodeChange = (event) =>
    setSGuardianPostalCode(event.target.value);
  const handleSGuardianPhoneChange = (event) =>
    setSGuardianPhone(event.target.value);
  const handleSGuardianEmailChange = (event) =>
    setSGuardianEmail(event.target.value);

  const handleDiagnosisChange = (event) => setDiagnosis(event.target.value);
  const handleTypicalChange = (event) => setTypical(event.target.checked);
  const handleNoteChange = (event) => setNote(event.target.value);
  const handleIsActiveChange = (event) => setIsActive(event.target.checked);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newErrors = {};

    // Validate required fields
    if (!firstName) newErrors.firstName = "First Name is required";
    if (!lastName) newErrors.lastName = "Last Name is required";
    if (!fscdId) newErrors.fscdId = "FSCD ID is required";
    if (!birthday) newErrors.birthday = "Date of Birth is required";
    if (!gender) newErrors.gender = "Gender is required";
    if (!age) newErrors.age = "Age is required";
    if (!school) newErrors.school = "School is required";
    if (!grade) newErrors.grade = "Grade is required";
    if (!address) newErrors.address = "Address is required";
    if (!city) newErrors.city = "City is required";
    if (!province) newErrors.province = "Province is required";
    if (!postalCode) newErrors.postalCode = "Postal Code is required";

    if (!pGuardianName)
      newErrors.pGuardianName = "Primary Guardian Name is required";
    if (!pGuardianRelation)
      newErrors.pGuardianRelation = "Primary Guardian Relation is required";
    if (!pGuardianAddress)
      newErrors.pGuardianAddress = "Primary Guardian Address is required";
    if (!pGuardianCity)
      newErrors.pGuardianCity = "Primary Guardian City is required";
    if (!pGuardianProvince)
      newErrors.pGuardianProvince = "Primary Guardian Province is required";
    if (!pGuardianPostalCode)
      newErrors.pGuardianPostalCode =
        "Primary Guardian Postal Code is required";
    if (!pGuardianPhone)
      newErrors.pGuardianPhone = "Primary Guardian Phone is required";
    if (!pGuardianEmail)
      newErrors.pGuardianEmail = "Primary Guardian Email is required";

    if (!diagnosis) newErrors.diagnosis = "Diagnosis is required";

    // If there are errors, set the errors state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    let newPatient = {
      firstName: firstName,
      lastName: lastName,
      fscdId: fscdId,
      dateOfBirth: birthday,
      gender: gender,
      age: age,
      school: school,
      grade: grade,
      address: address,
      city: city,
      province: province,
      postalCode: postalCode,
      primaryGuardian: {
        name: pGuardianName,
        relation: pGuardianRelation,
        address: pGuardianAddress,
        city: pGuardianCity,
        province: pGuardianProvince,
        postalCode: pGuardianPostalCode,
        phoneNumber: pGuardianPhone,
        email: pGuardianEmail,
      },
      secondaryGuardian: {
        name: sGuardianName,
        relation: sGuardianRelation,
        address: sGuardianAddress,
        city: sGuardianCity,
        province: sGuardianProvince,
        postalCode: sGuardianPostalCode,
        phoneNumber: sGuardianPhone,
        email: sGuardianEmail,
      },
      medicalInfo: {
        diagnosis: diagnosis,
        typical: typical,
      },
      note: note,
      isActive: isActive,
    };
    await dbAddNewPatient(user.uid, newPatient);
    setFirstName("");
    setLastName("");
    setFscdId("");
    setBirthday("");
    setGender("");
    setAge("");
    setSchool("");
    setGrade("");
    setAddress("");
    setCity("");
    setProvince("");
    setPostalCode("");

    setPGuardianName("");
    setPGuardianRelation("");
    setPGuardianAddress("");
    setPGuardianCity("");
    setPGuardianProvince("");
    setPGuardianPostalCode("");
    setPGuardianPhone("");
    setPGuardianEmail("");

    setSGuardianName("");
    setSGuardianRelation("");
    setSGuardianAddress("");
    setSGuardianCity("");
    setSGuardianProvince("");
    setSGuardianPostalCode("");
    setSGuardianPhone("");
    setSGuardianEmail("");

    setDiagnosis("");
    setTypical(false);
    setNote("");
    setIsActive(false);
  };

  if (!user) {
    return (
      <main>
        <p>You must be logged in to submit a new blog post.</p>
      </main>
    );
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Patient Information</h3>
          <section className="grid grid-cols-2 gap-4">
            <div>
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName}</p>
              )}
            </div>
            <div>
              <label>FSCD ID:</label>
              <input type="text" value={fscdId} onChange={handleFscdIdChange} />
              {errors.fscdId && <p className="text-red-500">{errors.fscdId}</p>}
            </div>
            <div>
              <label>Date of Birth:</label>
              <input
                type="date"
                value={birthday}
                onChange={handleBirthdayChange}
              />
              {errors.birthday && (
                <p className="text-red-500">{errors.birthday}</p>
              )}
            </div>
            <div>
              <label>Gender:</label>
              <input type="text" value={gender} onChange={handleGenderChange} />
              {errors.gender && <p className="text-red-500">{errors.gender}</p>}
            </div>
            <div>
              <label>Age:</label>
              <input type="number" value={age} onChange={handleAgeChange} />
              {errors.age && <p className="text-red-500">{errors.age}</p>}
            </div>
            <div>
              <label>School:</label>
              <input type="text" value={school} onChange={handleSchoolChange} />
              {errors.school && <p className="text-red-500">{errors.school}</p>}
            </div>
            <div>
              <label>Grade:</label>
              <input type="text" value={grade} onChange={handleGradeChange} />
              {errors.grade && <p className="text-red-500">{errors.grade}</p>}
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
              />
              {errors.address && (
                <p className="text-red-500">{errors.address}</p>
              )}
            </div>
            <div>
              <label>City:</label>
              <input type="text" value={city} onChange={handleCityChange} />
              {errors.city && <p className="text-red-500">{errors.city}</p>}
            </div>
            <div>
              <label>Province:</label>
              <input
                type="text"
                value={province}
                onChange={handleProvinceChange}
              />
              {errors.province && (
                <p className="text-red-500">{errors.province}</p>
              )}
            </div>
            <div>
              <label>Postal Code:</label>
              <input
                type="text"
                value={postalCode}
                onChange={handlePostalCodeChange}
              />
              {errors.postalCode && (
                <p className="text-red-500">{errors.postalCode}</p>
              )}
            </div>
          </section>

          <h3 className="text-lg font-semibold mb-2">Primary Guardian</h3>
          <section className="grid grid-cols-2 gap-4">
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={pGuardianName}
                onChange={handlePGuardianNameChange}
              />
              {errors.pGuardianName && (
                <p className="text-red-500">{errors.pGuardianName}</p>
              )}
            </div>
            <div>
              <label>Relation:</label>
              <input
                type="text"
                value={pGuardianRelation}
                onChange={handlePGuardianRelationChange}
              />
              {errors.pGuardianRelation && (
                <p className="text-red-500">{errors.pGuardianRelation}</p>
              )}
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                value={pGuardianAddress}
                onChange={handlePGuardianAddressChange}
              />
              {errors.pGuardianAddress && (
                <p className="text-red-500">{errors.pGuardianAddress}</p>
              )}
            </div>
            <div>
              <label>City:</label>
              <input
                type="text"
                value={pGuardianCity}
                onChange={handlePGuardianCityChange}
              />
              {errors.pGuardianCity && (
                <p className="text-red-500">{errors.pGuardianCity}</p>
              )}
            </div>
            <div>
              <label>Province:</label>
              <input
                type="text"
                value={pGuardianProvince}
                onChange={handlePGuardianProvinceChange}
              />
              {errors.pGuardianProvince && (
                <p className="text-red-500">{errors.pGuardianProvince}</p>
              )}
            </div>
            <div>
              <label>Postal Code:</label>
              <input
                type="text"
                value={pGuardianPostalCode}
                onChange={handlePGuardianPostalCodeChange}
              />
              {errors.pGuardianPostalCode && (
                <p className="text-red-500">{errors.pGuardianPostalCode}</p>
              )}
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="text"
                value={pGuardianPhone}
                onChange={handlePGuardianPhoneChange}
              />
              {errors.pGuardianPhone && (
                <p className="text-red-500">{errors.pGuardianPhone}</p>
              )}
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={pGuardianEmail}
                onChange={handlePGuardianEmailChange}
              />
              {errors.pGuardianEmail && (
                <p className="text-red-500">{errors.pGuardianEmail}</p>
              )}
            </div>
          </section>

          <h3 className="text-lg font-semibold mb-2">Secondary Guardian</h3>
          <section className="grid grid-cols-2 gap-4">
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={sGuardianName}
                onChange={handleSGuardianNameChange}
              />
            </div>
            <div>
              <label>Relation:</label>
              <input
                type="text"
                value={sGuardianRelation}
                onChange={handleSGuardianRelationChange}
              />
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                value={sGuardianAddress}
                onChange={handleSGuardianAddressChange}
              />
            </div>
            <div>
              <label>City:</label>
              <input
                type="text"
                value={sGuardianCity}
                onChange={handleSGuardianCityChange}
              />
            </div>
            <div>
              <label>Province:</label>
              <input
                type="text"
                value={sGuardianProvince}
                onChange={handleSGuardianProvinceChange}
              />
            </div>
            <div>
              <label>Postal Code:</label>
              <input
                type="text"
                value={sGuardianPostalCode}
                onChange={handleSGuardianPostalCodeChange}
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="text"
                value={sGuardianPhone}
                onChange={handleSGuardianPhoneChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={sGuardianEmail}
                onChange={handleSGuardianEmailChange}
              />
            </div>
          </section>

          <h3 className="text-lg font-semibold mb-2">Medical Information</h3>
          <section className="grid grid-cols-2 gap-4">
            <div>
              <label>Diagnosis:</label>
              <input
                type="text"
                value={diagnosis}
                onChange={handleDiagnosisChange}
              />
              {errors.diagnosis && (
                <p className="text-red-500">{errors.diagnosis}</p>
              )}
            </div>
            <div>
              <label>Typical:</label>
              <input
                type="checkbox"
                checked={typical}
                onChange={handleTypicalChange}
              />
            </div>
          </section>
          <h3 className="text-lg font-semibold mb-2">Additional Note</h3>
          <section className="grid grid-cols-2 gap-4">
          
          <textarea onChange={handleNoteChange} value={note}></textarea>
          <div>
              <label>Active:</label>
              <input
                type="checkbox"
                checked={isActive}
                onChange={handleIsActiveChange}
              />
            </div>
          </section>
          <button type="submit" className="btn my-10">
            Add New Patient
          </button>
        </div>
      </form>
    </main>
  );
}
