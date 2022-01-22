import React, { useState } from 'react'
import axios from 'axios'
import NASAData from '../components/NASAData'

const NASAList = () => {
    // Functional components are considered stateless
    // Class components are considered stateful

    // Write your state towards the very top of your component
    // 1.) import useState at the top of your code
    // 2.) First argument = the name of your state
    // 3.) Second arg = your method to update your state
    // const [state, setState] = useState(initialState)
    // const [like, setLike] = useState('unliked')
    const [userInput, setUserInput] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    // In functional components, we no longer have to use the keyword 'this'

    // const toggle = () => {
    //     console.log('toggling')
    //     // :(
    //     // setData('liked') ? setData('unliked') : setData('liked')

    //     // ternary
    //     // data === 'unliked' ? setData('liked') : setData('unliked')

    //     // reg if/else
    //     if (like === 'unliked') {
    //         setLike('liked')
    //     } else {
    //         setLike('unliked')
    //     }
    // }

    const handleChange = (e) => {
        // console.log('handling change', e.target.value)
        setUserInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        // console.log('submitting')

        setLoading(true)

        // Any AJAX calls/HTTP REQUEST using axios/fetch will return a Promise => response
        axios.get(`https://images-api.nasa.gov/search?q=${userInput}`)
            // whenever we get a response back, only then will then() run
            // we no longer need to use json()
            .then(response => {
                setData(response.data.collection.items)
                setLoading(false)
            })
            .catch(err => console.error(err))

    }
    // console.log('are we here')
    return (
        <div>
            <h1>NASAgram</h1>
            {/* {console.log('state', data)} */}
            {/* CONTROLLED FORM - meaning handle our change via state */}
            <form onSubmit={handleSubmit}>
                <label htmlFor='userInput'>Search: </label>
                <input
                    type='text'
                    id='userInput'
                    name='userInput'
                    onChange={handleChange}
                    value={userInput}
                />
                <input type="submit" value='submit' />
            </form>

            {/* <button onClick={toggle}>{like}</button> */}

            {
                loading
                    ?
                    <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="" />
                    :
                    <div id='nasa-container'>
                        {
                            data.map((item) => {
                                // console.log(item)
                                return (
                                    <NASAData 
                                        key={item.data[0].nasa_id}
                                        item={item} 
                                    />
                                )
                            })
                        }
                    </div>
            }

        </div>
    );
}

export default NASAList;

// import { useState } from 'react'
// import axios from 'axios'
// import NASAData from '../components/NASAData'
// // import './App.css'

// // function declaration
// function NASAList() {
//   // Functional components are considered stateless
//   // Class components are considered stateful

//   // Write your state towards the very top of your component
//   // 1.) import useState at the top of your code
//   // 2.) First argument = the name of your state
//   // 3.) Second arg = your method to update your state
//   // const [state, setState] = useState(initialState)
//   const [like, setLike] = useState('unliked')
//   const [userInput, setUserInput] = useState('')
//   const [data, setData] = useState([])
//   const [loading, setLoading] = useState(false)

//   // In functional components, we no longer have to use the keyword 'this'

//   const toggle = () => {
//     console.log('toggling')
//     // :(
//     // setData('liked') ? setData('unliked') : setData('liked')

//     // ternary
//     // data === 'unliked' ? setData('liked') : setData('unliked')

//     // reg if/else
//     if (like === 'unliked') {
//       setLike('liked')
//     } else {
//       setLike('unliked')
//     }
//   }

//   const handleChange = (e) => {
//     // console.log('handling change', e.target.value)
//     setUserInput(e.target.value)
//   }

//   const handleSubmit = e => {
//     e.preventDefault()
//     console.log('submitting')

//     setLoading(true)
//     // Any AJAX calls/HTTP REQUEST using axios/fetch will return a Promise => response
//     axios.get(`https://images-api.nasa.gov/search?q=${userInput}`)
//       // whenever we get a response back, only then will then() run
//       // we no longer need to use json()
//       .then(response => setData(response.data.collection.items))
//       .catch(err => console.error(err))

//   }

//   return (
//     <div className="App">
//       <h1>NASAgram</h1>
//       {console.log('state', data)}
//       {/* CONTROLLED FORM - meaning handle our change via state */}
//       <form onSubmit={handleSubmit}>
//         <label htmlFor='userInput'>Search: </label>
//         <input
//           type='text'
//           id='userInput'
//           name='userInput'
//           onChange={handleChange}
//           value={userInput}
//         />
//         <input type="submit" value='submit' />
//       </form>

//       <button onClick={toggle}>{like}</button>

//       <div id='nasa-container'>
//       { 
        
//         data.map((item) => {
//           return (
//             <NASAData item={item}/>
//           )
//         })
//       } 
//       </div>

//     </div>
//   );
// }

// export default NASAList


// // // import logo from './logo.svg';
// // // import './App.css';
// // import { useState } from 'react'
// // import axios from 'axios'
// // import NASAData from './components/NASAData'

// // //function declaration
// // function App() {

// //   // Functional components are considered stateless
// //   // Class components are considered stateful

// //   // Write your state towards the very top of your component
// //   // 1.) inport useState at the top of your code
// //   // 2.) First argument = the name of your state
// //   // 3.) Second arg = your method to update your state
  
// //   // const [state, setState] = useState(initialState)
  
// //   const [like, setLike] = useState('unliked')
// //   const [userInput, setUserInput] = useState('')
// //   const [data, setData] = useState('')

// //   // In functional components, we no lonber have to use the keyword 'this'

// //   // setData('hihihi')
  
// //   // try with a function declaration
// //   const toggle = () => {
// //     // : (
// //       // setData()

// //     // data === 'unliked' ? setData('liked') : setData('unliked')
// //     // // don't need to use ternary because not in JSX
// //     // // could use:
// //     // // if(data === 'unliked') {
// //     // //   setData('liked')
// //     // // } else {
// //     // //   setData('unliked')
// //     // // }
// //     // console.log('toggling')

// //     // reg if/else
// //     if(like === 'unliked') {
// //       setLike('liked')
// //     } else {
// //       setLike('unliked')
// //     }
// //   }

// //   const handleChange = (e) => {
// //     console.log('handling chaning', e.target.value)
// //     setUserInput(e.target.value)
// //     // old way
// //     // this.setState({
// //     //   [e.target.id]: e.target.value
// //     // })
// //   }

  
// //   const handleSubmit = e => {
// //     e.preventDefault()
// //     console.log('submitting')
// //     // Any AJAX calls/HTTP REQUEST using axios/fetch will return a Promise => response
// //     axios.get(`https://images-api.nasa.gov/search?q=${userInput}`)
// //       // whenever we get a response back, only then will then() run
// //       // we no longer need to use json()
// //       .then(response => setData(response.data.collection.items))
// //       .catch(err => console.error(err))

// //   }

// //   return (
// //     <div className="App">
// //       <h1>NASAgram!!!</h1>
// //       {console.log('state', data)}
// //       {/* <h3>{like}</h3> */}

// //       <form onSubmit={handleSubmit}>
// //       {/* <form > */}
// //       <input 
// //         type='text'
// //         id='userInput'
// //         name='userInput'
// //         onChange={handleChange}
// //         value={userInput}
// //       />
// //       <input type='submit' value='submit' />
// //       </form>

// //       {/* <button onClick={() => {
// //         data === 'liked' ? setData('unliked') : setData('liked')}
// //         // () => setData('hello')
// //         // but trying to toggle, so try: 
// //         // data === 'hello' ? setData('goodbye') : setData('hello')
// //         // but this ends up with an infinite loop
// //         }>Toggle</button> */}

// //         {/* make it cleaner with a function */}
// //         {/* <button onClick={toggle}>Toggle</button> */}
// //         {/* changing the label - but could also chaning and image or formatting with classname */}
// //         <button onClick={toggle}>{like}</button>

// //         {
// //           data.map((item) => {
// //             return (
// //               // <div key={item.data[0].nasa_id}>HELLO</div>
// //               <NASAData item={item}/>
// //             )
// //           })
// //         } 

// //         {/* <NASAData /> */}
// //     </div>
// //   );
// // }

// // export default App;
