export function graphqlQuery(login) {
  return `
      query {
          user(login: "${login}") {
              avatarUrl
              name
              login
              bio
              followers {
              totalCount
              }
              following {
              totalCount
              }
              starredRepositories {
              totalCount
              }
              location
              twitterUsername
              status {
              emoji
              message
              }
  
              repositories(
              first: 20
              orderBy: { field: CREATED_AT, direction: DESC }
              ) {
              edges {
                  node {
                  name
                  description
                  isFork
                  stargazerCount
                  primaryLanguage {
                      name
                  }
                  forkCount
                  licenseInfo {
                      name
                  }
                  updatedAt
                  }
              }
              }
          }
          }
      `;
}
