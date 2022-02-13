


import React, { useEffect } from "react";
import { connect } from "react-redux";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'


import "./css/card.css"



let PostCard = (props) => {
  let {arts,currentCat,currentTag} = props
  useEffect(() => {

  });
  return (
    <>
      {arts.filter(({tag,category},filterIndex)=>(currentTag==="all"||tag===currentTag)
      &&(currentCat===0||currentCat==category))
      .map(({
        createdAt,
        content,
        title,
        img,
        tagName }, i) => {
        return <ListGroup.Item key = {i} className={`postContainer ps-0 pt-0 pb-4 mx-4 ${i===0?"my-4":"mb4"}`}>
          <Card className="post">
            <Row>
              <Col md="auto">
                <img src={img} className="img-fluid rounded-start mainImg"></img>
              </Col>
              <Col >
                <Card.Body className=" d-flex flex-column h-100">
                  <Card.Title className="row justify-content-between">
                    <div className="col-8">
                      {title}
                    </div>
                    <div className="col-3 dateDiv">
                      {createdAt}
                    </div>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 mt-0">
                    <img src="./svgIcons/offer.svg" className="me-2" />
                    {tagName}
                  </Card.Subtitle>
                  <Card.Text className="my-auto">
                    {content}                 
                    </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          {<div className="borderBottom"></div>}

        </ListGroup.Item>
      })
      }

    </>
  );
};
let mapStateToProps = (({ postsRead }) => {
  return {
    tags: postsRead.tags,
    currentTag: postsRead.currentTag,
    currentCat:postsRead.currentCat,
    arts: postsRead.arts
  };
})

export default connect(mapStateToProps, undefined)(PostCard);


