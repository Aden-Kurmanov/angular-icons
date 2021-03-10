export type IconsId =
  | 'add-user';

export type IconsKey =
  | 'AddUser';

export enum Icons {
  AddUser = 'add-user',
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.AddUser]: '61697',
};
