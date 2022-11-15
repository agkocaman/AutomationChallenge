require('dotenv').config()

const BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME
const BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY

exports.config = {
    tests: './*_test.js',
    output: './output',
    include: {
        I: './steps_file.js',
        casesPage:'../pages/cases.js'
     },
    helpers: {
        WebDriver: {
            url: 'https://bstackdemo.com',
            user: BROWSERSTACK_USERNAME,
            key: BROWSERSTACK_ACCESS_KEY,
            browser: 'chrome',
            desiredCapabilities: {}
        }
    },
    multiple: {
        bstack: {
            browsers: [
                {
                    browser: "Safari",
                    //For W3C-based scripts, use the following capabilties:
                    desiredCapabilities: {
                        "bstack:options" : {
                            "os": "OS X",
                            "osVersion": "Catalina",
                            "projectName": "AutomationChallenge",
                            "buildName": "browserstack-build-1",
                            "sessionName": "BStack parallel codecept-js 1",
                            "debug" : "true",
                            "networkLogs" : "true",
                            "source": "codecept-js:sample-main:v1.0"
                        },
                        "browserVersion": "latest",
                    },

                },

                {
                    browser: "Firefox",
                    //For W3C-based scripts, use the following capabilties:
                    desiredCapabilities: {
                        "bstack:options" : {
                            "os": "Windows",
                            "osVersion": "10",
                            "projectName": "AutomationChallenge",
                            "buildName": "browserstack-build-1",
                            "sessionName": "BStack parallel codecept-js 2",
                            "debug" : "true",
                            "networkLogs" : "true",
                            "source": "codecept-js:sample-main:v1.0"
                        },
                        "browserVersion": "latest",
                    },

                },
                
                {
                    browser: "edge",
                    //For W3C-based scripts, use the following capabiltis:
                    desiredCapabilities: {
                        "bstack:options" : {
                            "os": "Windows",
                            "osVersion": "10",
                            "projectName": "AutomationChallenge",
                            "buildName": "browserstack-Edge-1",
                            "sessionName": "BStack parallel codecept-js 3",
                            "debug" : "true",
                            "networkLogs" : "true",
                            "source": "codecept-js:sample-main:v1.0"
                        },
                        "browserVersion": "latest",
                    },

                },
            ],
        },
    },


    bootstrap: null,
    mocha: {},
    name: 'CodeceptJS-BrowserStack',
    plugins: {
        pauseOnFail: {},
        retryFailedStep: {
            enabled: true
        },
        tryTo: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    }
}
