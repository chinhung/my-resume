const nodejs = {
    name: 'Node.js後端開發',
    details: [
        'ES6',
        'TypeScript'
    ],
    star: {
        value: 4,
        max: 5
    }
};

const java = {
    name: 'Java後端開發',
    details: [
        'Java 8',
        'Spring MVC',
        'Spring JPA'
    ],
    star: {
        value: 4,
        max: 5
    }
};

const python = {
    name: 'Python',
    details: [
        '環境設定',
        '虛擬環境 venv',
        '套件管理'
    ],
    star: {
        value: 1,
        max: 5
    }
};

const app = {
    name: '前端、跨平台APP開發',
    details: [
        'Angular',
        'React',
        'Bootstrap',
        'Ionic',
        'Gatsby'
    ],
    star: {
        value: 3,
        max: 5
    }
};

const jenkins = {
    name: 'Jenkins自動化部署',
    star: {
        value: 2,
        max: 5
    }
};

const nginx = {
    name: 'Nginx網站伺服器',
    details: [
        '網域設定',
        'SSL',
        '負載均衡'
    ],
    star: {
        value: 2,
        max: 5
    }
};

const database = {
    name: '資料庫',
    details: [
        'MySQL',
        'MongoDB'
    ],
    star: {
        value: 2,
        max: 5
    }
};

const docker = {
    name: 'Docker',
    details: [
        'Dockerfile',
        'Docker Compose'
    ],
    star: {
        value: 2,
        max: 5
    }
};

const cloudPlatform = {
    name: '雲端平台',
    details: [
        'Azure',
        'GCP',
        'Linode',
        'ZEIT Now',
        'Netlify'
    ],
    star: {
        value: 2,
        max: 5
    }
};

const wordpress = {
    name: 'WordPress部落格維運',
    star: {
        value: 2,
        max: 5
    }
};

const programming = {
    name: '程式設計',
    details: [
        '模組化設計',
        '自我描述的程式碼',
        '物件導向設計',
        '函數導向設計',
        '微服務架構'
    ],
    star: {
        value: 3,
        max: 5
    }
};

const thirdParty = {
    name: '第三方服務串接',
    details: [
        'TapPay金流',
        '歐付寶金流、電子發票',
        '臉書登入',
        'Line Bot & LIFF'
    ],
    star: {
        value: 3,
        max: 5
    }
};

const sigfox = {
    name: 'Sigfox物聯網平台',
    star: {
        value: 2,
        max: 5
    }
};

const automaticTesting = {
    name: '自動化測試',
    details: [
        'WebdriverIO',
        'Appium',
        'Postman / Newman',
        'JMeter'
    ],
    star: {
        value: 1,
        max: 5
    }
};

const git = {
    name: 'Git版本控制',
    star: {
        value: 2,
        max: 5
    }
};

const messageQueueAndCache = {
    name: '消息隊列、快取',
    details: [
        'Redis',
        'RabbitMQ'
    ],
    star: {
        value: 1,
        max: 5
    }
};

const redmine = {
    name: 'Redmine議題追蹤',
    star: {
        value: 1,
        max: 5
    }
};


const skills = [
    nodejs,
    java,
    python,
    app,
    jenkins,
    nginx,
    database,
    docker,
    cloudPlatform,
    wordpress,
    programming,
    thirdParty,
    sigfox,
    git,
    messageQueueAndCache,
    redmine,
    automaticTesting
];

export default skills;