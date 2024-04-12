import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import logo from 'components/logo-slapi.png'
const config: DocsThemeConfig = {
  logo: (
  <>
    <Image src={logo} alt="SLAPI Logo" width={24} height={24} />
    <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        SLAPI
      </span>
  </>  
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="SLAPI" />
      <meta property="og:description" content="Sri Lankan data indicators" />
    </>
  ),
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/nizarhaider/SLAPI-DOCS',
  editLink:{
    component: null
  },
  feedback: {
    content: "Got an issue? Let me know"
    },
  // logoLink: "https://github.com/nizarhaider/SLAPI-DOCS/blob/main/Untitled_design-8-removebg-preview.png",
  // feedback:{
  //   content: null
  // },
  footer: {
    text: (
      <span>
        SLAPI {new Date().getFullYear()} ©{''}
      </span>
    )
  },
}

export default config
