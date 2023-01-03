type Nullable<T> = T | undefined | null;

export interface IGroup {
  readonly id: number;
  number_of_people: number;
  timestamp: string;
  title: string;
  content: Nullable<string>;
  court_id: number;
  user_id: number;
}

// export interface IGroupCard<T> {
//   id: number;
// }
