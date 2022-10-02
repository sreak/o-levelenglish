import * as React from "react";
import Layout from "../components/layout";

const IndexPage=()=> {
  return (
    <Layout>
      <h1>This is my home page.</h1>
      <p>I have created this site for making a blog about Leaning English Language.</p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
