import urlParse from "url-parse";
export function simplifyUrl(url: string) {
  const parsedUrl = urlParse(url);
  return parsedUrl.host.replace("www.", "");
}
