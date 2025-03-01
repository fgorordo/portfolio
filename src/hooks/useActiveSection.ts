import { useEffect, useRef, useState } from 'react';


export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState<null | string>(null);
    const observer = useRef<null | IntersectionObserver>(null);

    useEffect(() => {
        //create new instance and pass a callback function
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            //Update state with the visible section ID
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        }, {threshold:[0.4]});


        //Get custom attribute data-section from all sections
        const sections = document.querySelectorAll('[data-section]');

        sections.forEach((section) => {
            observer.current!.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.current!.unobserve(section);
            });
        };
    }, [])

    return activeSection;
}


