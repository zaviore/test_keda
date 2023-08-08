import React, { useRef } from "react";
import NavbarModule from "../../component/modules/navbar";
import HeroBannerModules from "../../component/modules/hero-banner";
import AboutUSModules from "../../component/modules/about-us";
import PricingModules from "../../component/modules/pricing";
import ContactModule from "../../component/modules/contact";
function LandingIndex() {
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const pricingSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  return (
    <div>
      <NavbarModule ref={homeSectionRef} />
      <div ref={homeSectionRef} className='home-section'>
        <HeroBannerModules />
      </div>
      <div ref={aboutSectionRef} className='about-section'>
        <AboutUSModules />
      </div>
      <div ref={pricingSectionRef} className='pricing-section'>
        <PricingModules />
      </div>
      <div ref={contactSectionRef} className='contact-section'>
        <ContactModule />
      </div>
    </div>
  );
}

export default LandingIndex;
