export interface RequestItem {
  id: number;
  requestUser: string;
  item: string;
  model: string;
  nsn: string;
  lin: string;
  eic: string;
  manual: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}

export type RequestStatus = 'Approved' | 'Pending' | 'Rejected';
