import { useState } from 'react';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import styles from '../scss/Timers.module.scss';

import useSettings from '../hooks/useSettings';
import { Status } from '../ts/enums';

const Timers = () => {
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

	return <div></div>;
};

export default Timers;
