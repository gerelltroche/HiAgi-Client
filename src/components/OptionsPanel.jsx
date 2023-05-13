import { useState } from "react";
import { Panel } from "reactflow";

export default function OptionsPanel() {
	const [isOpen, setIsOpen] = useState(false);
	console.log(!isOpen);

	const panelContent = !isOpen ? (
		<div onClick={() => setIsOpen(true)}>Open Menu</div>
	) : (
		<>
			<div onClick={() => setIsOpen(false)}>Close Menu</div>
			<div
				style={{
					color: "black",
					width: "300px",
					border: "1px solid #ccc",
					borderRadius: "4px",
					padding: "16px",
					backgroundColor: "#f9f9f9",
					boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
				}}
			>
				<div
					style={{
						padding: "5px",
						backgroundColor: "#f9f9f9"
					}}
					onClick={() => {
						addNode();
					}}
				>
					Add A Component
				</div>
				<div>---</div>
				<div
					style={{
						padding: "5px",
						backgroundColor: "#f9f9f9"
					}}
					onClick={() => {
						console.log("nodes", nodes);
						console.log("edges", edges);
					}}
				>
					Show State
				</div>
			</div>
		</>
	);

	return <Panel position="top-left">{panelContent}</Panel>;
}
