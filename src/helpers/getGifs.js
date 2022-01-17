
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=mIKmP6pvCvfLHB6anJ2yXEStStuSFt5W`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    /* Extrayendo solo las propiedades del data que nos interesa */
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
    /* Enviando la respuesta al estado setImages */
    // setImages(gifs);
}