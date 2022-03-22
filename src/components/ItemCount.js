import React, { useState } from 'react';
import CamperaRetroSkt from '../images/items/CamperaRetroSkt.png'

const countStyle={
    backgroundColor:'#d1d1d1',
    padding: '6px 25px'
}

function ItemCount({stock, initial}){
    const [Count, setCount] = useState(initial);

    const Add = ()=>{
        if (Count !== parseInt(stock)){
            setCount(Count + 1)
        }
    }

    const Substract = ()=>{
        if (Count !== 1){
            setCount(Count - 1)
        }
    }

    return(<div className="card text-center" style={{width: 18 + 'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Stock:{stock}</h5>
                    <div>
                        <button onClick={() => Add()} type='button' className="btn btn-primary">+</button>
                        <span style={countStyle}>{Count}</span>
                        <button onClick={() => Substract()} type='button' className="btn btn-primary">-</button>
                    </div>
                    <button onClick={()=> console.log(Count)}style={{marginTop:10 +'px'}}type='button' className="btn btn-primary">Agregar al carrito</button>
                </div>
           </div>)
}

export default ItemCount;