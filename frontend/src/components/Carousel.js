import React from 'react'
import { useSelector } from 'react-redux'

const Carousel = ({images, id}) => {
    const isActive = index => {
        if(index === 0) return "active";
    }

    const { theme } = useSelector(state => state)

    return (
        <div id={`image${id}`} className="carousel slide" data-ride="carousel">
            

            <div className="carousel-inner">
                {
                    images.map((img, index) => (
                        <div key={index} className={`carousel-item ${isActive(index)}`}>
                           
                           
                        </div>
                    ))
                }
                
            </div>
            
            {
               
            }
            
        </div>
    )
}

export default Carousel
