export default async function fetchData({url, method, body, headers, onSuccess, onError}) {
    try {
        const response = await fetch(url, {
            method,
            body,
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:8090', 
                'Access-Control-Allow-Methods': 'PUT,GET,POST,DELETE,OPTIONS', 
                ...headers
            }
        })
        
        if (response.status === 200) {
            const json = await response.json()
            onSuccess(json);
            console.log(json);
        } else {
            // onError(response);
            console.error(response);
        }
    }catch(error) {
        // onError(error);
        console.error(error);
    }
}