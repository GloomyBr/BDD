import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteAmbiente {

    public static void main(String[] args) {

        System.setProperty("webdriver.chrome.driver","C:\\Users\\Zup\\IdeaProjects\\CursoCucumber\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("http://srbarriga.herokuapp.com");
    }
}
