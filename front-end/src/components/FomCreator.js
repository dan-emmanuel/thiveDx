import React, { useEffect } from "react";
import { connect } from "react-redux";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import DropZone from "./DropZone";
import Col from 'react-bootstrap/Col'
import { change_a_value } from '../redux/actions/postCreate'

import "./css/form.css"






let FormCreator = (props) => {

  let { cats, tags, change_a_value } = props

  useEffect(() => {
    change_a_value({ name: "category", value: cats[0].id })
    change_a_value({ name: "tag", value: tags[0].id })
  });
  return (
    <>
      <Form className="d-flex flex-column justify-content-around ">
        <Form.Group className="" >
          <Form.Label>Post Title</Form.Label>
          <Form.Control onChange={(e) => change_a_value({ name: e.target.name, value: e.target.value })} name="title" className="bg-light" type="text" placeholder="Type here" />
        </Form.Group>
        <Form.Group  >
          <Row>
            <Col md="6">
              <Form.Label>Choose a Category</Form.Label>
              <Form.Select onChange={(e) => change_a_value({ name: e.target.name, value: e.target.value })} className="bg-light" name="category" defaultValue="Choose...">
                {cats.filter(e => e.id !== 0).map((e, i) => <option key={i} value={e.id}>{e.name}</option>)}
              </Form.Select>
            </Col>
            <Col md="6">
              <Form.Label>Choose a tag</Form.Label>
              <Form.Select onChange={(e) => change_a_value({ name: e.target.name, value: e.target.value })} className="bg-light" name="tag" defaultValue="Choose...">
                {tags.map((e, i) => <option key={i} value={e.id}>{e.name}</option>)}

              </Form.Select>
            </Col>
          </Row>

        </Form.Group>

        <Form.Group className="">
          <Form.Label>Post Description</Form.Label>
          <Form.Control onChange={(e) => change_a_value({ name: e.target.name, value: e.target.value })} className="bg-light" name="content" as="textarea" placeholder="Type here" rows={3} />
        </Form.Group>

        <Form.Group className="" >
          <DropZone />
        </Form.Group >

      </Form>

    </>
  );
};
let mapStateToProps = (({ postsRead, postCreate }) => {
  return {
    cats: postsRead.cats,
    tags: postsRead.tags,
    title: postCreate.title,
    category: postCreate.category,
    tag: postCreate.tag,
    content: postCreate.content
  };
})


let mapDispatchToProps = (dispatch => {
  return {
    change_a_value: (e) => dispatch(change_a_value(e))
  };
})

export default connect(mapStateToProps, mapDispatchToProps)(FormCreator);