export type UserType = 'Paid' | 'Free';

export interface User {
  id: number;
  name: string;
  email: string;
  status: string;
  userType: UserType;
  joinDate: string;
  avatar: string;
  issueDate: string;
  amount: number;
  progress: string;
  Image?: string;
}

