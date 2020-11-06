import {isTimeValid} from "../entities/timeValidator";

function reportDepartureTime(repository, session, presenter) {
    return (time) => {
        presenter.presentDepartureTimeReportRequest();

        isTimeValid(time) && session.exist() ?
            repository
                .saveDepartureTime(time, session.retrieve())
                .then(presentDepartureTimeReportSuccess)
                .catch(presentDepartureTimeReportFailure) :
            presenter.presentDepartureTimeReportFailure()
    }
}

export { reportDepartureTime };