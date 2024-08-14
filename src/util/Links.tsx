export type Link = {
  name?: string;
  url: string;
};

export const Essentials: Link[] = [
  {
    name: "GitHub",
    url: "https://github.com",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/intl-es?",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com",
  },
  {
    name: "ChatGPT",
    url: "https://chatgpt.com",
  }
];

export const Entertainment: Link[] = [
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "Pinterest",
    url: "https://www.pinterest.es",
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv",
  },
  {
    name: "Kick",
    url: "https://kick.com",
  },
];

export const Job: Link[] = [
  {
    name: "Azure Dev",
    url: "https://dev.azure.com",
  },
  {
    name: "Portal Azure",
    url: "https://portal.azure.com/#home",
  },
  {
    name: "Figma",
    url: "https://www.figma.com/files",
  },
  {
    name: "LinkedIn",
    url: "https://pe.linkedin.com",
  }
];

export const Organization: Link[] = [
  {
    name: "Outlook",
    url: "https://outlook.live.com/mail/0/",
  },
  {
    name: "OneDrive",
    url: "https://onedrive.live.com",
  },
  {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    name: "Google Drive",
    url: "https://drive.google.com/drive/home",
  },
];

export const Links = [...Essentials, ...Entertainment, ...Job, ...Organization];
