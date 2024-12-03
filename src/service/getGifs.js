const keyApi = "sfbqSWI7uECi6yXouz0RVR21QeVy0smb";

export default async function getGifs(keyword, pag = 0) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${keyApi}&q=${keyword}&limit=50&offset=${pag}&rating=g&lang=en`;
    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const { data, pagination } = response;
            const gifs = data.map((image) => {
                const { images, title, id } = image;
                const { url } = images.downsized_medium;

                return { title, id, url, pagination };
            });
            return { data: gifs, pagination };
        });
}
