package stepdefs;

import cucumber.api.PendingException;
import cucumber.api.Transform;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class AprenderCucumberStep {


    @Given("^que crie o arquivo corretamente$")
    public void queCrieOArquivoCorretamente() throws Throwable {
        System.out.println("Piruleta");
    }

    @When("^executalo$")
    public void executalo() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("^a especificacao deve finalizar com sucesso$")
    public void aEspecificacaoDeveFinalizarComSucesso() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

    }

    private int contador = 0;

    @Given("^que o valor do contador e (\\d+)$")
    public void queOValorDoContadorE(int arg1) throws Throwable {
        contador = arg1;

    }

    @When("^eu incrementar em (\\d+)$")
    public void euIncrementarEm(int arg1) throws Throwable {
       contador = contador + arg1;
    }

    @Then("^o valor do contador sera (\\d+)$")
    public void oValorDoContadorSera(int arg1) throws Throwable {
        assertEquals(arg1,contador);
    }

//DATA

    private Date entrega = new Date();


    @Given("^que a entrega e dia (.*)$")
    public void queAEntregaEDia(@Transform(DateConverter.class ) Date data) throws Throwable {
        entrega  = data;
        System.out.println(entrega);
    }

    @When("^a entreg atrasar em (\\d+) (dia|dias|mes|meses)$")
    public void aEntregAtrasarEmDias(int arg1,String tempo) throws Throwable {
       Calendar cal = Calendar.getInstance();
       cal.setTime(entrega);
       if(tempo.equals("dias")) {
           cal.add(Calendar.DAY_OF_MONTH, arg1);
       }
        if(tempo.equals("meses")) {
            cal.add(Calendar.MONTH, arg1);
        }
       entrega = cal.getTime();
    }

    @Then("^a entrega sera efetuada em dia (\\d{2}\\/\\d{2}\\/\\d{4})$")
    public void aEntregaSeraEfetuadaEmDia(String data) throws Throwable {
        DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        String dataFormatada = format.format(entrega);
        assertEquals(data,dataFormatada);
    }


/*Desafio*/
    @Given("^que o ticket( especial)? e (A.\\d{3}) $")
    public void queOTicketEAF(String tipo,String  arg1) throws Throwable {

    }

    @Given("^que o valor da passagem e R\\$ (.*)$")
    public void queOValorDaPassagemER$(Double numero) throws Throwable {

        System.out.println(numero);
    }

    @Given("^que o nome do passageiro e \"(.{5,20})\"$")
    public void queONomeDoPassageiroE(String arg1) throws Throwable {

    }

    @Given("^que o telefone do passageiro e (9\\d{3}-\\d{4})$")
    public void queOTelefoneDoPassageiroE(String  telefone, int arg2) throws Throwable {

    }

    @When("^criar os steps$")
    public void criarOsSteps() throws Throwable {

    }

    @Then("^o teste vai funcionar$")
    public void oTesteVaiFuncionar() throws Throwable {

    }


}
