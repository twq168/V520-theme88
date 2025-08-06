window.settings = {
    // 默认 API，会在 initApi() 中自动检测并覆盖
    api: "https://coo.hunshui.xyz",

    // 站点信息
    title: 'HUNSHUI',
    description: '连接全世界',
    introduction: '我们是一个追求更可靠、安全、高效且高性价比的互联网接入方案。',
    crisp_id: '',

    // 客户端配置
    clients: [
        {
            name: "iOS",
            apps: [
                {
                    name: "Shadowrocket",
                    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/be/0e/ec/be0eecda-9042-7bdd-b720-8e89ceb0dcf7/AppIcon-0-0-1x_U007epad-0-1-85-220.png/230x0w.webp",
                    link: "https://apps.apple.com/us/app/shadowrocket/id932747118",
                },
                {
                    name: "Loon",
                    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/13/42/d7/1342d7d8-7cfd-4ef9-8dd7-544027bd5c71/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/230x0w.webp",
                    link: "https://apps.apple.com/us/app/loon/id1373567447",
                },
            ],
            items: {
                Shadowrocket: true,
                Loon: true,
            }
        },
        {
            name: "Android",
            apps: [
                {
                    name: "Clash Meta",
                    icon: "https://clashmeta.org/wp-content/uploads/2023/07/cropped-favicon-50x50.png",
                    link: "https://github.com/MetaCubeX/ClashMetaForAndroid",
                },
                {
                    name: "FlClash",
                    icon: "https://getflclash.net/wp-content/uploads/2024/10/logo-150x150.webp",
                    link: "https://github.com/chen08209/FlClash",
                },
            ],
            items: {
                "Clash Meta": true,
                FlClash: true,
            }
        },
        {
            name: "Windows",
            apps: [
                {
                    name: "Clash Verge",
                    icon: "https://avatars.githubusercontent.com/u/152534467?s=200&v=4",
                    link: "https://github.com/clash-verge-rev/clash-verge-rev",
                },
                {
                    name: "FlClash",
                    icon: "https://getflclash.net/wp-content/uploads/2024/10/logo-150x150.webp",
                    link: "https://github.com/chen08209/FlClash",
                },
            ],
            items: {
                "Clash Verge": true,
                FlClash: true,
            }
        },
        {
            name: "Mac OS",
            apps: [
                {
                    name: "Clash Verge",
                    icon: "https://avatars.githubusercontent.com/u/152534467?s=200&v=4",
                    link: "https://github.com/clash-verge-rev/clash-verge-rev",
                },
                {
                    name: "FlClash",
                    icon: "https://getflclash.net/wp-content/uploads/2024/10/logo-150x150.webp",
                    link: "https://github.com/chen08209/FlClash",
                },
            ],
            items: {
                "Clash Verge": true,
                FlClash: true,
            }
        },
    ],

    // 首页特性介绍
    feature: {
        title: "我们使用最新的技术来提供最佳体验",
        subtitle: "我们致力于提供最可靠、安全、高效且高性价比的互联网接入方案。",
        items: [
            {
                name: "流媒体解锁",
                desc: "我们支持多种流媒体平台的解锁，包括 Netflix、Disney+、Hulu 等，确保您可以随时随地享受高质量的娱乐内容。",
                icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/tv.svg"
            },
            {
                name: "AI 平台支持",
                desc: "我们支持多种 AI 平台，包括 OpenAI、Google AI 等，确保您可以使用最新的人工智能技术来提升工作效率和生活质量。",
                icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/robot.svg"
            },
            {
                name: "隐私保护",
                desc: "我们重视您的隐私，采用先进的加密技术和严格的隐私政策，确保您的数据安全和匿名性。",
                icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/lock.svg"
            },
        ]
    },

    // ✅ 初始化 API（自动检测可用的）
    initApi: async function () {
        const apiList = [
            "https://cok.hunshui.xyz",
            "https://cop.hunshui.xyz",
            "https://cop.hunshui.xyz"
        ];
        const testPath = "/api/v1/guest/comm/config";

        for (const api of apiList) {
            try {
                const res = await fetch(api + testPath);
                if (res.ok) {
                    this.api = api;
                    console.log(`[✔] 可用 API：${api}`);
                    return;
                }
            } catch (err) {
                console.warn(`[✘] 无法连接：${api}`);
            }
        }

        // 所有 API 均失败，默认使用第一个
        this.api = apiList[0];
        console.error(`[‼] 所有 API 不可用，默认使用：${this.api}`);
    }
};

// ✅ 自动初始化并派发事件，供页面使用 window.settings.api 时等待就绪
window.settings.initApi().then(() => {
    const event = new CustomEvent('settingsReady', { detail: window.settings.api });
    window.dispatchEvent(event);
});
