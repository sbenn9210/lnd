import React, { useContext, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";
import { CurrentNodeContext } from "../App";
import * as api from "../lib/api";

const Connect: React.FC = () => {
  const [error, setError] = useState("");
  const [host, setHost] = useState("");
  const [cert, setCert] = useState("");
  const [macaroon, setMacaroon] = useState("");
  const history = useHistory();
  const [connected, setConnected] = useContext(CurrentNodeContext);

  const connectToLnd = useCallback(
    async (host: string, cert: string, macaroon: string) => {
      setError("");
      try {
        await api.connect(host, cert, macaroon);
        setConnected(true);
        history.push("/");
      } catch (err: any) {
        setError(err.message);
      }
    },
    [history, setConnected]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      connectToLnd(host, cert, macaroon);
    },
    [connectToLnd, host, cert, macaroon]
  );
  return (
    <Card title="Connect Node" className="max-w-6xl mx-auto mt-6">
      <form onSubmit={handleSubmit}>
        <Form.Item name="host" label="LND Host" rules={[{ required: true }]}>
          <Input onChange={(e) => setHost(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="cert"
          label="TLS Certificate"
          rules={[{ type: "email" }]}
        >
          <Input.TextArea rows={8} onChange={(e) => setCert(e.target.value)} />
        </Form.Item>

        <Form.Item name="macaroon" label="Macaroon">
          <Input.TextArea
            rows={3}
            onChange={(e) => setMacaroon(e.target.value)}
          />
        </Form.Item>
        <div className="flex justify-end">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Connect;
