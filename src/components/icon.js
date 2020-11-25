import React from "react";
import {FaTimes, FaPen, FaRegCircle} from "react-icons/fa";

let Icon = ({name}) => {
	switch (name) {
		case "Circle":
			return <FaRegCircle className="icons" />;
			break;
		case "Cross":
			return <FaTimes className="icons" />;
			break;
		default:
			return <FaPen className="icons" />;
			break;
	}
};
export default Icon;
