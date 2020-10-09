import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import TextP from '../../atoms/textP';
import MANAGE_COOKIES from '../../../helpers/cookiesHelper';
import Image from '../../atoms/image';
import './account.scss';
import TASK_API from '../../../api/taskApi';
import END_POINTS from '../../../endPoints/routes';
import Loader from '../../atoms/loader';
import NO_USER from '../../../assets/images/no-user-profile-picture.png';
import Button from '../../atoms/button';
import ImageLoader from '../../atoms/imageLoader';

const AccountPage = () => {
  const user = MANAGE_COOKIES.get('user');
  const [userAvatar, setUserAvatar] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessfulLogout, setIsSuccessfulLogout] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    TASK_API
      .get(END_POINTS.usersIdAvatar(user._id))
      .then((response) => {
        setUserAvatar(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setUserAvatar(NO_USER);
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  const logoutAll = () => {
    setIsLoading(true);
    TASK_API.post(END_POINTS.usersLogoutAll)
      .then(() => {
        setIsLoading(false);
        MANAGE_COOKIES.remove('token');
        MANAGE_COOKIES.remove('user');
        setIsSuccessfulLogout(true);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      {isSuccessfulLogout ? <Redirect to="/login" /> : (
        <section className="account-container">
          <section className="account-image-container">
            {!userAvatar
              ? <ImageLoader />
              : <Image source={userAvatar} alt="avatar" className="user-avatar" />}
          </section>
          <section className="account-user-details">
            <TextP context={user.name} />
            <TextP context={user.email} />
            <TextP context={user.age.toString()} />
          </section>
          <section className="logout-all-container">
            <Button
              type="button"
              label="Logout From All the devices"
              className="button-danger"
              handleClick={logoutAll}
            />
          </section>
        </section>
      )}
    </>
  );
};

export default AccountPage;
