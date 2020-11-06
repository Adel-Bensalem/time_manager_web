import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    isRequestPending: false,
    isRequestSuccessful: false,
    isRequestFailure: false,
};

function reduceArrivalTimeReportRequestState() {
    return { ...initialState, isRequestPending: true };
}

function reduceArrivalTimeReportSuccessState() {
    return { ...initialState, isRequestSuccessful: true };
}

function reduceArrivalTimeReportFailureState() {
    return { ...initialState, isRequestFailure: true };
}

const reduceArrivalTimeReportState = createReducer(initialState, {
    [messages.ARRIVAL_TIME_REPORT_REQUESTED]: reduceArrivalTimeReportRequestState,
    [messages.ARRIVAL_TIME_REPORT_SUCCEEDED]: reduceArrivalTimeReportSuccessState,
    [messages.ARRIVAL_TIME_REPORT_FAILED]: reduceArrivalTimeReportFailureState,
});

export { reduceArrivalTimeReportState };