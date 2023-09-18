import { React } from "react";
import { motion } from "framer-motion";

const IntroductionText = ({ text, styling }) => {
  return <span style={styling}> {text}</span>;
};

const GoalCards = ({ goalText }) => {
  return <div className="goal-card">{goalText}</div>;
};

const GoalsSection = () => {
  return (
    <div className="goals-wrapper">
      <GoalCards goalText="Build a software product I own and maintain with a team of engineers, designers, researchers, etc." />
      <GoalCards
        goalText="Create an organization that not only teaches code to students from
        underserved areas, but that also excites them about building software
        products."
      />
      <GoalCards goalText="Complete an Iron Man, 140.6 miles." />
    </div>
  );
};

function Introduction() {
  const mainFunctionStyling = { marginLeft: "10px" };

  const sentenceStyling = {
    color: "rgb(255,255,255, .65)",
    fontSize: "18px",
    lineHeight: "25px",
    marginTop: "20px",
    marginLeft: "px",
    maxWidth: "60vw",
  };
  return (
    <div style={{ width: "100%" }}>
      <div className="main-function-wrapper">
        <span style={{ ...mainFunctionStyling, color: "#F049FC" }}>
          if&nbsp;
        </span>
        <span style={{ ...mainFunctionStyling, color: "#5BC0BE" }}>
          __name__&nbsp;
        </span>
        <span style={{ ...mainFunctionStyling, color: "lightgrey" }}>
          ==&nbsp;
        </span>
        <span style={{ ...mainFunctionStyling, color: "#F49D37" }}>
          __main__&nbsp;
        </span>
        <span
          style={{
            ...mainFunctionStyling,
            color: "lightgrey",
          }}
        >
          :
        </span>
      </div>
      <div className="introduction-container">
        <div className="my-introduction-wrapper">
          <IntroductionText
            text={"Hi world, my name is"}
            styling={{
              color: "rgb(255,255,255,.65)",
              left: "6px",
            }}
          />
          <span style={{ fontSize: "70px" }}>Richard Lopez</span>
          <IntroductionText
            text="I am a software engineer with a curious mind who enjoys learning how
        things work. I'm the first in my family to graduate college, but the
        last to become an entrepreneur (I am working on changing this)."
            styling={{
              ...sentenceStyling,
              marginTop: "25px",
            }}
          />
          <IntroductionText
            text="I found my passion for code in college, when I took a gamble
        and changed my major from Political Science & Economics to Computer
        Science before the start of my 3rd year. It was the best decision I ever
        made."
            styling={{ ...sentenceStyling }}
          />
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: [0, 40, 0] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 2,
              delay: 0.5,
            }}
            style={{
              fontSize: "150px",
              opacity: "0.1",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="material-symbols-outlined"
          >
            arrow_downward
          </motion.span>
          <IntroductionText
            text="Some lofty goals in my life include:"
            styling={{
              ...sentenceStyling,
              color: "rgb(255,255,255)",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "100px",
            }}
          />
          <GoalsSection />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
