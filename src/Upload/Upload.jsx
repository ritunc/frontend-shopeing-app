import React, { useState, useEffect } from "react";
import axios from "axios"


const Upload = () => {

        const [image, setImage] = useState(null);
        const [preview, setPreview] = useState(null);
        const [images, setImages] = useState([]);

        const [productInfo, setProductInfo] = useState({
                productID: "", productPrice: "",
                productName: "", productRate: "", productDiscount: "", productMarketPrice: "",
        });







        const fetchImages = async () => {
                try {
                        // console.log("Before:::");
                        const res = await axios.get("https://backend-product-server.vercel.app/images");
                        // console.log("After::",res.data)
                        setImages(res.data);
                } catch (error) {
                        console.error("Error fetching images", error);
                }
        };


        // useEffect(() => {

        //         fetchImages();
        //        
        // }, [])





        const handleFileChange = (e) => {
                setImage(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
        };

        const handleProductInfo = (e) => {
                let name = e.target.name;
                let value = e.target.value;
                setProductInfo({ ...productInfo, [name]: value });
        }


        /*const handleUpload = async () => {
                const formData = new FormData();
                formData.append("image", image);

                try {
                        const res = await axios.post("http://localhost:6079/uploadImage", formData, {
                                headers: { "Content-Type": "multipart/form-data" }
                        });
                        console.log(res.data);
                        setImages([...images, res.data]);

                        // fetchImages();
                } catch (error) {
                        console.error("Error uploading image", error);
                }
        };*/

   


        const handleUpload = async () => {
                const formData = new FormData();
                formData.append("image", image);

                const generate = () => {
                        const time = new Date();
                        const min = time.getMinutes();
                        const sec = time.getSeconds();
                        console.log((min * sec) ** 4);
                        const Rendome = (min * sec) ** 4;
                        if (Rendome === 0) {
                                generate();
                                console.log("It's zero ");
                        }
                        productInfo.productID = (min * sec) ** 4;
                }
                generate()


                console.log("After ID generate",productInfo);

                console.log("We entered");

                try {
                        const responses = await Promise.allSettled([
                                await axios.post("https://backend-product-server.vercel.app/uploadImage", formData, {
                                        headers: { "Content-Type": "multipart/form-data" }
                                }),
                                await axios.post("https://backend-product-server.vercel.app/productInfo", productInfo, {
                                        headers: { "Content-Type": "application/json" }
                                })

                        ])

                        responses.forEach((result, index) => {


                                if (result.status === 'fulfilled') {
                                        console.log(`Request ${index + 1} succeeded:`, result.value.data);


                                } else {
                                        console.error(`Request ${index + 1} failed:`, result.reason.message);
                                }
                                console.log("result22:::", productInfo)
                        });


                } catch (error) {
                        console.error('Unexpected error:', error);
                }
        }


        // fetchImages();


        return (
                <>
                        <div>
                                <h2>Upload an Image</h2>
                                <input type="file" onChange={handleFileChange} />
                                {/* <input type="text" name="productID" value={productInfo.productID} placeholder="productID" onChange={handleProductInfo} /> */}
                                <input type="text" name="productPrice" value={productInfo.productPrice} placeholder="productPrice" onChange={handleProductInfo} />
                                <input type="text" name="productName" value={productInfo.productName} placeholder="productName" onChange={handleProductInfo} />
                                <input type="text" name="productRate" value={productInfo.productRate} placeholder="productRate" onChange={handleProductInfo} />
                                <input type="text" name="productDiscount" value={productInfo.productDiscount} placeholder="productDiscount" onChange={handleProductInfo} />
                                <input type="text" name="productMarketPrice" value={productInfo.productMarketPrice} placeholder="productMarketPrice" onChange={handleProductInfo} />
                                {preview && <img src={preview} alt="preview" width="200" />}
                                <button onClick={handleUpload}>Upload</button>

                                <h2>Uploaded Images</h2>
                                {images.map((img, index) => {
                                        // console.log("img::", img)
                                        return (
                                        <img key={index} src={img.imageUrl} alt="uploaded" width="200" />
                                    )
                                })
                                }
                        </div>
                </>
        )
}

export default Upload;