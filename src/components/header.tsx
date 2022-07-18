import { Link } from 'gatsby'
import React, { PropsWithChildren } from 'react'
import classNames from '../utils/classnames'
import { IoSearchOutline } from 'react-icons/io5'

export default function Header() {
  return (
    <header className="w-full">
      <nav className="container mx-auto md:max-w-5xl flex items-center justify-between p-6">
        <Link
          to="/"
          className="DMIliaUNI text-xl dark:text-gray-100"
        >
          მემენტო
        </Link>

        <ul className="flex DMIliaUNI md:space-x-3">
          <NavButton className='hidden sm:mr-4 sm:block' onClick={() => trigger('?')}>
            <IoSearchOutline className="text-xl color" />
          </NavButton>
        </ul>
      </nav>
    </header>
  )
}

function NavLink({ to, children, className }: PropsWithChildren<{ to: string; className?: string }>) {
  return (
    <li>
      <Link
        to={to}
        className={classNames(
          'text-ml inline-block transition-colors py-2 px-2 sm:px-4 text-gray-500 no-underline hover:text-indigo-500 ',
          'transition-colors dark:text-gray-300',
          className,
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function NavButton(props: PropsWithChildren<{ className?: string; onClick: () => void }>) {
  return (
    <button
      className={classNames('outline-none text-xl transition-colors text-gray-500 dark:text-gray-300', props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}



function trigger(key: string, metaKey = true) {
  window.dispatchEvent(new KeyboardEvent('keydown', { key, metaKey }))
}
