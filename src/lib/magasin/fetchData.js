// une utilite pour les requetes fetch
export const fetchData = async (method, url, body) => {
    try {
        const response = await fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
  };