import React from 'react'

const World = () => {

  const worldDate = [
  {
    id: 1,
    name: 'James Men’s 3-Piece Pink Tailored Fit Suit',
    price: 140.00,
    description: 'Pay in 3 x of $46.67',
    image: '/images/image1.webp'
  },
  {
    id: 2,
    name: 'Cavani Connall – Men’s Navy-Blue Check Vintage Suit',
    price: 289.97,
    description: 'Pay in 3 x of $96.66',
    image: '/images/image2.jpg'
  },
  {
    id: 3,
    name: 'TP-21 Men’s Beige 3-Piece Linen Summer Wedding Suit',
    price: 159.00,
    description: 'Pay in 3 x of $49.67',
    image: '/images/image3.webp'
  },
  {
    id: 4,
    name: 'Men’s Black 3-Piece Wedding Suit with Silver Cravat and Embellished Waistcoat',
    price: 110.00,
    description: 'Pay in 3 x of $36.67',
    image: '/images/image4.webp'
  },
  {
    id: 5,
    name: 'IM3 Men’s Grey Checked Tailored Fit 3-Piece Suit',
    price: 119.00,
    description: 'Pay in 3 x of $39.67',
    image: '/images/image5.webp'
  },
  {
    id: 6,
    name: 'Mens Dark Grey 3 Piece Suit',
    price: 119.99,
    description: 'Pay in 3 x of $40.00',
    image: '/images/image6.jpg'
  },
  {
    id: 7,
    name: 'Mens Blue Herringbone Tweed 3 Piece Suit',
    price: 129.99,
    description: 'Pay in 3 x of $43.33',
    image: '/images/image7.webp'
  },
  {
    id: 8,
    name: 'Mens Navy-Blue Check 3 Piece Suit – Paul Andrew Kenneth',
    price: 149.00,
    description: 'Pay in 3 x of $49.67',
    image: '/images/image8.jpg'
  },
  {
    id: 9,
    name: 'Mens 3 Piece Suit Sage Green Summer Linen Tailored Fit Wedding Prom Classic',
    price: 299.97,
    description: 'Pay in 3 x of $99.99',
    image: '/images/image9.jpg'
  },
  {
    id: 10,
    name: 'Men’s Grey Glen Check 3 Piece Suit',
    price: 159.99,
    description: 'Pay in 3 x of $53.33',
    image: '/images/image10.jpg'
  },
  {
    id: 11,
    name: 'Men’s Plum Herringbone Tweed 3 Piece Suit',
    price: 159.99,
    description: 'Pay in 3 x of $53.33',
    image: '/images/image11.jpg'
  },
  {
    id: 12,
    name: 'TP-22 Men’s Sage 3-Piece Linen Summer Wedding Suit',
    price: 159.00,
    description: 'Pay in 3 x of $53.00',
    image: '/images/image12.webp'
  },
  {
    id: 13,
    name: 'Mens 3 Piece Suit Purple Blue Check Check Contrasting Waistcoat Trouser Wedding',
    price: 149.99,
    description: 'Pay in 3 x of $50.00',
    image: '/images/image13.webp'
  },
  {
    id: 14,
    name: 'Men’s Light Grey 3 Piece Tweed Herringbone Suit – STZ11',
    price: 159.99,
    description: 'Pay in 3 x of $53.33',
    image: '/images/image14.jpg'
  },
  {
    id: 15,
    name: 'Mens Royal Blue Tailored Fit Suit',
    price: 134.99,
    description: 'Pay in 3 x of $45.00',
    image: '/images/image15.webp'
  },
]
  return (
    <div>
      <div className='worlds'>

        {worldDate.map((world) =>(

          <div key={world.id} className='world-card'>

            <img src={world.image} alt={world.name}/>

            <h3>{world.name}</h3>

            <p>{world.description}</p>

            <div className='price'>${world.price}</div>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default World
