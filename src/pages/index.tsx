import React from "react"
import { Layout } from "../components/layout"
import styles from "./index.module.scss"
import "./index.scss"
import { PageHeader } from "../components/page-header"
import logo from "./olive-helps-logo-white.png"

export default function Home() {
  const title = (
    <>
      <img src={logo} width={500}/> <br />
      Developer Hub
    </>
  )
  return (
    <Layout>
      <PageHeader title={title} />
    </Layout>
  )
}
