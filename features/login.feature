Feature: Log Into BambooHR

  Scenario Outline: As a user, I can log into BambooHR

    Given I am on the login page
    When I login with <username> and <password>
    Then the name label should be present

    Examples:
      | username                | password      |
      | ilichgarcia27@gmail.com | password      |
