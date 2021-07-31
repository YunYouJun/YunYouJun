export interface CustomIcon {
  /**
   * 名称
   */
  name: string;
  /**
   * 图标链接
   */
  url: string;
  /**
   * 类型
   */
  type?: string;
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
