import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import './main.css'

const Main = () => {
    return (
        <div className='flex flex-col min-h-screen font-body grow'>
            <Header />
            <section className="">
                <div className="mx-auto px-10 py-5 text-lg">
                    <div>
                        <div className="bg-white leading-normal tracking-normal m-0.5 sm:m-2 w-auto sm:ml-20 sm:mr-5">
                            <div className="carousel relative shadow-2xl bg-black">
                                <div className="carousel-inner relative overflow-hidden" style={{backgroundColor:"#ede9fe"}}>
                                    <input className="carousel-open" style={{display:"none"}} type="radio" id="carousel-1"
                                        name="carousel" aria-hidden="true" hidden="" checked="checked" />
                                    <div className="carousel-item absolute opacity-0 w-fit flex justify-between gap-4"
                                        style={{height:"60vh"}}>
                                        <img className="block bg-black h-full" src="/img/explore1.jpg" alt="" />
                                        <div className="p-10 pt-17" >
                                            <p className="larger-p">Search your best partners for different projects and explore various domains of your interest easily!</p>
                                        </div>
                                    </div>
                                    <label for="carousel-3"
                                        className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                                    <label for="carousel-2"
                                        className="next control-1 w-10 h-10 mr-3 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
                                    <input className="carousel-open" style={{display:"none"}} type="radio" id="carousel-2"
                                        name="carousel" aria-hidden="true" hidden="" checked="checked" />
                                    <div className="carousel-item bg-#ede9fe absolute opacity-0 w-fit flex justify-between"
                                        style={{height:"60vh"}}>
                                        <img className="block bg-black h-full" src="/img/peers.jpg" alt="" />
                                        <div className="p-10 pt-17" >
                                            <p className="larger-p">Connect and Chat with your peers!</p>
                                        </div>
                                    </div>
                                    <label for="carousel-1"
                                        className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                                    <label for="carousel-3"
                                        className="next control-2 w-10 h-10 mr-3 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
                                    <input className="carousel-open" style={{display:"none"}} type="radio" id="carousel-3"
                                        name="carousel" aria-hidden="true" hidden="" checked="checked" />
                                    <div className="carousel-item bg-#ede9fe absolute opacity-0 w-fit flex justify-between"
                                        style={{height:"60vh"}}>
                                        <img className="block bg-black h-full" src="/img/progress.jpg" alt="" />
                                        <div className="p-10 pt-17" >
                                            <p className="larger-p">Track your progress based on contributions in your timeline!</p>
                                        </div>
                                    </div>
                                    <label for="carousel-2"
                                        className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                                    <label for="carousel-1"
                                        className="next control-3 w-10 h-10 mr-3 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
                                    <ol className="carousel-indicators">
                                        <li className="inline-block mr-3">
                                            <label for="carousel-1"
                                                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                                        </li>
                                        <li className="inline-block mr-3">
                                            <label for="carousel-2"
                                                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                                        </li>
                                        <li className="inline-block mr-3">
                                            <label for="carousel-3"
                                                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div style={{color:"#a855f7"}}>
                            <h1 className="p-35 pt-10 pb-10 mt-10 mb-2 text-center capitalize font-semibold text-4xl">Best place to find collaboration for your team and individual projects!</h1>
                        </div>
                   
                    <div className="grid grid-cols-3 lg:gap-3 justify-items-center">
                        <div className="py-10">
                            <div className="rounded overflow-hidden shadow-lg max-w-sm ">
                                <div className="w-fit">
                                    <img src="/img/collab.jpg" alt="collab-pic" className="w-full" />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">
                                        Collaboration
                                    </div>
                                    <p className="text-gray-600">
                                        Find a group of people who challenge and inspire you, spend a lot of time with
                                        them, and it will change your life.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="py-10">
                            <div className="rounded overflow-hidden shadow-lg max-w-sm ">
                                <div className="w-fit">
                                    <img src="/img/explore.jpg" alt="inspire-pic" className="h-full" />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">
                                        Inspire
                                    </div>
                                    <p className="text-gray-600">
                                        Workplace collaboration can increase successful innovation by 15%.We inspire and
                                        help you do that.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="py-10">
                            <div className="rounded overflow-hidden shadow-lg max-w-sm">
                                <div className="w-fit">
                                    <img src="/img/vision.jpg" alt="vision-pic" className="h-full" />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">
                                        Vision
                                    </div>
                                    <p className="text-gray-600">
                                        Vision without action is merely a dream. Action without vision just passes the
                                        time. Vision with action can change the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Main
