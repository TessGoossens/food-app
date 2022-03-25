import axios from "axios";
 
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
      Authorization: 'Bearer _yrCuCE0zMuyhXj7wy36JRpEt5XBp_3qdn8ez2VL2nNceaBJUHZh2kSPE8Ny8eGIGp6Uyg1BE_qFakR5nO1N6KpJRpPW0vWoD8-njPtxtXw2NYwnmJnAKXHKp_E6YnYx'
    }
  });
 