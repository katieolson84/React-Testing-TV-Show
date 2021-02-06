import axios from "axios";

export const fetchShow = () => {
    return axios
        .get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
          return (res);
        })
        .catch(err => {
            console.log("error when fetching the data:", err.message);
            return err;
        })
    };

// export default fetchShow;