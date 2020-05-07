export function isEmptyObj(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

export function createFile(data, filename, type) {
  var file = new Blob([data], { type: type });
  if (window.navigator.msSaveOrOpenBlob)
    // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename);
  else {
    // Others
    var a = document.createElement("a"),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}

export const createFileFromObj = (dataObj, filename) => {
  createFile(JSON.stringify(dataObj), `${filename}.cyoa.json`, "application/json");
};

export const runJSONFromUpload = (importElementID, onFileLoad) => {
  var files = document.getElementById(importElementID).files;
  if (files.length <= 0) {
    return false;
  }
  console.warn("imported file:", files);

  var fr = new FileReader();

  fr.onload = function (e) {
    var result = JSON.parse(e.target.result);
    onFileLoad(result);
  };

  fr.readAsText(files.item(0));
};