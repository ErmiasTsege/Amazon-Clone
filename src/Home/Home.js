import React from 'react'
import './Home.css'
import Products from '../Products/Products';

function Home() {
    return (
    <div className="home">
    <div className="home_container">
             <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/sm/Gateway/Dec2020_testing/wk1_GW2_b3_1500x600_EN_v2._CB413887551_.jpg"
          alt=""
        />
        <div className="home_row">
            <Products 
            id="12321341"
            title="VICTONYUS 1650Pa Strong Suction, Super Thin Robotic Vacuum, Multiple Cleaning Modes/Automatic Self-Charging Robot Vacuum for Pet Hair"
            price={155.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71v0H8g18DL._AC_SL1500_.jpg"/>
                              
        <Products
            id="49538094"
            title="Official Creality Ender 3 V2 Upgraded 3D Printer with Silent Motherboard Meanwell Power Supply Carborundum Glass Platform and Resume Printing 220x220x250mm"
            price={295.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/41Xq9w9QSJL._SS250_.jpg"
          />
        </div>
        <div className="home_row">
          <Products
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Products
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Products
            id="3254354345"
            title="
            Samsung - Galaxy Fold SM-F900U - Cosmos Black - Unlocked AT&T Model GSM (US Warranty) (Renewed)"
            price={754.96}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41iUcEB9uCL._AC_UL115_.jpg"
          />
        </div>
        <div className="home_row">
          <Products
            id="90829332"
            title="Samsung UN55RU7300FXZA Curved 55 inches 4K UHD 7 Series Smart TV (2019) (Renewed)"
            price={1094.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71e1jYter4L._AC_SX522_.jpg"
          />
           <Products
            id="90829333"
            title="Mongoose Dolomite Mens Fat Tire Mountain Bike, 26-Inch Wheels, 4-Inch Wide Knobby Tires, 7-Speed, Steel Frame, Front and Rear Brakes, Multiple Colors"
            price={1484}
            rating={5}
            image=" https://images-na.ssl-images-amazon.com/images/I/91%2BJTy9sV2L._AC_SX679_.jpg"
          />
         
    </div>
      
    </div>
    </div>
    );
}

export default Home
