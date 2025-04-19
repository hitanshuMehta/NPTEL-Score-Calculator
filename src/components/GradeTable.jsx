import React from "react";

const GradeTable = () => {
  const grades = [
    { range: "85 - 100", grade: "AA", num: "10" },
    { range: "75 - 84.99", grade: "AB", num: "9" },
    { range: "65 - 74.99", grade: "BB", num: "8" },
    { range: "55 - 64.99", grade: "BC", num: "7" },
    { range: "45 - 54.99", grade: "CC", num: "6" },
    { range: "40 - 44.99", grade: "CD", num: "5" },
    { range: "0 - 39.99", grade: "FF", num: "4" },
  ];

  return (
    <div className="overflow-x-auto w-full max-w-4xl mb-6">
      <table className="table-auto w-full border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-700 px-4 py-2">Sr. No.</th>
            <th className="border border-gray-700 px-4 py-2 text-left">
            Range of Percentage Marks obtained in MOOCs Exam
            </th>
            <th className="border border-gray-700 px-4 py-2">Equivalent Grade in CVMU</th>
            <th className="border border-gray-700 px-4 py-2">Grade in Number</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((item, idx) => (
            <tr key={idx} className="text-center even:bg-gray-900 odd:bg-black">
              <td className="border border-gray-700 px-4 py-2">{idx + 1}</td>
              <td className="border border-gray-700 px-4 py-2 text-left">
                {item.range}
              </td>
              <td className="border border-gray-700 px-4 py-2">{item.grade}</td>
              <td className="border border-gray-700 px-4 py-2">{item.num}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeTable;
