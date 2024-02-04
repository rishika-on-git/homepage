import React from 'react';
import "./Posts.css"
const TestimonialsGrid = () => {
  return (
    <div className="outerdiv">
      <div className="innerdiv">
        {/* Testimonial 1 */}
        <div className="div1 eachdiv">
          {/* User Details */}
          <div className="userdetails">
            <div className="imgbox">
              <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" alt="" />
            </div>
            <div className="detbox">
              <p className="name">Daniel Clifford</p>
              <p className="designation">Verified Graduate</p>
            </div>
          </div>
          {/* Review */}
          <div className="review">
            <h4>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</h4>
            <p>“ I was an EMT for many years before I joined the bootcamp... </p>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="div2 eachdiv">
          {/* User Details */}
          <div className="userdetails">
            <div className="imgbox">
              <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt="" />
            </div>
            <div className="detbox">
              <p className="name">Jonathan Walters</p>
              <p className="designation">Verified Graduate</p>
            </div>
          </div>
          {/* Review */}
          <div className="review">
            <h4>The team was very supportive and kept me motivated</h4>
            <p>“ I started as a total newbie with virtually no coding skills... </p>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="div3 eachdiv">
          {/* User Details */}
          <div className="userdetails">
            <div className="imgbox">
              <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg" alt="" />
            </div>
            <div className="detbox">
              <p className="name dark">Kira Whittle</p>
              <p className="designation dark">Verified Graduate</p>
            </div>
          </div>
          {/* Review */}
          <div className="review dark">
            <h4>Such a life-changing experience. Highly recommended!</h4>
            <p>“ Before joining the bootcamp, I’ve never written a line of code... </p>
          </div>
        </div>
        {/* Testimonial 4 */}
        <div className="div4 eachdiv">
          {/* User Details */}
          <div className="userdetails">
            <div className="imgbox">
              <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="" />
            </div>
            <div className="detbox">
              <p className="name dark">Jeanette Harmon</p>
              <p className="designation dark">Verified Graduate</p>
            </div>
          </div>
          {/* Review */}
          <div className="review dark">
            <h4>An overall wonderful and rewarding experience</h4>
            <p>“ Thank you for the wonderful experience! I now have a job I really enjoy... </p>
          </div>
        </div>
        {/* Testimonial 5 */}
        <div className="div5 eachdiv">
          {/* User Details */}
          <div className="userdetails">
            <div className="imgbox">
              <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt="" />
            </div>
            <div className="detbox">
              <p className="name">Patrick Abrams</p>
              <p className="designation">Verified Graduate</p>
            </div>
          </div>
          {/* Review */}
          <div className="review">
            <h4>Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</h4>
            <p>“ The staff seem genuinely concerned about my progress... </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsGrid;
