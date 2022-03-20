import { React, useState } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signuphere } from '../action/auth';

const Signup2 = () => {
    const location = useLocation();
    const [form, setForm] = useState(location.state);
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        dispatch(signuphere(form, history));
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
                                                <p>Add More Details</p>
                                            </div>
                                            <div className="relative z-0 mb-6 w-full group">
                                                <input type="text-area" name="about" id="about" onChange={handleChange}
                                                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none   focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                                                    placeholder=" " required />
                                                <label for="about"
                                                    className="absolute text-md text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">About You</label>
                                            </div>
                                            <div className="relative z-0 mb-6 w-full group">
                                                <input type="number" name="experience" id="experience" onChange={handleChange}
                                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none   focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                                                    placeholder=" " required />
                                                <label for="experience"
                                                    className="absolute text-md text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Experience(in Years)</label>
                                            </div>
                                            <div className="relative z-0 mb-6 w-full group">
                                                <input type="text" name="domain" id="domain" onChange={handleChange}
                                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none   focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                                                    placeholder=" " required />
                                                <label for="domain"
                                                    className="absolute text-md text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Domains Expertise</label>
                                            </div>
                                            <div className="relative z-0 mb-6 w-full group">
                                                <input type="text" name="projects" id="projects" onChange={handleChange}
                                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none   focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                                                    placeholder=" " required />
                                                <label for="projects"
                                                    className="absolute text-md text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Projects Made</label>
                                            </div>
                                            <div className="grid xl:grid-cols-2 xl:gap-6">
                                                <div className="relative z-0 mb-6 w-full group">
                                                    <input type="text" name="linkedin" id="linkedin" onChange={handleChange}
                                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none   focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                                                        placeholder=" " required />
                                                    <label for="linkedin"
                                                        className="absolute text-md text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">LinkedIn</label>
                                                </div>
                                                <div className="relative z-0 mb-6 w-full group">
                                                    <input type="text" name="github" id="github" onChange={handleChange}
                                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none   focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                                                        placeholder=" " required />
                                                    <label for="github"
                                                        className="absolute text-md text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">GitHub</label>
                                                </div>
                                            </div>
                                            {/* <div className="relative z-0 mb-6 w-full group">
                                                <input type="file" name="resume" id="resume"
                                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none   focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                                                    placeholder=" " required />
                                                <label for="projects"
                                                    className="absolute text-md text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Upload Resume:</label>
                                            </div> */}
                                            <div className="grid xl:grid-cols-2 xl:gap-6">
                                                <div className="flex mt-6 mb-6">
                                                    <div className="flex items-center h-5">
                                                        <input id="terms" aria-describedby="terms" type="checkbox"
                                                            className="w-4 h-4 bg-gray-50 rounded border border-slate-900 focus:ring-3 focus:ring-teal-300"
                                                            required />
                                                    </div>
                                                    <div className=" ml-3 text-sm">
                                                        <label for="terms" className="font-medium text-gray-900">I agree
                                                            with the <div
                                                                className="text-teal-600 hover:underline">terms and
                                                                conditions</div></label>
                                                    </div>
                                                </div>

                                            </div>
                                            <button type="submit" id="submit-button"
                                                className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Register Yourself</button>
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

export default Signup2
