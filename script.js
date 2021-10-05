var speedInput = document.getElementById('speed_input');
var speedMonitor = document.getElementById('speed_monitor');
speedInput.addEventListener("change", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  var speed = speedInput.value/100;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    args: [speed],
    func: (speed) => {
      var video = document.getElementById("video");
      if(typeof(video) != 'undefined' && video != null){
        video.playbackRate = speed; 
      }
    },
  });
  speedMonitor.innerHTML = 'Speed: ' + speed;
});
