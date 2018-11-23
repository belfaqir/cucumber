package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class initialstep 
{
	
	WebDriver driver;
    
	@Given("acces page web")
	public void acces_page_web() {
		System.setProperty("webdriver.chrome.driver","D:\\DriverFF\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://www.facebook.com");
		
	}

	@When("fill credentials")
	public void fill_credentials() {
	   
	}

	@When("fill {string} and {string} credentials")
	public void fill_and_credentials(String user, String pass1) {
		driver.findElement(By.id("email")).sendKeys(user);
		driver.findElement(By.id("pass")).sendKeys(pass1);
	}
	
	@Then("display error")
	public void display_error() {
		   driver.findElement(By.id("loginbutton")).click();;

	}

	@Then("close browser")
	public void close_browser() {
	   driver.quit();
	   
	}

	@When("fill infos")
	public void fill_infos() {
		

	}

	@Then("submit")
	public void submit() {
		 driver.findElement(By.id("u_0_13")).click();
	}
	

	@When("fill {string} and  {string} and {string} and {string}")
	public void fill_and_and_and(String name1, String name2, String tel, String pass) {
		driver.findElement(By.id("u_0_l")).sendKeys(name1);
		driver.findElement(By.id("u_0_n")).sendKeys(name2);
		driver.findElement(By.id("u_0_q")).sendKeys(tel);
	    driver.findElement(By.id("u_0_x")).sendKeys(pass);
	   
	}


}
