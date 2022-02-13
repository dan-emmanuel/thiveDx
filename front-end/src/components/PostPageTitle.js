import React from "react";
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import "./css/postPageTitle.css"



let PostPage = (props) => {
    let {setModalShow} = props 
    return (
        <>
                <Row >
                    <Col sm="3">
                    </Col>
                    <Col sm="9">
                        <Row className="justify-content-between">
                            <Col sm="10">
                                <h1 className="firstTitle">Latest Cyber Security Articles & News</h1>
                            </Col>
                            <Col sm="2">
                                <Button variant="primary" className="h-100 w-100" id="newpostButton" onClick={() => setModalShow(true)}> + New Post</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
        </>
    );
};

export default PostPage;