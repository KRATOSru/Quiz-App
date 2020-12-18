import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'What color the sky?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Black', id: 1},
                    {text: 'Red', id: 2},
                    {text: 'Blue', id:3},
                    {text: 'Green', id: 4}
                ]
            }
        ]
    }
    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id: ', answerId)
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                        question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }
}


export default Quiz
