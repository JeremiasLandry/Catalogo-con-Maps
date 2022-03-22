import React, {Component,useEffect,useState} from "react";
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import jerseyNegra from '../images/items/jerseyNegra.jpg'
import camperaRetroSkt from '../images/items/CamperaRetroSkt.png'
import purpleCargo from '../images/items/purpleCargo.png'
import NY_PurpleCap from '../images/items/NY_PurpleCap.jpg'

const ProductList = [
    {
        id:1,
        title:'Rocawear Foresthills Jerséis negro',
        price:5000,
        pictureurl:jerseyNegra
    },
    {
        id:2,
        title:'Campera Retro Skt',
        price:4900,
        pictureurl:camperaRetroSkt
    },
    {
        id:3,
        title:'Easybird Purple Cargo Pants',
        price:5000,
        pictureurl:purpleCargo
    },
    {
        id:4,
        title:'47 MLB New York Snapback Cap Black',
        price:2400,
        pictureurl:NY_PurpleCap
    }
];

const catalogoContainer = {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '10px'
}


function ItemListContainer({mensaje}){
    const [productos,setProductos] = useState([]);

    useEffect(() => {
        const getProducts = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(ProductList);
                },2000);
            });
        
        getProducts
            .then(datos => Promise.resolve(datos))
            .then(datos => {setProductos(datos)})
            .then(()=>{console.log('estado:' + productos)})
    
    }, [])
    

    
    return (<div style={catalogoContainer}>
                <h1>{mensaje}</h1>
                <ItemList items={productos}/>
            </div>)
}

export default ItemListContainer;