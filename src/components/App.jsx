import { FeedbackCounter } from '../components/Feedback'
import { Section } from './Section';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
          <FeedbackCounter />
        </Section>
      
    </div>
  );
};
