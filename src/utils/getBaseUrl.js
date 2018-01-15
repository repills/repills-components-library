export default function(url, withProtocol = false) {
  let result = /^.+?[^/:](?=[?/]|$)/.exec(url);

  return withProtocol
    ? result
    : result[0].replace(/^https?:\/\//i, '').replace('www.', '');
};
