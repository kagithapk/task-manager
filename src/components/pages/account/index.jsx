import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
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

const AccountPage = ({ history }) => {
  const user = MANAGE_COOKIES.get('user');
  const [userAvatar, setUserAvatar] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    TASK_API
      // eslint-disable-next-line no-underscore-dangle
      .get(END_POINTS.usersIdAvatar(user._id))
      .then((response) => {
        setUserAvatar(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setUserAvatar(NO_USER);
        setIsLoading(false);
      });
  }, []);

  const logoutAll = () => {
    setIsLoading(true);
    TASK_API.post(END_POINTS.usersLogoutAll)
      .then(() => {
        setIsLoading(false);
        MANAGE_COOKIES.remove('token');
        MANAGE_COOKIES.remove('user');
        history.push('/login');
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
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
      {isLoading && <Loader />}
    </>
  );
};

AccountPage.propTypes = {
  history: PropTypes.shape(PropTypes.any),
};

AccountPage.defaultProps = {
  history: {
    push: () => {},
  },
};

export default withRouter(AccountPage);
