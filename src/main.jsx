import React from 'react';
import {StartScreen} from "./viewes/StartScreen/StartScreen";


const application = document.getElementById('application');

const startScreen = new StartScreen(application);

startScreen.render();
