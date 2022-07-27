import { Col, Divider, Row, Typography } from "antd";

const { Title } = Typography;

const Instructions = () => (
  <>
    <Row>
      <Col xs={24}>
        <Title level={3}>Description</Title>
      </Col>
    </Row>
    <Row>
      <Col xs={24}>
        <ul>
          <li>
            The application is a simulation of a toy robot moving on a square
            tabletop, of dimensions 5x5.
          </li>
          <li>There are no other obstructions on the table surface.</li>
          <li>
            The robot is free to roam around the surface of the table, but must
            be prevented from falling to destruction. Any movement that would
            result in the robot falling from the table must be prevented,
            however further valid movement commands must still be allowed.
          </li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col xs={24}>
        <Title level={3}>Commands</Title>
      </Col>
    </Row>
    <Row>
      <Col xs={24}>
        <ul>
          <li>
            <strong>PLACE X,Y,F:</strong> Initial command, to place the robot on
            a position. <strong>X</strong>
            {">"} x coordinate, <strong>Y</strong> {">"} y coordinate,{" "}
            <strong>F</strong> {">"} facing side(<code>NORTH</code>,{" "}
            <code>EAST</code>, <code>SOUTH</code>, <code>WEST</code>)
          </li>
          <li>
            <strong>MOVE:</strong> Move the robot to current robot facing side.
            Ex: if the robot is facing south, it will move south
          </li>
          <li>
            <strong>LEFT:</strong> Robot will face the left side(90 degrees)
          </li>
          <li>
            <strong>RIGHT:</strong> Robot will face the right side(90 degrees)
          </li>
        </ul>
      </Col>
    </Row>
    <Divider />
  </>
);

export default Instructions;
