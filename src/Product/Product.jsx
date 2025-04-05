import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import NavBar from '../Home/NavBar';
import './Product.css';
const Product = () => {
        // const param = useParams();
        // console.log({param})
        const locData = useLocation();
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


        return (
                <>
                        <NavBar />
                        <main className='ProductMain'>
                                <section className='ProductMainContainer'>

                                        <div className='ProductMain2ndContainer'>
                                                <div className={isMenuOpen ? 'ProductMain2ndContainerIn' : ''}>
                                                        {/* <i className="fa-regular fa-heart " /> */}
                                                        <i className="fa-solid fa-heart icon_product"></i>
                                                        <img src={locationData.imageUrl} alt={locationData.ProductName} className='ProductMainContainerImg' />

                                                        <div className={isMenuOpen ? 'ProductMain3rdContainerData' : 'ProductMainData'}>

                                                                <p>{locationData.productName}</p>
                                                                <div className='PriceContainer'>
                                                                        <h1>{locationData.productPrice}</h1>
                                                                        <p>{locationData.productMarketPrice}</p>
                                                                        <p>{locationData.productDiscount}</p>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur vel animi maiores quia mollitia optio ipsum similique aliquam non, voluptatibus soluta asperiores cum sunt sint rem sapiente reiciendis corporis.
                                                                                Cum fuga explicabo dolor sed saepe quos! Voluptatibus assumenda eligendi iste quasi, fugiat fuga perferendis ab doloribus dolor quia nulla eum pariatur odit consectetur quos, ipsum recusandae corrupti quibusdam quisquam?
                                                                                Neque, dicta animi in modi asperiores dolor suscipit magnam. Provident recusandae molestiae, repudiandae ullam repellendus debitis fuga optio assumenda animi quibusdam in, repellat deserunt a asperiores eum inventore quo est?</p>
                                                                </div>



                                                        </div>

                                                </div>

                                                <div className='ProductMainBtn'>
                                                        <button className='btnBuy'><i className="fa-solid fa-store"></i> Buy</button>
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

                                                {/* <p>{locationData.}</p> */}



                                        </div>


                                </section>
                        </main>

                </>
        )
}

export default Product;