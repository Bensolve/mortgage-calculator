import { useState } from "react";
import MortgageForm from "./components/MortgageForm";
import ResultsPanel from "./components/ResultsPanel";
import type { Results, Errors } from "./types";

function App() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  function calculateRepayments(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: Errors = {
      amount: amount === "",
      term: term === "",
      rate: rate === "",
      mortgageType: mortgageType === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((isError) => isError);
    if (hasErrors) {
      setResults(null);
      return;
    }

    const principal = parseFloat(amount);
    const years = parseFloat(term);
    const annualRate = parseFloat(rate);

    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    let monthlyPayment: number;

    if (mortgageType === "interest-only") {
      monthlyPayment = principal * monthlyRate;
    } else {
      monthlyPayment =
        (principal *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    const totalRepayment = monthlyPayment * numberOfPayments;

    setResults({ monthlyPayment, totalRepayment });
  }

  function clearAll() {
    setAmount("");
    setTerm("");
    setRate("");
    setMortgageType("");
    setResults(null);
    setErrors({});
  }

  return (
    <main className="app">
       <div className="calculator-card">
      <MortgageForm
        amount={amount}
        setAmount={setAmount}
        term={term}
        setTerm={setTerm}
        rate={rate}
        setRate={setRate}
        mortgageType={mortgageType}
        setMortgageType={setMortgageType}
        onSubmit={calculateRepayments}
        onClearAll={clearAll}
        errors={errors}
      />
      <ResultsPanel results={results} />
      </div>
    </main>
  );
}

export default App;