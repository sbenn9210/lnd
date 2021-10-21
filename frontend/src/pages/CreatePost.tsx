import React from "react";
import { Form, Input, Card, Button } from "antd";

const CreatePost: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Form name="nest-messages">
        <Card title="Create a new post">
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <div className="flex justify-between">
            <Button type="primary" danger>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Card>
      </Form>
    </div>
  );
};

export default CreatePost;
