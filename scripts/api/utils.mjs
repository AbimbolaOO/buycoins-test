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
    return `updated ${currentTime.getDate() - updatedTime.getDate()} days ago`;
  } else if (timeGap < 3600 * 24 * 30 * 365) {
    return `updated on ${updatedTime.getDate()} ${new Intl.DateTimeFormat(
      "en-GB",
      options
    )
      .format(updatedTime)
      .substring(0, 3)}`;
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

export function getPropsFromNode(node) {
  const {
    node: {
      name,
      description,
      isFork,
      stargazerCount,
      primaryLanguage,
      forkCount,
      licenseInfo,
      updatedAt,
    },
  } = node;

  return {
    name,
    description,
    isFork,
    stargazerCount,
    primaryLanguage,
    forkCount,
    licenseInfo,
    updatedAt,
  };
}

export function returnValue(prop) {
  if (prop === null || prop === false) {
    return "";
  } else {
    return prop.name || prop;
  }
}

export function renderElements(prop, htmlElement) {
  return returnValue(prop) ? htmlElement : "";
}

export function colorPicker(language) {
  var color;
  switch (language) {
    case "TypeScript":
      color = "#2b7489";
      break;
    case "JavaScript":
      color = "#f1e05a";
      break;
    case "HTML":
      color = "#e34c26";
      break;
    case "Jupyter Notebook":
      color = "#da5b0b";
      break;
    case "Python":
      color = "#3572a5";
      break;
    case "Makefile":
      color = "#427819";
      break;
    default:
      color = "#000000";
  }
  return color;
}
