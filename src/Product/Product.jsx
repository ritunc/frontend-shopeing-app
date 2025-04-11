import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import NavBar from '../Home/NavBar';
import './Product.css';
import dayjs from 'dayjs';
const Product = () => {

        const navigate = useNavigate() //

        const bole = useSelector(state => state.boolean);

        // const param = useParams();
        // console.log({param})
        const locData = useLocation(); //coming data from Home-main
        let locationData = locData.state;
        console.log("locData::", locationData);

        const [screenSize, setScreenSize] = useState(window.innerWidth);
        const [isMenuOpen, setIsMenuOpen] = useState(false);



        // Function to update screen size
        const handleResize = () => {
                const width = window.innerWidth;
                setScreenSize(width); // Update the state
        };

        // Add resize event listener
        useEffect(() => {
                window.addEventListener('resize', handleResize);

                // Cleanup the event listener on component unmount
                return () => {
                        window.removeEventListener('resize', handleResize);
                };
        }, []); // Empty dependency array ensures this runs only once on mount

        // Log the updated screenSize whenever it changes
        useEffect(() => {
                console.log("Updated Screen Width:", screenSize);
                if (screenSize <= 645) {
                        setIsMenuOpen(true);
                        console.log("We Entered");
                } else {
                        setIsMenuOpen(false);
                        console.log("We not Entered");

                }
        }, [screenSize]); // This effect runs whenever screenSize changes


        const now = dayjs();
        const withIn2_DAY = now.add(2, 'day');
        console.log(withIn2_DAY.format('D MMMM, dddd, YYYY'));
        return (
                <>
                        <NavBar />
                        <main className='ProductMain'>
                                <section className='ProductMainContainer'>

                                        <div className='ProductMain2ndContainer'>
                                                <div className={isMenuOpen ? 'ProductMain2ndContainerIn' : ''}>
                                                        {/* <i className="fa-regular fa-heart " /> */}
                                                        <i className="fa-solid fa-heart icon_product" ></i>
                                                        <img src={locationData.imageUrl} alt={locationData.ProductName} className='ProductMainContainerImg' />

                                                        <div className={isMenuOpen ? 'ProductMain3rdContainerData' : 'ProductMainData'}>

                                                                <p>{locationData.productName}</p>
                                                                <p><span style={{ color: 'gray' }}>#JustHere</span></p>
                                                                <div className='PriceContainer another1'>
                                                                        <p className='Ratebox'>{locationData.productRate}.9 <i className="fa-solid fa-star fa-small"></i></p>
                                                                        <br />
                                                                        <p>6,9000</p>
                                                                        <p>Rating &</p>
                                                                        <p>3,7899</p>
                                                                        <p>Reviews</p>

                                                                </div>
                                                                <div className='PriceContainer'>
                                                                        <h1>&#8377;{locationData.productPrice}</h1>
                                                                        <p><span style={{ textDecoration: "line-through", color: 'gray' }}>&#8377;{locationData.productMarketPrice}</span></p>
                                                                        <p><span style={{ color: 'green' }}>{locationData.productDiscount} off</span></p>
                                                                </div>
                                                                <p><span style={{ color: '#1ea7c0' }}><i className="fa-solid fa-truck"></i></span> <span style={{ fontWeight: 'bold' }}> FREE </span>Delivery <span style={{ textDecoration: "line-through", color: 'gray', fontSize: '0.8rem' }}>&#8377;40</span></p>
                                                                <p style={{ fontSize: '0.8rem' }}>Secure delivery by {withIn2_DAY.format('D MMMM, dddd, YYYY')}</p>



                                                        </div>

                                                </div>

                                                <div className={isMenuOpen ? 'ProductMainData' : 'ProductMainBtn'}>
                                                        <button className='btnBuy' onClick={() => navigate('/order', { state: { img: locationData.imageUrl, name: locationData.productName, price: locationData.productPrice, id: locationData.productID } })}><i className="fa-solid fa-store"></i> Buy</button>
                                                        <button className='btnAddToCart'><i className="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                                                </div>
                                        </div>

                                        <div className={isMenuOpen ? 'ProductMainData' : 'ProductMain3rdContainerData'}>

                                                <p>{locationData.productName}</p>
                                                <div className='PriceContainer'>
                                                        <h1>{locationData.productPrice}</h1>
                                                        <p>{locationData.productMarketPrice}</p>
                                                        <p>{locationData.productDiscount}</p>
                                                </div>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Itaque assumenda suscipit ad eius facilis. Accusamus laudantium
                                                        ad magnam vitae, accusantium quibusdam tempora ullam quasi
                                                        aliquam iusto nesciunt totam, sed maxime?
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptate explicabo eos quis deleniti harum sint
                                                        sequi, illo, ut in totam voluptatum temporibus exercitationem
                                                        architecto alias veniam eum soluta perspiciatis.
                                                        Culpa voluptatibus quis eos nobis minus quibusdam
                                                        aliquam odio minima maxime consequatur dolorum, cupiditate
                                                        modi et! Dolorem, esse repellat. Explicabo esse
                                                        mollitia tenetur? Incidunt itaque atque, ad id pariatur veniam.
                                                </p>

                                                {/* <p>{locationData.}</p> */}



                                        </div>


                                </section>
                        </main>
                        <footer className={isMenuOpen ? 'ProductMainBtn' : 'ProductMainData'}>
                                <button className='btnAddToCart'><i className="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                                <button className='btnBuy' onClick={() => navigate('/order', { state: { img: locationData.imageUrl, name: locationData.productName, price: locationData.productPrice, id: locationData.productID } })}><i className="fa-solid fa-store"></i> Buy</button>
                        </footer>

                </>
        )
}

export default Product;