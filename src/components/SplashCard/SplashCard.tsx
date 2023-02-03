import { useRef, useState } from "react";
import "./SplashCard.css";

export const SplashCard = () => {
  const flipRef = useRef<HTMLButtonElement | null>(null);
  const flipInnerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const [isFlipped, setIsFlipped] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleMouseMove: React.MouseEventHandler = (e) => {
    if (!flipRef.current || !glowRef.current) {
      return;
    }

    const bounds = flipRef.current.getBoundingClientRect();

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    flipRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${-center.y / 100},
        ${center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    glowRef.current.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * (isFlipped ? -2 : 2) + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        rgba(255,255,255,.2),
        transparent
      )
    `;
  };

  const handleClick = () => {
    if (!flipRef.current || !flipInnerRef.current) {
      return;
    }
    setIsFlipped(true);
    flipInnerRef.current.style.transform = `rotateY(180deg)`;
    flipRef.current.style.cursor = "default";
  };

  const handleMouseLeave = () => {
    if (!flipRef.current || !glowRef.current) {
      return;
    }
    flipRef.current.style.transform = "";
    flipRef.current.style.background = "transparent";
    glowRef.current.style.backgroundImage = "";
  };

  return (
    <button
      className="flip"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      ref={flipRef}
    >
      <div className="flip-inner" ref={flipInnerRef}>
        <div className="card-front">
          <div
            className="card-front-content"
            style={{ backgroundImage: "url(/images/blue.png)" }}
          >
            <div>
              <div className="card-front-header">
                <div>Floris</div>
                <div>
                  <span className="hp">HP</span>100
                  <img
                    className="js"
                    src="/images/js.webp"
                    alt="JavaScript icon"
                  />
                </div>
              </div>
              <div className="card-front-image">
                <div
                  className="card-front-image-inner"
                  style={{ backgroundImage: "url(/images/floris.jpg)" }}
                ></div>
              </div>
              <div className="subtitle-container">
                <div className="subtitle">
                  Senior Frontend Developer. Length: 6'1", Weight: 163lbs.
                </div>
              </div>
              <div className="card-front-skills">
                <div className="skill">
                  <div className="skill-header">
                    <div className="skill-icons">
                      <img
                        className="skill-icon"
                        src="/images/star.png"
                        alt="Star icon"
                      />
                      <img
                        className="skill-icon"
                        src="/images/star.png"
                        alt="Star icon"
                      />
                    </div>
                    <div className="skill-name">Clean Code</div>
                    <div className="skill-score">100</div>
                  </div>
                  <div className="skill-description">
                    This developer doesn't repeat himself, yet makes sure to
                    avoid hasty abstractions.
                  </div>
                </div>

                <div className="skill">
                  <div className="skill-header">
                    <div className="skill-icons">
                      <img
                        className="skill-icon"
                        src="/images/lightning.png"
                        alt="Star icon"
                      />
                    </div>
                    <div className="skill-name">TypeScript Wizard</div>
                    <div className="skill-score">20</div>
                  </div>
                  <div className="skill-description">
                    Any type error thrown at this developer will be dealt with
                    at compile time.
                  </div>
                </div>
              </div>
              <div className="bottom-text">
                Floris is known to use a mean side / back spin serve in ping
                pong. Bring your A-game!
              </div>
            </div>

            <div className="card-front-footer">
              <div className="illustration">Illus. R. Meinema</div>
              <div>© 2022 - {currentYear} Solide Software</div>
              <div>1/104 ★</div>
            </div>
          </div>
        </div>
        <div className="card-back">
          <div
            className="card-back-content"
            style={{ backgroundImage: "url(/images/background-back.jpeg)" }}
          >
            <svg className="codemon" viewBox="0 0 500 500">
              <path
                id="curve"
                d="M73.2,198.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
              />
              <text width="500">
                <textPath xlinkHref="#curve">CodéMon</textPath>
              </text>
            </svg>
            <div className="codemon-logo">?</div>
            <svg className="codemon flipped" viewBox="0 0 500 500">
              <path
                id="curve"
                d="M73.2,198.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
              />
              <text width="500">
                <textPath xlinkHref="#curve">CodéMon</textPath>
              </text>
            </svg>
          </div>
        </div>
        <div className="glow" ref={glowRef}></div>
      </div>
    </button>
  );
};
