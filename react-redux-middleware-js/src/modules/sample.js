import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

// 액션 타입을 선언합니다.
// 한 요청당 세 개를 만들어야 합니다.
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

// thunk 함수를 생성합니다.
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치합니다.
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST }); // 요청 알림

//   try {
//     const response = await api.getPost(id);

//     // 요청 성공
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });

//     throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해줌
//   }
// };

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS });

//   try {
//     const response = await api.getUsers();

//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     });

//     throw e;
//   }
// };

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState,
);

export default sample;
