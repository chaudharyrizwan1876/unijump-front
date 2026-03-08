
export enum DocStatus {
  APPROVED = 'Approved',
  PENDING = 'Pending',
  UNDER_REVIEW = 'Under Review',
  REJECTED = 'Rejected'
}

export interface DocumentItem {
  id: string;
  name: string;
  required: boolean;
  status: DocStatus;
  comments: string;
  lastUpdated?: string;
}

export interface UserProfile {
  name: string;
  id: string;
  type: string;
  avatar: string;
}
