export enum SigninStatus {
  Not,
  Ok,
}

export const SIGNIN_STATUS = {
  [SigninStatus.Not]: {
    label: '未签到',
    value: SigninStatus,
  },
  [SigninStatus.Ok]: {
    label: '已签到',
    value: SigninStatus,
  },
};
