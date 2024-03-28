import { useState } from 'react';
// import { sculptureList } from '../data.js';

// 1
// export default function Gallery() {
//     const [index, setIndex] = useState(0);
//     const [showMore, setShowMore] = useState(false);

//     const hasPrev = index > 0;
//     const hasNext = index < sculptureList.length - 1;

//     function handleNextClick() {
//         if (hasNext) {
//             setIndex(index + 1);
//         }
//     }

//     function handlePrevClick() {
//         if (hasPrev) {
//             setIndex(index - 1);
//         }
//     }

//     function handleMoreClick() {
//         setShowMore(!showMore);
//     }

//     let sculpture = sculptureList[index];
//     return (
//         <>
//             <button onClick={handlePrevClick} disabled={!hasPrev}>
//                 Prev
//             </button>

//             <button onClick={handleNextClick} disabled={!hasNext}>
//                 Next
//             </button>

//             <h2>
//                 <i>{sculpture.name} </i>
//                 by {sculpture.artist}
//             </h2>
//             <h3>
//                 ({index + 1} of {sculptureList.length})
//             </h3>
//             <button onClick={handleMoreClick}>
//                 {showMore ? 'Hide' : 'Show'} details
//             </button>
//             {showMore && <p>{sculpture.description}</p>}
//             <img
//                 src={sculpture.url}
//                 alt={sculpture.alt}
//             />
//         </>
//     );
// }







// 2
// export default function Form() {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');

//     function handleFirstNameChange(e) {
//         setFirstName(e.target.value)
//     }

//     function handleLastNameChange(e) {
//         setLastName(e.target.value)
//     }

//     function handleReset() {
//         setFirstName('');
//         setLastName('');
//     }

//     return (
//         <form>
//             <input
//                 placeholder="First name"
//                 value={firstName}
//                 onChange={handleFirstNameChange}
//             />
//             <input
//                 placeholder="Last name"
//                 value={lastName}
//                 onChange={handleLastNameChange}
//             />
//             <h1>Hi, {firstName} {lastName}</h1>
//             <button onClick={handleReset}>Reset</button>
//         </form>
//     );
// }




// 3
// export default function FeedbackForm() {
//     const [isSent, setIsSent] = useState(false);
//     const [message, setMessage] = useState('');

//     if (isSent) {
//         return <h1>Thank you!</h1>;
//     } else {
//         return (
//             <form onSubmit={e => {
//                 e.preventDefault();
//                 alert(`Sending: "${message}"`);
//                 setIsSent(true);
//             }}>
//                 <textarea
//                     placeholder="Message"
//                     value={message}
//                     onChange={e => setMessage(e.target.value)}
//                 />
//                 <br />
//                 <button type="submit">Send</button>
//             </form>
//         );
//     }
// }





// 4
// export default function FeedbackForm() {
    
//     function handleClick() {
//         const userName = prompt('What is your name?')
//         alert(`Hello, ${userName}!`);
//     }
    
//     return (
//         <button onClick={handleClick}>
//             Greet
//         </button>
//     );
// }



