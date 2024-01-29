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
    const downloadUrl = `https://www.terabox.com/share/list?app_id=250528&shorturl=${surlValue}&root=1`;
  const downloadResponse = await axiosInstance.get(downloadUrl, { headers });
  
  try {
    const result = downloadResponse.data.list[0].dlink;
    return result;
  } catch (error) {
    console.log('Failed to get download link');
  }
}

// Example usage
const dlink = download('https://teraboxapp.com/s/1ZqumlUbwrc32c40geaQsVg');
console.log(dlink);

}

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
