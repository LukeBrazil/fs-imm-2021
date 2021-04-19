import React, { useState } from 'react'
import { connect } from 'react-redux'

function Counter(props) {
    const [value, setValue] = useState(0)

    const handleChange = (e) => {
        setValue(parseInt(e.target.value))
    }

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
        onAdd: (value) => dispatch({type: 'ADD', payload: value}),
        onPlus: () => dispatch({type: 'PLUS'}),
        onMinus: () => dispatch({type: 'MINUS'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)