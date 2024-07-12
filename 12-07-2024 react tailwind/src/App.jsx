import imageCard from "./assets/image/images/image-equilibrium.jpg";
import user from "./assets/image/images/image-avatar.png";
function App() {
	return (
		<>
			<a
				href="#"
				className="block rounded-lg p-4 w-60 h-2/4 bg-[#15253F] shadow-2xl"
			>
				<img
					alt="logo"
					src={imageCard}
					className="h-56 w-full rounded-md object-cover"
				/>

				<div className="mt-2">
					<dl>
						<div>
							<dd className="text-[#F5FBFF] py-1.5 ">Equilibrium #3429</dd>
						</div>

						<div>
							<dt className="sr-only">Address</dt>

							<dd className="text-[#455876] py-1">
								Our Equilibrium collection promotes balance and calm.
							</dd>
						</div>
					</dl>

					<span className="flex items-center">
						<span className="h-px flex-1 bg-[#455876] mt-3"></span>
					</span>

					<div className="mt-6 flex items-center gap-8 text-xs">
						<div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 flex items-center">
							<img
								className="w-7 border-2 border-solid border-white rounded-full mr-2"
								src={user}
								alt="user"
							/>
							<p className="flex gap-2 text-[#455876] text-sm">
								Creation of
								<p className="text-[#F5FBFF] text-sm">Jules Wyvern</p>
							</p>
						</div>
					</div>
				</div>
			</a>
		</>
	);
}

export default App;
