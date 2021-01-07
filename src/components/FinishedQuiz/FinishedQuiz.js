import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map( (quizItem, index) => {
                    const cls = [
                        'fas',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ]

                    return (
                        <li key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem}
                            <i className={cls.join('')} />
                        </li>
                    )

                }) }

                {/*<li className={classes.Error}>*/}
                {/*    <strong>1. </strong>*/}
                {/*    How are you*/}
                {/*    <i className="fas fa-times"></i>*/}
                {/*</li>*/}
                {/*<li className={classes.Success}>*/}
                {/*    <strong>1. </strong>*/}
                {/*    How are you*/}
                {/*    <i className= "fas fa-check"></i>*/}
                {/*</li>*/}
            </ul>

            <p>Правильно 4 из 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz
