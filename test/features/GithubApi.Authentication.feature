Feature: Github Api Authentication Test
    Scenario: Verify Authentication Via OAuth2 Tokens by Header
        Given a Github username
        And the repository of the Github user
        When the user tries to retrieve its repository with OAuth2 Tokens by Header
        Then the response should contain a OK status
        And the response must contain the repository description

    Scenario: Verify Authentication Via OAuth2 Tokens by Parameter
        Given a Github username
        And the repository of the Github user
        When the user tries to retrieve its repository with OAuth2 Tokens by Parameter
        Then the response should contain a OK status
        And the response must contain the repository description
