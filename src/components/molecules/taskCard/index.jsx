import React from 'react';
import PropTypes from 'prop-types';
import './TaskCard.scss';
import TextP from '../../atoms/textP';
import Button from '../../atoms/button';
import useTheme from '../../../hooks/useTheme';

const TaskCard = ({ task, onTaskStatusChange, onTaskDelete }) => {
  const theme = useTheme();
  const { _id, description, completed } = task;

  return (
    <section className={`task-each-container task-each-container-${theme} ${completed ? 'task-each-container--complete' : ''}`}>
      <section className="task-each-button-container">
        <Button
          type="button"
          label={completed ? 'X' : '✓'}
          className={`${completed ? 'button-danger' : 'button-success'} task-each-button`}
          handleClick={() => { onTaskStatusChange(_id, !completed); }}
        />
        <Button
          type="button"
          label="DEL"
          className="button-danger"
          handleClick={() => { onTaskDelete(_id); }}
        />
      </section>
      <TextP context={description} className={completed ? 'strike-text' : ''} />
    </section>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    description: PropTypes.string,
    completed: PropTypes.bool,
  }),
  onTaskStatusChange: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

TaskCard.defaultProps = {
  task: {},
};

export default TaskCard;
