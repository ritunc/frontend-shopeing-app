import React, { useState, useEffect } from "react";
import image from "./logo2.png";
// import productImage from "./greenImage.png";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { boolean } from "../redux/Slices/Boolean/Boolean";
import { cookie_Convert } from "../redux/Slices/Boolean/String_Data";
import { LikeCount } from '../redux/Slices/Boolean/wishList'

const Main = () => {

        const [item, setItem] = useState([]);
        const navigate = useNavigate();


        const bool = useSelector(state => state.boolean);
        const cookieConv = useSelector(state => state.cookiConvert);
        const likeCount = useSelector(state => state.likeCount);
        console.log("LikeCount::", likeCount) //Pending to set
        const dispatch = useDispatch();

        console.log("Booleannn::::", bool, "\n", "CookieConvert::::", cookieConv);






        //https://backend-product-server.vercel.app
        //http://localhost:6079

        useEffect(() => {

                const fetchData = async () => {

                        const response = await axios.get("https://backend-product-server.vercel.app/product", {
                                headers: { "Content-Type": "application/json" }
                        });

                        setItem(response.data);



                        //Access the cookie from browser and then send to server to verify
                        const cooki = Cookies.get("uid");
                        const Cookie = {
                                Cookie_data: cooki,
                        }
                        console.log("Cookies:::", cooki);

                        if (cooki) {
                                alert("Please fill the form")

                                const response2 = await axios.post("https://shopeing-user-auth.vercel.app/cookieVerify", Cookie, {
                                        headers: { "Content-Type": "application/json" }
                                });

                                console.log("response2:::", response2);
                                if (response2.data.Boolean.boole && response2.data.Boolean.cookie_verify_data) {

                                        console.log("Hello we Entered:::");
                                        // console.log("userName:::", response2.data.Boolean.cookie_verify_data.userName,"email:::",response2.data.Boolean.cookie_verify_data.email);
                                        dispatch(boolean({ boole: response2.data.Boolean.boole }));
                                        dispatch(cookie_Convert({ userName: response2.data.Boolean.cookie_verify_data.userName, email: response2.data.Boolean.cookie_verify_data.email }));

                                } else if (response2.data.Boolean) {

                                        dispatch(boolean({ boole: response2.data.Boolean }));
                                }

                        }

                }

                fetchData();


        }, []);

        // console.log("Card::Data:", item[0].imageUrl);  
        // console.log("Card::Data:", item.length > 0 ? item[0].imageUrl : "No data yet");
        // useEffect(() => {
        //         console.log("Updated Card Data:", item); // This runs AFTER state updates
        // }, [item]);

        const addItem = async (curElem) => {


                // console.log("productName", productName, "productID::", productID);
                const { imageUrl, productDiscount, productID, productMarketPrice, productName, productPrice, productRate } = curElem;
                // console.log("All Element:::", imageUrl, productDiscount);

                const Like_Product_data = {
                        imageUrl, productDiscount, productID, productMarketPrice, productName, productPrice, productRate, cookieConv,
                }

                if (bool === true) {

                        const Like_response = await axios.post("http://localhost:6082/wishlist", Like_Product_data, { headers: { "Content-Type": "application/json" } })
                        console.log("wishList_Length:::", Like_response.data.wishList_Length)
                        dispatch(LikeCount({ LikeNum: Like_response.data.wishList_Length }))
                } else {

                        alert("Please LogIn First")
                }

        }

        return (
                <>
                        <main className="HomeMain">
                                <section className="HomeMain1stsection">
                                        <div className="textContainer">
                                                <h1>Get a Best Deal</h1>
                                                <h3>To Shoping with us</h3>
                                                <button className="HomeMainbtn">Get Started</button>
                                                <button className="HomeMainLogInbtn" onClick={() => navigate("/admin")}>LogIn</button>
                                        </div>
                                        <img src={image} alt={image} className="mainimage" />
                                </section>
                                <section className="HomeMain2ndtsection">

                                        {
                                                item ?

                                                        item.map((curElem, index) => {
                                                                // console.log("inside",curElem.imageUrl,curElem.productName);
                                                                // console.log(curElem);


                                                                return (
                                                                        <>
                                                                                <Link to={`/product`} state={curElem} className="card" onClick={(e) => { if (e.target.tagName === "I") e.preventDefault() }}>

                                                                                        <img src={curElem.imageUrl} className="cardImage" />
                                                                                        <div className="HomeMainCardTextContainer">
                                                                                                <p>{curElem.productName} </p>
                                                                                                <i className="fa-solid fa-heart icons" onClick={() => addItem(curElem)} />
                                                                                        </div>

                                                                                </Link>
                                                                        </>
                                                                )

                                                        })
                                                        // console.log("Data is present")

                                                        :
                                                        // console.log("Data is not present"),

                                                        <p>Loading...</p>

                                        }






                                </section>
                        </main>
                </>

        )
}

export default Main;