$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feaT/authentification.feature");
formatter.feature({
  "name": "Authentification 2",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "cas non passant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "acces page web",
  "keyword": "Given "
});
formatter.step({
  "name": "fill \"\u003cusername\u003e\" and \"\u003cpass\u003e\" credentials",
  "keyword": "When "
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "pass"
      ]
    },
    {
      "cells": [
        "tikchbila@nana",
        "password1"
      ]
    },
    {
      "cells": [
        "tikchbila@nana2",
        "password2"
      ]
    },
    {
      "cells": [
        "tikchbila@nana3",
        "password3"
      ]
    },
    {
      "cells": [
        "tikchbila@nana4",
        "password4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "cas non passant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "acces page web",
  "keyword": "Given "
});
formatter.match({
  "location": "initialstep.acces_page_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill \"tikchbila@nana\" and \"password1\" credentials",
  "keyword": "When "
});
formatter.match({
  "location": "initialstep.fill_and_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "initialstep.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "cas non passant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "acces page web",
  "keyword": "Given "
});
formatter.match({
  "location": "initialstep.acces_page_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill \"tikchbila@nana2\" and \"password2\" credentials",
  "keyword": "When "
});
formatter.match({
  "location": "initialstep.fill_and_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "initialstep.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "cas non passant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "acces page web",
  "keyword": "Given "
});
formatter.match({
  "location": "initialstep.acces_page_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill \"tikchbila@nana3\" and \"password3\" credentials",
  "keyword": "When "
});
formatter.match({
  "location": "initialstep.fill_and_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "initialstep.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "cas non passant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "acces page web",
  "keyword": "Given "
});
formatter.match({
  "location": "initialstep.acces_page_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill \"tikchbila@nana4\" and \"password4\" credentials",
  "keyword": "When "
});
formatter.match({
  "location": "initialstep.fill_and_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "initialstep.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "fill inscription form",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "acces page web",
  "keyword": "Given "
});
formatter.match({
  "location": "initialstep.acces_page_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill \"smiya\" and  \"kniya\" and \"0202321\" and \"password88\"",
  "keyword": "When "
});
formatter.match({
  "location": "initialstep.fill_and_and_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit",
  "keyword": "Then "
});
formatter.match({
  "location": "initialstep.submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "initialstep.close_browser()"
});
formatter.result({
  "status": "passed"
});
});