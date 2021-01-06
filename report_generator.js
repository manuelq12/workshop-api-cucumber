const reporter = require('cucumber-html-reporter');

let options = {
        theme: 'bootstrap',
        jsonFile: 'test/report/cucumber_report.json',
        output: 'test/report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.0.1",
            "Test Environment": "STAGING",
            "Platform": "Windows 10",
            "Executed": "Local"
        }
    };

    reporter.generate(options);