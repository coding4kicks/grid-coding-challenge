var $ = require("jquery");

export function fetchPhotosFrom500px() {
  const options = {
    url: 'https://api.500px.com/v1/photos',
    type: 'get',
    contentType: 'application/json; charset=utf-8',
    data: {
      consumer_key: 'PZNRoG5hEqsdCYZAI0iZ3OKjIR83JS2orl45ghKo',
      feature: 'popular',
      image_size: 3,
      rpp: 20,
      page: 1
    }
  };
  return ajax(options);
}

function ajax(options) {
  return new Promise(function (resolve, reject) {
    $.ajax(options).done(resolve).fail(reject);
  });
}