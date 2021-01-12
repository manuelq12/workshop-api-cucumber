Feature: Github Api Users & Repositories Test
    Scenario: Obtain Users information
        Given a Github account like 'aperdomob'
        When a request is used to retrieve the users information
        Then the response should contain a OK status
        And the response must contain users property 'name' 'Alejandro Perdomo'
        And the response must contain users property 'company' 'PSL'
        And the response must contain users property 'location' 'Colombia'


    Scenario: Obtain Repositories information and files
        Given a Github account like 'aperdomob'
        And the account information response
        When a request is used to retrieve a users repository information like 'jasmine-awesome-report'
        Then the response should contain a OK status
        And the response must contain repository property 'full-name' 'aperdomob/jasmine-awesome-report'
        And the response must contain repository property 'status' 'false'
        And the response must contain repository property 'description' 'An awesome html report for Jasmine'
        When a request is used to download 'jasmine-awesome-report' repository
        Then the response should contain a OK status
        And the response content-type must be a zip
        When a request is used to retrieve 'jasmine-awesome-report' repository README.md info
        Then the response should contain a OK status
        And the README.md info must contain a subset with its path and SHA
        When a request is used to download repository README.md
        And the README.md is calculated
        Then the response should contain a OK status
        And the README.md MD5 calculated and the one we previously had must be equal
