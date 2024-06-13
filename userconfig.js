let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Mendoza, Argentina',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#b86467",
  },
  search: {
    engines: {
      d: ["https://duckduckgo.com/?hps=1&q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
      b: ["https://bing.com/search?q=", "Bing"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      i: ["https://www.google.com/search?tbm=isch&q=", "Google Images"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  fastlink: "https://www.perplexity.ai/",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "media",
      background_url: "src/img/banners/soda-boy.gif",
      categories: [{
        name: "Social",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube",
            icon_color: "#b86467",
          },
          {
            name: "x",
            url: "https://x.com/",
            icon: "brand-x",
            icon_color: "#e8e3e3",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#c9917a",
          },
          {
            name: "instagram",
            url: "https://www.instagram.com/",
            icon: "brand-instagram",
            icon_color: "#ab89b2",
          },
          {
            name: "threads",
            url: "https://threads.net/",
            icon: "brand-threads",
            icon_color: "#e8e3e3",
          },
          {
            name: "facebook",
            url: "https://www.facebook.com/",
            icon: "brand-facebook",
            icon_color: "#8ea5ba",
          },
          {
            name: "discord",
            url: "https://discord.com/",
            icon: "brand-discord",
            icon_color: "#8ba8a4",
          },
          {
            name: "telegram",
            url: "https://web.telegram.org/",
            icon: "brand-telegram",
            icon_color: "#8ea5ba",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#ab89b2",
          },
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#8d987e",
          },

        ],
      }, {
        name: "Games",
        links: [
          {
            name: "bad time simulator",
            url: "https://jcw87.github.io/c2-sans-fight/",
            icon: "heart-broken",
            icon_color: "#b86467",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#c9917a",
          },
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess",
            icon_color: "#8d987e",
          },
        ],
      }, {
        name: "Streaming",
        links: [
          {
            name: "netflix",
            url: "https://www.netflix.com/",
            icon: "brand-netflix",
            icon_color: "#b86467",
          },
          {
            name: "disney+",
            url: "https://www.disneyplus.com/home",
            icon: "brand-disney",
            icon_color: "#8ea5ba",
          },
          {
            name: "wco",
            url: "https://www.wcostream.com/",
            icon: "device-tv",
            icon_color: "#c9917a",
          },
          {
            name: "theflixer",
            url: "https://theflixer.tv/home",
            icon: "player-play",
            icon_color: "#8ba8a4",
          },
          {
            name: "spotify",
            url: "https://open.spotify.com/",
            icon: "brand-spotify",
            icon_color: "#8d987e",
          },
        ],
      }],
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-3.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#b86467",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#8ea5ba",
            },
            {
              name: "leonardo.ai",
              url: "https://app.leonardo.ai/",
              icon: "zodiac-leo",
              icon_color: "#8ba8a4",
            },
            {
              name: "designer",
              url: "https://www.bing.com/create",
              icon: "brand-bing",
              icon_color: "#8ea5ba",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#ab89b2",
            },
            {
              name: "uxpro",
              url: "https://uxpro.cc/",
              icon: "components",
              icon_color: "#8d987e",
            },
            {
              name: "tabler icons",
              url: "https://tabler-icons.io/",
              icon: "brand-tabler",
              icon_color: "#8ea5ba",
            },
            {
              name: "photopea",
              url: "https://www.photopea.com/",
              icon: "spiral",
              icon_color: "#8d987e",
            },
            {
              name: "vectorpea",
              url: "https://www.vectorpea.com/",
              icon: "seeding",
              icon_color: "#8d987e",
            },
            {
              name: "picwish",
              url: "https://www.picswish.com/",
              icon: "camera-selfie",
              icon_color: "#8ba8a4",
            },
            {
              name: "firefly",
              url: "https://firefly.adobe.com/",
              icon: "brand-adobe",
              icon_color: "#b86467",
            },
          ],
        },
        {
          name: "color",
          links: [
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#b86467",
            },
            {
              name: "adobe color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#8ea5ba",
            },
            {
              name: "terminalsexy",
              url: "https://terminal.sexy",
              icon: "prompt",
              icon_color: "#c9917a",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "coding",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#e8e3e3",
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: "#8d987e",
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#8ea5ba",
            },
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "zoom-code",
              icon_color: "#e8e3e3",
            },
            {
              name: "copilot",
              url: "https://www.bing.com/chat",
              icon: "brand-bing",
              icon_color: "#8ea5ba",
            },
            {
              name: "gemini",
              url: "https://gemini.google.com/app",
              icon: "sparkles",
              icon_color: "#8ba8a4",
            },
            {
              name: "claude",
              url: "https://claude.ai/",
              icon: "asterisk",
              icon_color: "#c9917a",
            },
            {
              name: "pi",
              url: "https://pi.ai/",
              icon: "math-pi",
              icon_color: "#8d987e",
            },
          ],
        },
        {
          name: "resources",
          links: [  
            {
              name: "bootstrap",
              url: "https://getbootstrap.com/docs/",
              icon: "brand-bootstrap",
              icon_color: "#ad80a2",
            },
            {
              name: "hacktricks",
              url: "https://book.hacktricks.xyz/welcome/readme",
              icon: "biohazard",
              icon_color: "#b86467",
            },
            {
              name: "free-for.dev",
              url: "https://free-for.dev/#/",
              icon: "source-code",
              icon_color: "#8d987e",
            },
            {
              name: "devhints",
              url: "https://devhints.io/",
              icon: "paperclip",
              icon_color: "#ad80a2",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#8d987e",
            },
            {
              name: "leetcode",
              url: "https://leetcode.com/",
              icon: "brand-leetcode",
              icon_color: "#c9917a",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#b86467",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#8d987e",
            },
          ],
        },
      ],
    },
    {
      name: "study",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "writing",
          links: [
            {
              name: "notion",
              url: "https://www.notion.so/",
              icon: "brand-notion",
              icon_color: "#e8e3e3",
            },
            {
              name: "docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "file-description",
              icon_color: "#8ea5ba",
            },
            {
              name: "365",
              url: "https://www.microsoft365.com/",
              icon: "brand-office",
              icon_color: "#c9917a",
            },
            {
              name: "deepl",
              url: "https://www.deepl.com/translator",
              icon: "language",
              icon_color: "#70919b",
            },
          ],
        },
        {
          name: "university",
          links: [
            {
              name: "umvirtual",
              url: "https://virtual.um.edu.ar/",
              icon: "notebook",
              icon_color: "#626464",
            },
            {
              name: "portal estudiantes",
              url: "https://portal.um.edu.ar/",
              icon: "books",
              icon_color: "#8ea5ba",
            },
            {
              name: "slack",
              url: "https://slack.com/",
              icon: "brand-slack",
              icon_color: "#ab89b2",
            },
            {
              name: "w3schools",
              url: "https://www.w3schools.com/",
              icon: "app-window",
              icon_color: "#8d987e",
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "cymath",
              url: "https://www.cymath.com/",
              icon: "calculator",
              icon_color: "#8d987e",
            },
            {
              name: "gitmind",
              url: "https://gitmind.com/",
              icon: "planet",
              icon_color: "#c9917a",
            },
            {
              name: "proquest",
              url: "https://www.proquest.com/",
              icon: "book",
              icon_color: "#8ea5ba",
            },
            {
              name: "parafrasist",
              url: "https://parafrasist.com/",
              icon: "rosette",
              icon_color: "#ab89b2",
            },
            {
              name: "scribbr",
              url: "https://www.scribbr.es/",
              icon: "school",
              icon_color: "#c9917a",
            },
            {
              name: "resoomer",
              url: "https://resoomer.com/es/",
              icon: "blockquote",
              icon_color: "#b86467",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#b86467",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#dabd8d",
            },
            {
              name: "photos",
              url: "https://photos.google.com/",
              icon: "photo",
              icon_color: "#b86467",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#8ea5ba",
            },
            {
              name: "mega",
              url: "https://mega.nz/fm/myfiles",
              icon: "circle-letter-m",
              icon_color: "#c9917a",
            },
            {
              name: "onedrive",
              url: "https://onedrive.live.com/",
              icon: "brand-onedrive",
              icon_color: "#8ea5ba",
            },
            {
              name: "tgstorage",
              url: "https://tgstorage.com/app",
              icon: "brand-telegram",
              icon_color: "#8ea5ba",
            }
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#8ea5ba",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);
