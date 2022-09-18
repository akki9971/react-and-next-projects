import React, { useEffect } from "react";
import { connect } from "react-redux";
import { onFetchAllPostRequest } from './redux/actions';


const PostList = (props) => {

    useEffect(()=>{

        props.fetchAllPostList &&  props.fetchAllPostList();
    },[])

    return (
        <div>
            {props.postListRedux?.map((post) => {
              return  <div>
                    <h2>{post.title}</h2>
                    <span>{post.id} </span>
                    <span>{post.body}</span>
                </div>
            })}
        </div>
    )

}

const mapStateToProps = state =>{
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllPostList:() => dispatch(onFetchAllPostRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
