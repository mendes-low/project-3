import React from 'react'
import freeDelivery from '../assests/images/cards/ticket.png'
import woltIcon from '../assests/images/cards/wolt-icon.svg'
import iconTenge from '../assests/images/cards/icon-tenge.png';
import Rating from '@mui/material/Rating';
import { data } from '../data';

export default function Cards() {
    return (
        <div className='cards'>
            <div className='cards-container'>
                {data.map(item => (
                    <Card key={item.id} woltCard={item} />
                ))}
            </div>
        </div>
    )
}

function Card({ woltCard }) {
    const { img, name, description, priceRating, rating, deliveryTime, isNew, isHalal, isDeliveryFree, workTime } = woltCard
    // const invertStyle = 'filter: invert(1), background: "#009de0", WebkitFilter: invert(1)'

    // const currentDate = new Date().toLocaleTimeString().slice(0, 5);
    // const timeWorkedStart = `${workTime.from.hour}:${workTime.from.minute}`
    // const timeWorkedEnd = `${workTime.to.hour}:${workTime.to.minute}`
    // // if () {

    // }

    return (
        <div className="wolt-card">
            <div className="card-img">
                <img src={img} alt={name} />
                {/* { <div className="card-img-filter"><span>Закрыта</span></div>} */}
                {(isNew) && <span className="card-new">Новый</span>}
                {isHalal && <span className="card-halal">Halal</span>}
                {isDeliveryFree && <span className="card-delivery-free">0₸ за доставку на 14 дней! <img id='free-delivery-img' src={freeDelivery} /></span>}
            </div>
            <div className="card-content">
                <div className="card-info">
                    <h4>{name.length < 35 ? name : name.slice(0, 35) + '...'}</h4>
                    <p>{description.length < 35 ? description : description.slice(0, 35) + '...'}</p>
                </div>
                <div className="card-delivery-time">
                    <div><span>{deliveryTime.from}-{deliveryTime.to}</span> мин</div>
                </div>
            </div>
            <div className="card-rating">
                <div className="wolt-plus-icon">
                    <img src={woltIcon}
                        style={{
                            // filter: invertStyle,
                            // invertStyle,
                            background: '#009de0',
                            borderRadius: '10px',
                            width: '1.5rem',
                            height: '1rem'
                        }}
                    />
                    <span>0 KZT</span>
                </div>
                <Rating
                    name="read-only"
                    value={priceRating}
                    max={4}
                    icon={
                        <img src={iconTenge}
                            style={{
                                color: '#000000',
                                width: '10px',
                                height: '10px',
                                marginRight: '-2px'
                            }}
                        />
                    }
                    emptyIcon={
                        <img src={iconTenge}
                            style={{
                                color: 'rgba(120, 121, 125, 0.28)',
                                width: '10px',
                                height: '10px',
                                opacity: 0.5,
                                marginRight: '-2px'
                            }}
                        />
                    }
                    readOnly
                />
                <div className="card-rating-items">
                    {<span className='card-rating-smile'></span>}
                    <span className='card-rating-item'>{rating}</span>
                </div>
            </div>
        </div>
    );
}

