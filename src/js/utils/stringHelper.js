export function getOccurenceNumber(soursedString, findString) {
  return(soursedString.match(new RegExp(`${findString}`, 'gi')) || []).length;
}