import useSettings from '../../hooks/useSettings';

import TimersTemplate from './TimersTemplate';

const Pomodoro = () => {
	const { timers } = useSettings();

	return <TimersTemplate duration={timers.pomodoro} />;
};

export default Pomodoro;
