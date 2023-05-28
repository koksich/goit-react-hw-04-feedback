import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelClickBtn = type => {
    // console.log(type)
    this.setState(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => value + acc, 0);

  countPositiveFeedbackPersentage = () => {
    const total = this.countTotalFeedback();
    const positivePersentage = Math.round((this.state.good / total) * 100);
    return total > 0 ? positivePersentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handelClickBtn}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePersentage={this.countPositiveFeedbackPersentage}
              onClick={ this.handelClickBtn}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback yet"></Notification>
          )}
        </Section>
      </>
    );
  }
}
