export enum UserStatus {
  Active = 'active',
  Inactive = 'inactive',
  Blocked = 'blocked'
}

export enum UserRole {
  User = 'user',
  Admin = 'admin'
}

export interface User {
  id: number
  name: string
  email: string
  status: UserStatus
  role: UserRole
  phone?: string
}

export type FilterStatus = UserStatus | 'all'
