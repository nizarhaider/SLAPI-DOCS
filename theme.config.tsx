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
