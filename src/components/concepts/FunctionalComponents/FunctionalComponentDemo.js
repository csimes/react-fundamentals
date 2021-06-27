import React from "react";
import {
    Button,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
} from "reactstrap";

const FunctionalComponentDemo = () => {
    return (
        <div className="main">
            <div className="mainDiv func-comp">
                <h1 className="func-comp">Functional Component</h1>
                <div>
                    Functional Components are the primary tool in React to build
                    a small, modular piece of your page.
                </div>
                <br />
                <dl>
                    <dt>Can use state</dt>
                    <dd>
                        With the 'useState' hook, functional components can now
                        both render a display to the page and update the
                        information to be shown.
                    </dd>
                    <dt>No 'this' keyword</dt>
                    <dd>
                        Older class components use 'this', functional components
                        have no 'this' object.
                    </dd>
                    <dt>Can use effects</dt>
                    <dd>
                        With the 'useEffect' hook, functional components can
                        perform side effect with any props or state changes
                    </dd>
                    <dt>return()</dt>
                    <dd>
                        Must return a single element but this element may have
                        nested elements inside
                    </dd>
                </dl>
                <Button
                    className="func-comp-btn"
                    size="sm"
                    href="https://www.twilio.com/blog/react-choose-functional-components"
                    target="blank"
                >
                    More information
                </Button>
                <hr />
                <h1>Functional Syntax vs Arrow Function</h1>
                <Row>
                    <Col xs="6">
                        <HelloWorldFatArrow />
                    </Col>
                    <Col xs="6">
                        <HelloWorld />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

const HelloWorldFatArrow = () => {
    return (
        <div>
            <Card>
                <CardImg
                    top
                    width="100%"
                    height="280px"
                    src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg"
                />
                <CardBody>
                    <CardTitle tag="h5">Fat Arrow Function</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                        a JS Library
                    </CardSubtitle>
                    <CardText>
                        <pre>const HelloWorld = () =&gt;</pre>{" "}
                    </CardText>
                    <Button>Go somewhere, man</Button>
                </CardBody>
            </Card>
        </div>
    );
};

const HelloWorld = () => {
    return (
        <div>
            <Card>
                <CardImg
                    top
                    width="100%"
                    height="280px"
                    src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg"
                    alt="card cap"
                />
                <CardBody>
                    <CardTitle tag="h5"> Regular Ol' Function</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                        A JS Library
                    </CardSubtitle>
                    <CardText>
                        <pre>const HelloWorld = function()</pre>
                    </CardText>
                    <Button>Go somewhere, yo</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default FunctionalComponentDemo;
