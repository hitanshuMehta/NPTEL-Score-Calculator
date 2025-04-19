import React from "react";

const AssignmentInput = ({
  assignmentMarks,
  handleAssignmentChange,
  handleAssignmentKeyPress,
  inputRefs,
  calculateAssignmentScore,
  assignmentError,
  assignmentScore,
  assignmentPass,
  setShowGrade,
}) => {
  return (
    <div className="w-full max-w-4xl mb-8">
      <h2 className="text-2xl mb-3">
        Enter the Best 8 Assignment Marks out of 100
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {assignmentMarks.map((m, i) => (
          <input
            key={i}
            ref={(el) => (inputRefs.current[i] = el)}
            type="number"
            min="0"
            max="100"
            placeholder={`Assignment ${i + 1}`}
            value={m}
            onChange={(e) => handleAssignmentChange(i, e.target.value)}
            onKeyDown={(e) => handleAssignmentKeyPress(e, i)}
            onFocus={() => setShowGrade(false)}
            className="p-2 bg-gray-800 rounded-md text-white focus:ring-2 focus:ring-blue-400"
          />
        ))}
      </div>
      <button
        onClick={calculateAssignmentScore}
        className="mt-4 p-3 bg-blue-600 rounded-md w-full hover:bg-blue-500 transition"
      >
        Calculate Assignment Score
      </button>
      {assignmentError && (
        <p className="text-red-400 mt-2">{assignmentError}</p>
      )}
      {assignmentScore !== null && (
        <div className="mt-3">
          <p
            className={`text-xl ${
              assignmentPass ? "text-green-400" : "text-red-400"
            }`}
          >
            Your Assignment Score: {assignmentScore}
          </p>
          {!assignmentPass && (
            <p className="text-red-400 mt-1">
              You are not eligible for the certificate.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AssignmentInput;
