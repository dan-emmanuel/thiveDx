import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import FormCreator from './FomCreator'
import {submit_form,change_a_value} from '../redux/actions/postCreate'

import "./css/modal.css"






let CreatePostModal = (props) => {
  let { title,category,tag,content,img,submit_form,change_a_value,tags,cats,...otherProps } = props
  let submitForm = ()=>{
    let formData = new FormData()
    formData.append("content",content)
    formData.append("title",title)
    formData.append("tag",tag)
    formData.append("category",category)
    formData.append("img",img)
    submit_form(formData)
    props.onHide()
    change_a_value({ name: "category", value: cats[0].id })
    change_a_value({ name: "tag", value: tags[0].id })
    change_a_value({ name: "content", value: "" })
    change_a_value({ name: "title", value: "" })

  }
  return (
    <>
      <Modal
        {...otherProps}
        size="lg"
        aria-labelledby="contained-modal-title"
        id="createPostModal"
      >
        <Modal.Header closeButton className="flex-column-reverse">
          <Modal.Title className="col-12 text-center" id="contained-modal-title">
            Add a New Post
          </Modal.Title>


        </Modal.Header>
        <small className="text-center col-12 subtitle" >
          Please fill out the details down below
        </small>
        <Modal.Body className="d-flex justify-content-center">
            <FormCreator/>
        </Modal.Body>
        <Modal.Footer >
          <Button onClick={submitForm} disabled={[title,category,content,tag,img].some(e=>e===undefined)} >Submit Post</Button>
        </Modal.Footer>
      </Modal>
      
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
    content: postCreate.content,
    img:postCreate.img
  };
})


let mapDispatchToProps = (dispatch => {
  return {
    submit_form: (datas) => dispatch(submit_form(datas)),
    change_a_value: (e) => dispatch(change_a_value(e))

  };
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostModal)