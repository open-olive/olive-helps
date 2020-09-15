import React from "react"
import { Layout } from "../components/layout"
import styles from "./index.module.scss"
import "./index.scss"
import { PageHeader } from "../components/page-header"
import logo from "./olive-helps-logo-white.png"
import {
  downloadLinuxUrl,
  downloadMacUrl,
  downloadWindowsUrl,
  goGitHubUrl, goLDKUrl,
  nodeGitHubUrl,
  nodeLDKUrl
} from "../references"
import { Section } from "../components/section"

export default function Home() {
  const title = (
    <>
      <img src={logo} width={500} /> <br />
      Developer Hub
    </>
  )
  return (
    <Layout>
      <PageHeader title={title} />
      <Section>
        <h2 className={styles.sectionTitle}>Download</h2>
        <p>Download the Olive Helps app.</p>
        <div className={styles.downloadCollection}>
          <article className={styles.downloadItem}>
            <a href={downloadWindowsUrl} className={styles.downloadLink}>
              Windows
            </a>
          </article>
          <article className={styles.downloadItem}>
            <a className={styles.downloadLink} href={downloadMacUrl}>
              MacOS
            </a>
          </article>
          <article className={styles.downloadItem}>
            <a className={styles.downloadLink} href={downloadLinuxUrl}>
              Linux
            </a>
          </article>
        </div>
      </Section>
      <Section sectionClassName={styles.alternatingSectionBackground}>
        <h2 className={styles.sectionTitle}>Get the LDK</h2>
        <p>Get the LDK and start building!</p>
        <div className={styles.downloadCollection}>
          <article className={styles.downloadItem}>
            <h3 className={styles.languageTitle}>Node</h3>
            <a href={nodeGitHubUrl} className={styles.ldkLink}>
              GitHub
            </a>
            <br />
            <a href={nodeLDKUrl} className={styles.ldkLink}>
              Documentation
            </a>
          </article>
          <article className={styles.downloadItem}>
            <h3 className={styles.languageTitle}>Go</h3>
            <a href={goGitHubUrl} className={styles.ldkLink}>
              GitHub
            </a><br/>
            <a href={goLDKUrl} className={styles.ldkLink}>
              Documentation
            </a>
          </article>
        </div>
      </Section>
      <Section>
        <h2 className={styles.sectionTitle}>Getting Help</h2>
        <p>
          Email your Olive Helps developer contact if you need any help! We're
          here to help you succeed!
        </p>
      </Section>
    </Layout>
  )
}

/**
 * LDK Links
 * LDK Documentation Links
 * Download Links
 */
