import React from "react";
import { FixedSizeList as List } from "react-window";

const Table = ({ data }) => {
  console.log("data is", data);

  const Row = ({ index, style }) => {
    const item = data[index]; // Get the specific item based on the index
    return (
      <div
        style={{
          ...style, // Virtualized styles for the row
          display: "flex", // Flex layout for columns
          alignItems: "center",
          borderBottom: "1px solid #ddd", // Row separator
          backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff", // Zebra striping
          padding: "10px 0",
        }}
      >
        <div style={{ flex: 1, textAlign: "center" }}>{index  || "0"}</div>
        <div style={{ flex: 1, textAlign: "center" }}>{item?.TrackTime || "N/A"}</div>
        <div style={{ flex: 1, textAlign: "center" }}>{item?.Longitude || "N/A"}</div>
        <div style={{ flex: 1, textAlign: "center" }}>{item?.Lattitude || "N/A"}</div>
        <div style={{ flex: 1, textAlign: "center" }}>{item?.speed || "N/A"}</div>
        <div style={{ flex: 1, textAlign: "center" }}>{item?.devid || "N/A"}</div>
      </div>
    );
  };

  return (
    <div className="w-full h-fit" style={{ overflow: "auto", padding: "20px" }}>
      <div
        className="header"
        style={{
          display: "flex",
          backgroundColor: "#4CAF50",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          padding: "10px 0",
        }}
      >
        <div style={{ flex: 1 }}>Index</div>
        <div style={{ flex: 1 }}>Track Time</div>
        <div style={{ flex: 1 }}>Longitude</div>
        <div style={{ flex: 1 }}>Latitude</div>
        <div style={{ flex: 1 }}>Speed</div>
        <div style={{ flex: 1 }}>Device Id</div>
      </div>
      <List
        height={500} // The height of the viewport
        itemCount={data.length} // Total number of rows
        itemSize={50} // Adjust row height for better visibility
        width={"100%"} // Full-width container
      >
        {Row}
      </List>
    </div>
  );
};

export default Table;
