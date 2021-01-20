Feature: Github Api Update Information Test
    Scenario: Follow a new account
        Given a Github account like 'aperdomob'
        When a request is used to follow the account
        Then the response should contain a 'No-Content' status
        And the response body must be empty

    Scenario: Verify if the account was followed
        Given a Github account like 'aperdomob'        
        When a request is used to verify this account was followed
        Then the response should contain a 'OK' status
        And the account should be marked as followed

    Scenario: Verify if following the account again is idempotent
        Given a Github account like 'aperdomob'
        When a request is used to follow the account again so we test the method is idempotent
        Then the response should contain a 'No-Content' status
        And the response body must be empty

    Scenario: Verify if the account was followed again
        Given a Github account like 'aperdomob'        
        When a request is used to verify this account was followed
        Then the response should contain a 'OK' status
        And the account should be marked as followed
