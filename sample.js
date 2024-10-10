const axios = require('axios');

const jsonFile = {
  yyyymm: 202405,
  age: 65,
  high: 182,
  weight: 74,
  pressu: 120,
  pressd: 80,
  ast: 23,
  alt: 21,
  gtp: 26,
  tg: 42,
  hdl: 70,
  ldl: 89,
  gender: 1,
  urs: 9,
  urp: 9,
  heart: 0,
  lung: 0
};

const apiUrl = "https://myjumyo.azurewebsites.net/api/HttpTrigger1";

axios.post(apiUrl, jsonFile, {
  headers: {
    "Content-Type": "application/json"
  }
})
.then(response => {
  console.log(response.data);
  Object.assign(jsonFile, response.data);
})
.catch(error => {
  console.error('Error:', error.message);
});
