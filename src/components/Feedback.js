import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistiks';
export class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <section>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onClickFeedback={this.onClickFeedback}
          ></FeedbackOptions>
        </section>
        <section>
          <h2>Statistics</h2>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <p>There is no Feedback</p>
          )}
        </section>
      </div>
    );
  }
}
