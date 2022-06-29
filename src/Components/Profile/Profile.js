import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={username} className={s.avatar} />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className="label">Followers{stats.followers}</span>
          <span className="quantity">1000</span>
        </li>
        <li>
          <span className="label">Views{stats.views}</span>
          <span className="quantity">2000</span>
        </li>
        <li>
          <span className="label">Likes{stats.likes}</span>
          <span className="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
