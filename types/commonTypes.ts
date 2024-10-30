import { TransactionStatus, TransactionType } from "./enumTypes";
export interface TransactionEntry {
  id: number;
  date: Date;
  type: TransactionType;
  amount: number;
  balance: number;
  repaymentDate: Date;
  status: TransactionStatus;
}

export interface ModalState {
  isOpen: boolean;
  modalType: TransactionType;
}

export interface DashBoardState {
  availableBalance: number;
  transactions: TransactionEntry[];
}
