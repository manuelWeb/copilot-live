export type PriceItem = {
  id: string;
  amount: number;
  // Multiple = every month during time
  type: 'Single' | 'Multiple';
  time: number;
};