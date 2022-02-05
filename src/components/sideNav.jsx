import 'rsuite/dist/rsuite.min.css';

import { React } from "react";
import { Sidenav, Nav, Dropdown } from "rsuite";


const SimpleSidenav = () => {
	return (
		<div style={{ width: 240 }}>
			<Sidenav defaultOpenKeys={[3, 4]} activeKey="1" appearance="subtle">
				<Sidenav.Body>
					<Nav>
						<Nav.Item eventKey="1">
							DASHBOARD
						</Nav.Item>
						<Nav.Item eventKey="2">
							USER GROUP
						</Nav.Item>

						<Dropdown eventKey="3" title="Advanced">
							<Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
							<Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
							<Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
							<Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
						</Dropdown>

						<Dropdown eventKey="4" title="Settings">
							<Dropdown.Item>Applications</Dropdown.Item>
							<Dropdown.Item>Channels</Dropdown.Item>
							<Dropdown.Item>Versions</Dropdown.Item>
						</Dropdown>
					</Nav>
				</Sidenav.Body>
			</Sidenav>
		</div>
	)
}

export default SimpleSidenav;