import React, { useState, useEffect } from 'react'
import './OrderData.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderData = () => {
        
        const locaData = useLocation();
        const navigate = useNavigate();
        console.log("First:::",locaData.state);
        let product;
        if(locaData.state){
                product = locaData.state;
                console.log("Entereddd::::")
                
        }
        console.log("Hello:::",product)
        const [orderCredential, setorderCredential] = useState({ name: "", srname: "", address: "", pinCode: "", landmark: "", phone: "", id: "", imgs: "", productName: "", price: "" });
        // console.log("product::", product)
        
        // orderCredential.img = product.img;
        // console.log("ImagesNot:::",orderCredential.img)

        const store = () => {

                console.log("Hello Sir..")




                orderCredential.id = product?.id;

                orderCredential.productName = product?.name;
              
                orderCredential.price = product?.price;

                orderCredential.imgs = product?.img;
                console.log("ImagesNot:::",orderCredential)

        }
        useEffect(store, [])

     
        const credentialToHook = (e) => {

              let name = e.target.name;
               let value = e.target.value;

                setorderCredential({ ...orderCredential, [name]: value });
        }

        const CustomerOrdersendTOserver = async (e) => {

                e.preventDefault();
                console.log("ImagesNot222:::",orderCredential);

                try {
                        const res = await axios.post("https://shopeing-customer-order.vercel.app/customerOrder", orderCredential, {
                                headers: { "Content-Type": "application/json" }
                        });
                        console.log("response::::",res)
                        if(res.statusText === "OK") {
                                // navigate('/')
                                alert(res.data.message);
                        }

                } catch (error) {

                        console.log("Some Error occure to sended orderRequest::",error.message);

                }

        }



        return (<>

                <section className='OrderContainer'>

                        <form className='Order2ndContainer'>
                                <h2>Order Summery</h2>
                                <div className='credentialContainer'>
                                        <label>Name:</label>
                                        <input type='text' name='name' value={orderCredential.name} onChange={credentialToHook} />
                                </div>
                                <div className='credentialContainer'>
                                        <label>Srname:</label>
                                        <input type='text' name='srname' value={orderCredential.srname} onChange={credentialToHook} />
                                </div>
                                <div className='credentialContainer'>
                                        <label>Address:</label>
                                        <input type='text' name='address' value={orderCredential.address} onChange={credentialToHook} />
                                </div>
                                <div className='credentialContainer'>
                                        <label>Pin-Code:</label>
                                        <input type='text' name='pinCode' value={orderCredential.pinCode} onChange={credentialToHook} />
                                </div>
                                <div className='credentialContainer'>
                                        <label>LandMark:</label>
                                        <input type='text' name='landmark' value={orderCredential.landmark} onChange={credentialToHook} />
                                </div>
                                <div className='credentialContainer'>
                                        <label>Phone:</label>
                                        <input type='tel' name='phone' value={orderCredential.phone} onChange={credentialToHook} />
                                </div>
                                <div className='productINFO'>

                                        <div className='OrdercardImage'>
                                                <img src={product?.img} className='CardImage' />
                                        </div>
                                        <div className='productINFO2'>
                                                <div className='productDetails'>
                                                        <p>{product?.name}</p>
                                                        <p>Product Price</p>
                                                        <p>Delivery Charge</p>
                                                </div>
                                                <div className='product2ndDetails'>
                                                        <p><br /></p>
                                                        <p>{product?.price}</p>
                                                        <p>0</p>
                                                </div>
                                        </div>


                                </div>
                                <div className='credentialContainer'>
                                        <label><h3>Total:</h3></label>
                                        <label><h3>{product?.price}</h3></label>
                                </div>
                                <div className='credentialSubmitContainer'>
                                        <button type='submit' onClick={CustomerOrdersendTOserver}>Place Order</button>
                                </div>

                        </form>

                </section>

        </>)
}

export default OrderData;