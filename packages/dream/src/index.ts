import { Girl, Person } from "@yunyoujun/world";
import pkg from "../../../package.json";

const me = new Person();
me.name = pkg.author.name;

/**
 * 结婚
 */
function getMarried() {
  const girl = new Girl();
  girl.tags = ["可爱", "善良", "美丽", "JK"];
  girl.kiss(me);
  girl.fallInLoveWith(me);
}

/**
 * 赚钱
 */
function earnMoney() {
  let sleeping = true;
  let money = 0;

  setInterval(() => {
    if (sleeping) {
      money++;
    } else {
      money++;
      money++;
    }
  }, 1000);
}

/**
 * My Life Start
 */
async function start() {
  earnMoney();
  // new Promise(earnMoney);
  getMarried();
}

start();
