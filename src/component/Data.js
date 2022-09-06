import img1 from '../imagescopy/img4.png';
import img2 from '../imagescopy/img2.jpg';
import img3 from '../imagescopy/img3.png';
import img4 from '../imagescopy/img7.png';
import img5 from '../imagescopy/img5.jpg';
import img6 from '../imagescopy/img6.png';
import img7 from '../imagescopy/img1.jpg';
import { Link } from 'react-router-dom';

// create data array
// a/c to this it is going to search
const data = {
    cardData:[
        {
            id:91,
            img:img1,
            name:'Java Programming for Beginners',
            desc:'Java is a powerful general-purpose programming language.It is used to develop desktop and mobile applications.',
            Fee: ' ₹ 250'
        },
        {
            id:92,
            img:img2,
            name:'Angular JS',
            desc:' It is a very powerful JavaScript Framework.It is used in Single Page Application projects.',
            Fee: ' ₹ 350'
        },
        {
            id:93,
            img:img3,
            name:'Bootstrap',
            desc:'The basics of Bootstrap Framework using which you can create web projects with ease.',
            Fee: ' ₹ 450'
        },
        {
            id:94,
            img:img4,
            name:' C++ ',
            desc:' This C++ basic to advanced covers concepts like Installation, variables, Arrays, Operators, Loops, File handling.',
            Fee: ' ₹ 235'
        },
        {
            id:95,
            img:img5,
            name:'JavaScript',
            desc:'JavaScript is used to create client-side dynamic pages and is best known as the scipting language for web pages.',
            Fee: ' ₹ 345'
        },
        {
            id:96,
            img:img6,
            name:' ReactJs',
            desc:'ReactJs is a JavaScript library used in web development to build interactive elements on websites.',
            Fee : ' ₹ 399'
        },
        {
            id:97,
            img:img7,
            name:'android',
            desc:'This course will teach you basic Android programming and will also take you through some advance concepts related to Android Application.',
            Fee : ' ₹ 466'
        }
    ]
}
export default data;