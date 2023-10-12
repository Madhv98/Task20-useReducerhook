import {useReducer} from 'react'

function Counter(){
    const counterReducer = (state, action) => {
        switch (action.type) {
          case 'INCREMENT':
            return { count: state.count + 1 };
          case 'DECREMENT':
            if (state.count > 0){
                return { count: state.count - 1  };
            }
          
          default:
            return state;
        }
      };
     const initialState = { count: 0 }
    const [state, dispatch] = useReducer(counterReducer,initialState)

    return(
        <div>
       <button onClick={() => dispatch({type:'INCREMENT'})}>Increment</button>
       <button onClick={() => dispatch({type:'DECREMENT'})}>Decrement</button>
       {state.count} 

    </div>

    )
  
}
export default Counter


