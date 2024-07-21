import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import { SetProductContext } from "../providers/ProductContext";

function Home() {
    const [element, setElement] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const { setProducts } = useContext(SetProductContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((res) => {
                setElement(res);
                console.log(res);
            });
    }, []);

    const handleAdd = (product) => {
        setProducts((prevState) => [...prevState, product]);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000)
    };

    //Utilizzato per aggiungere gli elementi al carrello tramite local storage
    // const addToCart = (item) => {
    //     let cart = JSON.parse(localStorage.getItem('cart')) || [];
    //     cart.push(item);
    //     localStorage.setItem('cart', JSON.stringify(cart));
    //     setShowAlert(true);
    //     setTimeout(() => setShowAlert(false), 3000);
    // };

    return (
        <>
            <Navbar currentPage='home'/>
            <div className="flex flex-wrap mt-8 gap-3 justify-evenly">
                {showAlert && (
                    <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4 fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
                        <div className="flex items-start gap-4">
                            <span className="text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>

                            <div className="flex-1">
                                <strong className="block font-medium text-gray-900">Item added to cart</strong>
                                <p className="mt-1 text-sm text-gray-700">Your product has been added to the cart.</p>
                            </div>

                            <button 
                                className="text-gray-500 transition hover:text-gray-600"
                                onClick={() => setShowAlert(false)}
                            >
                                <span className="sr-only">Dismiss popup</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
                {element.map((item) => (
                    <div key={item.id} className="group relative block overflow-hidden w-1/6">
                        <div className="flex flex-col h-full border border-gray-300 bg-white rounded-2xl">
                            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            onClick={() => handleAdd(item)}>
                                <span className="sr-only">Wishlist</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </button>

                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 bg-cover"
                            />

                            <div className="relative p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1.5 text-sm text-gray-700">{`€${item.price}`}</p>
                                </div>
                                <div className="mt-4">
                                    <button 
                                        onClick={() => handleAdd(item)} 
                                        className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
