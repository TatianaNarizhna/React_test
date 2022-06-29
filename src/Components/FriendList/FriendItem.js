import s from './FriendList.module.css';

function FriendItem({ avatar, name, isOnline }) {
  return (
    <div className={s.item}>
      <span className={[s.status, isOnline ? s.true : s.false].join(' ')} />
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
}

export default FriendItem;
