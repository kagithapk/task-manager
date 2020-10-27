import React, { useState, useEffect } from 'react';
import TASK_API from '../../../api/taskApi';
import END_POINTS from '../../../endPoints/routes';
import Loader from '../../atoms/loader';
import DashboardTemplate from '../../templates/dashboard';

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    TASK_API
      .get(END_POINTS.tasks)
      .then((response) => {
        setTasks(response.data.reverse());
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (newTask.trim()) setCanSubmit(true);
    else setCanSubmit(false);
  }, [newTask]);

  const onNewTaskSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    TASK_API
      .post(END_POINTS.tasks, { description: newTask })
      .then((response) => {
        const tasksTemp = [response.data, ...tasks];
        setTasks(tasksTemp);
        setIsLoading(false);
        setNewTask('');
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const onTaskStatusChange = (id, completionStatus) => {
    setIsLoading(true);
    TASK_API
      .patch(`${END_POINTS.tasks}/${id}`, { completed: completionStatus })
      .then((response) => {
        const tasksTemp = tasks;
        tasksTemp.forEach((task) => {
          if (task._id === response.data._id) {
            // eslint-disable-next-line no-param-reassign
            task.completed = response.data.completed;
          }
        });
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const onTaskDelete = (id) => {
    setIsLoading(true);
    TASK_API
      .delete(`${END_POINTS.tasks}/${id}`)
      .then((response) => {
        const tasksTemp = tasks.filter((task) => (task._id) !== response.data._id);
        setTasks(tasksTemp);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <DashboardTemplate
        tasks={tasks}
        newTask={newTask}
        setNewTask={setNewTask}
        onSubmit={onNewTaskSubmit}
        buttonOpen={canSubmit}
        onTaskStatusChange={onTaskStatusChange}
        onTaskDelete={onTaskDelete}
      />
    </>
  );
};

export default DashboardPage;
