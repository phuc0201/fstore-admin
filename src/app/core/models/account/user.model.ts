export class User {
  userId: number;
  fullName: string;
  dateOfBirth: Date | null;
  gender: string | null;
  password: string;
  email: string;
  phoneNumber: string | null;
  address: string | null;
  refreshToken: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<User>) {
    this.userId = data.userId || 0;
    this.fullName = data.fullName || '';
    this.dateOfBirth = data.dateOfBirth ? new Date(data.dateOfBirth) : null;
    this.gender = data.gender || null;
    this.password = data.password || '';
    this.email = data.email || '';
    this.phoneNumber = data.phoneNumber || null;
    this.address = data.address || null;
    this.refreshToken = data.refreshToken || '';
    this.isAdmin = data.isAdmin || false;
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date();
  }
}
