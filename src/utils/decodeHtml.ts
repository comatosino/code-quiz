export const decodeHtml = (html?: string) => {
  if (!html) {
    return "";
  }
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value.trim();
};
