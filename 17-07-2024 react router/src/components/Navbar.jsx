import React from "react";
import { NavLink } from "react-router-dom"

function Navbar({currentPage}) {
	return (
		<div>
			<header className="bg-slate-200">
				<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<div className="md:flex md:items-center md:gap-12">
							<h1>E-commerce</h1>
						</div>

						<div className="hidden md:block">
							<nav aria-label="Global">
								<ul className="flex items-center gap-6 text-sm">
									<li className={`hover:scale-110 ease-out duration-300 ${currentPage === 'home' ? 'text-black font-bold' : '"text-gray-500'}`}>
										<NavLink
											className= "transition"
											to="/"
										>
											{" "}
											Home{" "}
										</NavLink>
									</li>

									<li className={`hover:scale-110 ease-out duration-300 ${currentPage === 'history' ? 'text-black font-bold' : '"text-gray-500'}`}>
										<NavLink
											className="transition"
											to="/history"
										>
											{" "}
											History{" "}
										</NavLink>
									</li>

									<li className={`hover:scale-110 ease-out duration-300 ${currentPage === 'favorites' ? 'text-black font-bold' : '"text-gray-500'}`}>
										<NavLink
											className="transition"
											to="/favorites"
										>
											{" "}
											Favorites{" "}
										</NavLink>
									</li>

									<li className={`hover:scale-110 ease-out duration-300 ${currentPage === 'cart' ? 'text-black font-bold' : '"text-gray-500'}`}>
										<NavLink className="transition" to="/cart">
											{" "}
											Cart{" "}
										</NavLink>
									</li>
								</ul>
							</nav>
						</div>

						<div className="flex items-center gap-4">
							<div className="sm:flex sm:gap-4">
								<a
									className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
									href="#"
								>
									Login
								</a>

								<div className="hidden sm:flex">
									<a
										className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
										href="#"
									>
										Register
									</a>
								</div>
							</div>

							<div className="block md:hidden">
								<button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Navbar;
