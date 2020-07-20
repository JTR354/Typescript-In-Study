// import React from 'react'
// import Navbar from './components/Navbar'
// import Messages from './components/Message'
// export const AppContext = React.createContext<{username?: string}>({});
// const Navbar = () => {
//   const { username } = useContext(AppContext)

//   return (
//     <div className="navbar">
//       <p>AwesomeSite</p>
//       <p>{username}</p>
//     </div>
//   )
// }

// const Messages = () => {
//   const { username } = useContext(AppContext)

//   return (
//     <div className="messages">
//       <h1>Messages</h1>
//       <p>1 message for {username}</p>
//       <p className="message">useContext is awesome!</p>
//     </div>
//   )
// }

// export default () => {
//   return(
//     <>
//       <AppContext.Provider value={{
//       username: 'superawesome'
//       }}>
//         <div className="App">
//           <Navbar />
//           <Messages />
//         </div>
//       </AppContext.Provider>
//     </>
//   )
// }

/**
 * Reducer 01
 */
// import React, {useReducer} from 'react'
// const myReducer = (state: any, action: any) => {
//   switch(action.type)  {
//     case('countUp'):
//       return  {
//         ...state,
//         count: state.count + 1
//       }
//     default:
//       return  state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(myReducer, { count:   0 });
//   return  (
//     <div className="App">
//       <button onClick={() => dispatch({ type: 'countUp' })}>
//         +1
//       </button>
//       <p>Count: {state.count}</p>
//     </div>
//   );
// }

/**
 * Reducer 02
 */
// import React, {useReducer} from 'react'

// function init(initialCount: number) {
//   console.log(initialCount, 'asd');
  
//   return {count: initialCount};
// }
// interface State {
//   count: number
// }
// interface Action {
//   payload?: number
//   type: string
// }
// function reducer(state: State, action: Action) {
//   console.log(action)
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     case 'reset':
//       return init(action.payload || 0);
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, 0 , init);
//   return (
//     <>
//       Count: {state.count}
//       <button
//         onClick={() => dispatch({type: 'reset', payload: 0})}>
//         Reset
//       </button>
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }

// export default Counter

/**
 * useEffect
 */

 import React, {useEffect, useState} from 'react'
  function sleep(time?: number) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), time || 1e3)
    })
  }
 function Example() {
   const [count, setCount] = useState<any>(() => {
     let c = 2
     sleep(2000).then(() => c = 250)
     return c
   })
   useEffect(() => {
     // didMount didUpdate 
     document.title = `you click ${count} times`
     console.log(667);
     
     return () => {
       document.title = `destroy`
     }
   }, [count])
   return (
     <div>
       <p>you click {count} times</p>
       <button onClick={() => {
         setCount(count + 1)
       }}>click me</button>
     </div>
   )
 }

 function APP () {
   const [visible, setVisible] = useState(true)
   const [count, setCount] = useState(0)
   return (
     <div>
       {visible && <Example></Example>}
       <button onClick={() => setVisible(!visible)}>消失</button>
       <h1>app:{count}!</h1>
       <button onClick={() => setCount(count + 2)}>+2</button>
     </div>
   )
 }

 export default APP