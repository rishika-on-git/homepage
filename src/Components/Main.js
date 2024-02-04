import React from 'react';
import "./Main.css"

const Main = () => {
  return (
  <div className='body-marquee'>
      <div className="marquee">
        <div className="marquee__group">
          <img src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3MzQ&ixlib=rb-1.2.1&q=80&w=400' alt='' />
          {/* Add other images as needed */}
        </div>

        <div aria-hidden="true" className="marquee__group">
          <img src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3MzQ&ixlib=rb-1.2.1&q=80&w=400' alt='' />
          {/* Add other images as needed */}
        </div>
        

      </div>

      <div className="marquee marquee--borders" style={{ '--duration': '100s' }}>
        <div className="marquee__group">
          <p>Be Updated</p>
          <p aria-hidden="true">Make friends</p>
          <p aria-hidden="true">Socialize</p>
        </div>

        <div aria-hidden="true" className="marquee__group">
          <p>Make friends</p>
          <p>Socialize</p>
          <p>Be updated</p>
        </div>
      </div>

      <div className="marquee marquee--reverse">
        <div className="marquee__group">
        <img src='https://wallpapers.com/images/high/minimalism-anonymous-mask-hd-ebrrytx2ox6o2ile.jpg' alt='' />
        <img src='https://images.unsplash.com/photo-1546421845-6471bdcf3edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt='' />
        <img src='https://images.unsplash.com/photo-1546421845-6471bdcf3edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt='' />
       {/* Add other images as needed */}
        </div>

        <div aria-hidden="true" className="marquee__group">
          <img src='https://images.unsplash.com/photo-1546421845-6471bdcf3edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt='' />
          {/* Add other images as needed */}
        </div>
      </div>
      </div>
  );
};

export default Main;
