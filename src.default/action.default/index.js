// import axios from "axios";

// export function loadColor(){
//     return(dispatch)=>{
//         return axios.get("http://www.colr.org/json/color/random").then((response)=>{
//             dispatch(changeColor("#"+response.data.new_color));
//         })
//     }
// }

// export function changeColor(color){
//     return{
//         type:"CHANGE_COLOR",
//         color:color
//     }

/*
 * action types
 */
export const INCREMENT = 'INCREMENT';
// export const ADD_TODO = 'ADD_TODO';
// export const COMPLETE_TODO = 'COMPLETE_TODO';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE',
// };

/*
 * action creators
 */
export function increment(diff) {
  return { type: INCREMENT, diff };
}
// export function addTodo(text) {
//   return { type: ADD_TODO, text };
// }

// export function completeTodo(index) {
//   return { type: COMPLETE_TODO, index };
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter };
// }
