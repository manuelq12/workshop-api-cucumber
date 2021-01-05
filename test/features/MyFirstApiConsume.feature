Feature: My First Api Consume
    Scenario: Verify GET Service
        Given a REST API url
        When we consume a GET Service
        Then the response should contain a OK status
        And the response must contain a property "origin"

    Scenario: Verify GET Service with Query
        Given a REST API url
        When we consume a GET Service with query parameters
        Then the response should contain a OK status
        And the response must contain the query values

    Scenario: Verify HEAD Service
        Given a REST API url
        When we consume a GET Service with query parameters
        Then the response should contain a OK status
        And the response must contain in its header the server value

    Scenario: Verify PATCH Service with Query
        Given a REST API url
        When we consume a PATCH Service with query parameters
        Then the response should contain a OK status
        And the response must contain the PATCH query name

    Scenario: Verify PUT Service with Query
        Given a REST API url
        When we consume a PUT Service with query parameters
        Then the response should contain a OK status
        And the response must contain the PUT query name

    Scenario: Verify DELETE Service with Query
        Given a REST API url
        When we consume a DELETE Service with query parameters
        Then the response should contain a OK status
        And the response must contain the DELETE query name
