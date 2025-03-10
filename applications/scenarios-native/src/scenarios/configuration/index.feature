Feature: As Senior Quality Assurance specialist
I want to be able to execute e2e system tests locally, by providing configuration

  Scenario: Verify load & transform of configuration raw
    Given configuration raw is provided
    Then e2e-system-tests can load configuration

  Scenario: Verify load configuration?.awsAccounts
    Given configuration raw contains awsAccounts keys
    Then e2e-system-tests can load configuration?.awsAccounts

