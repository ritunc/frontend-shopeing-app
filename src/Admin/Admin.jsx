import React, { useState } from "react";
import axios from "axios";
import './Admin.css';
import Cookies from "js-cookie";

const USER_DATA_URL = process.env.REACT_APP_USER_DATA_URL;

console.log("USER_DATA_URL:::", USER_DATA_URL);

const Admin = () => {
        const [Data, setData] = useState({ UserName: "", Name: "", SirName: "", email: "", passWord: "" });
        const [LogInData, setLogInData] = useState({ email: "", password: "" });
        const [active, setactive] = useState(false);


        let name, value;
        const sendUserID = (e) => {
                name = e.target.name;
                value = e.target.value;

                setData({ ...Data, [name]: value });
        }

        let name2, value2;
        const sendLogInID = (e) => {
                name2 = e.target.name;
                value2 = e.target.value;

                setLogInData({ ...LogInData, [name2]: value2 });
        }

        const sendSignUpDataToDatabase = async (e) => {
                e.preventDefault();

                try {

                        // const USER_DATA_URL = process.env.REACT_APP_USER_DATA_URL;
                        // if (!USER_DATA_URL) {
                        //         console.error("USER_DATA_URL is undefined. Check your .env file.");
                        //         return;
                        // }

                        const response = await axios.post(`https://shopeing-user-auth.vercel.app/SignUp`, Data, { headers: { "Content-Type": "application/json" } });

                        console.log("Data::::", response);

                        alert(response.data.message);

                } catch (error) {

                        console.error("Error in sign-up request:", error.response ? error.response.data : error.message);
                        
                }
        }
        
        const sendLogInDataToDatabase = async (e) => {
                e.preventDefault();
                try {
                        
                        // const USER_DATA_URL = process.env.REACT_APP_USER_DATA_URL;
                        // if (!USER_DATA_URL) {
                        //         console.error("USER_DATA_URL is undefined. Check your .env file.");
                        //         return;
                        // }

                        const response = await axios.post(`https://shopeing-user-auth.vercel.app/LogInData`, LogInData,
                                {
                                        headers: { "Content-Type": "application/json" },
                                        withCredentials: true  /* The cookie is sent automatically in future requests (if withCredentials: true is enabled in Axios). */
                                }
                        );
                        // const token = Cookies.get("uid"); // Retrieve cookie
                        // console.log("Token:", token);
                        
                        // console.log("response:::::", response, "cookie::::", document.cookie);
                        alert(response.data.message);
                        
                        
                } catch (error) {
                        console.error("Error in LogIn request:", error.response ? error.response.data : error.message);

                }

        }


        /*Toggle Flip LogIn to SignUp and SignUp to LogIn */
        const toggle = () => {
                if (active) {
                        console.log("active");

                        setactive(false);
                } else {
                        console.log("Inactive");
                        setactive(true);
                }
        }

        return (
                <>
                        <section className="AdminContainer">
                                {
                                        active ? <form className="Admmin2ndContainer">
                                                <h1>SignUp</h1>
                                                <input type="text" name="UserName" value={Data.UserName} onChange={sendUserID} placeholder="UserName" />
                                                <input type="text" name="Name" value={Data.Name} onChange={sendUserID} placeholder="Name" />
                                                <input type="text" name="SirName" value={Data.SirName} onChange={sendUserID} placeholder="SirName" />
                                                <input type="email" name="email" value={Data.email} onChange={sendUserID} placeholder="E-mail" />
                                                <input type="password" name="passWord" value={Data.passWord} onChange={sendUserID} placeholder="password" />
                                                <button type="submit" onClick={sendSignUpDataToDatabase}>Submit</button>
                                                <button type="submit" onClick={toggle}>Log In</button>
                                        </form> : <form className="Admmin2ndContainer">
                                                <h1>LogIn</h1>
                                                <input type="email" name="email" value={LogInData.email} onChange={sendLogInID} placeholder="E-mail" />
                                                <input type="password" name="password" value={LogInData.password} onChange={sendLogInID} placeholder="password" />
                                                <button type="submit" onClick={sendLogInDataToDatabase}>Submit</button>
                                                <button type="submit" onClick={toggle}>Create Account</button>
                                        </form>
                                }



                        </section>

                </>
        )
}

export default Admin;