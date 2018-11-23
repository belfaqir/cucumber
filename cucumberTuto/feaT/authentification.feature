Feature: Authentification 2
Scenario Outline: cas non passant
    Given acces page web
    When fill "<username>" and "<pass>" credentials
    Then close browser
    
Examples:

|username  |  pass |
|tikchbila@nana |  password1 |
|tikchbila@nana2 |  password2 |
|tikchbila@nana3 |  password3 |
|tikchbila@nana4 |  password4 |



Scenario: fill inscription form
    Given acces page web
    When fill "smiya" and  "kniya" and "0202321" and "password88"
    Then submit
    Then close browser
  