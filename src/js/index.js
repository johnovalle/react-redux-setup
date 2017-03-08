import { createStore } from "redux";

const reducer = (state, action) => {
  if(action.type === "ADD_COMMENT") {
      state.comments = initialState.comments.concat([action.payload]);
  } else if (action.type === "REMOVE_COMMENT") {
      state.comments = initialState.comments.filter((comment) => { return comment.id !== action.payload });
  }
  return state;
};

let initialState = {comments:[
    {id:1, text: "comment1"},
    {id:2, text: "comment2"},
    {id:3, text: "comment3"},
    ]
};

const store = createStore(reducer, initialState);
store.subscribe(() => { console.log("store changed", store.getState())});


store.dispatch({type: "ADD_COMMENT", payload:{id:4, text:"comment4"}});
store.dispatch({type: "ADD_COMMENT", payload:{id:5, text:"comment5"}});
store.dispatch({type: "REMOVE_COMMENT", payload:3});
store.dispatch({type: "REMOVE_COMMENT", payload:1});
store.dispatch({type: "ADD_COMMENT", payload:{id:6, text:"comment6"}});