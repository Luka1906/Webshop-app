export const orderSuccessAnimation =  {
    hidden: {
        y: "-100vh",
        opacity: 0,
        scale:0.8
      },
      visible: {
        y: "0vh",
        opacity:1,
        scale:1,
        transition: {
            type: "spring",
            bounce: 0.6,   
            
        }
      }
};


export const resetSuccessAnimation = {
  hidden: {
 
    opacity: 0,
    scale:0.8
  },
  visible: {
    scale:1,
    opacity:1,
    transition: {
      duration:0.2
    }
  }
}