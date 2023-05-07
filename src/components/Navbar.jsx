import React, { useState, useEffect } from "react";
import { AiFillCalendar, AiOutlineMenu } from 'react-icons/ai';
import { RiSearchFill } from "react-icons/ri";
import { BiFilter } from "react-icons/bi";

function Navbar(props) {

  const [menuVisible, setMenuVisible] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleClick = (event) => {

    // get the clicked element
    const clickedItem = event.target;
  
    // remove active class from all other items
    const items = document.querySelectorAll('.navList li');
    items.forEach(item => item.classList.remove('active'));
  
    // add active class to the clicked item
    clickedItem.classList.add('active');
  
    // get the clicked menu text
    const clickedMenu = clickedItem.textContent;
  
    // send the clicked menu to App component
    props.onClickFilter(clickedMenu);
  }

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    // control the size of window
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleAllEvents() {
    props.onClickFilter('all');
  }

  return (
    <>
      <div id="navbar" className="navbar">
        <div className="container-nav">
          <div className="nav-menu">
            {viewportWidth <= 827 && (
              <button className="menu-toggle" onClick={toggleMenu}>
                <span className="toggle-icon"><AiOutlineMenu /></span>
              </button>
            )}
            <ul className="navList" style={{ display: viewportWidth > 827 || menuVisible ? 'flex' : 'none' }}>
              <li onClick={handleAllEvents} className="active">Tüm Etkinlikler</li>
              <li onClick={handleClick}>Tiyatro</li>
              <li onClick={handleClick}>Konser</li>
              <li onClick={handleClick}>Stand Up</li>
              <li onClick={handleClick}>Sinema</li>
              <li onClick={handleClick}>Çocuk</li>
            </ul>
            <div className="search-box">
              <span className="search-icon"><RiSearchFill /></span>
              <input type="text" placeholder="Etkinlik ara..." />
            </div>
          </div>
        </div>

        <div className="filter-container">
            <div className="filter-content">
                <div className="filter-box">
                  <span className="filter-icon"><BiFilter /></span>
                    <p>Filterler</p>
                </div>
                <div className="calender-box">
                    <a href="#">
                        <span className="calender-icon"><AiFillCalendar /></span>
                        <p>Takvimde Gör</p>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
