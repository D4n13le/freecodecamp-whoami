module.exports = function(req) {
  var match;

  var ipaddress = req.headers['x-forwarded-for'];

  var language = req.headers['accept-language'];
  match = /^(.+?),.*$/.exec(language);
  if (match)
    language = match[1];

  var software = req.headers['user-agent'];
  match = /^.*?\((.+?)\).*$/.exec(software);
  if (match)
    software = match[1];

  return {
    ipaddress: ipaddress,
    language:  language,
    software:  software
  };
};