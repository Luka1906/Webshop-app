import { spring } from "framer-motion";

export const popUpAnimationStart = {
    hidden: {
        opacity:0,
        y: "100vh",
        x: "-50%",
        scale: 0.8
    },
    visible: {
        opacity:1,
        y:0,
        x: "-50%",
        scale:1,
        transition: {
            duration: 0.22,
          
        }
    },
    exit: {
        opacity: 0,
        y: "100vh",
        x:"-50%",
        scale:0.8,
        transition: {
            duration:0.22
        }
       
        
    }
};

export const movingArrowAnimation = {
  
    hover: {
        scale:1.25,
        transition: {
           repeat: Infinity,
           repeatType: 'reverse',
           duration:0.25

        }
    }
}

export const linksHoverAnimation = {
    linkHover: {
      originX: 0,
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  };

