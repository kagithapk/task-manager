import React from 'react';
import PropTypes from 'prop-types';
import './TaskCard.scss';
import TextP from '../../atoms/textP';
import useTheme from '../../../hooks/useTheme';

const TaskCard = ({ task }) => {
  const theme = useTheme();

  return (
    <section className={`task-each-container task-each-container-${theme}`}>
      <TextP context={task.description} />
    </section>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

TaskCard.defaultProps = {
  task: {},
};

export default TaskCard;
