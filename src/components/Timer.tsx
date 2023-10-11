import { Key, useState } from 'react';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import styles from '../scss/Timer.module.scss';

import useSettings from '../hooks/useSettings';
import { Status } from '../ts/enums';

const Timer = () => {
	const [status, setStatus] = useState(Status.NOT_STARTED);
	const { color, font } = useSettings();

	const startPause = () => {
		if (status === Status.RUNNING) {
			setStatus(Status.PAUSED);
		} else if (status === Status.FINISHED) {
			setStatus(Status.NOT_STARTED);
			setStatus(Status.RUNNING);
		} else {
			setStatus(Status.RUNNING);
		}
	};

	const Time = (): JSX.Element => {
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

		let buttonText: string = '';
		switch (status) {
			case Status.RUNNING:
				buttonText = 'Pause';
				break;
			case Status.PAUSED:
				buttonText = 'Resume';
				break;
			case Status.FINISHED:
				buttonText = 'Restart';
				break;
			default:
				buttonText = 'Start';
		}

		return (
			<div className={styles.time__container}>
				<h1 style={{ fontFamily: font }} className={styles.time}>
					00:00
				</h1>
				<button
					onClick={startPause}
					style={{ fontFamily: font }}
					className={`${styles.action} ${hoverClass}`}
				>
					{buttonText}
				</button>
			</div>
		);
	};

	return (
		<div className={styles.timer__outer}>
			<div className={styles.timer__inner}>
				<CountdownCircleTimer
					key={status === Status.FINISHED ? 'Finished' : undefined}
					isPlaying={status === Status.RUNNING ? true : false}
					duration={3}
					colors={color}
					size={339}
					onComplete={() => {
						setStatus(Status.FINISHED);
						return { shouldRepeat: true, delay: 1 };
					}}
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
