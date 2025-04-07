import React, {useEffect} from 'react'
import './OrderData.css'
import { useLocation } from 'react-router-dom';

const OrderData = () => {

        const locaData = useLocation()
        console.log(locaData.state);
        const product = locaData.state;


        // Function to update screen size
        const handleResize = () => {
                const width = window.innerWidth;
                alert("width is ", width);
        };

        useEffect(() => {
                window.addEventListener('resize', handleResize);

                // Cleanup the event listener on component unmount
                return () => {
                        window.removeEventListener('resize', handleResize);
                };
        }, []);

        return (<>

                <section className='OrderContainer'>

                        <form className='Order2ndContainer'>
                                <h2>Order Sumery</h2>
                                <div className='credentialContainer'>
                                        <label>Name:</label>
                                        <input type='text' />
                                </div>
                                <div className='credentialContainer'>
                                        <label>Srname:</label>
                                        <input type='text' />
                                </div>
                                <div className='credentialContainer'>
                                        <label>Address:</label>
                                        <input type='text' />
                                </div>
                                <div className='credentialContainer'>
                                        <label>PinCode:</label>
                                        <input type='text' />
                                </div>
                                <div className='credentialContainer'>
                                        <label>LandMark:</label>
                                        <input type='text' />
                                </div>
                                <div className='credentialContainer'>
                                        <label>Phone:</label>
                                        <input type='tel' />
                                </div>
                                <div className='productINFO'>

                                        <div className='OrdercardImage'>
                                                <img src={product.img} className='CardImage' />
                                        </div>
                                        <div className='productINFO2'>
                                                <div className='productDetails'>
                                                        <p>{product.name}</p>
                                                        <p>Product Price</p>
                                                        <p>Delivery Charge</p>
                                                </div>
                                                <div className='product2ndDetails'>
                                                        <p><br /></p>
                                                        <p>{product.price}</p>
                                                        <p>0</p>
                                                </div>
                                        </div>


                                </div>
                                <div className='credentialContainer'>
                                        <label><h3>Total:</h3></label>
                                        <label><h3>{product.price}</h3></label>
                                </div>
                                <div className='credentialSubmitContainer'>
                                        <button type='submit'>Place Order</button>
                                </div>

                        </form>

                </section>

        </>)
}

export default OrderData;