import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <meta charset="utf-8"/>
        {/* <meta content="width=device-width, initial-scale=1.0" name="viewport" /> */}

        <title>Hidayat Bersaudara Abadi</title>
        <meta content="" name="description"/>
        <meta content="" name="keywords"/>

        <link href="assets/img/hba.png" rel="icon"/>
        <link href="assets/img/hba.png" rel="apple-touch-icon"/>

        {/* <link 
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" 
        rel="stylesheet" /> */}
        

      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}
