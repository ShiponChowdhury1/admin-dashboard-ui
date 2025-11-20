import { User } from "../types";
export const filterUsers = (users: User[], searchTerm: string): User[] =>
  users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

export const calculateTotalAmount = (users: User[]): number =>
  users.reduce((sum, u) => {
    const amt = u.amount ?? '0';
    const strAmt = typeof amt === 'number' ? String(amt) : amt;
    return sum + parseFloat(strAmt.replace('$', '') || '0');
  }, 0);

export const countByUserType = (users: User[], type: 'Paid' | 'Free'): number =>
  users.filter(u => u.userType === type).length;
