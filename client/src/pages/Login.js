import { React, useState } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { Link, useNavigate } from "react-router-dom";
import { signin } from '../action/auth';
import { useDispatch } from 'react-redux';

const initialState = { email: '', password: '' };

function Login() {

    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        dispatch(signin(form, history));
    }

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <div className='flex flex-col min-h-screen font-body grow'>
            <Header />
            <section className="">
                <main className="mx-auto text-lg">
                    <div className="w-fit">
                        <div className="h-full p-0 m-0 absolute">
                            <img src="/img/Untitled design.jpg" />
                            <Footer />
                        </div>
                    </div>
                </main>
            </section>
            <section className="">
                <main className="mx-auto px-5 py-5 pt-20 text-lg">
                    <div className="flex justify-end gap-52">
                        <div>
                            <div className="border-2 drop-shadow-lg  w-11/12">
                                <main className="bg-slate-100">
                                    <div className="flex justify-center pt-5">
                                        <form className="w-3/4" style={{ padding: "20px" }} onSubmit={handleSubmit}>
                                            <div className="flex justify-center text-3xl font-bold mb-6">
                                                <p>Sign In</p>
                                            </div>
                                            <div className="relative z-0 mb-6 w-full group">
                                                <input type="email" name="email" id="email" onChange={handleChange}
                                                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none   focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                                                    placeholder=" " required />
                                                <label for="floating_email"
                                                    className="absolute text-md text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                                                    address</label>
                                            </div>
                                            <div className="relative z-0 mb-6 w-full group">
                                                <input type="password" name="password" id="password" onChange={handleChange}
                                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none   focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                                                    placeholder=" " required />
                                                <label for="floating_password"
                                                    className="absolute text-md text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                            </div>
                                            <div className="grid xl:grid-cols-2 xl:gap-6">
                                                <div className="flex mt-6 mb-6">
                                                    <div className=" ml-3 text-sm">
                                                        <label for="terms" className="font-medium text-gray-900">Forgot Password? <div
                                                            className="text-teal-600 hover:underline">Click here</div>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" id="submit-button"
                                                className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Login</button>
                                        </form>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>

                </main>
            </section>
        </div>
    )
}

export default Login
