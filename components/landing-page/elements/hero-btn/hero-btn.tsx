"use client";

import { MouseEvent } from "react";

interface Props {
	onClick: (e: MouseEvent<HTMLButtonElement>) => void;
	title: string;
}

const HeroBtn = (props: Props) => {
	const { onClick, title } = props;

	return (
		<button
			onClick={onClick}
			className={
				"px-5 py-1 border-2 border-vermilion rounded-md text-3xl bg-clip-text text-transparent bg-gradient-to-r from-cobalt-blue via-purple to-vermilion hover:from-vermilion hover:via-purple hover:to-cobalt-blue"
			}
		>
			{title}
		</button>
	);
};

export default HeroBtn;
