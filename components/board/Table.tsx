import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { TableProps, Facing } from "../utils";

const getBlankGrid = () =>
  Array(5)
    .fill(0)
    .map((x) => Array(5).fill("-1"));

const useTable = (positionX: number, positionY: number) => {
  const [grid, setGrid] = useState(getBlankGrid());

  useEffect(() => {
    if (positionX == -1) return;
    if (positionY == -1) return;

    setGrid(() => {
      const blankGrid = getBlankGrid();
      const newGrid = [...blankGrid];
      newGrid[positionY][positionX] = "1";
      return newGrid;
    });
  }, [positionX, positionY]);

  return {
    grid,
  };
};

const getRotatePosition = (facing: Facing) => {
  let deg = null;
  switch (facing) {
    case "NORTH":
      deg = "180deg";
      break;
    case "WEST":
      deg = "90deg";
      break;
    case "SOUTH":
      deg = "360deg";
      break;
    case "EAST":
      deg = "270deg";
      break;

    default:
      deg = "360deg";
      break;
  }
  return deg;
};

const Table = ({ positionX, positionY, facing }: TableProps) => {
  const { grid } = useTable(positionX, positionY);

  return (
    <>
      <Row>
        <Col
          span={2}
          style={{
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Col>
        {new Array(grid[0].length).fill(1).map((item, index) => (
          <Col
            span={4}
            key={index}
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {index}
          </Col>
        ))}
      </Row>
      {grid.map((yAXis, YIndex) => {
        return (
          <Row key={YIndex}>
            <Col
              span={2}
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {YIndex}
            </Col>
            {yAXis.map((xAxis, XIndex) => (
              <Col
                key={XIndex}
                span={4}
                style={{
                  backgroundColor: (XIndex + YIndex) % 2 == 0 ? "#CCC" : "#FFF",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <>
                  {xAxis === `-1` ? (
                    ""
                  ) : (
                    <img
                      src="./robot-svgrepo-com.svg"
                      alt="robot"
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: 5,
                        transform: `rotate(${getRotatePosition(facing)})`,
                      }}
                      loading="lazy"
                    />
                  )}
                </>
              </Col>
            ))}
          </Row>
        );
      })}
    </>
  );
};

export default Table;
