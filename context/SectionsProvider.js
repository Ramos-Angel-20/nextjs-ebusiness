import { createContext, useRef } from 'react';

export const SectionsContext = createContext({
    aboutRef: null,
    servicesRef: null,
    contactRef: null,
    scrollHandler: (ref) => { }
});


const SectionsProvider = ({ children }) => {

    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    const sectionScrollHandler = sectionRef => {
        sectionRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    const context = {
        aboutRef,
        servicesRef,
        contactRef,
        scrollHandler: sectionScrollHandler
    };

    return (
        <SectionsContext.Provider value={context}>
            {children}
        </SectionsContext.Provider>
    );
}

export default SectionsProvider;
