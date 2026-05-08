import { useEffect } from 'react';
import '../css/Sidebar.css';
import profile from '../src/assets/nailong.png';

const Sidebar = () => {

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('nav ul li');

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navItems.forEach((item) => item.classList.remove('active'));

                const activeItem = document.querySelector(
                `nav ul li[data-section="${entry.target.id}"]`
                );
                if (activeItem) activeItem.classList.add('active');
            }
            });
        },
        {
            root: document.querySelector('main'),
            threshold: 0.5,
        }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const main = document.querySelector('main');
        const target = document.getElementById(id);
        if (main && target) {
            main.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <div className="sidebar">
            <div className="user-info">
                <img src={profile} alt="Picture of Myself" className="avatar" />
                <h2>Gerome Ian</h2>
                <p>Software Developer</p>
            </div>

            <div className="divider"></div>

            <nav>
                <ul>
                    <li className="active" data-section="home" onClick={() => scrollToSection('home')}>Home</li>
                    <li data-section="about" onClick={() => scrollToSection('about')}>About</li>
                    <li data-section="projects" onClick={() => scrollToSection('projects')}>Projects</li>
                    <li data-section="contact" onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </nav>

            <div className="divider"></div>

            <div className="social-media">
                <div className="social-icon" title="Facebook">
                    <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </div>
                <div className="social-icon" title="Twitter / X">
                    <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </div>
                <div className="social-icon" title="LinkedIn">
                    <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                </div>
                <div className="social-icon" title="GitHub">
                    <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;