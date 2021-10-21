import { Button } from "antd";
import React from "react";
import Postcard from "../components/Postcard";
import { Link } from "react-router-dom";

const PostList: React.FC = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <Button type="primary" className="mt-5">
          <Link to="/connect">Create a post</Link>
        </Button>
        <Postcard />
      </div>
    </div>
  );
};

export default PostList;
