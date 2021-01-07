Feature: Github Api Authentication Test
    Scenario Outline: Verify Authentication Via OAuth2 Tokens by Header
        Given a Github username "<username>"
        And the repository of the Github user "<repository>"
        When the user tries to retrieve its repository with OAuth2 Tokens by Header
        Then the response should contain a OK status
        And the response must contain the repository description

        Examples:
        | username | repository |
        | manuelq12 | workshop-api-cucumber |

    Scenario Outline: Verify Authentication Via OAuth2 Tokens by Parameter
        Given a Github username "<username>"
        And the repository of the Github user "<repository>"
        When the user tries to retrieve its repository with OAuth2 Tokens by Parameter
        Then the response should contain a OK status
        And the response must contain the repository description

        Examples:
        | username | repository |
        | manuelq12 | workshop-api-cucumber |
