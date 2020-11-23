import React from "react";
import {FaTimes, FaPen, FaRegCircle} from "react-icons/fa";
// import {CgAdidas} from "react-icons/cg";

// let Icon = ({name}) => {
// 	return (
// 		<div>
// 			<p>
// 				<FaTimes className="icon" />
// 			</p>
// 			<p>
// 				{(name = "Pen")}
// 				<FaPen className="icon" />
// 			</p>
// 			<p>
// 				<FaRegCircle className="icon" />
// 			</p>
// 			<p>
// 				<CgAdidas className="icon" />
// 			</p>
// 		</div>
// 	);
// };
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
