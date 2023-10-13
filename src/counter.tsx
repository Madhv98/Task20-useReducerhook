import {useReducer} from 'react'
import styles from './counter.module.css'


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

    return (
      <div className={styles.countercontainer}>
        <button className={styles.incrementbutton} onClick={() => dispatch({ type: 'INCREMENT' })}>
          Increment
        </button>
        <button className={styles.decrementbutton} onClick={() => dispatch({ type: 'DECREMENT' })}>
          Decrement
        </button>
        <div className={styles.counterdisplay}>{state.count}</div>
      </div>
    );
  }
export default Counter


