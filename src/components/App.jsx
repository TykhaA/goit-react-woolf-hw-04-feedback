import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';
import { useState } from 'react';
import Statistics from './Statistics/Statistics.jsx';
import Notification from './Notification/Notification.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = option => {
    if (option === 'good') {
      setGood(prevState => {
        return prevState + 1;
      });
    }
    if (option === 'neutral') {
      setNeutral(prevState => {
        return prevState + 1;
      });
    }
    if (option === 'bad') {
      setBad(prevState => {
        return prevState + 1;
      });
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleClick={handleClick}
          options={['good', 'neutral', 'bad']}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

export default App;
