import React from "react"
import { Layout } from "../components/layout"
import styles from "./index.module.scss"
import "./index.scss"
import { PageHeader } from "../components/page-header"
import OliveHelpsLogo from "../components/olive-helps-logo"
import { languages, downloadMacUrl, downloadWindowsUrl } from "../references"
import { Section } from "../components/section"
import { AnchorLink } from "gatsby-plugin-anchor-links"

interface LanguageBlockProps {
  language: string
  repoURL: string
  docURL?: string
  docURLNotice?: string
}

const LanguageBlock: React.FunctionComponent<LanguageBlockProps> = props => (
  <article className={styles.downloadItem}>
    <h3 className={styles.languageTitle}>{props.language}</h3>
    <a href={props.repoURL} className={styles.ldkLink}>
      GitHub
    </a>
    <br />
    {props.docURL && (
      <a href={props.docURL} className={styles.ldkLink}>
        Documentation
      </a>
    )}
    {props.docURLNotice && (
      <span className={styles.ldkLink}>{props.docURLNotice}</span>
    )}
  </article>
)

export default function Home() {
  const title = (
    <>
      <OliveHelpsLogo className={styles.headerImage} /> <br />
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
        </div>
      </Section>
      <Section sectionClassName={styles.alternatingSectionBackground}>
        <h2 className={styles.sectionTitle}>Get the LDK</h2>
        <p>Get the LDK and start building!</p>
        <div className={styles.downloadCollection}>
          {languages.map(language => (
            <LanguageBlock {...language} key={language.language} />
          ))}
        </div>
      </Section>
      <Section>
        <h2 className={styles.sectionTitle}>Sensational Sensors!</h2>
        <p>Details on available and future sensors.</p>
        <div className={styles.sensorCollection}>
          <article className={styles.sensorItem}>
            <AnchorLink to="/#keyboard" className={styles.sensorTitle}>Keyboard</AnchorLink>
            <p>Sensor that provides the ability to subscribe to updates for a variety of keyboard events.</p>
            <div className={styles.sensorMemberCollection}>
              <article className={styles.sensorMember}>
                <AnchorLink to="/#keyboard-hotkey" className={styles.sensorMemberTitle}>Hot Keys</AnchorLink>
                <p>An event that is sent when a configurable set of keys are pressed and released.</p>
                <p>Example: "Hey Loop, let me know when Ctrl+Alt+f is pressed, as well as when it's released."</p>
              </article>
              <article className={styles.sensorMember}>
                <AnchorLink to="/#keyboard-scan-codes" className={styles.sensorMemberTitle}>Scancodes</AnchorLink>
                <p>An event that is sent when specific scan codes are pressed and released. ### some sort of link to scan code docs ###</p>
                <p>Example: "Hey Loop, let me know scancodes are pressed"</p>
              </article>
              <article className={styles.sensorMember}>
                <AnchorLink to="/#keyboard-text" className={styles.sensorMemberTitle}>Text</AnchorLink>
                <p>An event that is sent when text has been entered on the keyboard.</p>
                <p>Example: "Hey Loop, send me the text that is being typed."</p>
                <h4>Technical notes:</h4>
                <ul>
                  <li>Chunks of text are sent every 1 second.</li>
                  <li>No events are sent if no text has been entered in the last 1 second.</li>
                  <li>No limits are applied to the size of text that will be sent in the event.</li>
                </ul>
                <h4>Limitations</h4>
                <ul>
                  <li>Events will not be sent while the Olive Helps Global Search or Search field has focus.</li>
                </ul>
                <h4>Roadmap ## not real just demonstrating ##</h4>
                <ul>
                  <li>Provide the ability to specify the time-frame for text chunks.</li>
                  <li>Provide the ability to specify a maximum/minimum size for text chunks.</li>
                </ul>
              </article>
              <article className={styles.sensorMember}>
                <AnchorLink to="/#keyboard-char" className={styles.sensorMemberTitle}>Characters</AnchorLink>
                <p>An event that is sent when individual characters have been entered on the keyboard.</p>
                <p>Example: "Hey Loop, send me every single character that is pressed from now until infinity."</p>
                <h4>Technical notes:</h4>
                <ul>
                  <li>An individual character is sent in the event, with no other type of grouping or chunking.</li>
                </ul>
                <h4>Limitations</h4>
                <ul>
                  <li>Events will not be sent while the Olive Helps Global Search or Search field has focus.</li>
                </ul>
                <h4>Roadmap ## not real just demonstrating ##</h4>
                <ul>
                  <li>Provide the ability to filter characters.</li>
                </ul>
              </article>
            </div>
          </article>
          <article className={styles.sensorItem}>
            <AnchorLink to="/#file-system" className={styles.sensorTitle}>File System</AnchorLink>
            <p>Sensor that provides the ability to subscribe to updates file and directory events as well as the ability to read/write/delete a single file.</p>
            <p>Etc...</p>
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
