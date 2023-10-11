import { useState } from 'react';

import { Timers } from '../ts/enums';
import styles from '../scss/Navbar.module.scss';

const Navbar = () => {
	const [selectedTimer, setSelectedTimer] = useState(Timers.POMODORO);

	const navbarClickHandler = (id: Timers) => {
		setSelectedTimer(id);
	};

	return (
		<div className={styles.navbar}>
			<div
				id='pomodoro'
				onClick={() => navbarClickHandler(Timers.POMODORO)}
				className={selectedTimer === Timers.POMODORO ? styles.active : ''}
			>
				pomodoro
			</div>
			<div
				id='short-break'
				onClick={() => navbarClickHandler(Timers.SHORT_BREAK)}
				className={selectedTimer === Timers.SHORT_BREAK ? styles.active : ''}
			>
				short break
			</div>
			<div
				id='long-break'
				onClick={() => navbarClickHandler(Timers.LONG_BREAK)}
				className={selectedTimer === Timers.LONG_BREAK ? styles.active : ''}
			>
				long break
			</div>
		</div>
	);
};

export default Navbar;
