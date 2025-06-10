import { useState } from "react";
import { GraduationCap } from "lucide-react";
import "./styles.css";

const careerTree = {
  "Class 10": {
    Science: {
      Engineering: ["Mechanical Engineering", "Electrical Engineering"],
      Medical: ["MBBS", "BDS"],
    },
    Commerce: {
      BCom: ["CA", "CS"],
      BBA: ["MBA"],
    },
    Arts: {
      BA: ["Civil Services", "Law"],
    },
  },
};

function Box({ label, onClick, isSelected, isFaded }) {
  return (
    <div
      className={`box ${isSelected ? "selected" : ""} ${isFaded ? "faded" : ""}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

export default function CareerPathExplorer() {
  const [selectedStream, setSelectedStream] = useState(null);

  const handleStreamSelect = (stream) => {
    setSelectedStream(stream);
  };

  const streams = Object.keys(careerTree["Class 10"]);
  const subpaths = selectedStream ? careerTree["Class 10"][selectedStream] : null;

  return (
    <div className="container">
      <h1 className="title">
        <GraduationCap className="icon" /> Career Path Explorer
      </h1>
      <div className="row center">
        <Box label="Class 10" />
      </div>
      <div className="row">
        {streams.map((stream) => (
          <Box
            key={stream}
            label={stream}
            onClick={() => handleStreamSelect(stream)}
            isSelected={selectedStream === stream}
            isFaded={selectedStream && selectedStream !== stream}
          />
        ))}
      </div>
      {subpaths && (
        <div className="row">
          {Object.keys(subpaths).map((branch) => (
            <div key={branch} className="box">
              {branch}
              <div className="sub-branch">
                {subpaths[branch].map((item, idx) => (
                  <div key={idx} className="sub-item">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
