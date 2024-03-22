import './src/assets/style/index.css';
import './src/app.js';
import { App } from './src/app.js';
import { closedModal } from './src/utils/ClosedModal/index.js';
import { handleSubmit } from './src/utils/GetForm/index.js';
document.querySelector('#app').append(App());
closedModal();
handleSubmit();
