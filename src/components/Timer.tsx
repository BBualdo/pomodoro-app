import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import styles from '../scss/Timer.module.scss';

import useSettings from '../hooks/useSettings';

const Time = () => {
	const { color, font } = useSettings();

	let hoverClass: string = '';
	switch (color) {
		case '#f87070':
			hoverClass = 'action__red';
			break;
		case '#70f3f8':
			hoverClass = 'action__cyan';
			break;
		case '#d881f8':
			hoverClass = 'action__pink';
			break;
	}

	return (
		<div className={styles.time__container}>
			<h1 style={{ fontFamily: font }} className={styles.time}>
				00:00
			</h1>
			<h3
				style={{ fontFamily: font }}
				className={`${styles.action} ${hoverClass}`}
			>
				Start
			</h3>
		</div>
	);
};

const Timer = () => {
	const { color } = useSettings();
	return (
		<div className={styles.timer__outer}>
			<div className={styles.timer__inner}>
				<CountdownCircleTimer
					isPlaying={false} // dynamic
					duration={100}
					colors={color}
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
