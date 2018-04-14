import { handleActions } from 'redux-actions';
import axios from 'axios';

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

function getPostAPI(postId) {
  return axios.get(`http://ncoc.co.kr/api/teachers/${postId}`);
}

function getPostAllAPI() {
  return axios.get(`http://ncoc.co.kr/api/teachers`);
}

// function postPostAPI(postId) {
//   return axios.post(`url`);
// }

// export const postPost = postId => dispatch => {
//   // 먼저, 요청이 시작했다는것을 알립니다
//   dispatch({ type: POST_POST_PENDING });
//   return getPostAPI(postId)
//     .then(response => {
//       dispatch({
//         type: POST_POST_SUCCESS,
//         payload: response,
//       });
//     })
//     .catch(error => {
//       dispatch({
//         type: POST_POST_FAILURE,
//         payload: error,
//       });
//     });
// };

export const getPostAll = () => dispatch => {
  dispatch({ type: GET_POST_PENDING });
  return getPostAllAPI()
    .then(response => {
      // 요청이 성공했을경우, 서버 응답내용을 payload 로 설정하여 GET_POST_SUCCESS 액션을 디스패치합니다.
      dispatch({
        type: GET_POST_SUCCESS,
        payload: response,
      });
    })
    .catch(error => {
      // 에러가 발생했을 경우, 에로 내용을 payload 로 설정하여 GET_POST_FAILURE 액션을 디스패치합니다.
      dispatch({
        type: GET_POST_FAILURE,
        payload: error,
      });
    });
};

export const getPost = postId => dispatch => {
  // 먼저, 요청이 시작했다는것을 알립니다
  dispatch({ type: GET_POST_PENDING });
  console.log(postId);

  // 요청을 시작합니다
  // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때 getPost().then(...) 을 할 수 있습니다
  return getPostAPI(postId)
    .then(response => {
      // 요청이 성공했을경우, 서버 응답내용을 payload 로 설정하여 GET_POST_SUCCESS 액션을 디스패치합니다.
      dispatch({
        type: GET_POST_SUCCESS,
        payload: response,
      });
    })
    .catch(error => {
      // 에러가 발생했을 경우, 에로 내용을 payload 로 설정하여 GET_POST_FAILURE 액션을 디스패치합니다.
      dispatch({
        type: GET_POST_FAILURE,
        payload: error,
      });
    });
};

const initialState = {
  number: 1,
  pending: false,
  error: false,
  data: [
    // {
    //   number: '',
    //   teacherName: '',
    //   teacherMInfo: '',
    //   teacherMImg: '',
    //   teacherClass: '',
    //   teacherGrade: '',
    //   teacherVideo: '',
    //   teacherContents: '',
    // },
  ],
  // data: [
  //   {
  //     number: '',
  //     school: '',
  //     curriClass: '',
  //     curriSubject: '',
  //     curriName: '',
  //     curriSpecial: '',
  //     curriInformation: '',
  //     curriTimetableID: '',
  //     curriBoardNo: '',
  //   },
  // ],
};

// 이게 실질적인 데이터
export default handleActions(
  {
    [GET_POST_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false,
      };
    },
    [GET_POST_SUCCESS]: (state, action) => {
      const allPayload = action.payload.data;
      return {
        ...state,
        pending: false,
        data: allPayload,
      };
    },
    [GET_POST_FAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true,
      };
    },
  },
  initialState
);
