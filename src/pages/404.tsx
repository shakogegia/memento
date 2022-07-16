import * as React from 'react'
import Layout from '../components/layout/main'

export default function NotFound(props: any) {
  return (
    <Layout>
      <div className="max-w-3xl m-auto">
        <div className="flex flex-col align-center text-center font-mono">
          <span className="text-9xl">🔍</span>
          <h2 className="mt-6 text-3xl transition-colors dark:text-gray-200">404</h2>
        </div>
      </div>
    </Layout>
  )
}
