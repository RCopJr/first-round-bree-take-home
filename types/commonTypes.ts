import { Status } from "./enumTypes";
export interface TransactionEntry {
  id: number;
  date: Date;
  type: string;
  amount: number;
  balance: number;
  repaymentDate: Date;
  status: Status;
}
