import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App.provider";

const IconMoon = () => {
	const {dark} = useContext(AppContext)


	return (
		<svg
			viewBox="0 0 24 24"
			width="24"
			height="24"
			stroke={dark ? 'none' : "currentColor"}
			strokeWidth="2"
			fill={dark ? '#FFF' : 'none'}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="moon moon-icon"
		>
            <title>Moon Icon</title>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
		</svg>
	);
};

export default IconMoon;
