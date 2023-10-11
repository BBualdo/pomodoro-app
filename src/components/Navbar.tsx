import { useState } from 'react';

import { Timer } from '../ts/enums';
import styles from '../scss/Navbar.module.scss';
import useSettings from '../hooks/useSettings';

const Navbar = () => {
	const { color, font } = useSettings();

	const [selectedTimer, setSelectedTimer] = useState(Timer.POMODORO);

	const navbarClickHandler = (id: Timer) => {
		setSelectedTimer(id);
	};

	return (
		<div className={styles.navbar}>
			<div
				id='pomodoro'
				onClick={() => navbarClickHandler(Timer.POMODORO)}
				style={{
					fontFamily: font,
					background: selectedTimer === Timer.POMODORO ? color : '',
					opacity: selectedTimer === Timer.POMODORO ? '1' : '',
					color: selectedTimer === Timer.POMODORO ? '#1e213f' : '',
				}}
			>
				pomodoro
			</div>
			<div
				id='short-break'
				onClick={() => navbarClickHandler(Timer.SHORT_BREAK)}
				style={{
					fontFamily: font,
					background: selectedTimer === Timer.SHORT_BREAK ? color : '',
					opacity: selectedTimer === Timer.SHORT_BREAK ? '1' : '',
					color: selectedTimer === Timer.SHORT_BREAK ? '#1e213f' : '',
				}}
			>
				short break
			</div>
			<div
				id='long-break'
				onClick={() => navbarClickHandler(Timer.LONG_BREAK)}
				style={{
					fontFamily: font,
					background: selectedTimer === Timer.LONG_BREAK ? color : '',
					opacity: selectedTimer === Timer.LONG_BREAK ? '1' : '',
					color: selectedTimer === Timer.LONG_BREAK ? '#1e213f' : '',
				}}
			>
				long break
			</div>
		</div>
	);
};

export default Navbar;
