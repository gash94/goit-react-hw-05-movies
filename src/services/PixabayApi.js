import axios from "axios";

const fetchImg = async (query, numPage) => {
    const response = await axios.get(`https://pixabay.com/api/`, {
        method: "get",
        params: {
            key: "31041731-a505db8ec7b0fe3c02dc109a4",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 12,
            page: numPage,
        },
    });
    return response.data.hits;
};

export default fetchImg;
