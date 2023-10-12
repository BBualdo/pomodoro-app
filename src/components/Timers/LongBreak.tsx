import useSettings from '../../hooks/useSettings';

import TimersTemplate from './TimersTemplate';

const LongBreak = () => {
	const { timers } = useSettings();

	return <TimersTemplate duration={timers.longBreak} />;
};

export default LongBreak;
