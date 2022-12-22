Feature: Search

  Scenario: Search Amazon for echo dot speakers
    Given open the Amazon page
    And I search for Echo Dot
    Then I expect Echo Dot (3rd Gen) to be displayed
    And I expect Echo (4th generation) to be displayed