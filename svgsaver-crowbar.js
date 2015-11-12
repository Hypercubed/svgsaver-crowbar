var SvgSaver = require('svgsaver');

var body = document.body;
var svgsaver = new SvgSaver();

initialize();

function createPopover (source) {
  var rect = source.getBoundingClientRect();

  var buttonsContainer = document.createElement('div');
  body.appendChild(buttonsContainer);

  buttonsContainer.style.position = 'absolute';
  buttonsContainer.style.top = (rect.top + body.scrollTop) + 'px';
  buttonsContainer.style.left = (body.scrollLeft + rect.left) + 'px';

  var button = document.createElement('button');
  buttonsContainer.appendChild(button);
  button.textContent = 'SVG';
  button.addEventListener('click', function () {
    svgsaver.asSvg(source);
  });

  button = document.createElement('button');
  buttonsContainer.appendChild(button);
  button.textContent = 'PNG';
  button.addEventListener('click', function () {
    svgsaver.asPng(source);
  });
}

// from https://github.com/NYTimes/svg-crowbar/blob/gh-pages/svg-crowbar.js
function initialize () {
  var documents = [window.document];
  var iframes = document.querySelectorAll('iframe');
  var objects = document.querySelectorAll('object');

  [].forEach.call(iframes, function (el) {
    try {
      if (el.contentDocument) {
        documents.push(el.contentDocument);
      }
    } catch (err) {
      console.log(err);
    }
  });

  [].forEach.call(objects, function (el) {
    try {
      if (el.contentDocument) {
        documents.push(el.contentDocument);
      }
    } catch (err) {
      console.log(err);
    }
  });

  documents.forEach(function (doc) {
    var newSources = doc.querySelectorAll('svg');
    for (var i = 0; i < newSources.length; i++) {
      createPopover(newSources[i]);
    }
  });
}
