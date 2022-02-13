import React from "react";
import { connect } from "react-redux";
import Nav from 'react-bootstrap/Nav'
import { changeCurrentTag } from '../redux/actions/postsRead'


import "./css/nav.css"

let PostTagFilter = (props) => {
  let { tags, changeCurrentTag, currentTag } = props
  return (
    <>

      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link as="div"
          className={`${currentTag === "all" ? "blueSelected" : ""} tagSelector d-flex -flex align-items-center`}
          onClick={() => changeCurrentTag("all")}
        >
          <div className="imgContainer"><img alt="tag all logo" src={`./svgIcons/layer${currentTag === "all" ? "_blue" : ""}.svg`} className="" /></div>
          All
        </Nav.Link>
        {tags.map((e, i) => {
          return <Nav.Link as="div"
            key={i}
            onClick={() =>changeCurrentTag(e.id)}

            className={`${currentTag === e.id ? "blueSelected" : ""} tagSelector d-flex align-items-center`}
          >
            <div className="imgContainer">
              <img alt={`tag ${e.name} logo`} src={currentTag === e.name ? e.logo.replace(".svg", "_blue.svg") : e.logo} />
            </div>
            <label>{e.name}</label>
          </Nav.Link>
        })}
      </Nav>
    </>
  );
};
let mapStateToProps = (({ postsRead }) => {
  return {
    tags: postsRead.tags,
    currentTag: postsRead.currentTag
  };
})
let mapDispatchToProps = (dispatch => {
  return {
    changeCurrentTag: (e) => dispatch(changeCurrentTag(e)),
  };
})
export default connect(mapStateToProps, mapDispatchToProps)(PostTagFilter);