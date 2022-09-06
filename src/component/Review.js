import React, {useState} from "react";
import people from './Data1';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa' ;


  export  const Review = () => {
        const [index,setIndex] = useState(0); // here index for multiple  people and zero is by default in array index based so here I would to want show  first person
        const {id,name,job,image,text} = people[index]; // In line no. 7 if const in index will be change then person index will also be change so that's why i used here people[index]
       
      // once if greater than index then they gives error  if index 4  is given then item is not there then it gives error so here solution -
        const checkNumber = (number) => {
            if(number > people.length -1) { // 4> index of the last item(4-1)
                return 0 // return first item
            }
            if(number <0) { // if 4<0
                return people.length -1 // 4-1 it will return last item
            }
            // if both case failed then return no.
            return number;
        };
//here  nextPerson is equal to my function
        const nextPerson = () => {
            setIndex((index) => {
                let newIndex = index + 1; // bcz I want next person = usestate(0 index) is 1+1 = person no. 2
                return checkNumber(newIndex); 

            });
         };
         const prevPerson = () => {
            setIndex((index) => {
                let newIndex = index - 1;
                return checkNumber(newIndex);
            });
        };
// floor() method rounds a number down to the nearest integer
        const randomPerson = () => {
        let randomNumber= Math.floor(Math.random() * people.length); // it will give between 0 and 3 index random
        if(randomNumber === index) {
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    };
        
    
        return (<article className='review'>
           
            <h2>Our Reviews</h2>
            <div className='underline'></div>
            <div className='img-container'>
                <img src={image} alt={name} style = {{ width:"200px", height:"200px"}} className='person-img' />
                {/* The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element.*/}
                <span className='quote-icon'> 
                <FaQuoteRight />
                </span>
            </div>
            <p className="id">{id}</p>
            <h4 className='name'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
             
                
                <button className='next-btn'onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
                </div>
                <br></br>
                <button className='random-btn'onClick={randomPerson}>surprise me</button>
                 
            

        </article>
 
        
        )
        
    };

export default Review