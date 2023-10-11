import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

import xIcon from '../assets/icon-close.svg';

import styles from '../scss/Settings.module.scss';

const Backdrop = () => {
	return <div className={styles.backdrop} />;
};

const SettingsOverlay = (props: { hideSettings: () => void }) => {
	return (
		<div className={styles.settings}>
			<div className={styles.header}>
				<h2>Settings</h2>
				<img onClick={props.hideSettings} src={xIcon} alt='X' />
			</div>
			<div className={styles.pickers}>
				<div className={styles.time__picker}>
					<h4>Time (Minutes)</h4>
					<div className={styles.inputs}>
						<div className={styles.container}>
							<label>pomodoro</label>
							<input type='number' min={1} max={60} defaultValue={25} />
						</div>
						<div className={styles.container}>
							<label>short break</label>
							<input type='number' min={5} max={15} defaultValue={5} />
						</div>
						<div className={styles.container}>
							<label>long break</label>
							<input type='number' min={10} max={30} defaultValue={15} />
						</div>
					</div>
				</div>
				<div className={styles.font__picker}>
					<h4>Font</h4>
					<div className={styles.buttons}>
						<button className={styles.kumbh}>Aa</button>
						<button className={styles.roboto}>Aa</button>
						<button className={styles.space}>Aa</button>
					</div>
				</div>
				<div className={styles.color__picker}>
					<h4>Color</h4>
					<div className={styles.buttons}>
						<button className={styles.red}></button>
						<button className={styles.cyan}></button>
						<button className={styles.pink}></button>
					</div>
				</div>
			</div>
			<div className={styles.apply}>
				<button className={styles.apply__button}>Apply</button>
			</div>
		</div>
	);
};

const SettingsIcon = (props: { displaySettings: () => void }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='28'
			height='28'
			className={styles.image}
			onClick={props.displaySettings}
		>
			<path d='M26.965 17.682l-2.927-2.317c.055-.448.097-.903.097-1.365 0-.462-.042-.917-.097-1.365l2.934-2.317a.702.702 0 00.167-.896l-2.775-4.851a.683.683 0 00-.847-.301l-3.454 1.407a10.506 10.506 0 00-2.345-1.379l-.52-3.71A.716.716 0 0016.503 0h-5.55a.703.703 0 00-.687.588l-.52 3.71c-.847.357-1.63.819-2.345 1.379L3.947 4.27a.691.691 0 00-.847.301L.325 9.422a.705.705 0 00.167.896l2.927 2.317c-.055.448-.097.903-.097 1.365 0 .462.042.917.097 1.365L.492 17.682a.702.702 0 00-.167.896L3.1 23.429a.683.683 0 00.847.301L7.4 22.323a10.506 10.506 0 002.345 1.379l.52 3.71c.056.329.34.588.687.588h5.55a.703.703 0 00.687-.588l.52-3.71c.847-.357 1.631-.819 2.346-1.379l3.454 1.407c.313.119.673 0 .847-.301l2.775-4.851a.705.705 0 00-.167-.896zM13.73 18.9c-2.685 0-4.857-2.191-4.857-4.9 0-2.709 2.172-4.9 4.857-4.9 2.684 0 4.856 2.191 4.856 4.9 0 2.71-2.172 4.9-4.856 4.9z' />
		</svg>
	);
};

const Settings = () => {
	const [showSettings, setShowSettings] = useState(false);

	const displaySettings = () => {
		setShowSettings(true);
	};

	const hideSettings = () => {
		setShowSettings(false);
	};

	return (
		<Fragment>
			{showSettings &&
				ReactDOM.createPortal(
					<Backdrop />,
					document.getElementById('backdrop')!,
				)}
			{showSettings &&
				ReactDOM.createPortal(
					<SettingsOverlay hideSettings={hideSettings} />,
					document.getElementById('overlay')!,
				)}
			<SettingsIcon displaySettings={displaySettings} />
		</Fragment>
	);
};

export default Settings;
