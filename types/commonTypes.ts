import { Status, TransactionType } from "./enumTypes";
export interface TransactionEntry {
  id: number;
  date: Date;
  type: TransactionType;
  amount: number;
  balance: number;
  repaymentDate: Date;
  status: Status;
}

export interface DashBoardState {
  availableBalance: number;
  transactions: TransactionEntry[];
}

export type DashBoardAction = {
  type: "ADD_TRANSACTION_AND_UPDATE_BALANCE";
  payload: { amount: string; type: TransactionType };
};
