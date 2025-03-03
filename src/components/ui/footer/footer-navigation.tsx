import Link from 'next/link';
import { NavigationLink } from '../interfaces';



interface FooterNavigationProps {
  navigationTitle: string;
  links: NavigationLink[];
}

export const FooterNavigation = ({ navigationTitle, links }: FooterNavigationProps) => {
  return (
    <div>
      <span className='font-bold'>{navigationTitle}</span>
      <nav className='mt-2'>
        <ul>
          {
            links.map((e) => (<li key={e.text}>
              <Link href={e.url} className='text-foreground-muted hover:text-foreground transition-colors duration-300'>
                {e.text}
              </Link>
            </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
}