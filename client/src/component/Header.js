import { React, useState, useEffect } from 'react'
import './header.css';
import { Link, useLocation } from "react-router-dom"
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';

function Header() {
    const [clicked, setclicked] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);

            // if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    const logout = () => {

        dispatch({ type: 'LOGOUT' });
        setUser(null);
    }

    return (
        <div>
            <nav
                className="bg-purple-400 hover:bg-slate-100 ease-in-out duration-700 hover:text-black md:flex justify-between content-around text-slate-100 px-7 py-2 md:px-14 md:py-5">
                <div className="flex justify-between gap-8">
                    <div className="w-10">
                        <div className="w-fit">
                            <Link to="/"><img className="p-0 m-0 h-full" src="/img/logo final.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className="flex justify-between gap-0.25">
                        <div className="text-xl md:text-xl relative">
                            <button className="dropdown-toggle" type="button" data-toggle="dropdown">Categories</button>
                            <div className="dropdown-menu hidden z-20 float-left py-2 mt-1 text-base text-gray-900 list-none text-left border border-gray-300 bg-white rounded shadow">
                                <a className="block w-full py-1 px-6 font-normal text-gray-900 bg-transparent border-0 hover:text-gray-900 hover:bg-gray-100" href="#">Action</a>
                                <a className="block w-full py-1 px-6 font-normal text-gray-900 bg-transparent border-0 hover:text-gray-900 hover:bg-gray-100" href="#">Another action</a>
                                <a className="block w-full py-1 px-6 font-normal text-gray-900 bg-transparent border-0 hover:text-gray-900 hover:bg-gray-100" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-solid border-2 bg-slate-100 border-black rounded-3xl w-92" style={{ height: "2rem" }}>
                    <div>
                        <form action="">
                            <input type="text" placeholder="Search..." className="rounded-3xl border-0 outline-none bg-slate-100 w-96" style={{ padding: "1px 10px" }} />
                        </form>
                    </div>
                </div>
                <div className="text-md md:text-xl md:px-10">
                    <ul className="md:flex list-none gap-8" id="nav-list">
                        <li className="hover:underline underline-offset-8">
                            <div className="flex justify-between gap-0.5">
                                <div className="hover:underline underline-offset-8"><Link to="/">Home</Link></div>
                                <div className="p-0.5">
                                    <button><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg></button>
                                </div>
                            </div>
                        </li>
                        <li className="hover:underline underline-offset-8">
                            <div className="flex justify-between gap-0.5"><Link to="/network"><div className="hover:underline underline-offset-8">Networks</div></Link>
                                <div className="p-0.5">
                                    <button><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg></button>
                                </div>
                            </div>
                        </li>
                        {user && (
                            <li className="">

                                <div className="flex justify-start gap-0.5">

                                    <button className="hover:underline underline-offset-8" onClick={logout}>Logout</button>

                                </div>
                                <div className="p-0.5">
                                </div>
                            </li>)}
                        <li className="">
                            <div className="flex justify-start gap-0.5">
                                {user ? (
                                    <button><Link to="/" className="hover:underline underline-offset-8">{user?.result.firstName} {user?.result.lastName}</Link></button>
                                ) : (
                                    <div>
                                        <button><Link to="/login" className="hover:underline underline-offset-8">Login</Link></button> /
                                        <button><Link to="/signup" className="hover:underline underline-offset-8">Sign up</Link></button>
                                    </div>
                                )}
                            </div>
                            <div className="p-0.5">
                            </div>
                        </li>
                    </ul>
                </div >
            </nav >
        </div >
    )
}

export default Header
