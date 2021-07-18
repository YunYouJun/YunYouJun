interface CustomIcon {
  /**
   * 名称
   */
  name: string;
  /**
   * 图标链接
   */
  url: string;
}

/**
 * 生成语言图标列表
 */
export function generateIconList(icons: (string | CustomIcon)[]) {
  return icons
    .map((icon) => {
      let imgElement = `<img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${icon}/${icon}.png" alt="${icon}" />`;
      if (typeof icon !== "string") {
        imgElement = `<img height="20" src="${icon.url}" alt="${icon.name}" />`;
      }
      return `<code>${imgElement}</code>`;
    })
    .join("\n");
}

// <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
// <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>
// <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
// <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></code>
// <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"></code>
// <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
// <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png"></code>
// <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"></code>
// <code><img height="20" src="https://user-images.githubusercontent.com/1503156/50446380-ad88c980-094f-11e9-8eff-0094bde708d0.png"></code>
