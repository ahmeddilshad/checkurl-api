var urlCheckingModel = require('../models/UrlCheckingModel');

/**
 * Function checkUrlWorkingOrNot
 *  This function is used to validate url in request and also its format and then calls the model
 * @param {object} req
 * @param {object} res
 * 
 * @author Dilshad Ahmed <dilshadahme506@gamil.com>
 * @copyright (c) 2018
 */
function checkUrlWorkingOrNot(req, res) {
  let response = {};
  if (typeof req.body.url !== 'undefined' && req.body.url !== '') {
    if (req.body.url.indexOf('.') > -1) {
      var url = req.body.url;
      urlCheckingModel.checkUrl(url, res);
    } else {
      response.status = false;
      response.msg = 'Invalid Url';
      response.url = req.body.url;
      res.status(200);
      res.json(response);
    }
  } else {
    response.status = false;
    response.msg = 'Url is missing in request.';
    res.status(200);
    res.json(response);
  }
}

module.exports.checkUrlWorkingOrNot = checkUrlWorkingOrNot;