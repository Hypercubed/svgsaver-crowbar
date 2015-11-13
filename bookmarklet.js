(function () {
  loadScript('//cdn.rawgit.com/eligrey/FileSaver.js/master/FileSaver.min.js');
  loadScript('//cdn.rawgit.com/Hypercubed/svgsaver-crowbar/gh-pages/browser.min.js');

  function loadScript (url) {
    var e = document.createElement('script');
    e.setAttribute('src', url);
    document.body.appendChild(e);
  }
})();
