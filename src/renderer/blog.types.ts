export type Slice = string;

export interface IBlog {
  date: string;
  title: string;
  type: 'standard';
  content: Slice[];
}
