import React from 'react';
import './Home.css';
import homeimg from '../../assets/home-img.png';
import ListOffers from './list-offers/ListOffers';

function Home() {
    return (
        <div className='home-root'>
            <img className="img-style" src={homeimg} alt='image1' />
            <div className='titles'>
                <span className="title1">Ouvrir un compte bancaire</span>
                <span className="title2">100% En ligne</span>
                <span className="title3">et profiter d'offres exclusives</span>
                <div className="title4">
                    <span className="l1">À</span>
                    <span className="l2">0</span>
                    <span className="l3">DH</span>
                </div>
            </div>
            <div className='offers'>
                <ListOffers />
            </div>
        </div>
    );
}

export default Home;
