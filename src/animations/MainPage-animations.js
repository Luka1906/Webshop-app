
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
}

