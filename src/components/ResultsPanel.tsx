import type { Results } from "../types";

interface ResultsPanelProps {
  results: Results | null;
}

function ResultsPanel({ results }: ResultsPanelProps) {
  if (!results) {
    return (
      <div className="results-panel empty">
        <img src="/images/illustration-empty.svg" alt="" />
        <h2>Results shown here</h2>
        <p>
          Complete the form and click "calculate repayments" to see what your
          monthly repayments would be.
        </p>
      </div>
    );
  }

  return (
    <div className="results-panel">
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </p>

      <div className="results-card">
        <p className="result-label">Your monthly repayments</p>
        <p className="result-value monthly">
          £
          {results.monthlyPayment.toLocaleString("en-GB", {
            minimumFractionDigits: 3,
            maximumFractionDigits: 2,
          })}
        </p>

        <hr />

        <p className="result-label">Total you'll repay over the term</p>
        <p className="result-value total">
          £
          {results.totalRepayment.toLocaleString("en-GB", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
}

export default ResultsPanel;