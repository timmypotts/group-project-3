import axios from "axios";

export default {
  getData: function() {
    return axios
      .get("/api/donors")
      .then(res => {
        if (!res.data) {
          return alert("No donors currently avaliable");
        }
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
