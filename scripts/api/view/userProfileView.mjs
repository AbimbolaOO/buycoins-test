export function userProfileView({
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
}) {
  return `
    <!-- Image and Name div -->
    <div class="profile-img-container">
    <img
        src=${avatarUrl}
        alt="abimbola's picture"
        class="profile-img"
    />
    <!-- Name div -->
    <div class="name-div">
        <!-- Name -->
        <div class="name">${name}</div>
        <!-- User Name -->
        <div class="user-name">${login}</div>
    </div>
    </div>
    <!-- Focusing div -->
    <div class="focusing-container">
    <span>🔴</span>
    <span class="focus-text">${status.message}</span>
    </div>
    <!-- Bio -->
    <div class="bio">
    ${bio}
    </div>
    <!-- Edit button -->
    <button class="edit-profile-btn">Edit profile</button>
    <!-- Github followers and stars -->
    <div class="followers-stars">
    <a><span><img
            src="assets/svg/users.svg"
            alt="icon"
            class="followers-stars-icons" /></span><span>${followers.totalCount}</span> followers
    </a>
    <span>.</span>
    <a> <span>${following.totalCount}</span> following </a>
    <span>.</span>
    <a>
        <span>${starredRepositories.totalCount}</span><span><img
            src="assets/svg/star.svg"
            alt="icon"
            class="followers-stars-icons"/></span>
    </a>
    </div>
    <!--  -->
    <!-- Contact list -->
    <ul class="contact-list hidden-profile">
    <!-- Location -->
    <li>
        <span><img
            src="assets/svg/pin.svg"
            alt="icon"
            class="profile-icons" /></span>${location}
    </li>
    <!-- Twitter handle -->
    <li>
        <span><img
            src="assets/svg/twitter.svg"
            alt="icon"
            class="profile-icons" /></span><a>${twitterUsername}</a>
    </li>
    </ul>
    <!-- Highlight and Arctic Vault -->
    <div class="highlights hidden-profile">
    <h2>Highlight</h2>
    <div class="arctic">
        <span><img
            src="assets/svg/snowflake.svg"
            alt="icon"
            class="profile-icons" /></span>Arctic Code Vault Contribitor
    </div>
    </div>
    <!--  -->
    `;
}
