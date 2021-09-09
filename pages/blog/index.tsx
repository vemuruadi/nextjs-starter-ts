import Head from 'next/head'

function Blog() {
    return (
        <div className="space-y-14 lg:space-y-24">
            <Head>
                <title> Blog </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-4xl mx-auto mt-16 antialiased">
                <h3 className="text-4xl font-bold text-gray-900 lg:text-3xl dark:text-white">
                    Blog - Coming Soon !
                </h3>
                
            </main>
        </div>
    )
  }
  
  export default Blog