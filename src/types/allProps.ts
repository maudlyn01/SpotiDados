export type UserProps= {
  id: string;
  name: string;
  email: string;
}
export interface UserProp {
  id: string;
  name: string;
}
export interface HistoryProps {
  user: UserProps;
}
