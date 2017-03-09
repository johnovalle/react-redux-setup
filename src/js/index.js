import { combineReducers, createStore } from "redux";

const commentReducer = (state = initialState, action) => {
  if(action.type === "ADD_COMMENT") {
      state.comments = state.comments.concat([action.payload]);
  } else if (action.type === "REMOVE_COMMENT") {
      state.comments = state.comments.filter((comment) => { return comment.id !== action.payload });
  }
  return state;
};

const tackReducer = (state = initialState, action) => {
    if(action.type === "ADD_TACK") {
        state.tacks = state.tacks.concat([action.payload]);
    } else if (action.type === "REMOVE_TACK") {
        state.tacks = state.tacks.filter((tack) => { return tack.id !== action.payload });
    }
    return state;
};

let initialState = {comments:[
    {id:1, text: "comment1"},
    {id:2, text: "comment2"},
    {id:3, text: "comment3"},
    ],
    tacks:[
        {id:1, coordinates: [46.7, -71.2], name: "ramen restaurant"},
        {id:2, coordinates: [51.1, -72.1], name: "waterfall"},
        {id:3, coordinates: [47, -71], name: "cheap drinks"},
    ]
};

const reducers = combineReducers({
    comments: commentReducer,
    tacks: tackReducer
});

const store = createStore(reducers);
store.subscribe(() => { console.log("store changed", store.getState())});


store.dispatch({type: "ADD_COMMENT", payload:{id:4, text:"comment4"}});
store.dispatch({type: "ADD_COMMENT", payload:{id:5, text:"comment5"}});
store.dispatch({type: "REMOVE_COMMENT", payload:3});
store.dispatch({type: "REMOVE_COMMENT", payload:1});
store.dispatch({type: "ADD_COMMENT", payload:{id:6, text:"comment6"}});
store.dispatch({type: "ADD_TACK", payload:{id:4, coordinates: [43, -67], name: "private beach"}});
store.dispatch({type: "ADD_TACK", payload:{id:5, coordinates: [44, -63], name: "winery"}});
store.dispatch({type: "REMOVE_TACK", payload:1});