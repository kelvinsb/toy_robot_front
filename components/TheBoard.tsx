import { Col } from "antd";
import InputCommand from "./board/InputCommand";
import Table from "./board/Table";
import useCommand from "./hooks/useCommand";

const TheBoard = () => {
  const { validateCommand, error, currentX, currentY, currentFacing } =
    useCommand();

  return (
    <>
      <Col xs={24} md={12}>
        <InputCommand error={error} validateCommand={validateCommand} />
      </Col>
      <Col xs={24} md={12}>
        <Table
          positionX={currentX}
          positionY={currentY}
          facing={currentFacing}
        />
      </Col>
    </>
  );
};

export default TheBoard;
