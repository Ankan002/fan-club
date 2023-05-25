import { CustomTypeWriter } from "../elements";

const Hero = () => {
	return (
		<div className="h-screen w-full flex flex-col justify-center items-center font-quicksand">
			<h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-primary-yellow font-quicksand tracking-widest text-center">
				{"Content creation 🧑‍💻 is as simple as"}
			</h1>

			<CustomTypeWriter
				taglines={["Interaction", "Innovation", "Execution"]}
			/>
		</div>
	);
};

export default Hero;
