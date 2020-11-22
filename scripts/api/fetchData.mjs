import { graphqlQuery } from "./graphqlQuery.mjs";
import { repoTileView } from "./view/repoTileView.mjs";
import { elapsedTime, getApiProps, getPropsFromNode } from "./utils.mjs";

const unorderedList = document.createElement("ul");
const paginationBtns = document.querySelector(".pagination-btn-container");

const githubData = {
  // the token below should only have public access i.e no security risk
  token: "e94e3d231890131a9495c9790c927f30437018e1",
  userName: "AbimbolaOO",
};

const query = graphqlQuery(githubData.userName);

function cleanData(data) {
  const { edges } = getApiProps(data);
  edges.forEach((repoData) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = repoTileView(getPropsFromNode(repoData));
    unorderedList.appendChild(listItem);
    console.log(getPropsFromNode(repoData));
  });

  document
    .querySelector(".git-content")
    .insertBefore(unorderedList, paginationBtns);
}

export async function fetchData() {
  const res = await fetch("https://api.github.com/graphql", {
    mode: "cors",
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: "bearer " + githubData.token,
    },
    body: JSON.stringify({
      query,
    }),
  });

  const data = await res.json();
  cleanData(data);
}
