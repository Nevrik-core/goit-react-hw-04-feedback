import React from "react";
import { Container, Header, Button, Wrapper, StatWrapper } from "./FeedbackWidget.styled";
class FeedbackWidget extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    
    onButton = (prop) => {
        this.setState(state => ({
            [prop]: state[prop] + 1
        }));
    }; 

    countTotalFeedback =() => {
        return Object.values(this.state).reduce((acc, el) => acc + el, 0);
    }
    
    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }


    render() {
        const stateArr = Object.keys(this.state);
        const { good, neutral, bad, total } = this.state;

        return (
            <Container>
                <Header>Please leave feedback</Header>
                <Wrapper>
                    {stateArr.map(el => (
                        <Button onClick={() => this.onButton(el)} key={el}>{el}</Button>
                    ))}
                </Wrapper>
                <StatWrapper>
                    <h2>Statistics</h2>

                <div>
                    <p>Good: {good}</p>
                    <p>Netural: {neutral}</p>
                    <p>Bad: {bad}</p>
                        <p>Total: {this.countTotalFeedback()}</p>
                        <p>Positive feedback: { this.countPositiveFeedbackPercentage()}%</p>
                </div>
                </StatWrapper>
            </Container>
        )
    }
}

export default FeedbackWidget;