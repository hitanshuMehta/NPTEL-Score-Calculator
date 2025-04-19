import React from "react";

const ExamScoreInput = ({
  examMarks,
  handleExamChange,
  calculateExamScore,
  assignmentPass,
  examError,
  examScore,
  examPass,
  setShowGrade,
}) => {
  return (
    <div className="w-full max-w-4xl mb-8">
      <h2 className="text-2xl mb-3">Enter your exam score out of 100</h2>
      <input
        type="number"
        min="0"
        max="100"
        placeholder="Exam Score"
        value={examMarks}
        onChange={(e) => handleExamChange(e.target.value)}
        disabled={assignmentPass === false}
        onFocus={() => setShowGrade(false)}
        className="w-full p-2 bg-gray-800 rounded-md text-white focus:ring-2 focus:ring-green-400"
      />
      <button
        onClick={calculateExamScore}
        disabled={assignmentPass === false}
        className="mt-4 p-3 bg-blue-600 rounded-md w-full hover:bg-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Calculate Exam Score
      </button>
      {examError && <p className="text-red-400 mt-2">{examError}</p>}
      {examScore !== null && (
        <div className="mt-3">
          <p
            className={`text-xl ${
              examPass ? "text-green-400" : "text-red-400"
            }`}
          >
            Your Exam Score: {examScore}
          </p>
          {!examPass && (
            <p className="text-red-400 mt-1">
              You are not eligible for the certificate.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ExamScoreInput;
