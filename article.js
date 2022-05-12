import staticShareIcon from "./images/icon-share.svg";
import staticShareIconActive from "./images/share-icon-active.svg";

const bottomContainer = document.querySelector(".bottomContainer");
const shareContainer = document.querySelector(".shareContainer");
const creatorContainer = document.querySelector(".creatorContainer");
const mobileSocialContainer = document.querySelector(".mobileSocialContainer");
const desktopSocialPopUp = document.querySelector(".desktopSocialPopUp");
const shareIcon = document.querySelector(".shareIcon");

document
  .querySelector(".shareContainer")
  .addEventListener("click", function () {
    if (window.innerWidth < 1440) {
      if (!bottomContainer.classList.contains("bottomActive")) {
        bottomContainer.classList.add("bottomActive");
        shareContainer.classList.add("shareActive");
        creatorContainer.style.display = "none";
        mobileSocialContainer.style.display = "flex";
        shareIcon.setAttribute("src", staticShareIconActive);
      } else {
        bottomContainer.classList.remove("bottomActive");
        shareContainer.classList.remove("shareActive");
        creatorContainer.style.display = "flex";
        mobileSocialContainer.style.display = "none";
        shareIcon.setAttribute("src", staticShareIcon);
      }
    } else {
      if (!desktopSocialPopUp.classList.contains("desktopSocialActive")) {
        desktopSocialPopUp.classList.add("desktopSocialActive");
        shareContainer.classList.add("shareActive");
        shareIcon.setAttribute("src", staticShareIconActive);
      } else {
        desktopSocialPopUp.classList.remove("desktopSocialActive");
        shareContainer.classList.remove("shareActive");
        shareIcon.setAttribute("src", staticShareIcon);
      }
    }
  });
