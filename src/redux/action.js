export const getWholeUserInfo = (username, changeRouteTo) => ({
  type: 'GET_WHOLE_USER_INFO',
  payload: {
    username,
    changeRouteTo
  }
});