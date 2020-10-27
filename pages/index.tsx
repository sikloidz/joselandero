import {
  mdiEmail,
  mdiFirebase,
  mdiGithub,
  mdiLanguageTypescript,
  mdiLaravel,
  mdiLinkedin,
  mdiMeteor,
  mdiNodejs,
  mdiReact,
  mdiTailwind,
} from '@mdi/js';
import Icon from '@mdi/react';
import { Fragment } from 'react';
import classNames from 'classnames';

import styles from '../styles/text-marker.module.css';

let networks = [
  {
    icon: mdiGithub,
    href: 'https://github.com/sikloidz',
  },
  {
    icon: mdiLinkedin,
    href: 'https://www.linkedin.com/in/joselandero/',
  },
  {
    icon: mdiEmail,
    href: 'mailto:me@joselandero.com',
  },
];

let techs = [
  {
    icon: mdiReact,
    iconColor: 'text-blue-400',
    name: 'React',
  },
  {
    icon:
      'M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z',
    iconColor: 'text-gray-500',
    name: 'Next.js',
  },
  {
    icon: mdiMeteor,
    iconColor: 'text-red-400',
    name: 'Meteor',
  },
  {
    icon: mdiFirebase,
    iconColor: 'text-yellow-400',
    name: 'Firebase',
  },
  {
    icon: mdiLanguageTypescript,
    iconColor: 'text-indigo-400',
    name: 'Typescript',
  },
  {
    icon: mdiNodejs,
    iconColor: 'text-green-400',
    name: 'NodeJs',
  },
  {
    icon: mdiLaravel,
    iconColor: 'text-red-400',
    name: 'Laravel',
  },
  {
    icon: mdiTailwind,
    iconColor: 'text-teal-400',
    name: 'Tailwind',
  },
];

export default function Home() {
  return (
    <Fragment>
      <main className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="min-h-screen pt-24 text-center flex justify-center items-center">
          <div>
            <img
              src="/images/joselandero.jpg"
              alt="This is my profile picture"
              className="h-32 w-32 object-cover object-top rounded-lg mx-auto shadow-solid-green-400"
            />
            <div className="mt-12 flex space-x-8 justify-center">
              {networks.map((network) => (
                <a href={network.href} target="_blank" key={network.href}>
                  <Icon
                    path={network.icon}
                    size={1.5}
                    className="text-white hover:text-green-400"
                  />
                </a>
              ))}
            </div>
            <h1 className="mt-12 text-green-300 font-bold text-3xl md:text-4xl">
              Hi, I'm{' '}
              <span
                className={classNames(
                  styles.textMarker,
                  'inline-block mx-2 md:inline md:mx-0 relative'
                )}
              >
                <span className="relative">José Landero</span>
              </span>
            </h1>
            <h2 className="mt-4 text-green-200 font-bold text-2xl md:text-3xl">
              And I promise a proper website will be here{' '}
              <span className="line-through">(someday)</span>
            </h2>
            <p className="mt-16 mb-12 text-xl md:text-2xl text-gray-100">
              Meanwhile, here are some things I'd worked with:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-16 justify-center">
              {techs.map((tech) => (
                <div key={tech.name}>
                  <Icon
                    path={tech.icon}
                    size={2}
                    className={classNames('mx-auto', tech.iconColor)}
                  />
                  <div className="mt-4 text-gray-400 text-xl">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-64">
          <p className="text-center text-gray-100 text-lg mb-12">
            Thanks for scrolling, here's a cute cat :)
          </p>
          <img
            src="https://cataas.com/cat?filter=blur"
            alt="The cutest cat in world"
            className="mx-auto w-64 h-64 object-cover rounded shadow-solid-green-400"
          />
        </div>
      </main>
      <footer className="mt-16 p-4 text-center text-gray-100">
        <p>Made with ❤️ in México 🇲🇽 🌮</p>
      </footer>
    </Fragment>
  );
}
