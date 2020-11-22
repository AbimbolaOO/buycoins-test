import { graphqlQuery } from "./graphqlQuery.mjs";
import { elapsedTime, getApiProps } from "./utils.mjs";

const githubData = {
  // the token below should only have public access i.e no security risk
  token: "e94e3d231890131a9495c9790c927f30437018e1",
  userName: "AbimbolaOO",
};

const query = graphqlQuery(githubData.userName);

function cleanData(data) {
  const { edges } = getApiProps(data);
  document.body.innerText = JSON.stringify(
    edges,
    // elapsedTime(repositories.edges[0].node.updatedAt),
    // repositories.edges[0].node.updatedAt,
    null,
    2
  );
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
  console.log(data);
  cleanData(data);
}
