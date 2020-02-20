 export function sanitizeHTML(text)  {
  const htmlElement = document.createElement('div');
  htmlElement.textContent = text;
  return htmlElement.innerHTML;
 }