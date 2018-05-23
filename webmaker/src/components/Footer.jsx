import { h, Component } from 'preact';
import Modal from './Modal.jsx';

export default class Footer extends Component {
	getInitialState() {
		return {
			isKeyboardShortcutsModalOpen: false
		};
	}

	render() {
		return (
			<div id="footer" class="footer">
				<div class="footer__right  fr">
					<a
						id="saveHtmlBtn"
						class="mode-btn  hint--rounded  hint--top-left hide-on-mobile"
						data-hint="Save as HTML file"
					>
						<svg viewBox="0 0 24 24">
							<path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
						</svg>
					</a>
					<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
						<symbol id="codepen-logo" viewBox="0 0 120 120">
							<path
								class="outer-ring"
								d="M60.048 0C26.884 0 0 26.9 0 60.048s26.884 60 60 60.047c33.163 0 60.047-26.883 60.047-60.047 S93.211 0 60 0z M60.048 110.233c-27.673 0-50.186-22.514-50.186-50.186S32.375 9.9 60 9.9 c27.672 0 50.2 22.5 50.2 50.186S87.72 110.2 60 110.233z"
							/>
							<path
								class="inner-box"
								d="M97.147 48.319c-0.007-0.047-0.019-0.092-0.026-0.139c-0.016-0.09-0.032-0.18-0.056-0.268 c-0.014-0.053-0.033-0.104-0.05-0.154c-0.025-0.078-0.051-0.156-0.082-0.232c-0.021-0.053-0.047-0.105-0.071-0.156 c-0.033-0.072-0.068-0.143-0.108-0.211c-0.029-0.051-0.061-0.1-0.091-0.148c-0.043-0.066-0.087-0.131-0.135-0.193 c-0.035-0.047-0.072-0.094-0.109-0.139c-0.051-0.059-0.104-0.117-0.159-0.172c-0.042-0.043-0.083-0.086-0.127-0.125 c-0.059-0.053-0.119-0.104-0.181-0.152c-0.048-0.037-0.095-0.074-0.145-0.109c-0.019-0.012-0.035-0.027-0.053-0.039L61.817 23.5 c-1.072-0.715-2.468-0.715-3.54 0L24.34 46.081c-0.018 0.012-0.034 0.027-0.053 0.039c-0.05 0.035-0.097 0.072-0.144 0.1 c-0.062 0.049-0.123 0.1-0.181 0.152c-0.045 0.039-0.086 0.082-0.128 0.125c-0.056 0.055-0.108 0.113-0.158 0.2 c-0.038 0.045-0.075 0.092-0.11 0.139c-0.047 0.062-0.092 0.127-0.134 0.193c-0.032 0.049-0.062 0.098-0.092 0.1 c-0.039 0.068-0.074 0.139-0.108 0.211c-0.024 0.051-0.05 0.104-0.071 0.156c-0.031 0.076-0.057 0.154-0.082 0.2 c-0.017 0.051-0.035 0.102-0.05 0.154c-0.023 0.088-0.039 0.178-0.056 0.268c-0.008 0.047-0.02 0.092-0.025 0.1 c-0.019 0.137-0.029 0.275-0.029 0.416V71.36c0 0.1 0 0.3 0 0.418c0.006 0 0 0.1 0 0.1 c0.017 0.1 0 0.2 0.1 0.268c0.015 0.1 0 0.1 0.1 0.154c0.025 0.1 0.1 0.2 0.1 0.2 c0.021 0.1 0 0.1 0.1 0.154c0.034 0.1 0.1 0.1 0.1 0.213c0.029 0 0.1 0.1 0.1 0.1 c0.042 0.1 0.1 0.1 0.1 0.193c0.035 0 0.1 0.1 0.1 0.139c0.05 0.1 0.1 0.1 0.2 0.2 c0.042 0 0.1 0.1 0.1 0.125c0.058 0.1 0.1 0.1 0.2 0.152c0.047 0 0.1 0.1 0.1 0.1 c0.019 0 0 0 0.1 0.039L58.277 96.64c0.536 0.4 1.2 0.5 1.8 0.537c0.616 0 1.233-0.18 1.77-0.537 l33.938-22.625c0.018-0.012 0.034-0.027 0.053-0.039c0.05-0.035 0.097-0.072 0.145-0.109c0.062-0.049 0.122-0.1 0.181-0.152 c0.044-0.039 0.085-0.082 0.127-0.125c0.056-0.055 0.108-0.113 0.159-0.172c0.037-0.045 0.074-0.09 0.109-0.139 c0.048-0.062 0.092-0.127 0.135-0.193c0.03-0.049 0.062-0.098 0.091-0.146c0.04-0.07 0.075-0.141 0.108-0.213 c0.024-0.051 0.05-0.102 0.071-0.154c0.031-0.078 0.057-0.156 0.082-0.234c0.017-0.051 0.036-0.102 0.05-0.154 c0.023-0.088 0.04-0.178 0.056-0.268c0.008-0.045 0.02-0.092 0.026-0.137c0.018-0.139 0.028-0.277 0.028-0.418V48.735 C97.176 48.6 97.2 48.5 97.1 48.319z M63.238 32.073l25.001 16.666L77.072 56.21l-13.834-9.254V32.073z M56.856 32.1 v14.883L43.023 56.21l-11.168-7.471L56.856 32.073z M29.301 54.708l7.983 5.34l-7.983 5.34V54.708z M56.856 88.022L31.855 71.4 l11.168-7.469l13.833 9.252V88.022z M60.048 67.597l-11.286-7.549l11.286-7.549l11.285 7.549L60.048 67.597z M63.238 88.022V73.14 l13.834-9.252l11.167 7.469L63.238 88.022z M90.794 65.388l-7.982-5.34l7.982-5.34V65.388z"
							/>
						</symbol>
					</svg>

					<a
						href=""
						id="codepenBtn"
						class="mode-btn  hint--rounded  hint--top-left  hide-on-mobile"
						aria-label="Edit on CodePen"
					>
						Codepen
					</a>

					<a
						href=""
						id="screenshotBtn"
						class="mode-btn  hint--rounded  hint--top-left show-when-extension"
						d-click="takeScreenshot"
						aria-label="Take screenshot of preview"
					>
						<svg style="width:24px;height:24px" viewBox="0 0 24 24">
							<path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />
						</svg>
					</a>

					<div class="footer__separator hide-on-mobile" />

					<a id="layoutBtn1" class="mode-btn hide-on-mobile">
						Layout1
					</a>
					<a id="layoutBtn2" class="mode-btn hide-on-mobile">
						Layout2
					</a>
					<a id="layoutBtn3" class="mode-btn hide-on-mobile">
						Layout3
					</a>
					<a id="layoutBtn5" class="mode-btn hide-on-mobile">
						Layout4
					</a>
					<a
						id="layoutBtn4"
						class="mode-btn hint--top-left hint--rounded  hide-on-mobile"
						aria-label="Full Screen"
					>
						<svg viewBox="0 0 100 100">
							<rect x="0" y="0" width="100" height="100" />
						</svg>
					</a>
					<a
						class="mode-btn hint--top-left hint--rounded hide-on-mobile"
						aria-label="Detach Preview"
						d-click="openDetachedPreview"
					>
						<svg viewBox="0 0 24 24">
							<path d="M22,17V7H6V17H22M22,5A2,2 0 0,1 24,7V17C24,18.11 23.1,19 22,19H16V21H18V23H10V21H12V19H6C4.89,19 4,18.11 4,17V7A2,2 0 0,1 6,5H22M2,3V15H0V3A2,2 0 0,1 2,1H20V3H2Z" />
						</svg>
					</a>

					<div class="footer__separator" />

					<a
						id="notificationsBtn"
						class="notifications-btn  mode-btn  hint--top-left  hint--rounded"
						aria-label="Notifications"
					>
						<svg viewBox="0 0 24 24">
							<path d="M14,20A2,2 0 0,1 12,22A2,2 0 0,1 10,20H14M12,2A1,1 0 0,1 13,3V4.08C15.84,4.56 18,7.03 18,10V16L21,19H3L6,16V10C6,7.03 8.16,4.56 11,4.08V3A1,1 0 0,1 12,2Z" />
						</svg>
						<span class="notifications-btn__dot" />
					</a>
					<a
						d-open-modal="settingsModal"
						data-event-category="ui"
						data-event-action="settingsBtnClick"
						class="mode-btn  hint--top-left  hint--rounded"
						aria-label="Settings"
					>
						Settings
					</a>
				</div>
				<a href="https://webmakerapp.com/" target="_blank">
					<div class="logo" />
				</a>
				&copy;
				<span class="web-maker-with-tag">Web Maker</span> &nbsp;&nbsp;
				<a
					d-open-modal="helpModal"
					data-event-category="ui"
					data-event-action="helpButtonClick"
					class="footer__link  hint--rounded  hint--top-right"
					aria-label="Help"
				>
					<svg
						style="width:20px; height:20px; vertical-align:text-bottom"
						viewBox="0 0 24 24"
					>
						<path d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
					</svg>
				</a>
				<a
					onClick={() => this.setState({ isKeyboardShortcutsModalOpen: true })}
					data-event-category="ui"
					data-event-action="keyboardShortcutButtonClick"
					class="footer__link  hint--rounded  hint--top-right hide-on-mobile"
					aria-label="Keyboard shortcuts"
				>
					Keyboard
				</a>
				<a
					class="footer__link  hint--rounded  hint--top-right"
					aria-label="Tweet about 'Web Maker'"
					href="http://twitter.com/share?url=https://webmakerapp.com/&text=Web Maker - A blazing fast %26 offline web playground! via @webmakerApp&related=webmakerApp&hashtags=web,frontend,playground,offline"
					target="_blank"
				>
					Tweet
				</a>
				<a
					d-click="openSupportDeveloperModal"
					data-event-action="supportDeveloperFooterBtnClick"
					class="footer__link  ml-1  hint--rounded  hint--top-right hide-on-mobile"
					aria-label="Support the developer by pledging some amount"
					target="_blank"
				>
					Support the developer
				</a>
				<Modal
					show={this.state.isKeyboardShortcutsModalOpen}
					closeHandler={() =>
						this.setState({ isKeyboardShortcutsModalOpen: false })
					}
				>
					<h1>Keyboard Shortcuts</h1>

					<div class="flex">
						<div>
							<h2>Global</h2>
							<p>
								<span class="kbd-shortcut__keys">Ctrl/⌘ + Shift + ?</span>
								<span class="kbd-shortcut__details">
									See keyboard shortcuts
								</span>
							</p>
							<p>
								<span class="kbd-shortcut__keys">Ctrl/⌘ + Shift + 5</span>
								<span class="kbd-shortcut__details">Refresh preview</span>
							</p>
							<p>
								<span class="kbd-shortcut__keys">Ctrl/⌘ + S</span>
								<span class="kbd-shortcut__details">
									Save current creations
								</span>
							</p>
							<p>
								<span class="kbd-shortcut__keys">Ctrl/⌘ + O</span>
								<span class="kbd-shortcut__details">
									Open list of saved creations
								</span>
							</p>
							<p>
								<span class="kbd-shortcut__keys">Ctrl + L</span>
								<span class="kbd-shortcut__details">
									Clear console (works when console input is focused)
								</span>
							</p>
							<p>
								<span class="kbd-shortcut__keys">Esc</span>
								<span class="kbd-shortcut__details">
									Close saved creations panel & modals
								</span>
							</p>
						</div>
						<div class="ml-2">
							<h2>Editor</h2>
							<p>
								<span class="kbd-shortcut__keys">Ctrl/⌘ + F</span>
								<span class="kbd-shortcut__details">Find</span>
							</p>
							<p>
								<span class="kbd-shortcut__keys">Ctrl/⌘ + G</span>
								<span class="kbd-shortcut__details">Select next match</span>
							</p>
							<p>
								<span class="kbd-shortcut__keys">Ctrl/⌘ + Shift + G</span>
								<span class="kbd-shortcut__details">Select previous match</span>
							</p>
							<p>
								<span class="kbd-shortcut__keys">Ctrl/⌘ + Opt/Alt + F</span>
								<span class="kbd-shortcut__details">Find & replace</span>
							</p>
							<p>
								<span class="kbd-shortcut__keys">Shift + Tab</span>
								<span class="kbd-shortcut__details">Realign code</span>
							</p>
							<p>
								<span class="kbd-shortcut__keys">Ctrl/⌘ + ]</span>
								<span class="kbd-shortcut__details">Indent code right</span>
							</p>
							<p>
								<span class="kbd-shortcut__keys">Ctrl/⌘ + [</span>
								<span class="kbd-shortcut__details">Indent code left</span>
							</p>
							<p>
								<span class="kbd-shortcut__keys">Tab</span>
								<span class="kbd-shortcut__details">
									Emmet code completion{' '}
									<a href="https://emmet.io/" target="_blank">
										Read more
									</a>
								</span>
							</p>
							<p>
								<span class="kbd-shortcut__keys">Ctrl/⌘ + /</span>
								<span class="kbd-shortcut__details">Single line comment</span>
							</p>
						</div>
					</div>
				</Modal>
			</div>
		);
	}
}