var request = require("request");

/**
 * Function hitUrl
 *  This fucntion is used to make a get request on url
 * @param {string} url
 * @returns {Promise}
 * @author Dilshad Ahmed <dilshadahme506@gamil.com>
 * @copyright (c) 2018
 */
function hitUrl(url) {
  return new Promise(function (resolve, reject) {
    request.get({url}, function (err, resp, body) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(resp.statusCode);
      }
    })
  })
}

/**
 * Fucntion checkUrl
 *  This function is used manage response of hitUrl method and send response accrding to that
 * 
 * @param {string} url
 * @param {object} res 
 * @author Dilshad Ahmed <dilshadahme506@gamil.com>
 * @copyright (c) 2018
 */
function checkUrl(url, res) {
  let response = {};
  if (url.indexOf('https://') === -1 && url.indexOf('http://') === -1) {
    url = 'https://' + url;
  }
  hitUrl(url)
    .then(function (result) {
      console.log(typeof response);
      if (typeof result == 'number') {
        response.status = true;
        response.msg = 'Yup! Your url is flowing over www.';
        response.url = url;
        console.log(response);
        res.status(200).json(response);
      }
    })
    .catch(function (err) {
      response.status = false;
      response.msg = 'Huh! Your url does not exist in world.';
      response.url = url;
      res.status(200).json(response);
    });
}

module.exports.checkUrl = checkUrl;