<script>
  import InfoCard from "../components/InfoCard.svelte";

  let Intro = {
    icon: "fa-search",
    smallTitle: "YB Hackathon 2020",
    bigTitle: "Welcome",
    border: "success",
    links: [
      {
        text: "Github Repository",
        href: "https://github.com/faxg/ybhackathon-starter",
      },
      {
        text: "Docs",
        href:
          "https://github.com/faxg/ybhackathon-starter/blob/master/README.MD",
      },
    ],
  };

  let Services = {
    icon: "fa-list",
    smallTitle: "Azure Services",
    bigTitle: "Find Azure Services for your Idea",
    border: "primary",
  };

  let LearnerBadge = {
    icon: "fa-list",
    smallTitle: "Azure Heroes",
    bigTitle: "Claim your 'Learner' Azure Hero Badge",
    border: "info",
    links: [
      {
        text: "More Info on Azure Heroes...",
        href: "https://www.microsoft.com/skills/azureheroes",
      },
    ],
  };

  let learningAndSupport = {
    icon: "fa-list",
    smallTitle: "Learning And Support",
    bigTitle: "Learn More and get Help...",
    border: "info",
    links: [
      {
        text: "Microsoft Learn",
        href: "https://docs.microsoft.com/en-us/learn/",
      },
      { text: "Learn TV", href: "" },
      { text: "Dev.to", href: "" },
      { text: "Stackoverflow", href: "" },
    ],
  };

  let starterTemplate = {
    icon: "fa-list",
    smallTitle: "Azure Starter Template",
    bigTitle: "You can deploy this...",
    border: "info",
  };
</script>



<style>

  .col-3, .col-4,.col-6 {
    padding-top: 10px;
  }
</style>







<div class="row">
  <div class="col-4 justify-content-center">
    <InfoCard props={Intro}>
      This is the Azure Hackathon Starter Template. You'll find
      <ul>
        <li>Information on Azure Services you could use</li>
        <li>QR Code for "Learner" Azure Hero Digital Badge</li>
        <li>Our no-bs Microsoft.Source Developer Newsletter</li>
        <li>How to share your PII with us !</li>
        <li>
          How to use this Application Starter (SWA - Fullstack Javascript)
        </li>
      </ul>
    </InfoCard>
  </div>

  <div class="col-3 justify-content-center">
    <InfoCard props={Services}>
      You may already have an idea for a project or a challenge. Here are some
      useful Azure Services:
      <ul>
        <li>Azure Cognitive Services</li>
        <li>Azure Machine Learning</li>
        <li>Azure Jupyter Notebooks</li>
        <li>Azure App Service - Web App for Containers</li>
        <li>Azure Functions (Serverless)</li>
        <li>Azure Static Web Apps (SWA)</li>
        <li>Azure CosmosDB</li>
        <li>Azure IoT</li>
      </ul>
    </InfoCard>
  </div>

  <div class="col-3 justify-content-center">
    <InfoCard props={LearnerBadge}>
      You can claim your Azure Hero Learner Badge here.

      <img class="img img-fluid" style="height: 128px" src="/img/learner.png" />
      <img class="img img-fluid" style="height: 128px" src="/img/learner-qr.png" />
    </InfoCard>
  </div>

  <div class="col-4 justify-content-center">
    <InfoCard props={learningAndSupport}>
      Find help online on our Services
    </InfoCard>
  </div>

  <div class="col-6 justify-content-center">
    <InfoCard props={starterTemplate}>
      Welcome to the <b>YB Hackathon Starter</b> on Azure.&nbsp; <br /> This
      is an example application that serves multiple purposes:
      <ul>
        <li>
          <b>Frontend</b>: a website that contains links to docs on the
          Migros Hackathon API and selected Azure Cloud Services. Written in <a
            href="https://svelte.dev/">Svelte</a>, but many frameworks are
          supported (Angular, React, ...)
        </li>
        <li>
          <b>Example API</b>: Serverless (Azure Functions) backend <code>/api</code>
          that retrieves data from the Migros data stores. Written in JavaScript
          / NodeJS
        </li>
      </ul>
      You can clone & deploy this to Azure in 5 minutes. You'll get: <img class="img-fluid" width="100%" alt="SWA Overview" src="https://azurecomcdn.azureedge.net/cvt-4abbf0604519d6747e8628e7d4a627c7bc7d78cea01076877c54698df471f916/images/page/services/app-service/static/value-prop-2.png" />
      <small><a href="https://aka.ms/staticwebapps">Learn more about Azure
          Static Web Apps (SWA)</a></small>
    </InfoCard>
  </div>


</div>
