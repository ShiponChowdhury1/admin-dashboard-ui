import React from "react";
import { RequestItem, User } from "@/components/types";
import { UserCheck, UserX, CreditCard, CreditCardIcon } from "lucide-react";

export const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', userType: 'Paid', joinDate: 'Jan 15, 2024', avatar: '/man.png', issueDate: 'Jan 15, 2024', amount: 99.00, progress: '20' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active', userType: 'Free', joinDate: 'Feb 10, 2024', avatar: '/women.png', issueDate: 'Feb 10, 2024', amount: 22.00, progress: '20' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'Inactive', userType: 'Paid', joinDate: 'Mar 5, 2024', avatar: '/isMan.png', issueDate: 'Mar 5, 2024', amount: 99.00, progress: '20' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', status: 'Active', userType: 'Free', joinDate: 'Apr 12, 2024', avatar: '/man.png', issueDate: 'Apr 12, 2024', amount: 0.00, progress: '20' },
  { id: 5, name: 'Tom Brown', email: 'tom@example.com', status: 'Active', userType: 'Paid', joinDate: 'May 8, 2024', avatar: '/isMan.png', issueDate: 'May 8, 2024', amount: 199.00, progress: '20' },
];



  const usersData: RequestItem[] = [
    { id: 1, requestUser: 'Alex Smith', item: 'Laptop', model: 'Dell XPS 13', nsn: '1234-5678', lin: 'A12', eic: 'EIC-54', manual: 'Tech Doc A', status: 'Pending' },
    { id: 2, requestUser: 'Michael Lee', item: 'Printer', model: 'HP LaserJet', nsn: '8765-4321', lin: 'B45', eic: 'EIC-21', manual: 'Manual B', status: 'Approved' },
    { id: 3, requestUser: 'Emma White', item: 'Camera', model: 'Canon EOS', nsn: '1122-3344', lin: 'C78', eic: 'EIC-15', manual: 'Doc C', status: 'Rejected' },
    { id: 4, requestUser: 'Chris Evans', item: 'Monitor', model: 'Samsung 27"', nsn: '5566-7788', lin: 'D12', eic: 'EIC-90', manual: 'Guide D', status: 'Pending' },
    { id: 5, requestUser: 'Daniel King', item: 'Keyboard', model: 'Logitech MX', nsn: '9988-7766', lin: 'E10', eic: 'EIC-44', manual: 'Doc E', status: 'Approved' },
    { id: 6, requestUser: 'Sophia Hall', item: 'Tablet', model: 'iPad Air', nsn: '3344-5566', lin: 'F14', eic: 'EIC-32', manual: 'Tech Manual F', status: 'Pending' },
    { id: 7, requestUser: 'Olivia Kim', item: 'Projector', model: 'Epson 3000', nsn: '2211-6655', lin: 'G44', eic: 'EIC-13', manual: 'Guide G', status: 'Rejected' },
    { id: 8, requestUser: 'Liam Brooks', item: 'Scanner', model: 'Canon Scan L', nsn: '7788-2233', lin: 'H90', eic: 'EIC-70', manual: 'Manual H', status: 'Approved' },
    { id: 9, requestUser: 'Henry Ford', item: 'Router', model: 'TP-Link AX20', nsn: '6677-8899', lin: 'I55', eic: 'EIC-82', manual: 'Network Doc I', status: 'Pending' },
    { id: 10, requestUser: 'Jacob Ray', item: 'Headphone', model: 'Sony WH-1000XM4', nsn: '4455-2211', lin: 'J88', eic: 'EIC-22', manual: 'User Manual J', status: 'Approved' }
  ];



