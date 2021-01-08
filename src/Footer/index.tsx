import React from 'react';
import './styles.css';
import { ReactComponent as Youtube } from'./youtube.svg';
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Linkedin } from './linkedin.svg'

const Footer = () => {

    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <Youtube />
                </a>
                <a href="https://www.linkedin.com/in/anderson-dias-8124a668/" target="_new">
                    <Linkedin />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig" target="_new">
                    <Instagram />
                </a>
            </div>
        </footer>
    )
}

export default Footer;