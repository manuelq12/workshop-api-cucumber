Feature: My First Api Consume
    Scenario: First API Test (GET)
        Given a REST API url
        When we consume a GET Service
        Then the response should contain a OK status and a property "origin"

    Scenario: First API Test with Query (GET)
        Given a REST API url
        When we consume a GET Service with query parameters
        Then the response should contain a OK status and the query values

    Scenario: First API Test with Query (HEAD)
        Given a REST API url
        When we consume a GET Service with query parameters
        Then the response should contain a OK status and the its header the server value

    Scenario: First API Test with Query (PATCH)
        Given a REST API url
        When we consume a PATCH Service with query parameters
        Then the PATCH response should contain a OK status and the query name

    Scenario: First API Test with Query (PUT)
        Given a REST API url
        When we consume a PUT Service with query parameters
        Then the PUT response should contain a OK status and the query name

    Scenario: First API Test with Query (DELETE)
        Given a REST API url
        When we consume a DELETE Service with query parameters
        Then the DELETE response should contain a OK status and the query name