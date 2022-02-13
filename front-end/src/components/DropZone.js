import React, { useState } from "react";
import { connect } from "react-redux";
import { useDropzone } from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form'
import CloseButton  from 'react-bootstrap/CloseButton'

import { change_a_value } from '../redux/actions/postCreate'

import "./css/dropzone.css"


let DropZone = ({ change_a_value }) => {
  const [files, setfiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setfiles(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      )
      change_a_value({ name: "img", value: acceptedFiles[0] })
    },
    maxFiles: 1
  })

  const images = files.map((file,i) => {
    return <div className="bg-light col-auto p-3" key={i}>
        <CloseButton onClick={()=>setfiles([])} /> {file.name}
      </div>
  })

  return images && images[0]
    ? <div className="d-flex">{images}</div>
    :<>
    <Form.Label>Attach A Photo</Form.Label>
    <div id="dropZone" className="form-control bg-light d-flex justify-content-center align-items-center" {...getRootProps()}>
      <FontAwesomeIcon className="fs-1 me-1" icon={faImage} />
      <p className="fs-1 mb-0 dropZoneText"> Drag Here</p>
      <input {...getInputProps()} />
    </div>
    
  </>
 
};
let mapStateToProps = (({ auth, events }) => {
  return {

  };
})
let mapDispatchToProps = (dispatch => {
  return {
    change_a_value: (e) => dispatch(change_a_value(e))
  };
})
export default connect(mapStateToProps, mapDispatchToProps)(DropZone);