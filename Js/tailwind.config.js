tailwind.config = {
    theme: {
      extend: {
        // tailwind code start here
        // all color part start here
        colors: {
          navcolor: "rgba(23, 13, 110, 0.50)",
          menucolor: "#EFF4FA",
          menuhover: "#1BBF00",
          bannerhover: "rgba(105, 97, 196, 0.90)",
          bannerp: "#E6E5F3",
          clientcolor: "#d7d9dc",
          whatcolor: "#F6F5FF",
          whatp: "#6C7D93",
          whatbtn:"#F4F4F5",
          whatcard: "#6B62C5",
          planbg:"#F9F9FB",
          aboutbg:"#F8F8FF",
          footerbg:"#48409C",
        },
        // all color part end here
        // font family start
        fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
            
        },
        // font family end
        // all background images part start
        backgroundImage: {
            bannerimages: "url('images/banner.jpg')",
            whybg: "url('ius-banner.jpg')",
            
        },
        // all background images part end
        // width part start
        maxWidth: {
          containerwidth: "1170px",
        },
        // width part end
        // border-radius start
        borderRadius: {
          whatradius: "20px",
          planradius: "20px",
        }
        // border-radius end
        
        // tailwind code end here
      }
    }
  }