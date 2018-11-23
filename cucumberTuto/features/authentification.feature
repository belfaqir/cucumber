Feature: Authentification 2
Scenario: cas non passant
    Given acces page web
    When fill "tikchbila@nana" and "password44" credentials
    Then close browser
Scenario: fill inscription form
    Given acces page web
    When fill "smiya" and  "kniya" and "0202321" and "password88"
    Then submit
    Then close browser
  

 		