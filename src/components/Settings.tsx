import { Fragment, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { Fonts, Colors } from '../ts/enums';
import { SettingsInterface, MainSettings } from '../ts/interfaces';

import xIcon from '../assets/icon-close.svg';

import styles from '../scss/Settings.module.scss';

const Backdrop = () => {
	return <div className={styles.backdrop} />;
};

const SettingsOverlay = (props: SettingsInterface) => {
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
							<input
								id='pomodoro'
								type='number'
								min={1}
								max={60}
								defaultValue={25}
							/>
						</div>
						<div className={styles.container}>
							<label>short break</label>
							<input
								id='shortBreak'
								type='number'
								min={5}
								max={15}
								defaultValue={5}
							/>
						</div>
						<div className={styles.container}>
							<label>long break</label>
							<input
								id='longBreak'
								type='number'
								min={10}
								max={30}
								defaultValue={15}
							/>
						</div>
					</div>
				</div>
				<div className={styles.font__picker}>
					<h4>Font</h4>
					<div className={styles.buttons}>
						<button
							onClick={() => props.onFontChange(Fonts.KUMBH)}
							className={`${styles.kumbh} ${
								props.font === Fonts.KUMBH ? styles.active : ''
							}`}
						>
							Aa
						</button>
						<button
							onClick={() => props.onFontChange(Fonts.ROBOTO)}
							className={`${styles.roboto} ${
								props.font === Fonts.ROBOTO ? styles.active : ''
							}`}
						>
							Aa
						</button>
						<button
							onClick={() => props.onFontChange(Fonts.SPACE)}
							className={`${styles.space} ${
								props.font === Fonts.SPACE ? styles.active : ''
							}`}
						>
							Aa
						</button>
					</div>
				</div>
				<div className={styles.color__picker}>
					<h4>Color</h4>
					<div className={styles.buttons}>
						<button
							onClick={() => props.onColorChange(Colors.RED)}
							className={styles.red}
						>
							{props.color === Colors.RED ? '✓' : ''}
						</button>
						<button
							onClick={() => props.onColorChange(Colors.CYAN)}
							className={styles.cyan}
						>
							{props.color === Colors.CYAN ? '✓' : ''}
						</button>
						<button
							onClick={() => props.onColorChange(Colors.PINK)}
							className={styles.pink}
						>
							{props.color === Colors.PINK ? '✓' : ''}
						</button>
					</div>
				</div>
			</div>
			<div className={styles.apply}>
				<button
					onClick={() => props.onApply(props.font, props.color)}
					className={styles.apply__button}
				>
					Apply
				</button>
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

const Settings = (props: {
	settings: MainSettings;
	updateSettings: (settings: MainSettings) => void;
}) => {
	const [showSettings, setShowSettings] = useState(false);
	const [selectedFont, setSelectedFont] = useState(Fonts.KUMBH);
	const [selectedColor, setSelectedColor] = useState(Colors.RED);
	// const [selectedTimers, setSelectedTimers] = useState({
	// 	pomodoro:,
	// 	shortBreak:,
	// 	longBreak:
	// })

	const displaySettings = () => {
		setShowSettings(true);
	};

	const hideSettings = () => {
		setShowSettings(false);
	};

	const fontChangeHandler = (id: Fonts) => {
		setSelectedFont(id);
	};

	const colorChangeHandler = (id: Colors) => {
		setSelectedColor(id);
	};

	const settingsChangeHandler = (id1: Fonts, id2: Colors) => {
		hideSettings();
		props.updateSettings({
			font: id1,
			color: id2,
			timers: {
				pomodoro: 25,
				shortBreak: 5,
				longBreak: 15,
			},
		});
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
					<SettingsOverlay
						hideSettings={hideSettings}
						font={selectedFont}
						onFontChange={(id: Fonts) => fontChangeHandler(id)}
						color={selectedColor}
						onColorChange={(id: Colors) => colorChangeHandler(id)}
						onApply={(id1: Fonts, id2: Colors) =>
							settingsChangeHandler(id1, id2)
						}
					/>,
					document.getElementById('overlay')!,
				)}
			<SettingsIcon displaySettings={displaySettings} />
		</Fragment>
	);
};

export default Settings;
