Feature: Github Api Issues Create & Update Test
    Scenario: Obtain and Verify the users repository information
        Given a Github account like 'manuelq12'
        When a request is used to retrieve the account information
        Then the response should contain a 'OK' status
        And at least one public repository is expected


    Scenario: Obtain and Verify the user public repository information
        Given a Github account like 'manuelq12'
        When a request is used to retrieve an account public repository information
        Then the response should contain a 'OK' status
        And the repository must exist


    Scenario: Create an issue in the users public repository
        Given a Github account like 'manuelq12'
        And a public repository of the account 'AllersGroupHito2'
        When a request is used to create an issue in the accounts repository
        Then the response should contain a 'Created' status
        And the issue should have been created


    Scenario: Update an issue in the users public repository
        Given a Github account like 'manuelq12'
        And a public repository of the account 'AllersGroupHito2'
        When a request is used to update the issue 1 in the accounts repository
        Then the response should contain a 'OK' status
        And the issue should have been updated