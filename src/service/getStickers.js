const keyApi2 = "AxWjRWR7WN5vD8GO7xiMBiIUCDRfNoU3";

export default async function getStikers(keyword) {
    const apiURL = `https://api.giphy.com/v1/stickers/search?api_key=${keyApi2}&q=${keyword}&limit=50&offset=0&rating=g&lang=en`;
    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const { data } = response;
            console.log(data);
            const stikers = data.map((image) => {
                const { images, title, id } = image;
                const { url } = images.downsized_medium;
                return { title, id, url };
            });
            return stikers;
        });
}
