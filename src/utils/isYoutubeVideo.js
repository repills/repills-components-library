export default function(url) {
  const re = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
  return url.match(re);
}
