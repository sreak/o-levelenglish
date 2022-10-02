import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>Thanks for visiting my page, <span style={{color: "purple"}}>called English-For-Owls</span>

      </h1>
      <p>
        I have created this site for making a blog about Leaning English
        Language. This site is still under construction, Soon you will see a fresh look.
      </p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
