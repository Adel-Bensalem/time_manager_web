import axios from "axios";

function sendRequest(config) {
    return new Promise((resolve, reject) =>
            axios({
                url: config.endpoint,
                headers: { "Content-Type": "application/json", ...config.headers },
                ...config
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