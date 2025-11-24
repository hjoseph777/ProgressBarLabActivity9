import { registerRootComponent } from 'expo';

import App from './App';

// This is basically Expo's way of saying "hey, make this the main component"
// Works for both Expo Go and when we build the actual app - pretty neat!
// TODO: might want to add error boundary here later
registerRootComponent(App);
