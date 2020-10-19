import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty","html:target/report-html","json:target/report.json"},
        monochrome = true,
        snippets = SnippetType.CAMELCASE,
        features = "src/test/java/resource/inserir_conta.feature",
        dryRun = false,
        strict = false,
        tags = {"~@ignore"}
)
public class RunnerTest {

    @BeforeClass
    public static void reset(){
        WebDriver driver = new ChromeDriver();
        driver.get("http://srbarriga.herokuapp.com");
        driver.findElement(By.id("email")).sendKeys("gloomybrgames@gmail.com");
        driver.findElement(By.name("senha")).sendKeys("pedro1997");
        driver.findElement(By.tagName("button")).click();
        driver.findElement(By.linkText("reset")).click();
        driver.quit();
    }

}