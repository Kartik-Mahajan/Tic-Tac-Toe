//React Icon
import Icon from "./components/icon.js";

import React, {useState} from "react";
//Toastify
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Strap-
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Button, CardBody, Container, Col, Row} from "reactstrap";
import "./App.css";

//Starting with empty Array-
const itemArray = new Array(9).fill("empty");

let App = () => {
	//Checking the values Circle and Cross with just giving Boolean values
	const [isCross, setIsCross] = useState(false);

	//Decalaring the message
	const [winMessage, SetWinMessage] = useState("");

	const reloadGame = () => {
		setIsCross(false);
		SetWinMessage("");
		itemArray.fill("empty", 0, 9);
	};
	const checkIsWinner = () => {
		//First row
		if (
			itemArray[0] === itemArray[1] &&
			itemArray[1] === itemArray[2] &&
			itemArray[0] !== "empty"
		) {
			SetWinMessage(`${itemArray[0]} wins`);
			//Second row
		} else if (
			itemArray[3] === itemArray[4] &&
			itemArray[4] === itemArray[5] &&
			itemArray[3] !== "empty"
		) {
			SetWinMessage(`${itemArray[3]} wins`);
			//Third row
		} else if (
			itemArray[6] === itemArray[7] &&
			itemArray[7] === itemArray[8] &&
			itemArray[6] !== "empty"
		) {
			SetWinMessage(`${itemArray[6]} wins`);
			//First Column
		} else if (
			itemArray[0] === itemArray[3] &&
			itemArray[3] === itemArray[6] &&
			itemArray[0] !== "empty"
		) {
			SetWinMessage(`${itemArray[0]} wins`);
			//Second Column
		} else if (
			itemArray[1] === itemArray[4] &&
			itemArray[4] === itemArray[7] &&
			itemArray[1] !== "empty"
		) {
			SetWinMessage(`${itemArray[1]} wins`);
			//Third Column
		} else if (
			itemArray[2] === itemArray[5] &&
			itemArray[5] === itemArray[8] &&
			itemArray[2] !== "empty"
		) {
			SetWinMessage(`${itemArray[2]} wins`);
			//Left Diagonal
		} else if (
			itemArray[0] === itemArray[4] &&
			itemArray[4] === itemArray[8] &&
			itemArray[0] !== "empty"
		) {
			SetWinMessage(`${itemArray[0]} wins`);
			//Right Diagnoal
		} else if (
			itemArray[2] === itemArray[4] &&
			itemArray[4] === itemArray[6] &&
			itemArray[2] !== "empty"
		) {
			SetWinMessage(`${itemArray[2]} wins`);
		}
	};
	const chnageItem = (itemNumber) => {
		if (winMessage) {
			return toast(winMessage, {type: "success"});
		}
		if (itemArray[itemNumber] === "empty") {
			itemArray[itemNumber] = isCross ? "Cross" : "Circle"; //trenary Operator
			setIsCross(!isCross); //Flipping between cross and circle
		} else {
			return toast("Already Filled", {type: "error"});
		}
		checkIsWinner();
	};

	return (
		<Container className="p-5">
			<ToastContainer position="bottom-center" />
			<Row>
				<Col md={6} className="offset-md-3">
					{/* JS part 106-128*/}
					{winMessage ? (
						<div className="mb-2 mt-2">
							<h1 className="text-success text-uppercase text-center">
								{winMessage}
							</h1>
							<Button color="success" block onClick={reloadGame}>
								Click To reloadGame
							</Button>
						</div>
					) : (
						<h1 className="text-center text-warning">
							{isCross ? "Cross" : "Circle"} Turn
						</h1>
					)}
					<div className="grid">
						{itemArray.map((item, index) => (
							<Card color="warning" onClick={() => chnageItem(index)}>
								<CardBody className="box">
									<Icon name={item}></Icon>
								</CardBody>
							</Card>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default App;
