Feature: Github Api Response Time Test
    Scenario: Obtain all in the account
        Given a Github account like 'manuelq12'
        When a request is used to retrieve all users in Github
        Then the response should contain a 'OK' status
        And the delay of the response must be below 5000ms
