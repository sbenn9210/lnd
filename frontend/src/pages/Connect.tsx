import React from "react";
import { Form, Input, Button, Card } from "antd";

const Connect: React.FC = () => {
  return (
    <Card title="Connect Node" className="max-w-6xl mx-auto mt-6">
      <Form name="connect-node">
        <Form.Item
          name={["user", "name"]}
          label="LND Host"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="TLS Certificate"
          rules={[{ type: "email" }]}
        >
          <Input.TextArea rows={8} />
        </Form.Item>

        <Form.Item name={["user", "introduction"]} label="Macaroon">
          <Input.TextArea rows={3} />
        </Form.Item>
        <div className="flex justify-end">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default Connect;
