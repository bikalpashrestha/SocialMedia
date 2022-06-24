import React from 'react'
import { useSelector } from 'react-redux'

const Carousel = ({images, id}) => {
    const isActive = index => {
        if(index === 0) return "active";
    }

    const { theme } = useSelector(state => state)

    return (
        <div id={`image${id}`} className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators" style={{zIndex: 1}}>
                {
                    images.map((img, index) => (
                        <li key={index} data-target={`#image${id}`} 
                        data-slide-to={index} className={isActive(index)} />
                    ))
                }
                
            </ol>
                    ))
                }
                
            </div>
            
            {
               
            }
            
        </div>
    )
}

export default Carousel
