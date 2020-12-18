import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'What color the sky?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                    {text: 'Black', id: 1},
                    {text: 'Red', id: 2},
                    {text: 'Blue', id:3},
                    {text: 'Green', id: 4}
                ]
            },
            {
                question: 'When you was born?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: '1980', id: 1},
                    {text: '1997', id: 2},
                    {text: '2000', id:3},
                    {text: '2004', id: 4}
                ]
            }
        ]
    }
    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id: ', answerId)

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}


export default Quiz
