
const SESSION_DECODE_REQUESTED = "SESSION_DECODE_REQUESTED";
const SESSION_DECODE_SUCCEEDED = "SESSION_DECODE_SUCCEEDED";
const SESSION_DECODE_FAILED = "SESSION_DECODE_FAILED";

function dispatchSessionDecodeRequest(dispatch) {
    return () => dispatch({ type: SESSION_DECODE_REQUESTED })
}

function dispatchSessionDecodeSuccess(dispatch) {
    return (account) => dispatch({ type: SESSION_DECODE_SUCCEEDED, account })
}

function dispatchSessionDecodeFailure(dispatch) {
    return () => dispatch({ type: SESSION_DECODE_FAILED })
}

export {
    SESSION_DECODE_REQUESTED,
    SESSION_DECODE_SUCCEEDED,
    SESSION_DECODE_FAILED,
    dispatchSessionDecodeRequest,
    dispatchSessionDecodeSuccess,
    dispatchSessionDecodeFailure
}