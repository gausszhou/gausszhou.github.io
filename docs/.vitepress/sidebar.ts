import fs from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { navbar } from "./navbar";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function isREADME(fileName) {
  return fileName === "README.md"
}

function isIndex(fileName) {
  return fileName === "index.md"
}

function isMD(fileName) {
  const REG = /\.md$/; //只匹配以md结尾的文件
  return REG.test(fileName)
}

function getTitle(fileName) {
  const fileNameNoExt = fileName.replace(".md", "");
  const fileNameNoOrder = fileNameNoExt.replace(/(\d+\-)/, "");
  return fileNameNoOrder;
}

function getPath(fileName, dirPath) {
  const fileNameNoExt = fileName.replace(".md", "");
  fileNameNoExt.replace(/(\d+\-)/, "");
  const urlpath = dirPath + fileNameNoExt;
  return urlpath
}

function getSidebarByLink(path) {
  const filenames: any[] = [];
  const dirFullpath = resolve(__dirname, '..' + path)
  const fileList = fs.readdirSync(dirFullpath);
  fileList.forEach((fileName) => {
    if (isMD(fileName)) {
      if(isREADME(fileName)) {
        console.log('需要转换为 index.md', path, fileName)
      }
      if (isIndex(fileName)) {
        filenames.unshift({ text: "简介", link: path });
      } else {
        filenames.push({
          text: getTitle(fileName),
          link: getPath(fileName, path),
        });
      }
    }

  });
  return filenames;
}

function processSidebar(nav) {
  if (!nav) return false;
  nav.forEach((val) => {
    traverse(val);
  });
  function traverse(item) {
    if (item.items) {
      item.items.forEach(sub => {
        traverse(sub)
      })
    } else if (item.link) {
      sidebar[item.link] = getSidebarByLink(item.link)
    }
  }
}


export const sidebar = {};
processSidebar(navbar)