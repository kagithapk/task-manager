import React from 'react';
import PropTypes from 'prop-types';
import './DashboardTemplate.scss';
import TaskCard from '../../molecules/taskCard';
import useTheme from '../../../hooks/useTheme';

const DashboardTemplate = ({ tasks }) => {
  const theme = useTheme();
  return (
    <>
      <section className="task-template">
        <section className={`task-form task-form-${theme}`}>
          <p>This is for form</p>
        </section>
        <section className="task-container">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </section>
      </section>
    </>
  );
};

DashboardTemplate.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    completed: PropTypes.bool,
  })),
};

DashboardTemplate.defaultProps = {
  tasks: [],
};

export default DashboardTemplate;
