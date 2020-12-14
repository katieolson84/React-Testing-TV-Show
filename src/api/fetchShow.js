import axios from "axios";

export const fetchShow = () => {
    return axios
        .get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
          return res.data;
        })
        .catch(err => {
            console.error("error when fetching the data:", err.message);
            return err;
        })
    };
 