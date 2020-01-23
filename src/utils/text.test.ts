import { simplifyUrl } from "./text";

describe("simplifyUrl", () => {
  it("returns hostname", () => {
    const url1 = "https://github.com/imvetri/ui-editor#ui-editor";
    const url2 = "https://www.psl.com/feed-posts/psl-studio-kill-xylo";
    const url3 =
      "https://chrome.google.com/webstore/detail/google-classic-results/mncmlbggmdcmddddanjcgabpajadljhm";

    const result1 = simplifyUrl(url1);
    const result2 = simplifyUrl(url2);
    const result3 = simplifyUrl(url3);

    expect(result1).toBe("github.com");
    expect(result2).toBe("psl.com");
    expect(result3).toBe("chrome.google.com");
  });
});
