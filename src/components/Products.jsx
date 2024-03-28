import React from 'react'
import { products } from '../data'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { X } from '@mui/icons-material';
import { Button } from '@mui/material';

export default function Products() {
    return (
        <div className='products'>
            <div className='products-container'>
                {products.map(item => (
                    <Product key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}

function Product({ product }) {
    const { id, name, img, rating, reviews, originalPrice, discountedPrice, deliveryTime } = product

    const salePersent = Math.round((originalPrice - discountedPrice) / originalPrice * 100)

    let review, count

    if (reviews >= 2 && reviews <= 4) {
        count = `(${reviews} отзыва)`
    } else if (reviews > 5) {
        count = `(${reviews} отзывов)`
    } else {
        count = `(${reviews} отзыв)`
    }

    if (rating !== 0) {
        review =
            <span>
                <StarRoundedIcon style={{ color: '#ffbc4e' }} />
                {rating}
                <p style={{ color: '#979b9e' }}>{count}</p>
            </span>;
    } else {
        review = <span style={{ color: '#979b9e' }}>Нет отзывов</span>
    }

    return (
        <div className='product'>
            <div className="product-img-container">
                <div className="product-img">
                    <img src={img} alt={name} />
                </div>
                <div className="product-img-content">
                    <span id='sale'>-{salePersent}%</span>
                    <span><FavoriteBorderIcon /></span>
                </div>
            </div>
            <div className="product-info">
                <div className="product-description">
                    <h1>{name}</h1>
                    <div className="product-rating">
                        {review}
                    </div>
                    <div className="product-prices">
                        <span id='d'>{discountedPrice} ₸</span>
                        <del style={{ color: '#979b9e' }}>{originalPrice} ₸</del>
                    </div>
                </div>
                <div className="product-button">
                    <button onClick={(e) => { console.log(e) }}>В корзину</button>
                    <span style={{ color: '#81bc7b' }}>{deliveryTime && 'Доставим за 2 часа'}</span>
                </div>
            </div>
        </div>
    )
}
