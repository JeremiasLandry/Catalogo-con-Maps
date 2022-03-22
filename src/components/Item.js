import React from 'react';

const itemStyle = {
    listStyleType:'none',
    margin:'0 25px'
}

function Item({id, title, price, pictureurl}){
    return(<li key={id} style={itemStyle}>
            <div className="card" style={{width: 18+'rem'}}>
                <img src={pictureurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5>{title}</h5>
                    <p className="card-text">${price}</p>
                </div>
            </div>
           </li>)
}

export default Item;