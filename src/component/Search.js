import React, {useState } from 'react';
import data from './Data';
import { Link } from "react-router-dom";
import {useSelector } from "react-redux";




const Search = () => {
    const course = useSelector(state => state.courseReducer.courses)
// based on some condition we should go for filter , initially the state is empty nothing to given
    const [filter, setFilter] = useState('');
    const searchText = (event) => {
        // whatever the data I am entering here so it should set the value over here
        setFilter(event.target.value);
    }
    // print data using map method
    // tostring method is used to return a string representation of an object.
    let dataSearch = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });
    

    return (
        <section className='py-4 container' >
             
            <div className='row justify-content-center'>
                <div className='col-12 mb-5'>
                {/* <img src={icon} style={{width: "60px", height:"60px",float:"left"}}></img><em style={{fontSize:"20px",float:"left", paddingTop:"15px",}}></em> */}
                    <div className='mb-3 col-4 mx-auto'>
                        <label style={{color:"black"}}  className='form-label h4'>Search</label>
                       
                        <input
                            type="text"
                            className='form-control'
                            value={filter}
                            onChange={searchText.bind(this)}
                        />
                    </div>
                </div>
                {dataSearch.map((item, index) => {
                    return (
                        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                            <div className='card p-0 overflow-hidden h-100 shadow'>
                                <img src={item.img} className='card-img-top' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <p className='card-text'>{item.desc}</p>
                                    <p className='card-text'>{item.Fee}</p>

                                </div>
                                <Link   to={`/course/view/${item.id}`}><button className="btn btn-danger">view</button></Link>
                            </div>

                        </div>

                    )
                })}


            </div>

        </section>
    )
}
export default Search;