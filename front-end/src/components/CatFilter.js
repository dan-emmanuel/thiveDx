import React from "react";
import { connect } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { changeCurrentCat } from '../redux/actions/postsRead';

import "./css/filter.css"

let PostFilter= (props) => {
  let {cats,changeCurrentCat,currentCat} = props
  return (
    <>
      <Row>
        {cats.map((e,i)=>{
          return <Col key ={i} onClick={()=>changeCurrentCat(e.id)} as="button" className={`btn btn-light me-4 catBtn ${e.id===currentCat?"selected":""}`} md="2">
          {e.name}
        </Col>}
        )}
       
      </Row>
    </>
  );
};
let mapStateToProps = (({ postsRead }) => {
  return {
    cats:postsRead.cats,
    currentCat:postsRead.currentCat
  };
})
let mapDispatchToProps = (dispatch => {
  return {
    changeCurrentCat: (e) => dispatch(changeCurrentCat(e)),
  };
})
export default connect(mapStateToProps, mapDispatchToProps)(PostFilter);