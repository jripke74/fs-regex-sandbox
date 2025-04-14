const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

let sFlag = ["isFalse", "gFalse"];

function getFlags(input) {
  if (input === "iTrue") {
    sFlag = sFlag.map((e) => e.replace("iFalse", "iTrue"));
  }

  if (input === "iFalse") {
    sFlag = sFlag.map((e) => e.replace("iTrue", "iFalse"));
  }

  if (input === "gTrue") {
    sFlag = sFlag.map((e) => e.replace("gFalse", "gTrue"));
  }

  if (input === "gFalse") {
    sFlag = sFlag.map((e) => e.replace("gTrue", "gFalse"));
  }

  let returnFlag = "";

  if (sFlag.includes("iFalse") && sFlag.includes("gFalse")) {
    returnFlag = "";
  }

  if (sFlag.includes("iTrue") && sFlag.includes("gFalse")) {
    returnFlag = "i";
  }

  if (sFlag.includes("iFalse") && sFlag.includes("gTrue")) {
    returnFlag = "g";
  }

  if (sFlag.includes("iTrue") && sFlag.includes("gTrue")) {
    returnFlag = "ig";
  }

  return returnFlag;
}
