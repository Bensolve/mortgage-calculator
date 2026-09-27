export interface Results {
  monthlyPayment: number;
  totalRepayment: number;
}

export interface Errors {
  amount?: boolean;
  term?: boolean;
  rate?: boolean;
  mortgageType?: boolean;
}