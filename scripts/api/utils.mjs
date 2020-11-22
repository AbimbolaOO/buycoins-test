export function elapsedTime(updatedAt) {
  var options = { month: "long" };

  const currentTime = new Date();
  const updatedTime = new Date(updatedAt);
  const timeGap = Math.round(
    (new Date().valueOf() - updatedTime.valueOf()) / 1000
  );

  if (timeGap < 60) {
    return `updated ${timeGap} seconds ago`;
  } else if (timeGap < 3600) {
    return `updated ${timeGap} mins ago,`;
  } else if (timeGap < 3600 * 24) {
    return `updated ${timeGap} hours ago,`;
  } else if (timeGap < 3600 * 48) {
    return `updated yesterday`;
  } else if (timeGap < 3600 * 24 * 30) {
    return `updated ${currentTime.getDate() - updatedTime.getDate()} ago`;
  } else if (timeGap < 3600 * 24 * 30 * 365) {
    return `updated on ${updatedTime.getDate()} ${new Intl.DateTimeFormat(
      "en-GB",
      options
    ).format(updatedTime)}`;
  } else if (timeGap < 3600 * 24 * 30 * 365 * 2) {
    return `updated a year ago`;
  } else {
    return `updated ${updatedTime.getFullYear()} ago`;
  }
}

export function getApiProps(data) {
  const {
    data: {
      user: {
        avatarUrl,
        name,
        login,
        bio,
        followers,
        following,
        starredRepositories,
        location,
        twitterUsername,
        status,
        repositories: { edges },
      },
    },
  } = data;
  return {
    avatarUrl,
    name,
    login,
    bio,
    followers,
    following,
    starredRepositories,
    location,
    twitterUsername,
    status,
    edges,
  };
}

// export function getNodeFromApiProps() {
// node{
//   name,
//   description
//   isFork
//   viewerHasStarred
//   stargazerCount
//   primaryLanguage
//   name
//
// forkCount
// licenseInfo
// updatedAt}
// }
