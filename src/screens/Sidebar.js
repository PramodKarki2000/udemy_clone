import React, { useState } from 'react';
import logo from '../ui/logo.jpg';
import { v4 as uuidv4 } from 'uuid';

function Sidebar() {
  const [nav, setNav] = useState([
    { label: 'Home', slug: '/', icon: 'icon-home' },
    { label: 'Discover', slug: 'discover', icon: 'icon-ul' },
    { label: 'Categories', slug: 'cates', icon: 'icon-tag' },
    { label: 'My Courses', slug: 'my-courses', icon: 'icon-briefcase' },
  ]);

  const [currentPage, setCurrentPage] = useState('/');

  console.log(currentPage);

  return (
    <div className='sidebar fixed'>
      <a className='logo block'>
        <img src={logo} alt='mainLogo.jpg' className='block' />
      </a>

      <ul className='nav'>
        {nav.map((items) => {
          return (
            <li key={uuidv4()}>
              <a
                href={items.slug}
                className={
                  'link aic noul flex c333 ' +
                  (currentPage == items.slug ? 'on' : 'els')
                }
              >
                <div className={'ico s18 ' + items.icon} />
                <h2 className='lbl s18'>{items.label}</h2>
              </a>
            </li>
          );
        })}
      </ul>

      <div className='updated-course aic flex'>
        <div className='icon-lamp-bright ico cfff s20' />
        <div className='lbl s15 fontb c333'>
          Updated Courses
          <h2 className='author s13 c777'>by Pramod Karki</h2>
        </div>
      </div>

      <div className='stats aic flex'>
        <div className='stats-box flex'>
          <div className='ico ico-points s24 icon-shield' />
          <h2 className='val s15 c333 fontb'>1800</h2>
          <h2 className='lbl s13 c777'>stats-box</h2>
        </div>

        <div className='stats-box flex'>
          <div className='ico icon-battery s24 icon-battery-90' />
          <h2 className='val s15 c333 fontb'>45.3%</h2>
          <h2 className='lbl s13 c777'>complete</h2>
        </div>
      </div>

      <div className='me aic flex'>
        <div className='photo cfff s20'>
          <img src='http://placeimg.com/100/100/people' alt='@people'/>
        </div>
        <div className='lbl s15 fontb c333'>
          Pramod Karki
          <div className='uname s13 c777 '>@pramodkarki</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
