import React from "react";

const FinalGradeResult = ({
  canCalculateGrade,
  calculateFinalGrade,
  finalGradeError,
  finalScore,
  grade,
  gradeNumber,
}) => {
  return (
    <>
      <button
        onClick={calculateFinalGrade}
        disabled={!canCalculateGrade}
        className="max-w-4xl p-3 bg-blue-600 rounded-md w-full hover:bg-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Calculate Your Grade for Credit Transfer
      </button>
      {finalGradeError && (
        <p className="text-red-400 mt-4">{finalGradeError}</p>
      )}

      {finalScore !== null && (
        <div className="mt-6 text-center">
          <p className="text-2xl text-green-400">Final Score: {finalScore}</p>
          <p className="text-xl text-green-400">
            Equivalent Grade in CVMU: {grade}
          </p>
          <p className="text-xl text-green-400">
            Grade in Number: {gradeNumber}
          </p>
        </div>
      )}
    </>
  );
};

export default FinalGradeResult;
