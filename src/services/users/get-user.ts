import type { ApiContext, User } from 'types';
import { fetcher } from 'utils';

export type GetUserParams = {
  /**
   * ユーザーID
   */
  id: number;
};

/**
 * ユーザーAPI（個別取得）
 * @param context API
 * @param params ユーザーID
 * @returns ユーザー
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  /**
   * ユーザーAPI
   * サンプルレスポンス
   * {
   *  "id": "1",
   *  "username": "Yusei",
   *  "displayName": "Yusei Nagata",
   *  "email": "hogefuga@gmail.com",
   *  "profileImageUrl": "/users/1.png",
   *  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
   * }
   */
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
};

export default getUser;
