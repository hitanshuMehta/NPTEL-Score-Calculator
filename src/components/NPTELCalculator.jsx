import React, { useState, useRef } from "react";
import GradeTable from "./GradeTable";
import AssignmentInput from "./AssignmentInput";
import ExamScoreInput from "./ExamScoreInput";
import FinalGradeResult from "./FinalGradeResult";

const NPTELCalculator = () => {
  const [assignmentMarks, setAssignmentMarks] = useState(Array(8).fill(""));
  const [examMarks, setExamMarks] = useState("");
  const [assignmentScore, setAssignmentScore] = useState(null);
  const [examScore, setExamScore] = useState(null);
  const [finalScore, setFinalScore] = useState(null);
  const [grade, setGrade] = useState("");
  const [gradeNumber, setGradeNumber] = useState("");
  const [assignmentPass, setAssignmentPass] = useState(null);
  const [examPass, setExamPass] = useState(null);
  const [assignmentError, setAssignmentError] = useState("");
  const [examError, setExamError] = useState("");
  const [finalGradeError, setFinalGradeError] = useState("");
  const [showGrade, setShowGrade] = useState(false);

  const inputRefs = useRef([]);

  const handleAssignmentChange = (index, value) => {
    setShowGrade(false);
    const num = parseFloat(value);
    const newMarks = [...assignmentMarks];
    newMarks[index] = value;
    if (value === "" || (num >= 0 && num <= 100)) {
      setAssignmentMarks(newMarks);
      setAssignmentError("");
    } else {
      setAssignmentError("Enter Assignment Marks between 0 to 100.");
    }
  };

  const handleAssignmentKeyPress = (e, index) => {
    if (e.key === "Enter" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const calculateAssignmentScore = () => {
    if (assignmentMarks.some((m) => m === "")) {
      setAssignmentError("Please fill all Assignment Marks.");
      return;
    }
    if (assignmentMarks.some((m) => parseFloat(m) < 0 || parseFloat(m) > 100)) {
      setAssignmentError("Enter all Assignment Marks between 0 to 100.");
      return;
    }
    setAssignmentError("");
    const total = assignmentMarks.reduce(
      (acc, mark) => acc + parseFloat(mark),
      0
    );
    const score = (total / 8) * 0.25;
    setAssignmentScore(score.toFixed(2));
    setAssignmentPass(score >= 10);
  };

  const handleExamChange = (value) => {
    setShowGrade(false);
    const num = parseFloat(value);
    if (value === "" || (num >= 0 && num <= 100)) {
      setExamMarks(value);
      setExamError("");
    } else {
      setExamError("Enter Exam Marks between 0 to 100.");
    }
  };

  const calculateExamScore = () => {
    if (examMarks === "") {
      setExamError("Please Enter Exam Marks.");
      return;
    }
    const mark = parseFloat(examMarks);
    if (mark < 0 || mark > 100) {
      setExamError("Enter Exam Marks between 0 to 100.");
      return;
    }
    setExamError("");
    const score = mark * 0.75;
    setExamScore(score.toFixed(2));
    setExamPass(score >= 30);
  };

  const calculateFinalGrade = () => {
    setFinalGradeError("");
    setShowGrade(false);

    if (assignmentMarks.some((m) => m === "")) {
      setFinalGradeError(
        "Please enter all assignment marks before calculating grade."
      );
      return;
    }
    if (examMarks === "") {
      setFinalGradeError("Please enter exam marks before calculating grade.");
      return;
    }
    if (!assignmentPass || !examPass) {
      setFinalGradeError(
        "Ensure you meet both assignment and exam pass criteria."
      );
      return;
    }

    const sum = parseFloat(assignmentScore) + parseFloat(examScore);
    const final = Number(sum.toFixed(2));
    setFinalScore(final);

    if (final >= 85) {
      setGrade("AA");
      setGradeNumber("10");
    } else if (final >= 75) {
      setGrade("AB");
      setGradeNumber("9");
    } else if (final >= 65) {
      setGrade("BB");
      setGradeNumber("8");
    } else if (final >= 55) {
      setGrade("BC");
      setGradeNumber("7");
    } else if (final >= 45) {
      setGrade("CC");
      setGradeNumber("6");
    } else if (final >= 40) {
      setGrade("CD");
      setGradeNumber("5");
    } else {
      setGrade("FF");
      setGradeNumber("4");
    }

    setShowGrade(true);
  };

  const allAssignmentValid = assignmentMarks.every(
    (m) => m !== "" && parseFloat(m) >= 0 && parseFloat(m) <= 100
  );
  const examValid =
    examMarks !== "" &&
    parseFloat(examMarks) >= 0 &&
    parseFloat(examMarks) <= 100;
  const canCalculateGrade =
    allAssignmentValid && examValid && assignmentPass && examPass;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 md:px-10 py-5">
      <h1 className="text-3xl font-bold mb-5 text-center">
        Calculate Your Grade for Your NPTEL Score
      </h1>
      <GradeTable />
      <AssignmentInput
        assignmentMarks={assignmentMarks}
        handleAssignmentChange={handleAssignmentChange}
        handleAssignmentKeyPress={handleAssignmentKeyPress}
        inputRefs={inputRefs}
        calculateAssignmentScore={calculateAssignmentScore}
        assignmentError={assignmentError}
        assignmentScore={assignmentScore}
        assignmentPass={assignmentPass}
        setShowGrade={setShowGrade}
      />

      <ExamScoreInput
        examMarks={examMarks}
        handleExamChange={handleExamChange}
        calculateExamScore={calculateExamScore}
        assignmentPass={assignmentPass}
        examError={examError}
        examScore={examScore}
        examPass={examPass}
        setShowGrade={setShowGrade}
      />

      <FinalGradeResult
        canCalculateGrade={canCalculateGrade}
        calculateFinalGrade={calculateFinalGrade}
        finalGradeError={finalGradeError}
        finalScore={finalScore}
        grade={grade}
        gradeNumber={gradeNumber}
        showGrade={showGrade}
      />

      <div className="mt-8 text-center text-sm text-gray-400">
        <p>
          Note: This calculator is only applicable for NPTEL 12-week courses.
        </p>
        <p className="mt-1">Developed by Hitanshu Mehta</p>
      </div>
    </div>
  );
};

export default NPTELCalculator;
