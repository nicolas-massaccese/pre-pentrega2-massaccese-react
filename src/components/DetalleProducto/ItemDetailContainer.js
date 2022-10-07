import './ItemDetailContainer.css';
import CountDetail from './CountDetail';

import { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const { modelo } = useParams()
    const [productoDetail, setProductoDetail] = useState([])

    useEffect(() => {
    fetch("../../productos.json") 
    .then((res) => res.json())
    .then((productoDetailres) => {
        setTimeout(() =>  {
        setProductoDetail(productoDetailres)
        } ,1000)
    })
    }, [])

    return (
        <div className='containerDetail'>

            <div className=''>
                {productoDetail.length === 0 ?
                <div>Cargando...</div>
                : productoDetail.filter(producto => producto.modelo === modelo).map(producto => (
                    <article key={producto.id} className="cardBox">
                        <div className="fotoProducto">
                            <img src={producto.imgSrc} alt=""/>
                        </div>

                        <div className="marcoSkew">
                            <p className="modelo">{producto.modelo}</p>
                        </div>
                        
                        <div className="caracteristicas">
                            <p className="tipo">{producto.tipo}</p>
                            <div className="barra"></div>
                            <p className="medida">{producto.tamanio}</p>
                        </div>
                        <CountDetail/>
                        <div className="precio">
                            <p>${producto.precio}</p>
                        </div>
                </article>
                )
                )}
            </div>
        </div>
    
    )
}

export default ItemDetailContainer


