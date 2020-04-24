import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: "img/react-fluent-form-fusion.svg",
    description: (
      <>
        Stop worriyng about state handling and focus on configuration. An API
        designed to fluently read and write configuration for forms.
      </>
    ),
  },
  {
    title: <>Integrated Validation</>,
    imageUrl: "img/react-fluent-form-yup.svg",
    description: (
      <>
        Writing validation by hand is cumbersome. Using a fluent validation
        approach like
        <code>
          <a href="https://www.npmjs.com/package/yup">yup</a>
        </code>
        can change things dramatically.
      </>
    ),
  },
  {
    title: <>Customization as Prio</>,
    imageUrl: "img/react-fluent-form-universe.svg",
    description: (
      <>
        Every app is different and so is the code.
        <code>react-fluent-form</code> comes with a simple, built-in
        customization approach for fields and validation.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/getting-started/introduction")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
