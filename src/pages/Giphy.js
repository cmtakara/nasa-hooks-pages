import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Giphy = () => {
    const [gifURL, setGifURL] = useState('')

    // try/catch and async/await
    // try/catch - tells our code to run the block of code and not break our application
    const fetchGif = async () => {
        try {
            // AJAX call
            // async/await is syntactical sugar for our thennables
            // we need the keyword async in front of our function
            // we create a variable that will hold our response
            // await can only be used inside an async function in regular JS
            // await replaces our then()
            const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=MVcXXam6XOGmVb4QxFKzbzJf4GIhRyd9&tag=&rating=g')

            setGifURL(response.data.data.images.original.url)

        } catch (error) {
            console.error(error)
        } 

        // using thennables
        // axios.get('https://api.giphy.com/v1/gifs/random?api_key=MVcXXam6XOGmVb4QxFKzbzJf4GIhRyd9&tag=&rating=g')
        // .then((response) => {
        //     setGifURL(response.data.data.images.original.url)
        // })
        // .catch(err => console.err(err))
    }
    // console.log('state', gifURL)

    // useEffect is a React hook we have to import
    // It takes in two arguments
    // first argument is the function, second argument is our dependency array
    useEffect(() => {
        // console.log('We mounted')

        fetchGif()
        // An empty dependency array allows us to call our useEffect once only
        // any dependency you pass inside our dependency array will tell our component to listen for changes in those dependencies
    }, [])

    return (
        <div>
            <button onClick={fetchGif}>Random</button>
            {
                gifURL && <img src={gifURL} alt="random gif" />
            }
        </div>
    );
}

export default Giphy;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios'

// const Giphy = () => {
//     const [gifURL, setGifURL] = useState('')
//     // https://api.giphy.com/v1/gifs/random?api_key=MVcXXam6XOGmVb4QxFKzbzJf4GIhRyd9&tag=&rating=g

//     const fetchGif = e => {
//         axios.get('https://api.giphy.com/v1/gifs/random?api_key=MVcXXam6XOGmVb4QxFKzbzJf4GIhRyd9&tag=&rating=g')
//         .then((response) => {
//             setGifURL(response.data.data.images.original.url)
//         })
//         .catch(err => console.err(err))
//     }
//     // console.log('state', gifURL)

//     // useEffect is a React hook we have to import
//     // It takes in two arguments
//     // first argument is the function, second argument is our dependency array
//     useEffect(() => {
//         console.log('We mounted')
//         fetchGif()
//         // An empty dependency array allows us to call our useEffect once only
//         // any dependency you pass inside our dependency array will tell our component to listen for changes in those dependencies
//     }, [])

//     return (
//         <div>
//             <button onClick={fetchGif}>Random</button>
//             {
//                 gifURL && <img src={gifURL} alt="random gif" />
//             }
//         </div>
//     );
// }

// export default Giphy;


// // import React from 'react';
// import React, { useState } from 'react';
// import axios from 'axios'



// const Giphy = () => {
//     const [gifURL, setGifURL] = useState('')

//     const handleClick = e => {
//         // e.preventDefault()
//         // console.log('in handleclick')


//       axios
//       .get('https://api.giphy.com/v1/gifs/random?api_key=YD09dxmYuPe4lY4cY4fNfMhap05SssVw&tag=&rating=g')
//       .then((response) => {
//           setGifURL(response.data.data.images.original.url)
//         //   console.log('response is: ')
//         //   console.log()
//         })
          
//       .catch(error => console.log(error))
//         }

//     return (
//         <div className='giphy-container'>
//             <button onClick={handleClick} className='giphy-button'> Generate New Gif </button>
//             {
//                 gifURL && <img src={gifURL} alt=''/>
             
//             }
            
//         </div>
//     );
// }

// export default Giphy;
