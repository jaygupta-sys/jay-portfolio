import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    const cleanupFns: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      let rafId: number | null = null;
      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;
      let isHovered = false;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        if (isHovered || Math.abs(mouseX - currentX) > 0.1 || Math.abs(mouseY - currentY) > 0.1) {
          rafId = requestAnimationFrame(updatePosition);
        } else {
          rafId = null;
        }
      };

      const onMouseMove = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }

        if (!rafId) {
          rafId = requestAnimationFrame(updatePosition);
        }
      };

      const onMouseEnter = () => {
        isHovered = true;
      };

      const onMouseLeave = () => {
        isHovered = false;
        const rect = elem.getBoundingClientRect();
        mouseX = rect.width / 2;
        mouseY = rect.height / 2;
        if (!rafId) {
          rafId = requestAnimationFrame(updatePosition);
        }
      };

      elem.addEventListener("mousemove", onMouseMove);
      elem.addEventListener("mouseenter", onMouseEnter);
      elem.addEventListener("mouseleave", onMouseLeave);

      cleanupFns.push(() => {
        if (rafId) cancelAnimationFrame(rafId);
        elem.removeEventListener("mousemove", onMouseMove);
        elem.removeEventListener("mouseenter", onMouseEnter);
        elem.removeEventListener("mouseleave", onMouseLeave);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com" target="_blank">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a className="resume-button" href="mailto:jaynirala82@gmail.com?subject=Resume%20Request" data-cursor="disable">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
