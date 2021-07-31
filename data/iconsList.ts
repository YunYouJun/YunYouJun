import { CustomIcon } from "../scripts/utils";

type Icons = (string | CustomIcon)[];

interface IconList {
  namespace: string;
  icons: Icons;
}

export const iconsList: IconList[] = [
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
      "yaml",
    ],
  },
  {
    namespace: "tools",
    icons: [
      "vue",
      "react",
      "gulp",
      "git",
      "visual-studio-code",
      "macos",
      {
        name: "vite",
        url: "https://vitejs.dev/logo.svg",
      },
    ],
  },
  {
    namespace: "interested",
    icons: [
      {
        name: "blender",
        url: "https://simpleicons.org/icons/blender.svg",
      },
      {
        name: "cocos",
        url: "https://user-images.githubusercontent.com/1503156/50446380-ad88c980-094f-11e9-8eff-0094bde708d0.png",
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
