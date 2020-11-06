<template>
    <div class="time-report">
        <div class="time-report__button">
            <Button :is-disabled="arrivalRequest.isPending" @click="reportArrival">Report arrival</Button>
        </div>
        <div class="time-report__button">
            <Button :is-disabled="departureRequest.isPending" @click="reportDeparture">Report departure</Button>
        </div>
    </div>
</template>

<script>
    import Button from "../button"

    export default {
        components: {Button},
        data() {
            return {
                arrivalRequest: {
                    isPending: this.selector.isArrivalTimeReportRequestPending(),
                    isSuccess: this.selector.isArrivalTimeReportRequestSuccess(),
                    isFailure: this.selector.isArrivalTimeReportRequestFailure(),
                },
                departureRequest: {
                    isPending: this.selector.isDepartureTimeReportRequestPending(),
                    isSuccess: this.selector.isDepartureTimeReportRequestSuccess(),
                    isFailure: this.selector.isDepartureTimeReportRequestFailure(),
                }
            }
        },
        methods: {
            reportArrival() {
                this.core.reportArrivalTime(this.getDateTime());
            },
            reportDeparture() {
                this.core.reportDepartureTime(this.getDateTime());
            },
            getDateTime() {
                return new Date().toLocaleString();
            }
        },
        created() {
            this.subscribeToStore(() => {
                this.arrivalRequest = {
                    isPending: this.selector.isArrivalTimeReportRequestPending(),
                    isSuccess: this.selector.isArrivalTimeReportRequestSuccess(),
                    isFailure: this.selector.isArrivalTimeReportRequestFailure(),
                };
                this.departureRequest = {
                    isPending: this.selector.isDepartureTimeReportRequestPending(),
                    isSuccess: this.selector.isDepartureTimeReportRequestSuccess(),
                    isFailure: this.selector.isDepartureTimeReportRequestFailure(),
                }
            })
        }
    }
</script>

<style scoped>
    .time-report {
        padding: 2rem;
        display: flex;
        flex-wrap: wrap;
    }

    .time-report__button {
        padding: 2rem;
    }
</style>