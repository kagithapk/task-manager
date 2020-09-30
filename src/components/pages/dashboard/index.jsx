import React, { useState, useEffect } from 'react';
import TASK_API from '../../../api/taskApi';
import END_POINTS from '../../../endPoints/routes';
import Loader from '../../atoms/loader';
import DashboardTemplate from '../../templates/dashboard';

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    TASK_API
      .get(END_POINTS.tasks)
      .then((response) => {
        setTasks(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <DashboardTemplate tasks={tasks} />
    </>
  );
};

export default DashboardPage;
