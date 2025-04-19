# 📊 NPTEL Grade Calculator

A React-based web application to calculate your final grade for 12-week **NPTEL** courses using assignment and exam scores. Developed with 💙 TailwindCSS for a sleek UI.

## 🚀 Features

- ✅ Calculate average of best 8 assignments
- 🧠 Automatically applies NPTEL 25% (assignment) + 75% (exam) weight rule
- ⚠️ Validates input ranges (0–100) and checks for completion
- ⌨️ Press Enter to move between assignment fields
- 📈 Displays final score, grade (AA–FF), and corresponding grade number (10–4)
- ❌ Shows eligibility for certificate based on pass criteria

## 🛠️ Technologies Used

- **React** ⚛️
- **TailwindCSS** 🎨
- **JavaScript** (with Hooks)
- Responsive Design 📱💻

---

## 🧮 Grade Calculation Rules

| Percentage Range | Grade | Grade Number |
|------------------|-------|--------------|
| 85 - 100         | AA    | 10           |
| 75 - 84.99       | AB    | 9            |
| 65 - 74.99       | BB    | 8            |
| 55 - 64.99       | BC    | 7            |
| 45 - 54.99       | CC    | 6            |
| 40 - 44.99       | CD    | 5            |
| 0 - 39.99        | FF    | 4            |

### 🎯 Eligibility Criteria

- **Assignment Score ≥ 10**
- **Exam Score ≥ 30**

---

## 📦 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/nptel-grade-calculator.git
   cd nptel-grade-calculator
2. **Install Dependencies**
   ```bash
    npm install
3. **Start the App**
   ```bash
   npm run dev
