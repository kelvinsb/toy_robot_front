import { Col } from "antd";
import HistoricTable from "./board/HistoricTable";
import InputCommand from "./board/InputCommand";
import Table from "./board/Table";
import useCommand from "./hooks/useCommand";

const TheBoard = () => {
  const {
    validateCommand,
    error,
    currentX,
    currentY,
    currentFacing,
    historic,
  } = useCommand();

  return (
    <>
      <Col xs={24} md={12}>
        <InputCommand error={error} validateCommand={validateCommand} />
        <HistoricTable historic={historic} />
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
