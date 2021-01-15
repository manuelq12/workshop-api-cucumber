Feature: Github Api Create & Delete Gist Test
    Scenario: Create & Delete Gist in the account
        Given a Github account like 'manuelq12'
        When a request is used to place a GIST in the account
        Then the response should contain a 'Created' status
        And the response info must contain a subset with the Gists description, state and content
        When a request is used to retrieve the Gist in the account
        Then the response should contain a 'OK' status
        And the response must contain gist property 'description'
        And the response must contain gist property 'public'
        When a request is used to delete the GIST from the account
        Then the response should contain a 'No-Content' status
        When a request is used to retrieve the Gist in the account
        Then the response should contain a 'Not-Found' status
