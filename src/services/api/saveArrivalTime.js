function saveArrivalTime(sendHttpRequest) {
    return (time, { token }) => sendHttpRequest({
        endpoint: "/api/clocks/",
        method: 'POST',
        data: time,
        headers: { Authorization: `Bearer ${token}` }
    });
}

export {saveArrivalTime};