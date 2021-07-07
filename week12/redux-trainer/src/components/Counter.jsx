import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreator'

function Counter(props) {
    const [value, setValue] = useState(0)

    const handleChange = (e) => {
        setValue(parseInt(e.target.value))
    }
    const [username, setUsername] = useState('')
    const handleSubmit = (e) => {
        props.onAdd(value)
    }

    const handlePlus = () => {
        props.onPlus()
    }

    const handleMinus = () => {
        props.onMinus()
    }

    return (
        <div>
            <h1>{props.counter}</h1>
            <input type="number" name="" id="" onChange = {handleChange}/>
            <button onClick = {handleSubmit} >Add to counter</button>
            <button onClick = {handlePlus}>+</button>
            <button onClick = {handleMinus}>-</button>
            <img src={`https://picsum.photos/200}`} alt=""/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        counter: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => dispatch(actionCreators.onAdd(value)),
        onPlus: () => dispatch(actionCreators.onPlus()),
        onMinus: () => dispatch(actionCreators.onMinus())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)