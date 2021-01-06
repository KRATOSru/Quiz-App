import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li className={classes.Error}>
                    <strong>1. </strong>
                    How are you
                    <i className="fas fa-times"></i>
                </li>
                <li className={classes.Success}>
                    <strong>1. </strong>
                    How are you
                    <i className= "fas fa-check"></i>
                </li>
            </ul>

            <p>Правильно 4 из 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz
