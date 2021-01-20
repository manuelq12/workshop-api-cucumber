Feature: Github Api Create & Delete Gist Test
    Scenario: Create Gist in the account
        Given a Github account like 'manuelq12'
        When a request is used to place a GIST in the account
        Then the response should contain a 'Created' status
        And the response info must contain a subset with the Gists description, state and content

    Scenario: Retrieve Gist in the account
        Given a Github account like 'manuelq12'
        When a request is used to retrieve a Gist in the account
        Then the response should contain a 'OK' status
        And the response must contain gist property 'description'
        And the response must contain gist property 'public'

    Scenario: Delete Gist in the account
        Given a Github account like 'manuelq12'
        When a request is used to retrieve a Gist in the account
        And a request is used to delete the GIST from the account
        Then the response should contain a 'No-Content' status


    Scenario: Retrieve Deleted Gist in the account
        Given a Github account like 'manuelq12'
        When a request is used to retrieve a deleted Gist of the account 'https://api.github.com/gists/0769ab132c61c63010b3c725731a7975'
        Then the response should contain a 'Not-Found' status
