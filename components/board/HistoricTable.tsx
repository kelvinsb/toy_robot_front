import { Row } from "antd";

const HistoricTable = ({ historic }: { historic: string[] }) => {
  return (
    <>
      <Row
        style={{
          backgroundColor: "slategrey",
          borderRadius: "5px",
          padding: "15px",
          color: "#fff",
          minHeight: 250,
          maxHeight: 250,
          overflowY: "auto",
          marginTop: 15,
        }}
      >
        <ol>
          {historic.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </Row>
    </>
  );
};

export default HistoricTable;
