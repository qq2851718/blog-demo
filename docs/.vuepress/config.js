module.exports = {
  "title": "最好玩blog",
  "description": "第一个博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "NPM",
            "link": "https://www.npmjs.com/~reco_luan",
            "icon": "reco-npm"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          },
          {
            "text": "简书",
            "link": "https://www.jianshu.com/u/cd674a19515e",
            "icon": "reco-jianshu"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/recoluan",
            "icon": "reco-csdn"
          },
          {
            "text": "博客圆",
            "link": "https://www.cnblogs.com/luanhewei/",
            "icon": "reco-bokeyuan"
          },
          {
            "text": "WeChat",
            "link": "https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A",
            "icon": "reco-wechat"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "s_",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }, 
   plugins:[
  ['@vuepress-reco/vuepress-plugin-kan-ban-niang',{
	  width:300,
	  height:440
  }],
   
   [
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],
	
	['@vuepress-reco/vuepress-plugin-bgm-player',{
		audios: [
  // 本地文件示例
  {
    name: '장가갈 수 있을까',
    artist: '咖啡少年',
    url: '/bgm/1.mp3',
    cover: '/bgm/1.jpg'
  },
  // 网络文件示例
  {
    name: '강남역 4번 출구',
    artist: 'Plastic / Fallin` Dild',
    url: 'https://assets.smallsunnyfox.com/music/2.mp3',
    cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
  },
  {
    name: '用胳膊当枕头',
    artist: '최낙타',
    url: 'https://assets.smallsunnyfox.com/music/3.mp3',
    cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
  }
]  
	}
	
	]]
	
}