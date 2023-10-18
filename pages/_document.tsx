import { Html, Head, Main, NextScript } from 'next/document'
import { useState } from 'react'
export default function Document() {
const [backgroundColor, setBackgroundColor] = useState<string>('rgba(2,2,2,0.88)')
  return (
    <Html lang="en">
      <Head />
      <body style={{	backgroundColor:backgroundColor }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
