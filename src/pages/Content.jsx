import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import '../css/Content.css'

function Content() {
    return (
    <div>
        <Header />
        <div className="content">
            <Sidebar />
            <main>
                <section id="home">
                    <div className="section-inner">
                    <h2>Home</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </section>

                <section id="about">
                    <div className="section-inner">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </section>

                <section id="projects">
                    <div className="section-inner">
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </section>

                <section id="contact">
                    <div className="section-inner">
                    <h2>Contact</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </section>
            </main>
        </div>
    </div>
    )
}

export default Content