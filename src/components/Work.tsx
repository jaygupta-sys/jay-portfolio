import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Stage & Steel",
    category: "Production E-Commerce Platform",
    tools: "React.js, Checkout & Payment Workflow, Hosting, Domain, Maintenance",
    link: "https://stageandsteel.in",
    image: "/images/placeholder.webp",
  },
  {
    title: "Adi's Cafe & Stays",
    category: "Hospitality & Cafe Website",
    tools: "Web Updates, Digital Management, Meta/Instagram Ads, SEO",
    link: "https://adiscafeandstays.in",
    image: "/images/placeholder.webp",
  },
  {
    title: "Bagecha Rewards",
    category: "Customer Loyalty Web App",
    tools: "Firebase Auth, Firestore Database, Visit Tracking, Reward System",
    link: "https://loyalty.bagechabyadis.in",
    image: "/images/placeholder.webp",
  },
  {
    title: "The Athletic Edge",
    category: "Fitness & Training Platform",
    tools: "Responsive Design, Services & Pricing, Schedules, Enquiry Flow",
    link: "https://athleticedges.in",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    function getTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return 0;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      return Math.max(0, rect.width * box.length - (rectLeft + parentWidth) + padding);
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX() + 200}`,
        scrub: 1,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
      duration: 1,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Selected <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
