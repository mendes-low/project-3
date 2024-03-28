// function Item({ name, isPacked }) {
//     // 1
//     return (
//         <li className="item-packed">{!isPacked ? name + ' ✔' : name + ' ❌'}</li>
//     )

//     // let itemContent = name;
//     // if (isPacked) {
//     //     itemContent = name + " ✔";
//     // }
//     // return (
//     //     <li className="item">
//     //         {itemContent}
//     //     </li>
//     // );

//     // if (!isPacked) {
//     //     return null
//     //     // return <li className="item">{name}</li>;
//     // } else {
//     //     return <li className="item-packed">{name} ✔</li>;
//     // }

//     // return (
//     //     <div>
//     //         {/* {isPacked && <li className="item-packed">{name} ✔</li>} */}
//     //         <li className="item-packed">{name} {isPacked && ' ✔'}</li>
//     //         {/* <li className="item-packed">{!isPacked ? name : name + '✔'}</li> */}
//     //     </div>
//     // )
// }

// export default function PackingList() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item
//                     isPacked={true}
//                     name="Space suit"
//                 />
//                 <Item
//                     isPacked={true}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="Photo of Tam"
//                 />
//             </ul>
//         </section>
//     );
// }

// 2
// function Item({ name, importance }) {
//     return (
//         <li className="item">
//             {name} <i>{importance != 0 && `(important: ${importance})`}</i>
//         </li>
//     );
// }

// export default function PackingList() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item
//                     importance={9}
//                     name="Space suit"
//                 />
//                 <Item
//                     importance={0}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item
//                     importance={6}
//                     name="Photo of Tam"
//                 />
//             </ul>
//         </section>
//     );
// }

// 3
// function Drink({ name }) {
//     let plant, content, age;

//     if (name === 'tea') {
//         plant = 'leaf'
//         content = '15–70 mg/cup'
//         age = '4,000+ years'
//     } else {
//         plant = 'bean'
//         content = '80-185 mg/cup'
//         age = '1,000+ years'
//     }

//     return (
//         <section>
//             <h1>{name}</h1>
//             <dl>
//                 <dt>Part of plant:</dt>
//                 {/* <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd> */}
//                 <dd>{plant}</dd>
//                 <dt>Caffeine content:</dt>
//                 {/* <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd> */}
//                 <dd>{content}</dd>
//                 <dt>Age:</dt>
//                 {/* <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd> */}
//                 <dd>{age}</dd>
//             </dl>
//         </section>
//     );
// }

// export default function DrinkList() {
//     return (
//         <div>
//             <Drink name="tea" />
//             <Drink name="coffee" />
//         </div>
//     );
// }
