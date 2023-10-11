import { useState } from 'react';

import { Timers } from '../ts/enums';
import styles from '../scss/Navbar.module.scss';
import useSettings from '../hooks/useSettings';

const Navbar = () => {
	const { color, font } = useSettings();

	const [selectedTimer, setSelectedTimer] = useState(Timers.POMODORO);

	const navbarClickHandler = (id: Timers) => {
		setSelectedTimer(id);
	};

	return (
		<div className={styles.navbar}>
			<div
				id='pomodoro'
				onClick={() => navbarClickHandler(Timers.POMODORO)}
				style={{
					fontFamily: font,
					background: selectedTimer === Timers.POMODORO ? color : '',
					opacity: selectedTimer === Timers.POMODORO ? '1' : '',
					color: selectedTimer === Timers.POMODORO ? '#1e213f' : '',
				}}
			>
				pomodoro
			</div>
			<div
				id='short-break'
				onClick={() => navbarClickHandler(Timers.SHORT_BREAK)}
				style={{
					fontFamily: font,
					background: selectedTimer === Timers.SHORT_BREAK ? color : '',
					opacity: selectedTimer === Timers.SHORT_BREAK ? '1' : '',
					color: selectedTimer === Timers.SHORT_BREAK ? '#1e213f' : '',
				}}
			>
				short break
			</div>
			<div
				id='long-break'
				onClick={() => navbarClickHandler(Timers.LONG_BREAK)}
				style={{
					fontFamily: font,
					background: selectedTimer === Timers.LONG_BREAK ? color : '',
					opacity: selectedTimer === Timers.LONG_BREAK ? '1' : '',
					color: selectedTimer === Timers.LONG_BREAK ? '#1e213f' : '',
				}}
			>
				long break
			</div>
		</div>
	);
};

export default Navbar;
