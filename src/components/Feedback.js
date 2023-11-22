import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistiks';

export const FeedbackCounter = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalPositive = Math.round((good / (good + neutral + bad)) * 100);
    return totalPositive || 0;
  };

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div>
      <section>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onClickFeedback={onClickFeedback}
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
};
