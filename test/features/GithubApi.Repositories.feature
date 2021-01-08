Feature: Github Api Users & Repositories Test
    Scenario Outline: Obtain Users information
        Given a Github account like "<username>"
        When a request is used to retrieve the users information
        Then the response should contain a OK status
        And the response must contain users name "<name>"
        And the response also must contain users company "<company>"
        And the response also must contain users location "<location>"

        Examples:
        | username  |        name       | company | location |
        | aperdomob | Alejandro Perdomo |   PSL   | Colombia |
        
    Scenario Outline: Obtain Repositories information and files
        Given a Github account like "<username>"
        And the account information response
        When a request is used to retrieve a users repository information like "<repository>"
        Then the response should contain a OK status
        And the response must contain the repository full-name "<username>/<repository>"
        And the response also must contain the repository status <status>
        And the response also must contain the repository description "<description>"
            When a request is used to download "<repository>" repository
            Then the response should contain a OK status
            And the response content-type must be a zip
            When a request is used to retrieve "<repository>" repository README.md info
            Then the response should contain a OK status
            And the README.md info must contain a subset with its path and SHA
                When a request is used to download repository README.md
                And the README.md is calculated
                Then the response should contain a OK status
                And the README.md MD5 calculated and the one we previously had must be equal



        Examples:
        | username  |       repository       |  status  |            description             |
        | aperdomob | jasmine-awesome-report |   false  | An awesome html report for Jasmine |