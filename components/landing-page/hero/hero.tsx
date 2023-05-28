"use client";

import { CustomTypeWriter, HeroBtn } from "../elements";

const Hero = () => {
	return (
		<div className="h-screen w-full flex flex-col font-quicksand">
			<div className="flex-1 w-full flex flex-col justify-center items-center">
				<h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-primary-yellow font-quicksand tracking-widest text-center">
					{"Content creation 🧑‍💻 is as simple as"}
				</h1>

				<CustomTypeWriter
					taglines={["Interaction", "Innovation", "Execution"]}
				/>

				<div className="w-full flex items-center justify-center mt-12">
					<HeroBtn
						title="Get Started"
						onClick={() => console.log("Hello")}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
