import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
import './App.css';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 4:45pm "
          content="This is the new prop"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Faran"
          timeAgo="Today at 5:45pm "
          content="This is the new prop"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <CommentDetails
        author="Ali"
        timeAgo="Today at 6:45pm "
        content="This is the new prop"
        avatar={faker.image.image()}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
