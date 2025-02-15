export default function(thumbnail) {
  if (thumbnail.maxres) {
    return thumbnail.maxres.url;
  } else if (thumbnail.high) {
    return thumbnail.high.url;
  } else if (thumbnail.standard) {
    return thumbnail.standard.url;
  } else if (thumbnail.default) {
    return thumbnail.default.url;
  }

  return ``;
}
