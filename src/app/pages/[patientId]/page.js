"use client";
import { dbGetPatient } from "@/app/_services/patient-services";
import { useUserAuth } from "@/app/_utils/auth-context";
import { useEffect, useState } from "react";
import PatientDetail from "./patient-detail";



export default function PatientPage({ params }) {
  const { user } = useUserAuth();
  const [patient, setPatient] = useState({});
  useEffect(() => {
    if (user) {
      dbGetPatient(user.uid, params.patientId,setPatient);
    }
  }, [user]);
  return (
    <main>
      <PatientDetail patientObj={patient}/>
    </main>
  );
}
