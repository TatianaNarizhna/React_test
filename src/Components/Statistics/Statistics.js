import s from './Statistics.module.css';

function getRandom() {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <div className={s.titleCont}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.statList}>
          {stats.map(stat => (
            <li
              className="item"
              key={stat.id}
              style={{ backgroundColor: getRandom() }}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Statistics;
