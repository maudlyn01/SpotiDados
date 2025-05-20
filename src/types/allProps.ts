export type UserProps= {
  name: string;
  email: string;
  password: string & number;
}
export interface NavigationProps {
  backTo?: string;
  nextTo?: string;
}

export interface HistoryProps {
  user: UserProps;
}
