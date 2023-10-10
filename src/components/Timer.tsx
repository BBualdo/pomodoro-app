import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import styles from '../scss/Timer.module.scss';

const Time = () => {
	return (
		<div className={styles.time__container}>
			<h1 className={styles.time}>00:00</h1>
			<h3 className={styles.action}>Restart</h3>
		</div>
	);
};

const Timer = () => {
	return (
		<div className={styles.timer__outer}>
			<div className={styles.timer__inner}>
				<CountdownCircleTimer
					isPlaying={false} // dynamic
					duration={100}
					colors={'#f87070'} // dynamic
					size={339}
					onComplete={() => ({})} // dynamic
					strokeWidth={14}
					trailStrokeWidth={0}
					rotation='counterclockwise'
				>
					{Time}
				</CountdownCircleTimer>
			</div>
		</div>
	);
};

export default Timer;
