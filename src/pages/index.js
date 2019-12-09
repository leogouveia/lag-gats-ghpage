import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>LEONARDO GOUVEIA</h1>
    <h2>FRONT END / FULL STACK DEVELOPER</h2>
    <hr />
    <h2>GOALS</h2>
    <p>
      Work with front end technologies as React, React Native, Vue and Flutter
      for web and mobile applications. Work with PHP, NodeJS and SQL/noSQL. Work
      in agile teams using Scrum, Kanban and other technics.
    </p>
    <h2>EXPERIENCE</h2>
    <h3>SOFTWARE ENGINEERING</h3>
    <h4>At: Caixa Econômica Federal</h4>

    <h4>OCT 2019</h4>
    <p>
      Development of business dashboards to support business strategy of credit
      and debit cards and other payment services. Using React + NodeJS + SQL
      Server and ETL Tools.
    </p>

    <h4>DEC 2018 – OCT 2019</h4>
    <p>
      Development of business dashboards and web systems to support business
      strategy in client bank accounts, bank services and investments. Working
      with NodeJS + VueJS + SQL Server and ETL Tools.{" "}
    </p>

    <h4>JAN 2018 – DEC 2018</h4>
    <p>
      Development of web system to support Digital Agencies in costumer
      services. Worked with AngularJS (1.x), Oracle DB and Java EE.{" "}
    </p>

    <h4>2015 - 2018</h4>
    <p>
      Development of business dashboards and web systems to support business
      strategy banking loans and credit products. Using jQuery + PHP + SQL
      Server + Vue. 2008 - 2012 Development of web applications and dashboards
      using PHP, Classic ASP, Javascript. Postgres, ETLs.
    </p>

    <h3>BANK OPERATIONS SUPPORT</h3>
    <h4>2012 - 2015</h4>
    <p>Banking operations support and trasury activities.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
