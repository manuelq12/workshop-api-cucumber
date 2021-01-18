Feature: Github Api Redirect Test
    Scenario: Verify redirect for a repository
        Given a Github a repository old URL
        And the Github repository new URL
        When a request is used to obtain information of the repository, with the old URL
        Then the response should contain a 'Moved-Permanently' status
        And the repository redirect information
        When a request is used to retrieve the repository with the old URL
        Then the response should contain a 'OK' status
        And the response must contain a redirect to the new URL