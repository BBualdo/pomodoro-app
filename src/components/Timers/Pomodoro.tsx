import useSettings from '../../hooks/useSettings';

import TimersTemplate from './TimersTemplate';

const Pomodoro = () => {
	const { timers } = useSettings();

	return <TimersTemplate duration={timers.pomodoro} timerName='Pomodoro' />;
};

export default Pomodoro;
