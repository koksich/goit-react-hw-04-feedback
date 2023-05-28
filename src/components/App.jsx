import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelClickBtn = e => {

    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      
      default: return;
    }
}

  const totalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositivePersentage = () => {
        const positivePersentage = Math.round((good / totalFeedback()) * 100);
        return totalFeedback() > 0 ? positivePersentage : 0;
  }

 return (
   <>
     <Section title="Please leave feedback">
       <FeedbackOptions
         options={['good', 'neutral', 'bad']}
         onLeaveFeedback={handelClickBtn}
       ></FeedbackOptions>
     </Section>
     <Section title="Statistics">
       {totalFeedback() > 0 ? (
         <Statistics
           good={good}
           neutral={neutral}
           bad={bad}
           total={totalFeedback}
           positivePersentage={countPositivePersentage}
         ></Statistics>
       ) : (
         <Notification message="There is no feedback yet"></Notification>
       )}
     </Section>
   </>
 );

}




// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handelClickBtn = type => {
//     // console.log(type)
//     this.setState(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
//   };

//   countTotalFeedback = () =>
//     Object.values(this.state).reduce((acc, value) => value + acc, 0);

//   countPositiveFeedbackPersentage = () => {
    // const total = this.countTotalFeedback();
    // const positivePersentage = Math.round((this.state.good / total) * 100);
    // return total > 0 ? positivePersentage : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();

    // return (
    //   <>
    //     <Section title="Please leave feedback">
    //       <FeedbackOptions
    //         options={Object.keys(this.state)}
    //         onLeaveFeedback={this.handelClickBtn}
    //       ></FeedbackOptions>
    //     </Section>
    //     <Section title="Statistics">
    //       {total > 0 ? (
    //         <Statistics
    //           good={good}
    //           neutral={neutral}
    //           bad={bad}
    //           total={this.countTotalFeedback}
    //           positivePersentage={this.countPositiveFeedbackPersentage}
    //           onClick={ this.handelClickBtn}
    //         ></Statistics>
    //       ) : (
    //         <Notification message="There is no feedback yet"></Notification>
    //       )}
    //     </Section>
    //   </>
    // );
//   }
// }
