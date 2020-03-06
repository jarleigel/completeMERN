import React, {useEffect, useState} from  "react";
import {connect} from "react-redux"
import * as actions from "../actions/PostMessage"

const PostMessages = (props) => {
    //const [x, setX] = useState(0)

    //setX(5)

    useEffect(()=>{
        props.fetchAllPostMessages()
    },[])

    return ( <div>from PostMessages</div>);
}

const mapStateToProps = state =>({
    postMessageList : state.postMessage.List
})

const mapActionToProps = {
    fetchAllPostMessages : actions.fetchAll
}
//props.fetchAllPostMessages

export default connect(mapStateToProps, mapActionToProps)(PostMessages);