import {isTimeValid} from "../entities/timeValidator";

function reportArrivalTime(repository, session, presenter) {
    return (time) => {
        presenter.presentArrivalTimeReportRequest();

        isTimeValid(time) && session.exist() ?
            repository
                .saveArrivalTime(time, session.retrieve())
                .then(presentArrivalTimeReportSuccess)
                .catch(presentArrivalTimeReportFailure) :
            presenter.presentArrivalTimeReportFailure()
    }
}

export { reportArrivalTime };