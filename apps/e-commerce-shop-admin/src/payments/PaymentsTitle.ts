import { Payments as TPayments } from "../api/payments/Payments";

export const PAYMENTS_TITLE_FIELD = "paymentMethod";

export const PaymentsTitle = (record: TPayments): string => {
  return record.paymentMethod?.toString() || String(record.id);
};
