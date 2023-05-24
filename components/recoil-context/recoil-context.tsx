"use client";

import { RecoilRoot } from "recoil";

interface Props {
	children: React.ReactNode;
}

const RecoilContext = (props: Props) => {
	const { children } = props;

	return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContext;
