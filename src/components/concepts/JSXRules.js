import React from "react";
import { Row, Col } from "reactstrap";

const JSXRules = () => {
    return (
        <div className="main">
            <div className="mainDiv func-comp">
                <h1 className="section-title func-comp">JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It's actually closer to JavaScript.</dd>
                    <dt>React Elements</dt>
                    <dd>
                        These are used to construe and update the DOM, or what
                        you see on the screen.
                    </dd>
                    <dt>Not required</dt>
                    <dd>
                        You can write in vanilla JS, but most people use JSX
                    </dd>
                </dl>
                <hr />
                <Row>
                    <Col sm="6">
                        <NormalComponent />
                    </Col>
                    <Col sm="6">
                        <CreateElementComponent />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default JSXRules;

const NormalComponent = () => {
    return (
        <div style={{ border: "2px solid black", backgroundColor: "white" }}>
            <h1>Normal Functional Component</h1>
            <p>This was constructed with JSX in the return.</p>
            <img
                src="https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg"
                alt=""
                width="100%"
            />
        </div>
    );
};

const CreateElementComponent = () => {
    return React.createElement(
        "div",
        {
            style: {
                border: "2px solid black",
                backgroundColor: "white",
            },
        },
        React.createElement("h1", null, "Create Element Component"),
        React.createElement(
            "p",
            null,
            "This was constructed with createElement() in the return."
        ),
        React.createElement(
            "img",
            {
                src: "https://cdn-images-1.medium.com/max/1200/1*jJZHFQmhkq_7ohn18KrMhA.png",
                width: "100%"
            },
            null
        )
    );
};
