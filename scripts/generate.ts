import { logger } from "./logger";

import fs from "fs";
import { markdown } from "@yunyoujun/utils";
import { generateIconList } from "./utils";
import { iconsList } from "../data/iconsList";

const readmeFile = "README.md";
let readmeContent = fs.readFileSync(readmeFile, "utf-8");

iconsList.forEach((item) => {
  readmeContent = markdown.injectContentBetweenTags(
    item.namespace,
    readmeContent,
    generateIconList(item.icons)
  );
});

fs.writeFileSync(readmeFile, readmeContent);

logger.success(`Generate ${readmeFile} successfully!`);
