import { addDoc, collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../_utils/firebase";


export const dbGetPatientList = async (userId, updatePatientsList) => {
    try {
        const collectionRef = collection(db, "users", userId, "patients");
        const patientsQuery = query(collectionRef);
        const querySnapshot = await getDocs(patientsQuery);
        let patientsList = [];
        querySnapshot.forEach((doc)=>{
            let patient ={
                id: doc.id,
                ...doc.data(),
            }
            patientsList.push(patient)
        });
        updatePatientsList(patientsList);
        
    } catch (error) {
        console.log(error);
        updatePatientsList([])
    }
}

export const dbAddNewPatient = async (userId, newPatient)=>{
    try {
        const newPatientRef = collection(db, "users", userId, "patients");
        const newPatientPromise = await addDoc(newPatientRef, newPatient);
        console.log(newPatientPromise.id);
    } catch (error) {
        console.log(error);
    }

}
export const dbGetPatient = async(userId, patientId, UpdatePatient) => {
    try {
      const docRef = doc(db, "users", userId, "patients", patientId);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
          UpdatePatient(docSnapshot.data());
      } else {
          console.log("This patient does not exist!")
      }
    } catch (error) {
      console.log(error);
    }
  }
