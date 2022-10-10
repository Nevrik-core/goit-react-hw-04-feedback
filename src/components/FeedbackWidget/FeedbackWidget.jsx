import React from "react";

class FeedbackWidget extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    onButton = (option) => {
        this.setState(state => ({
            [option]: state[option] + 1
        }));
    }; 

    render() {
        const state = Object.keys(this.state);
        const { good, neutral, bad } = this.state;

        return (
            <div>
                <h1>Please leave feedback</h1>
                <div>
                    {state.map(el => (
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