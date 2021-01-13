Feature: My First Api Consume
    Scenario: Verify GET Service
        Given a training REST API url "https://httpbin.org"
        When the user consumes a GET Service
        Then the response should contain a 'OK' status
        And the response must contain a property "origin"

    Scenario: Verify GET Service with Query
        Given a training REST API url "https://httpbin.org"
        When the user consumes a GET Service with query parameters
        Then the response should contain a 'OK' status
        And the response must contain the query values

    Scenario: Verify HEAD Service
        Given a training REST API url "https://httpbin.org"
        When the user consumes a HEAD Service
        Then the response should contain a 'OK' status
        And the response body must be empty

    Scenario: Verify PATCH Service with Query
        Given a training REST API url "https://httpbin.org"
        When the user consumes a PATCH Service with query parameters
        Then the response should contain a 'OK' status
        And the response must contain the query name

    Scenario: Verify PUT Service with Query
        Given a training REST API url "https://httpbin.org"
        When the user consumes a PUT Service with query parameters
        Then the response should contain a 'OK' status
        And the response must contain the query name

    Scenario: Verify DELETE Service with Query
        Given a training REST API url "https://httpbin.org"
        When the user consumes a DELETE Service with query parameters
        Then the response should contain a 'OK' status
        And the response must contain the query name
