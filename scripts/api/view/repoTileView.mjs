import {
  elapsedTime,
  returnValue,
  renderElements,
  colorPicker,
} from "../utils.mjs";

export function repoTileView({
  name,
  description,
  isFork,
  stargazerCount,
  primaryLanguage,
  forkCount,
  licenseInfo,
  updatedAt,
}) {
  return `
    <!-- Repository tile -->
    <section class="repo-tile">
      <div class="repo-meta-data">
        <a href="#">${name}</a>
        <p>
          ${returnValue(description)}
        </p>
        <!-- Repo info div -->
        <div class="repo-info">
          <ul class="repo-info-list">
            ${renderElements(
              primaryLanguage,
              `<li><div class="color-code" style="background-color:${colorPicker()}">
              </div></li>
            <li>${returnValue(primaryLanguage)}</li>`
            )}

            ${renderElements(
              isFork,
              `<li>
              <span><img
                  src="assets/svg/fork.svg"
                  alt="icon"
                  class="repo-info-icons" /></span>${forkCount}
            </li>`
            )}

            ${renderElements(
              stargazerCount,
              `<li>
              <span><img
                  src="assets/svg/star.svg"
                  alt="icon"
                  class="repo-info-icons" /></span>${stargazerCount}
            </li>`
            )}

            ${renderElements(
              licenseInfo,
              `<li>
              <span><img
                  src="assets/svg/balance.svg"
                  alt="icon"
                  class="repo-info-icons" /></span>${returnValue(licenseInfo)}
            </li>`
            )}
            
            <li>${elapsedTime(updatedAt)}</li>
          </ul>
        </div>
      </div>
      <div class="star-and-activity">
        <!-- Star button -->
        <button>
          <span><img
              src="assets/svg/star.svg"
              alt="icon"
              class="star-icons" /></span>star
        </button>
      </div>
    </section>
`;
}
