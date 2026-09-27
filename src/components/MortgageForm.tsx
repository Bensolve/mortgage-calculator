import type { Errors } from "../types";

interface MortgageFormProps {
  amount: string;
  setAmount: (value: string) => void;
  term: string;
  setTerm: (value: string) => void;
  rate: string;
  setRate: (value: string) => void;
  mortgageType: string;
  setMortgageType: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClearAll: () => void;
  errors: Errors;
}

function MortgageForm({
  amount,
  setAmount,
  term,
  setTerm,
  rate,
  setRate,
  mortgageType,
  setMortgageType,
  onSubmit,
  onClearAll,
  errors,
}: MortgageFormProps) {
  return (
    <div className="mortgage-form">
      <div className="form-header">
        <h1>Mortgage Calculator</h1>
        <button type="button" className="clear-all-btn" onClick={onClearAll}>
          Clear All
        </button>
      </div>

      <form onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="amount">Mortgage Amount</label>
          <div className={`input-wrapper ${errors.amount ? "error" : ""}`}>
            <span className="input-prefix">£</span>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          {errors.amount && (
            <p className="error-message">This field is required</p>
          )}
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="term">Mortgage Term</label>
            <div className={`input-wrapper ${errors.term ? "error" : ""}`}>
              <input
                type="text"
                id="term"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
              <span className="input-suffix">years</span>
            </div>
            {errors.term && (
              <p className="error-message">This field is required</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="rate">Interest Rate</label>
            <div className={`input-wrapper ${errors.rate ? "error" : ""}`}>
              <input
                type="text"
                id="rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
              <span className="input-suffix">%</span>
            </div>
            {errors.rate && (
              <p className="error-message">This field is required</p>
            )}
          </div>
        </div>

        <fieldset className="mortgage-type">
          <legend>Mortgage Type</legend>

          <label className="radio-option">
            <input
              type="radio"
              name="mortgageType"
              value="repayment"
              checked={mortgageType === "repayment"}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            Repayment
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="mortgageType"
              value="interest-only"
              checked={mortgageType === "interest-only"}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            Interest Only
          </label>
        </fieldset>
        {errors.mortgageType && (
          <p className="error-message">This field is required</p>
        )}

        <button type="submit" className="calculate-btn">
          <img src="/images/icon-calculator.svg" alt="" />
          Calculate Repayments
        </button>
      </form>
    </div>
  );
}

export default MortgageForm;