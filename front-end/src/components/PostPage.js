import React, { useEffect } from "react";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import PostPageTitle from "./PostPageTitle";
import CatFilter from "./CatFilter";
import PostTagFilter from "./PostTagFilter";
import PostCard from "./PostsCards";
import CreatePostModal from "./CreatePostModal";
import { getTags,getCats,getPosts } from '../redux/actions/postsRead'

import "./css/postPage.css"



let PostPage = (props) => {
    let { getTags,getCats,getPosts } = props

    
    useEffect(() => {
        getTags();
        getCats();
        getPosts()
        // Met à jour le titre du document via l’API du navigateur
    });
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Container >
                <PostPageTitle setModalShow={setModalShow}/>
                <Row>
                    <Col sm="3">
                    </Col>
                    <Col sm="9">
                        <CatFilter/>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col sm="3">
                       <PostTagFilter/>
                    </Col>
                    <Col sm="9">
                        <ListGroup id="postListGroup">
                            <PostCard/>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

            <CreatePostModal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    );
};

let mapDispatchToProps = (dispatch => {
    return {
        getTags:()=>dispatch(getTags()),
        getCats:()=>dispatch(getCats()),
        getPosts:()=>dispatch(getPosts())


    };
})
export default connect(undefined, mapDispatchToProps)(PostPage);
