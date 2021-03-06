import { createApp } from 'vue'

import { createCore } from "./core/main";
import { createServices } from "./services/main";
import { createState, createMessageDispatcher, createSelector } from "./state/main";
import { sendRequest } from "./tools/httpClient";
import { createDispatcherToPresenterAdapter } from "./tools/dispatcherToPresenterAdapter";
import { start, retrieve, exist } from "./tools/session";

import App from './ui/App.vue'

const services = createServices(sendRequest);
const state = createState();
const messageDispatcher = createMessageDispatcher(state.dispatch);
const selector = createSelector(state.getState);
const core = createCore(
    services,
    createDispatcherToPresenterAdapter(messageDispatcher),
    services,
    { start, retrieve, exist },
    { decode: services.decodeToken }
);

createApp(App)
    .use((app) => {
        app.mixin({
            beforeCreate() {
                this.core = core;
                this.messageDispatcher = messageDispatcher;
                this.selector = selector;
                this.subscribeToStore = (callSubscriber) => state.subscribe(callSubscriber);
            }
        });
    })
    .mount('#app');
