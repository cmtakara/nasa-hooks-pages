import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../contexts/UserContext'
import Heart from "react-heart"

const NASAData = (props) => {
    const [active, setActive] = useState(false)
    // In className components, we access props using this.props
    // In hooks, we don't use this, we just access directly
    // We pass props in the parameter inside of this component
    // so we can have access to the props object
    // console.log('We are inside NASAData', props.item)

    const user = useContext(UserContext)
    console.log('user', user)

    return (
        // <div className='nasa-data'>
        //     <h3>{props.item.data[0].title}</h3>
        //     <p>Location: {props.item.data[0].location}</p>
        //     <p>Created: {props.item.data[0].date_created}</p>
        //     <img className='nasa-img' src={props.item.links?.[0].href} alt="" />
        //     <p>Description: {props.item.data[0].description}</p>
        //     <div className='heart'>
        // 	<Heart isActive={active} onClick={() => setActive(!active)}/>
        // </div>
        // </div>
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.item.links?.[0].href} className="card-img-top" alt="..." />
            <div className="card-body  overflow-auto" style={{ height: '18rem' }}>
                <h5 className="card-title">{props.item.data[0].title}</h5>
                <p className="card-text">TESTING</p>  
                <p>Location: {props.item.data[0].location}</p>
                <p>Created: {props.item.data[0].date_created}</p>
                <a href="#" className="btn btn-primary">Description</a>
            </div>
        </div>
    );
}

export default NASAData