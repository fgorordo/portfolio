import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/logo.svg';

export const FLogo = () => {
    return (
        <Link href={"/"}><Image src={Logo} alt='Logo de Fernando Gorordo' width={100} /></Link>
    );
};