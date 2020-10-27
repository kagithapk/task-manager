import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './DashboardTemplate.scss';
import TextP from '../../atoms/textP';
import Button from '../../atoms/button';
import TaskCard from '../../molecules/taskCard';
import LoginForm from '../../molecules/loginForm';
import useTheme from '../../../hooks/useTheme';
import { Context as HeaderMenuContext } from '../../../context/headerMenuFixContext';

const DashboardTemplate = ({
  tasks,
  newTask,
  setNewTask,
  onSubmit,
  buttonOpen,
  onTaskStatusChange,
  onTaskDelete,
}) => {
  const theme = useTheme();
  const { state: { isHeaderMenuOpen } } = useContext(HeaderMenuContext);

  return (
    <>
      <section className="task-template">
        <section className={`task-form task-form-${theme}`}>
          <TextP context="Enter a task" className="task-label" />
          <LoginForm>
            <>
              <textarea
                rows="10"
                className={`text-field text-field-${theme}`}
                value={newTask}
                onChange={(event) => { setNewTask(event.target.value); }}
                placeholder="Enter a task..."
              />
              <div className="task-submit-container">
                <Button
                  type="submit"
                  label="Submit"
                  className="button-primary"
                  handleClick={onSubmit}
                  disabled={!buttonOpen}
                />
              </div>
            </>
          </LoginForm>
        </section>
        <section className={`task-container ${isHeaderMenuOpen ? 'hide-list' : ''}`}>
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onTaskStatusChange={onTaskStatusChange}
              onTaskDelete={onTaskDelete}
            />
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
  newTask: PropTypes.string.isRequired,
  setNewTask: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonOpen: PropTypes.bool,
  onTaskStatusChange: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

DashboardTemplate.defaultProps = {
  tasks: [],
  buttonOpen: true,
};

export default DashboardTemplate;
