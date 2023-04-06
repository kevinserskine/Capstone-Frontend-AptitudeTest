export const NAV_HEADINGS = ['Home', 'Postings', 'Create a posting', 'Logout', 'Login']
export const carouselResponsiveValues = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  export const getDateDistance = (date) => {
    const today = new Date();
    const datePosted = new Date(date);
    const diffTime = Math.abs(today - datePosted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
    if(diffDays === 1){
      return 'Today';
    }
    else if(diffDays === 2){
      return 'Yesterday';
    }
    else if(diffDays < 7){
      return diffDays + ' days ago';
    }
    else if(diffDays < 30){
      var diffWeeks = Math.floor(diffDays/7);
      if(diffWeeks === 1){
        return '1 week ago';
      }
      return Math.floor(diffDays/7) + ' weeks ago';
    }
    else if(diffDays < 365){
      return Math.floor(diffDays/30) + ' months ago';
    }
    else{
      return Math.floor(diffDays/365) + ' years ago';
    }
  }