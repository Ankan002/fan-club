"use client";

import { FaChevronDown } from "react-icons/fa";

interface Props {
	target: string;
}

const ChevronButton = (props: Props) => {
    const { target } = props;

	return (
		<button
			className="animate-bounce mb-10"
			onClick={() => (location.href = target)}
		>
			<FaChevronDown className="text-primary-orange hover:text-purple text-2xl" />
		</button>
	);
};

export default ChevronButton;
