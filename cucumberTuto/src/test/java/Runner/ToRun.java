package Runner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="feaT",
				glue="StepDefinitions",
				plugin={"html:target/cucumber-html-report"})
						

public class ToRun {
	
	

}
