export interface Activity {
  id: number;
  avatarSrc: string;
  description: string;
  time: string;
}

export interface IDate {
  date: number;
  day: string;
}

export interface IFile {
  id: number;
  name: string;
  size: string;
  time: string;
  uploader: string;
  type: string;
  downloadable: boolean;
}

export interface IUsers {
  clientName: string;
  code: string;
  createdAt: string;
  date: string;
  nurseName: string;
  paymentStatus: string;
  status: string;
  total: number;
  updatedAt: string;
  _id: number;
}
