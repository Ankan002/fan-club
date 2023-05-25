"use client";

import { Typewriter } from "react-simple-typewriter";

interface Props {
	taglines: Array<string>;
}

const CustomTypeWriter = (props: Props) => {
	const { taglines } = props;

	return (
		<p className="text-center mt-4 lg:text-8xl md:text-6xl text-4xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cobalt-blue via-purple to-vermilion">
			<Typewriter
				words={taglines}
				loop={0}
				cursor={true}
				cursorColor="transparent"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1000}
			/>
		</p>
	);
};

export default CustomTypeWriter;
