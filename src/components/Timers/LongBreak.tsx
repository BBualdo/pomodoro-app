import { useState } from 'react';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import styles from '../../scss/Timers.module.scss';

import useSettings from '../../hooks/useSettings';
import { Status } from '../../ts/enums';

const LongBreak = () => {
	const [status, setStatus] = useState(Status.NOT_STARTED);
	const { color, font, timers } = useSettings();

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

	const Time = (props: { remainingTime: number }): JSX.Element => {
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

		const minutes = String(Math.floor(props.remainingTime / 60)).padStart(
			2,
			'0',
		);
		const seconds = String(props.remainingTime % 60).padStart(2, '0');
		const remainingTime = `${minutes}:${seconds}`;

		return (
			<div className={styles.time__container}>
				<h1 style={{ fontFamily: font }} className={styles.time}>
					{remainingTime}
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
					duration={timers.pomodoro * 60}
					colors={color}
					size={339}
					onComplete={() => {
						setStatus(Status.FINISHED);
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

export default LongBreak;
