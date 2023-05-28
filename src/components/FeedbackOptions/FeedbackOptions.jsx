import PropTypes from "prop-types";
import { Btn } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <Btn 
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
        option={option}
      >
        {option}
      </Btn>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
}