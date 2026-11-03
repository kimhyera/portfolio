import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import navigation from './navigation';
import logo from '../../views/html/assets/img/hyera-logo.png';
export default function SiteHeader({ isFixed, activeSection, menuOpen, setMenuOpen, onInquiry, home = false }) {
  const asset = () => logo;
  const Arrow = () => <ArrowUpRight size={20} aria-hidden="true" />;
  return (            <header className={`rp-header${isFixed ? ' is-fixed' : ''}`}>
                <div className="rp-header-inner">
                    <Link className="rp-logo" to="/#home" aria-label="김혜라 포트폴리오 처음으로">
                        <img src={asset('hyera-logo.png')} alt="hyera" className="rp-brand-logo" width="694" height="202" />
                    </Link>
                    <nav className="rp-nav" id="rp-navigation" aria-label="주요 메뉴">
                        {navigation.map(([id, name]) => (
                            <Link key={id} to={id === 'about' ? '/About' : `${home ? '' : '/'}#${id}`} aria-current={activeSection === id ? 'location' : undefined}>
                                {name}
                            </Link>
                        ))}
                    </nav>
                    <button
                        className="rp-header-contact"
                        onClick={() => {
                            setMenuOpen(false);
                            onInquiry();
                        }}
                    >
                        Let's talk <Arrow />
                    </button>
                    <button id="rp-menu-toggle" className="rp-menu-toggle" aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={menuOpen} aria-controls="rp-mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                    </button>
                </div>
            </header>);
}
