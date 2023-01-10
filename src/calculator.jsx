import { react, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculate, clear } from './features/counterSlice'

export default function Calculator() {
    const result = useSelector((state) => state.counter.result)
    const dispatch = useDispatch()
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        const value = e.target.value
        setInput(input + value)
    }

    const handleClear = () => {
        setInput('')
        dispatch(clear())
    }

    const numberStyle = {
        backgroundColor: "#DEF3F4",
        borderRadius: "100px",
        padding: 4,
        fontSize: 24,
        fontWeight: 700,
        width: 60,
        height: 60,
        margin: 4,
    }

    const symbolStyle = {
        backgroundColor: "#FFF6DB",
        borderRadius: "100px",
        padding: 4,
        fontSize: 24,
        fontWeight: 700,
        width: 60,
        height: 60,
        margin: 4,
    }

    const clearStyle = {
        backgroundColor: "#DEF3F4",
        width: "60%",
        margin: "4px 0",
        height: 44,
    }

    const inputValue = {
        textAlign: "right",
        width: "60%",
        margin: "4px 0",
        fontSize: 16,
        border: 'none',
    }

    const inputResult = {
        textAlign: "right",
        width: "60%",
        margin: "4px 0",
        fontSize: 32,
        border: 'none',
        fontWeight: 700,
    }

    return (
        <>
            <div style={{ border: '1px solid', padding: '32px 0' }}>
                <div>
                    <input style={inputValue} type="text" value={input} readOnly />
                    <br />
                    <input style={inputResult} type="text" value={result} readOnly />
                    <br />
                <hr style={{width:'60%'}}/>
                    <button style={clearStyle} value="clear" onClick={handleClear}>clear</button>
                </div>
                <div>
                    <button style={numberStyle} value="7" onClick={handleInput}>7</button>
                    <button style={numberStyle} value="8" onClick={handleInput}>8</button>
                    <button style={numberStyle} value="9" onClick={handleInput}>9</button>
                    <button style={symbolStyle} value="+" onClick={handleInput}>+</button>
                </div>
                <div>
                    <button style={numberStyle} value="4" onClick={handleInput}>4</button>
                    <button style={numberStyle} value="5" onClick={handleInput}>5</button>
                    <button style={numberStyle} value="6" onClick={handleInput}>6</button>
                    <button style={symbolStyle} value="-" onClick={handleInput}>-</button>
                </div>
                <div>
                    <button style={numberStyle} value="1" onClick={handleInput}>1</button>
                    <button style={numberStyle} value="2" onClick={handleInput}>2</button>
                    <button style={numberStyle} value="3" onClick={handleInput}>3</button>
                    <button style={symbolStyle} value="*" onClick={handleInput}>X</button>
                </div>
                <div>
                    <button style={symbolStyle} value="." onClick={handleInput}>.</button>
                    <button style={numberStyle} value="0" onClick={handleInput}>0</button>
                    <button style={symbolStyle} value="=" onClick={() => dispatch(calculate(input))}>=</button>
                    <button style={symbolStyle} value="/" onClick={handleInput}>/</button>
                </div>
            </div>
        </>
    )
}