import React from 'react'
import CardItem from './pages/CardItem'
import './Cards.css';



function Cards() {
    

    return (
        <div className="cards">
        <h1>Check out my Projects</h1>
        <div className="cards__container"> 
         <div className="cards__wrapper">
           <ul className="cards__item">
               <CardItem 
                   src = {require('./images/img-10.jpg').default}                 
                   text="Explore the exciting recipes with any ingredient"
                   label="Cooking"
                   path='/services'
               />
               </ul>
               <ul className="cards__item">
               <CardItem 
                   src = {require('./images/img-11.png').default}                 
                   text="Set goals and achieve them with comfort"
                   label="Productivity"
                   path='/products'
               />
               </ul>
               <ul className="cards__item">
               <CardItem 
                   src = {require('./images/img-12.jpg').default}                 
                   text="Track your spendings to build a healthy budget"
                   label="Finance"
                   path='/expense'
               />
               </ul>
               <ul className="cards__item">
               <CardItem 
                   src = {require('./images/img-13.jpg').default}                 
                   text="Real time prices for all the Cryptocurrencies"
                   label="Investment"
                   path='/crypto'
               />
               </ul>
         </div>
         </div>
        </div>
    )
}

export default Cards
