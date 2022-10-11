
import React from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Container, Header } from "./App.styled";

export class App extends React.Component {

  state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedback = (prop) => {
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

        const { good, neutral, bad } = this.state;

    return (
    <div>
        <Container>
        <Header>Please leave feedback</Header>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback} />
        {this.countTotalFeedback()
        ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()} />
        : <Notification message="There is no feedback"></Notification> 
        }
        
          </Container>
    </div>
  );
  }
  
};
