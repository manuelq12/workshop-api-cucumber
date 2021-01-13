Feature: Github Api Issues Create & Update Test
    Scenario: Obtain and Verify the user logged in information
        Given a Github account like 'manuelq12'
        When a request is used to retrieve the account information
        Then the response should contain a 'OK' status
        And at least one public repository is expected
        When a request is used to retrieve the accounts public repository information
        Then the response should contain a 'OK' status
        And the repository must exist


    Scenario: Create and Update the user logged in repository issues
        Given a Github account like 'manuelq12'
        And a public repository of the account 'AllersGroupHito2'
        When a request is used to create an issue in the accounts repository
        Then the response should contain a 'Created' status
        And the issue should have been created
        When a request is used to update the issue in the accounts repository
        Then the response should contain a 'OK' status
        And the issue should have been updated
