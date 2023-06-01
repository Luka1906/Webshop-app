export const cartAnimation =  {
    initial: {
        opacity:0,
        scale:0.6
    },
    animate: {
        opacity:1,
        scale:1.35,
        transition: {
            duration:0.2
        }
    }
};

export const popUpCartToggle= {
    hidden: {
   
        x: "40vw",
        y: "0",
       
    },
    visible: {
      
        x:0,
        y: "0",
        transition: {
            duration: 0.25,
            ease: "easeOut"
          
        }
    },
    exit: {
  
        x: "40vw",
        y:"0",
        transition: {
            duration:0.25,
            ease: "easeOut"
        }
       
        
    }
}
