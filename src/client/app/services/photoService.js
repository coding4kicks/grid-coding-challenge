var $ = require("jquery");

/**
 * fetchPhotosFrom500px
 *
 * Retrieves a set of 20 popular photos from the 500px API
 *
 * @param page - Number - page number to fetch from the API
 */
export function fetchPhotosFrom500px(page) {
  const options = {
    url: 'https://api.500px.com/v1/photos',
    type: 'get',
    contentType: 'application/json; charset=utf-8',
    data: {
      consumer_key: 'PZNRoG5hEqsdCYZAI0iZ3OKjIR83JS2orl45ghKo',
      feature: 'popular',
      image_size: 30,
      rpp: 20,
      page: page
    }
  };
  return ajax(options);
}

function ajax(options) {
  return new Promise(function (resolve, reject) {
    $.ajax(options).done(resolve).fail(reject);
  });
}