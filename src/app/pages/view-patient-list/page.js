"use client"
import { dbGetPatientList } from "@/app/_services/patient-services";
import { useUserAuth } from "@/app/_utils/auth-context";
import { useEffect, useState } from "react"
import PatientCard from "./patient-card";

export default function PatientListPage() {
    const{user}=useUserAuth();
    const[patientsList, setPatientsList] = useState([]);

    useEffect(() => {
        if (user) {
          dbGetPatientList(user.uid, setPatientsList);
        }
      }, [user]);

      if (!user) {
        return (
          <main>
            <p>You must be logged in to view the patient list.</p>
          </main>
        );
      }

    return (
        <div>
            <main>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Patient Name</th>
            <th className="py-2">Primary Guardian</th>
            <th className="py-2">Phone Number</th>
            <th className="py-2">Email</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {patientsList.map((patient, index) => (
            <PatientCard key={index} patient={patient} />
          ))}
        </tbody>
      </table>
    </main>
        </div>
    )
}