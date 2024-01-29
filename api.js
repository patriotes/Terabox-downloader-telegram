const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `http://terabox-dl.qtcloud.workers.dev/api/get-info?shorturl=${id}&pwd=`
        );
      
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function getDownloadLink(data) {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const options = {
            method: 'GET',
            url: 'https://terabox-downloader.p.rapidapi.com/',
            params: { url: '<REQUIRED>' },
            headers: {
                'X-RapidAPI-Key': '4f2bd0fc83msh5ff6c418f6b6c71p1a366cjsn1e9ed473356a',
                'X-RapidAPI-Host': 'terabox-downloader.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getDetails,
    getDownloadLink
};
