import React from "react";
import { Card } from "antd";

const Postcard: React.FC = () => {
  return (
    <div className="mt-6">
      <Card type="inner" title="Inner Card title">
        Inner Card content
      </Card>
    </div>
  );
};

export default Postcard;
