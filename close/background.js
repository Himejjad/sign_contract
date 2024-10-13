chrome.tabs.onCreated.addListener(function (tab) {
  // Specify the URL you want to close
  const targetUrl = 'https://x.com/intent/post?text=The%20first-ever%20SocialFi%20community%20for%20%24ZAAR%20on%20BTC%20Runes!%20%0A%0AJoin%20the%20%24ZAAR%20movement%20and%20be%20part%20of%20the%20Token%20Launch%20this%20October!%20%0A%0A%F0%9F%92%BE%20Get%20started%20now%3A%20https%3A%2F%2Fzaar.superfi.gg%2F%0A%0A%40Ordzaar%20x%20%40OdinSwap%0APowered%20by%20%40SuperstellarBTC';  // Replace this with the exact URL you want to target

  // Check if the new tab's URL matches the target URL
  chrome.tabs.get(tab.id, function(newTab) {
    if (newTab.url && newTab.url.includes(targetUrl)) {
      // If the new tab's URL matches the target, close it
      chrome.tabs.remove(tab.id);
      console.log(`Closed new tab with URL: ${newTab.url}`);
    }
  });
});

