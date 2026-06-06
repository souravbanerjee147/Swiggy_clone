// // header.jsx

// ======================================== last updated header.jsx with new ui and dropdown menu for profile and logout handeling ========================================

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AuthContext } from './auth/AuthContext';
import { clearCart } from './utils/cartslice';

const Header = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { user, logout } = useContext(AuthContext);
    
    // UI Drawer state toggles
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Context overlay click-outside baseline close hooks
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSystemLogout = (e) => {
        e.preventDefault();
        setDropdownOpen(false);
        setMobileMenuOpen(false);
        logout(() => {
            dispatch(clearCart());
        });
        alert("Logged out successfully.");
        navigate("/login");
    };

    return (
        <nav className="flex justify-between items-center px-4 sm:px-8 md:px-12 border-b h-20 bg-white shadow-xs relative z-50 select-none">
            {/* BRAND LOGO CARD */}
            <div className="flex items-center shrink-0">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    <svg className="VXJlj" viewBox="0 0 61 61" height="49" width="49"><g clipPath="url(#a)"><path fill="#FF5200" d="M.32 30.5c0-12.966 0-19.446 3.498-23.868a16.086 16.086 0 0 1 2.634-2.634C10.868.5 17.354.5 30.32.5s19.446 0 23.868 3.498c.978.774 1.86 1.656 2.634 2.634C60.32 11.048 60.32 17.534 60.32 30.5s0 19.446-3.498 23.868a16.086 16.086 0 0 1-2.634 2.634C49.772 60.5 43.286 60.5 30.32 60.5s-19.446 0-23.868-3.498a16.086 16.086 0 0 1-2.634-2.634C.32 49.952.32 43.466.32 30.5Z"></path><path fill="#fff" fillRule="evenodd" d="M32.317 24.065v-6.216a.735.735 0 0 0-.732-.732.735.735 0 0 0-.732.732v7.302c0 .414.336.744.744.744h.714c10.374 0 11.454.54 10.806 2.73-.03.108-.066.21-.102.324-.006.024-.012.048-.018.066-2.724 8.214-10.092 18.492-12.27 21.432a.764.764 0 0 1-1.23 0c-1.314-1.776-4.53-6.24-7.464-11.304-.198-.462-.294-1.542 2.964-1.542h3.984c.222 0 .402.18.402.402v3.216c0 .384.282.738.666.768a.73.73 0 0 0 .582-.216.701.701 0 0 0 .216-.516v-4.362a.76.76 0 0 0-.756-.756h-8.052c-1.404 0-2.256-1.2-2.814-2.292-1.752-3.672-3.006-7.296-3.006-10.152 0-7.314 5.832-13.896 13.884-13.896 7.17 0 12.6 5.214 13.704 11.52.006.054.048.294.054.342.288 3.096-7.788 2.742-11.184 2.76a.357.357 0 0 1-.36-.36v.006Z" clipRule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M.32.5h60v60h-60z"></path></clipPath></defs></svg>

                </Link>
            </div>
            
            {/* CORE NAVIGATION CONTAINER ENTRY CONTROL ROW */}
            <div className="flex items-center gap-2 sm:gap-4 justify-end flex-1">
                
                {/* DESKTOP NAV LIST ROW: Renders inline, automatically hides on screens smaller than md (768px) */}
                <ul className="hidden md:flex items-center space-x-1 font-medium text-gray-700">
                    <Link to="/search"><li className="flex m-3 items-center gap-1.5 hover:text-indigo-600 transition"><i className="bi bi-search"></i>Search</li></Link>
                    <Link to="/offer"><li className="flex m-3 items-center gap-1.5 hover:text-indigo-600 transition"><i className="bi bi-tag"></i>Offer</li></Link>
                    <Link to="/help"><li className="flex m-3 items-center gap-1.5 hover:text-indigo-600 transition"><i className="bi bi-info-circle"></i>Help</li></Link>
                    <Link to="/cart">
                        <li className="flex m-3 items-center gap-1.5 hover:text-indigo-600 transition">
                            <i className="bi bi-cart text-lg"></i>
                            <span>Cart</span>
                            <span className="bg-indigo-50 text-indigo-600 text-xs px-2 py-0.5 rounded-full font-bold">{cartItems.length}</span>
                        </li>
                    </Link>
                </ul>

                {/* USER PROFILE CONTROL SYSTEM LAYER (Always visible outside the 3-dot menu across all screen widths) */}
                <div className="relative shrink-0" ref={dropdownRef}>
                    {user ? (
                        <>
                            <button 
                                onClick={() => { setDropdownOpen(!dropdownOpen); setMobileMenuOpen(false); }}
                                className="flex items-center space-x-1.5 text-gray-800 font-semibold hover:text-indigo-600 transition text-sm sm:text-base py-2 px-1 rounded-lg cursor-pointer"
                            >
                                <i className="bi bi-person-circle text-lg text-indigo-600"></i>
                                <span className="max-w-[70px] sm:max-w-[120px] truncate">{user.name}</span>
                                <i className={`bi bi-chevron-down text-xs transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}></i>
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 top-12 w-48 rounded-xl bg-white py-2 shadow-xl border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-150">
                                    <div className="px-4 py-2 border-b border-gray-100">
                                        <p className="text-xs text-gray-400 font-medium">Logged in as</p>
                                        <p className="text-sm font-bold text-gray-800 truncate">{user.name}</p>
                                    </div>
                                    <Link to="/profile" onClick={() => setDropdownOpen(false)} className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition">
                                        <i className="bi bi-person mr-2.5 text-gray-400"></i> Profile
                                    </Link>
                                    <Link to="/settings" onClick={() => setDropdownOpen(false)} className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition">
                                        <i className="bi bi-gear mr-2.5 text-gray-400"></i> Settings
                                    </Link>
                                    <hr className="border-gray-100 my-1" />
                                    <button onClick={handleSystemLogout} className="flex w-full items-center text-left px-4 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 transition cursor-pointer">
                                        <i className="bi bi-box-arrow-right mr-2.5"></i> Logout
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <Link to="/login" className="flex items-center text-gray-700 hover:text-indigo-600 font-semibold text-sm sm:text-base py-2 transition gap-1.5 shrink-0">
                            <i className="bi bi-person-circle text-lg"></i>
                            <span>SignIn</span>
                        </Link>
                    )}
                </div>

                {/* MOBILE ACTIVE RESPONSIVE 3-DOT HAMBURGER DRAWER ACTION TRIGGER CONTROL */}
                <div className="relative md:hidden shrink-0" ref={mobileMenuRef}>
                    <button 
                        onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setDropdownOpen(false); }}
                        className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition rounded-lg flex items-center justify-center cursor-pointer text-xl h-10 w-10 border border-gray-100"
                        title="Navigation links menu"
                    >
                        <i className={`bi ${mobileMenuOpen ? 'bi-x-lg text-base' : 'bi-three-dots-vertical'}`}></i>
                    </button>

                    {mobileMenuOpen && (
                        <div className="absolute right-0 top-12 w-48 rounded-xl bg-white py-2 shadow-xl border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-150">
                            <Link to="/search" onClick={() => setMobileMenuOpen(false)} className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition">
                                <i className="bi bi-search mr-3 text-gray-400"></i> Search
                            </Link>
                            <Link to="/offer" onClick={() => setMobileMenuOpen(false)} className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition">
                                <i className="bi bi-tag mr-3 text-gray-400"></i> Offer
                            </Link>
                            <Link to="/help" onClick={() => setMobileMenuOpen(false)} className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition">
                                <i className="bi bi-info-circle mr-3 text-gray-400"></i> Help
                            </Link>
                            <hr className="border-gray-100 my-1" />
                            <Link to="/cart" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between px-4 py-3 text-sm font-bold text-gray-700 hover:bg-indigo-50/50 hover:text-indigo-600 transition">
                                <span className="flex items-center"><i className="bi bi-cart mr-3 text-gray-400"></i> Cart</span>
                                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded-full">{cartItems.length}</span>
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Header;

