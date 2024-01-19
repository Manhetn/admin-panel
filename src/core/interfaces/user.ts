export interface IUserData {
  id: string;
  email: string;
  tg_id: null | number | string;
  name: string;
  password: null | number | string;
  avatar: null | number | string;
  created_at: string;
  role: string;
  subscription: IUserSubscriptionData;
}

export interface IUserSubscriptionData {
  id: string;
  plan_id: string;
  user_id: string;
  tokens: number;
  additional_tokens: number;
  created_at: string;
  plan: IUserPlanData;
}

export interface IUserPlanData {
  id: string;
  type: string;
  price: number;
  currency: string;
  tokens: number;
}

export interface IUserTransactions {
  id: string;
  provider: string;
  amount: number;
  currency: string;
  meta: null | number | string;
  status: string;
  type: string;
  plan_id: null | number | string;
  user_id: string;
  referral_id: null | number | string;
  created_at: string;
  external_id: null | number | string;
}

export interface ISelectedUser {
  profile: IUserData;
  transactions: IUserTransactions[];
}