document.querySelector(".info").addEventListener("click", handleButtonClick);

function handleButtonClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  const spoilerBtnAttribute = e.target.getAttribute("data-spoilerId");
  const spoilerBlock = document.getElementById(spoilerBtnAttribute);

  const allButtons = document.querySelectorAll("[data-spoilerId]");
  const allSpoilerContents = document.querySelectorAll(".spoiler-content");

  allButtons.forEach((currentButton) => {
    if (currentButton !== spoilerBlock) {
      currentButton.classList.remove("active");
    }
  });

  e.target.classList.toggle("active");

  allSpoilerContents.forEach((currentSpoilerContent) => {
    if (currentSpoilerContent !== spoilerBlock) {
      currentSpoilerContent.classList.add("hidden");
    }
  });

  spoilerBlock.classList.toggle("hidden");

  if (spoilerBlock.classList.contains("hidden")) {
    e.target.classList.remove("active");
  }
}
