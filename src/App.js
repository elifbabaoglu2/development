import React, { Component } from 'react';
import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';
import webb from './image/webb.png';
function App() {
    const productList = [
        {
            name: 'RUBY',
            colorgroup: 'red',
            price: 19.99,
            Popularity: '1 Most Pouplar Woo!',
            priceRange: '15-20',
            id: 1,
            imgId: '/LipstickImages/ruby.png',
        },
        {
            name: 'SAZAN NUDE',
            colorgroup: 'Nude',
            price: 29.99,
            Popularity: 2,
            priceRange: '25 and above',
            id: 2,
            imgId: '/LipstickImages/sazan.png',
        },
        {
            name: 'TELLURIDE',
            colorgroup: 'Nude',
            price: 11.99,
            Popularity: 3,
            priceRange: '10-15',
            id: 3,
            imgId: '/LipstickImages/telluride.png',
        },
        {
            name: 'BLACKBERRY',
            colorgroup: 'Red',
            price: 19.99,
            Popularity: 4,
            priceRange: '15-20',
            id: 4,
            imgId: '/LipstickImages/blackberry.png',
        },
        {
            name: 'PUNCH',
            colorgroup: 'Pink',
            price: 15.99,
            Popularity: 5,
            priceRange: '15-20',
            id: 5,
            imgId: '/LipstickImages/punch.png',
        },
        {
            name: 'WATERMELON',
            colorgroup: 'Pink',
            price: 15.99,
            Popularity: 6,
            priceRange: '15-20',
            id: 6,
            imgId: '/LipstickImages/watermelon.png',
        },
        {
            name: 'SUNSET',
            colorgroup: 'Pink',
            price: 29.99,
            Popularity: 7,
            priceRange: '25 and above',
            id: 8,
            imgId: '/LipstickImages/sunset.png',
        },
        {
            name: 'CRANBERRY',
            colorgroup: 'Nude',
            price: 11.99,
            Popularity: 8,
            priceRange: '15-20',
            id: 9,
            imgId: '/LipstickImages/cranberry.png',
        },
        {
            name: 'AOSM',
            colorgroup: 'Red',
            price: 39.99,
            Popularity: 9,
            priceRange: '25 and above',
            id: 10,
            imgId: '/LipstickImages/daring.png',
        },
        {
            name: 'BARE',
            colorgroup: 'Nude',
            price: 8.99,
            Popularity: 10,
            priceRange: 'less than 10',
            id: 11,
            imgId: '/LipstickImages/bare.png',
        },
        {
            name: 'LILAC',
            colorgroup: 'Pink',
            price: 17.99,
            Popularity: 11,
            priceRange: '15-20',
            id: 12,
            imgId: '/LipstickImages/lilac.png',
        },
        {
            name: 'CRUSH',
            colorgroup: 'Pink',
            price: 16.99,
            Popularity: '12 Least Popular But Most Stylish ;)',
            priceRange: '15-20',
            id: 7,
            imgId: '/LipstickImages/crush.png',
        },
    ];
    return (
        <div style={{ backgroundImage: `url(${webb})` }} className='App'>
            <FilteredList list={productList} />
        </div>
    );
}

export default App;
