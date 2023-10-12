import { Timer } from '../ts/enums';
import styles from '../scss/Navbar.module.scss';
import useSettings from '../hooks/useSettings';

const Navbar = (props: {
	timer: Timer;
	updateTimer: (timer: Timer) => void;
}) => {
	const { color, font } = useSettings();

	const navbarClickHandler = (id: Timer) => {
		props.updateTimer(id);
	};

	return (
		<div className={styles.navbar}>
			<div
				id='pomodoro'
				onClick={() => navbarClickHandler(Timer.POMODORO)}
				style={{
					fontFamily: font,
					background: props.timer === Timer.POMODORO ? color : '',
					opacity: props.timer === Timer.POMODORO ? '1' : '',
					color: props.timer === Timer.POMODORO ? '#1e213f' : '',
				}}
			>
				pomodoro
			</div>
			<div
				id='short-break'
				onClick={() => navbarClickHandler(Timer.SHORT_BREAK)}
				style={{
					fontFamily: font,
					background: props.timer === Timer.SHORT_BREAK ? color : '',
					opacity: props.timer === Timer.SHORT_BREAK ? '1' : '',
					color: props.timer === Timer.SHORT_BREAK ? '#1e213f' : '',
				}}
			>
				short break
			</div>
			<div
				id='long-break'
				onClick={() => navbarClickHandler(Timer.LONG_BREAK)}
				style={{
					fontFamily: font,
					background: props.timer === Timer.LONG_BREAK ? color : '',
					opacity: props.timer === Timer.LONG_BREAK ? '1' : '',
					color: props.timer === Timer.LONG_BREAK ? '#1e213f' : '',
				}}
			>
				long break
			</div>
		</div>
	);
};

export default Navbar;
