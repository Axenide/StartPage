let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Mendoza, Argentina',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#db4740",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      b: ["https://bing.com/search?q=", "Bing"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "media",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube",
            icon_color: "#db4740",
          },
          {
            name: "x",
            url: "https://twitter.com/home",
            icon: "brand-x",
            icon_color: "#beac8e",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#f28533",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#b1b946",
          },

        ],
      }, {
        name: "Games",
        links: [
          {
            name: "bad time simulator",
            url: "https://jcw87.github.io/c2-sans-fight/",
            icon: "heart-broken",
            icon_color: "#db4740",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#f28533",
          },
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess",
            icon_color: "#b1b946",
          },
        ],
      }, {
        name: "Video",
        links: [
          {
            name: "netflix",
            url: "https://www.disneyplus.com/home",
            icon: "brand-netflix",
            icon_color: "#db4740",
          },
          {
            name: "disney+",
            url: "https://www.disneyplus.com/home",
            icon: "brand-disney",
            icon_color: "#80a99d",
          },
          {
            name: "wco",
            url: "https://www.wcostream.com/",
            icon: "device-tv",
            icon_color: "#f28533",
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
              icon_color: "#db4740",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#80a99d",
            },
            {
              name: "leonardo",
              url: "https://app.leonardo.ai/",
              icon: "zodiac-leo",
              icon_color: "#a3a0be",
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
              icon_color: "#d3869b",
            },
            {
              name: "uxpro",
              url: "https://uxpro.cc/",
              icon: "components",
              icon_color: "#b1b946",
            },
            {
              name: "tablericons",
              url: "https://tabler-icons.io/",
              icon: "brand-tabler",
              icon_color: "#80a99d",
            }
          ],
        },
        {
          name: "color",
          links: [
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#db4740",
            },
            {
              name: "adobe color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#80a99d",
            },
            {
              name: "terminalsexy",
              url: "https://terminal.sexy",
              icon: "prompt",
              icon_color: "#f28533",
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
          name: "",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#beac8e",
            },
            {
              name: "chatgpt",
              url: "https://chat.openai.com/",
              icon: "brand-openai",
              icon_color: "#8ab87d",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "brain",
              icon_color: "#beac8e",
            },
            {
              name: "flutter",
              url: "https://docs.flutter.dev/ui",
              icon: "brand-flutter",
              icon_color: "#80a99d",
            },
            {
              name: "hacktricks",
              url: "https://book.hacktricks.xyz/welcome/readme",
              icon: "biohazard",
              icon_color: "#db4740",
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#80a99d",
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
              icon_color: "#b1b946",
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#f28533",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#db4740",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#b1b946",
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
          name: "docs",
          links: [
            {
              name: "notion",
              url: "https://www.notion.so/",
              icon: "brand-notion",
              icon_color: "#beac8e",
            },
            {
              name: "w3schools",
              url: "https://www.w3schools.com/",
              icon: "app-window",
              icon_color: "#8ab87d",
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
              icon: "school",
              icon_color: "#80a99d",
            },
          ],
        },
        {
          name: "office",
          links: [
            {
              name: "docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "writing",
              icon_color: "#80a99d",
            },
            {
              name: "365",
              url: "https://www.microsoft365.com/",
              icon: "brand-office",
              icon_color: "#f28533",
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
              icon_color: "#db4740",
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
              icon_color: "#f28533",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#80a99d",
            },
            {
              name: "fotos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#db4740",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#80a99d",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);