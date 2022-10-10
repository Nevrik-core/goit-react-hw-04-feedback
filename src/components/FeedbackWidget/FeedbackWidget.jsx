import React from "react";

class FeedbackWidget extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    onButton = (prop) => {
        this.setState(state => ({
            [prop]: state[prop] + 1
        }));
    }; 

    render() {
        const stateArr = Object.keys(this.state);
        const { good, neutral, bad } = this.state;

        return (
            <div>
                <h1>Please leave feedback</h1>
                <div>
                    {stateArr.map(el => (
                        <button onClick={() => this.onButton(el)} key={el}>{el}</button>
                    ))}
                </div>
                <h2>Statistics</h2>

                <div>
                    <p>Good: {good}</p>
                    <p>Netural: {neutral}</p>
                    <p>Bad: {bad}</p>
                </div>
            </div>
        )
    }
}

export default FeedbackWidget;