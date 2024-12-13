import React from 'react'
import Header from './header'
import CardPizza from './cardpizza'

const Home = () => {
  return (
    <>
      <Header />

      <main> 

      <CardPizza
        name="Napolitana"
        price={5950}
        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
        img="src/assets/imgs/Pizza-napo.jpeg"
      />
      <CardPizza
        name="Cuatro Quesos"
        price={6950}
        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        img="src/assets/imgs/Pizza-Quesos.jpeg"
      />
      <CardPizza
        name="Pepperoni"
        price={6950}
        ingredients={["mozzarella", "pepperoni", "orégano"]}
        img="src/assets/imgs/Pizza-Peppe.jpeg"
      />
      
      </main>
    </>
  )
}

export default Home
