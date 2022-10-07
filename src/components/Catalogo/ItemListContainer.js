import './ItemListContainer.css';

import { useEffect, useState  } from 'react'
import { useParams, Link  } from 'react-router-dom'

import ItemList from './ItemList';


const ItemListContainer = () => {
    const { tipoProducto } = useParams()

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("../../productos.json") 
        .then((res) => res.json())
        .then((productos) => {
            setTimeout(() =>  {
                if (tipoProducto){
                    setProductos(productos.filter(producto => producto.tipo === tipoProducto))
                } else {
                    setProductos(productos)
                }        
            } ,2000)
            })
        }, [tipoProducto])

    return (
        <div>
            <div className=''>
            {productos.length === 0 ? (
            <div>Cargando...</div>
            ) : (
                <div className='container'>
                    {productos.map((producto) => {                        
                        return (
                        <div key = {producto.modelo}>
                            <Link to={`/Nuestros-Productos/${producto.tipo}/${producto.modelo}`} >
                                <ItemList producto = {producto} />
                            </Link>
                        </div> 
                        )
                    })}
                </div>           
            )}
            </div>            
        </div>   
    )
}

export default ItemListContainer
