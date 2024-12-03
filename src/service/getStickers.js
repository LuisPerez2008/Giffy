const keyApi2 = "AxWjRWR7WN5vD8GO7xiMBiIUCDRfNoU3";

export default async function getStikers(keyword, pag = 0) {
    const apiURL = `https://api.giphy.com/v1/stickers/search?api_key=${keyApi2}&q=${keyword}&limit=50&offset=${pag}&rating=g&lang=en`;
    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const { data, pagination } = response;

            const stikers = data.map((image) => {
                const { images, title, id } = image;
                const { url } = images.downsized_medium;

                return { title, id, url };
            });

            return { data: stikers, pagination };
        });
}
