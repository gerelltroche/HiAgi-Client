import React, { useCallback } from "react";
import ReactFlow, {
	Controls,
	useEdgesState,
	useNodesState,
	addEdge,
	Background
} from "reactflow";
import OptionsPanel from "./components/optionsPanel";
import "reactflow/dist/style.css";

const initialNodes = [
	{
		id: "1",
		position: { x: 0, y: 0 },
		data: { label: "1hello" },
		type: "input"
	},
	{ id: "2", position: { x: 0, y: 100 }, data: { label: "2world" } }
];

const initialEdges = [];

function App() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(connection) => setEdges((eds) => addEdge(connection, eds)),
		[setEdges]
	);

	function addNode() {
		const newNodeId = `${Math.random()}`;
		const newNode = {
			id: newNodeId,
			type: "default",
			data: { label: `Node ${newNodeId}` },
			height: 40,
			width: 150,
			position: {
				x: 5,
				y: 5
			}
		};

		setNodes((currNodes) => [...currNodes, newNode]);
	}

	function onNodeContextMenu(e) {
		e.preventDefault();
		console.log("YOU RIGHT CLICKED ME");
	}

	function onEdgeContextMenu(e) {
		e.preventDefault();
	}

	function onPaneContextMenu(e) {
		e.preventDefault();
	}

	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onNodeContextMenu={onNodeContextMenu}
				onEdgeContextMenu={onEdgeContextMenu}
				onPaneContextMenu={onPaneContextMenu}
				onConnect={onConnect}
				fitView
			>
				<OptionsPanel />
				<Controls />
				<Background
					variant="dots"
					gap={10}
					size={0.8}
				/>
			</ReactFlow>
		</div>
	);
}

export default App;
