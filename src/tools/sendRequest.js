import axios from "axios";

function sendRequest(endpoint, method, data) {
    const requestData = method === "GET" ? {params: data} : {data};

    return new Promise((resolve, reject) =>
            axios({
                url: endpoint,
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                ...requestData
            })
                .then(({data}) => resolve(data))
                .catch(error =>
                    reject(
                        error.response
                            ? error.response.data
                            : error.request
                            ? error.request
                            : error
                    )
                )
    );
}

export { sendRequest };