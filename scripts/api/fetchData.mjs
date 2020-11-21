import { graphqlQuery } from "./graphqlQuery.mjs";
import { elapsedTime, getApiProps } from "./utils.mjs";

const githubData = {
  // the token below should only have public access i.e no security risk
  token: "4f17051df33aaf26081d0b4a998cae988902718e",
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
