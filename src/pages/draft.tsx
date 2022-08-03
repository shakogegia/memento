import React, { useEffect, useRef } from 'react';
import Layout from '../components/layout/main';
import SEO from '../components/seo';

export default function Post(props: any) {
  const simplemde = useRef(null)
  const [title, setTitle] = React.useState('')

  const uniqueId = `draft_${new URLSearchParams(props.location.search).get('id') || 'sample-id'}`

  useEffect(() => {
    const _title = localStorage.getItem(uniqueId)

    if (_title) {
      setTitle(_title)
    }
    
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js";
    script.async=true;
    document.body.appendChild(script);
    
    script.onload = () => {
      // @ts-ignore
      simplemde.current = new SimpleMDE({
        element: document.getElementById('content'),
        spellChecker: false,
        autofocus: true,
        autosave: {
          enabled: true,
          uniqueId,
          delay: 1000,
        },
        placeholder: 'Type here...',
        promptURLs: true,
        styleSelectedText: false,
        showIcons: ['code', 'table'],
        status: ["lines", "words", "cursor"],
        tabSize: 4,
        toolbar: false,
        toolbarTips: false,
        shortcuts: {
          drawImage: 'Cmd-Alt-M',
          drawLink: 'Cmd-Alt-K',
          toggleUnorderedList: 'Cmd-Alt-Shift-L',
        },
      })
    };
  }, [uniqueId])

  return (
    <Layout>
      <SEO title={'Draft'} />

      <div className="max-w-3xl m-auto mt-8">
        <input
          type="text"
          placeholder="სათაური..."
          defaultValue={title}
          onChange={(e) => {
            setTitle(e.target.value)
            localStorage.setItem(uniqueId, e.target.value)
          }}
          className="text-3xl max-w-lg mx-auto w-full block outline-none text-center font-semibold IliaDuospace transition-colors dark:text-gray-200 bg-transparent"
        ></input>

        <div className="mt-16 mb-20 iAWriterDuospace w-full min-h-[500px] outline-none prose max-w-none prose-lg break-words text-gray-500 transition-colors dark:text-gray-300 dark:prose-a:text-gray-200 dark:prose-strong:text-gray-200 dark:prose-blockquote:text-gray-200 dark:prose-headings:text-gray-200">
          <textarea id="content"></textarea>
        </div>

        <div className="mb-20">
          <div className="w-full border-t border-gray-100 transition-colors dark:border-gray-600"></div>
        </div>
      </div>
    </Layout>
  )
}
