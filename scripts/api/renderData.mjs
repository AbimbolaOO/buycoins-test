import { graphqlQuery } from "./graphqlQuery.mjs";
import { repoTileView, userProfileView } from "./view/index.mjs";
import { getApiProps, getPropsFromNode } from "./utils.mjs";

const unorderedList = document.createElement("ul");
const paginationBtns = document.querySelector(".pagination-btn-container");
const gitContent = document.querySelector(".git-content");
const profile = document.createElement("section");
profile.className = "profile";

// You can modify the object below if you would like to display your own repo data
const githubData = {
  token: "e94e3d231890131a9495c9790c927f30437018e1",
  userName: "AbimbolaOO",
};

const query = graphqlQuery(githubData.userName);

function renderRepoTile(data) {
  const { edges } = getApiProps(data);
  edges.forEach((repoData) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = repoTileView(getPropsFromNode(repoData));
    unorderedList.appendChild(listItem);
  });

  document
    .querySelector(".git-content")
    .insertBefore(unorderedList, paginationBtns);
}

function renderUserProfile(data) {
  profile.innerHTML = userProfileView(getApiProps(data));
  document.querySelector(".main-section").insertBefore(profile, gitContent);
}

function otherGeneralRenders(data) {
  const { avatarUrl, name, login, status } = getApiProps(data);
  document.querySelector(".logo").src = avatarUrl;
  document.querySelector(".header-image").src = avatarUrl;
  document.querySelector(".repo-nav-profile-img").src = avatarUrl;
  document.querySelector(".drop-down-status").textContent = status.message;
  document.querySelector(".drop-down-user-name").textContent = login;
  document.querySelector(".nav-with-icon-text").textContent = login;
}

export async function renderData() {
  const response = await fetch("https://api.github.com/graphql", {
    mode: "cors",
    method: "POST",
    headers: {
      // "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: "bearer " + githubData.token,
    },
    body: JSON.stringify({
      query,
    }),
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  renderUserProfile(data);
  renderRepoTile(data);
  otherGeneralRenders(data);
}
