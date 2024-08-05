import Link from "next/link";

export default function PatientCard({ patient }) {
  const {
    id,
    firstName,
    lastName,
    primaryGuardian: { name, phoneNumber, email },
  } = patient;
  return (
    <tr>
      <td className="border px-4 py-2">
        {firstName} {lastName}
      </td>
      <td className="border px-4 py-2">{name}</td>
      <td className="border px-4 py-2">{phoneNumber}</td>
      <td className="border px-4 py-2">{email}</td>
      <td className="border px-4 py-2">
        <Link className="bg-blue-500 text-white py-1 px-3 rounded" href={`/pages/${id}`}>
          View
        </Link>
      </td>
    </tr>
  );
}
