import {isTimeValid} from "../entities/timeValidator";

function reportArrivalTime(repository, session, presenter) {
    return (time) => {
        presenter.presentArrivalTimeReportRequest();

        isTimeValid(time) && session.exist() ?
            repository
                .saveArrivalTime(time, session.retrieve())
                .then(presenter.presentArrivalTimeReportSuccess)
                .catch(presenter.presentArrivalTimeReportFailure) :
            presenter.presentArrivalTimeReportFailure()
    }
}

export { reportArrivalTime };