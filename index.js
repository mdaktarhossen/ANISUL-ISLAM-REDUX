const { createStore } = require("redux");

// action inentyfire;
const INCREMENT="INCREMENT"
const DECREMENT="DECREMENT"
// state;
const initState={
  value: 0,
};

// action;
const increment=()=>{
  return {
    type: INCREMENT
  };
};

const decrement=()=>{
  return {
    type: DECREMENT,
  };
};

// create reducer;
const counterReducer=(state=initState, action)=>{
  switch (action.type) {
    case INCREMENT:
      return{
        ...state,
        value: state.value+1
      };
    case DECREMENT:
      return{
        ...state,
        value: state.value-1
      };
  
    default:
      return state;
  };
};

// store= getState, dispatch(), subscribe()
const store=createStore(counterReducer)
store.subscribe(()=>{
  console.log(store.getState());
});
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());