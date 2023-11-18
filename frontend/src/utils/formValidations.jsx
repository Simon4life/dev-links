const checkLinks = (arr) => {
  for (const obj of arr) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj["link"];
        const urlPattern = /^(http||https):/;
        if (urlPattern.test(value)) {
          return true;
        }
      }
    }
  }
  return false;
};

const areAllPropertiesFilled = (arr) => {
  for (const obj of arr) {
    for (const key in obj) {
      if (
        (obj.hasOwnProperty(key) && obj[key] === null) ||
        obj[key] === undefined ||
        obj[key] === ""
      ) {
        return false;
      }
    }
  }
  return true;
};

export {checkLinks, areAllPropertiesFilled};