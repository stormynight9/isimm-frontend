export const fetchData = async (method, url, body, setApiData, setIsLoading, setApiError) => {
    try {
        setIsLoading(true);
        const response = await fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            }
        });
        const data = await response.json();

        setApiData(data);
        setIsLoading(false);
    } catch (error) {
        setApiError(error);
        setIsLoading(false);
    }
  };