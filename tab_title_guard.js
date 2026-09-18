(function () {
  var tabTitle = 'Probox Studio';

  function applyTabTitle() {
    document.title = tabTitle;
  }

  if (window.__proboxTabTitleGuardInstalled) {
    applyTabTitle();
    return;
  }

  window.__proboxTabTitleGuardInstalled = true;
  applyTabTitle();

  var historyRef = window.history;
  var originalPushState = historyRef.pushState.bind(historyRef);
  var originalReplaceState = historyRef.replaceState.bind(historyRef);

  historyRef.pushState = function (state, title, url) {
    originalPushState(state, tabTitle, url);
    applyTabTitle();
  };

  historyRef.replaceState = function (state, title, url) {
    originalReplaceState(state, tabTitle, url);
    applyTabTitle();
  };

  window.addEventListener('popstate', applyTabTitle);
})();
