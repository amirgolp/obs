// Copy this file to viewers.config.js (same folder as viewers.html) and fill it in.
// viewers.config.js is git-ignored so your API key stays out of the repo.
// Leave a platform blank to hide its badge.
window.VIEWERS_CONFIG = {
  // Twitch login name, as in twitch.tv/<name>
  TWITCH_CHANNEL: "",

  // Kick channel slug, as in kick.com/<name>
  KICK_CHANNEL: "",

  // YouTube channel ID (starts with "UC"): YouTube Studio -> Settings -> Channel -> Advanced settings
  YOUTUBE_CHANNEL_ID: "",
  // YouTube Data API v3 key: console.cloud.google.com -> APIs & Services -> enable
  // "YouTube Data API v3" -> Credentials -> Create credentials -> API key
  YOUTUBE_API_KEY: "",

  // Show dimmed "OFF" badges for platforms that aren't live (default: hide them)
  SHOW_OFFLINE: false,
  // Show a combined total when more than one platform is live
  SHOW_TOTAL: true,

  POLL_SECONDS: 30,
  YOUTUBE_POLL_SECONDS: 60,
};
