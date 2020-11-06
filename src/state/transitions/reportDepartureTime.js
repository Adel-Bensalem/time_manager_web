import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    isRequestPending: false,
    isRequestSuccessful: false,
    isRequestFailure: false,
};

function reduceDepartureTimeReportRequestState() {
    return { ...initialState, isRequestPending: true };
}

function reduceDepartureTimeReportSuccessState() {
    return { ...initialState, isRequestSuccessful: true };
}

function reduceDepartureTimeReportFailureState() {
    return { ...initialState, isRequestFailure: true };
}

const reduceDepartureTimeReportState = createReducer(initialState, {
    [messages.DEPARTURE_TIME_REPORT_REQUESTED]: reduceDepartureTimeReportRequestState,
    [messages.DEPARTURE_TIME_REPORT_SUCCEEDED]: reduceDepartureTimeReportSuccessState,
    [messages.DEPARTURE_TIME_REPORT_FAILED]: reduceDepartureTimeReportFailureState,
});

export { reduceDepartureTimeReportState };