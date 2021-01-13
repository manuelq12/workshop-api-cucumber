Feature: Github Api Update Information Test
    Scenario: Update Users following accounts
        Given a Github account like 'aperdomob'
        When a request is used to follow the account
        Then the response should contain a 'No-Content' status
        And the response body must be empty
        When a request is used to verify the account was followed
        Then the response should contain a 'OK' status
        And the account should be marked as followed
        When a request is used to follow the account again so we test the method is idempotent
        Then the response should contain a 'No-Content' status
        And the response body must be empty
        When a request is used to verify the account was followed
        Then the response should contain a 'OK' status
        And  the account should be marked as followed
