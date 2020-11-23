import { repoNav, dropDown } from "./animation/index.mjs";
import { renderData } from "./api/index.mjs";
renderData();
repoNav();
dropDown("hide-header-icon-0", "hide-drop-down-0", "hide-drop-down");
dropDown("hide-header-icon-1", "hide-drop-down-1", "hide-drop-down");
dropDown("hide-header-icon-2", "hide-drop-down-2", "hide-drop-down");
dropDown(
  "search-bar-drop-down-btn-1",
  "repo-search-bar-drop-down-1",
  "hide-repo-search-bar-drop-down"
);
dropDown(
  "search-bar-drop-down-btn-2",
  "repo-search-bar-drop-down-2",
  "hide-repo-search-bar-drop-down"
);
