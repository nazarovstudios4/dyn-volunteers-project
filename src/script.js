const tabs = document.querySelectorAll(".about__tab");
const contentTitle = document.querySelector(".about__content-title");
const contentText = document.querySelector(".about__content-text");

const aboutContent = {
  mission: {
    title: "Mission",
    text: "We support people, animals and social initiatives through volunteer activities and community projects.",
  },
  team: {
    title: "Team",
    text: "Our team includes young volunteers who help organize events, charity actions and media support.",
  },
  plans: {
    title: "Future Plans",
    text: "We plan to expand community projects, organize more charity trips and involve more young people in volunteering.",
  },
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("about__tab--active"));

    tab.classList.add("about__tab--active");

    const tabName = tab.dataset.tab;
    contentTitle.textContent = aboutContent[tabName].title;
    contentText.textContent = aboutContent[tabName].text;
  });
});

const burgerButton = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".header__menu-link");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("header__burger--active");
  menu.classList.toggle("header__menu--active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerButton.classList.remove("header__burger--active");
    menu.classList.remove("header__menu--active");
  });
});
