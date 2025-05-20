export type UserProps= {
  id: string;
  name: string;
  email: string;
}
export interface NavigationProps {
  backTo?: string;
  nextTo?: string;
}

export interface HistoryProps {
  user: UserProps;
}
