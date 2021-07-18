import { logger } from "./logger";

import fs from "fs";
import { markdown } from "@yunyoujun/utils";
import { generateIconList } from "./utils";

const readmeFile = "README.md";
let readmeContent = fs.readFileSync(readmeFile, "utf-8");

const iconsList = [
  {
    namespace: "languages",
    icons: [
      "javascript",
      "typescript",
      "css",
      "html",
      "sass",
      "nodejs",
      "php",
      "python",
      {
        name: "cocos",
        url: "https://user-images.githubusercontent.com/1503156/50446380-ad88c980-094f-11e9-8eff-0094bde708d0.png",
      },
    ],
  },
  {
    namespace: "tools",
    icons: ["vue", "react", "gulp", "git", "visual-studio-code", "macos"],
  },
  {
    namespace: "interested",
    icons: [
      {
        name: "blender",
        url: "https://simpleicons.org/icons/blender.svg",
      },
      "unity",
      "unreal-engine",
      {
        name: "AE",
        url: "https://simpleicons.org/icons/adobeaftereffects.svg",
      },
    ],
  },
];

iconsList.forEach((item) => {
  readmeContent = markdown.injectContentBetweenTags(
    item.namespace,
    readmeContent,
    generateIconList(item.icons)
  );
});

fs.writeFileSync(readmeFile, readmeContent);

logger.success(`Generate ${readmeFile} successfully!`);
