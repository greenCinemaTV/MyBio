const data = fetch('https://github.com/greenCinemaTV/BioApi/blob/main/db.json?raw=true').then(res => res.json()).then(res => console.log(res));
console.log(data)






window.addEventListener("scroll", function () {
    var header = document.querySelector(".main-header");
    var pointElement = document.querySelector(".point");
    var pointPosition = pointElement.getBoundingClientRect().top;
  
    if (pointPosition <= 0) {
      header.style.top = "0px";
    } else {
      header.style.top = "-100px";
    }
  });
  
  
  
  // Toggle Menu Display
  const menuBtn = document.getElementById("menu-btn");
  const menuContent = document.getElementById("menu-content");
  const menu = document.getElementById("menu_btn");
  
  if (menuBtn && menuContent) {
    menuBtn.addEventListener("click", function () {
      menuContent.classList.toggle("hidden");
      menu.classList.toggle("fa-xmark");
    });
    window.onscroll = () => {
      menu.classList.remove("fa-xmark");
      menuContent.classList.remove("hidden");
    };
  }
  
  document.querySelectorAll(".menu-content ul li").forEach((li) => {
    li.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetSection = document.querySelector(targetId);
      const targetPosition = targetSection.offsetTop - 100;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Duration in milliseconds for slower scrolling
      let startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
  
        window.scrollTo(0, run);
  
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    });
  });
  
  const sections = document.querySelectorAll(".container");
  const navLi = document.querySelectorAll(".menu-content  li");
  
  const observerOptions = {
    threshold: 0.6, // Trigger when 60% of the section is visible
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLi.forEach((li) => {
          li.classList.remove("active");
          if (li.getAttribute("data-target") === `#${entry.target.id}`) {
            li.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  // Page content creator
  const pageData = async function (title) {
    const data = {
      checkApi: "",
      theme: "dark",
      body: {
        bodyImg: "../img/bg2.png",
        webIcon: "../img/webIcon.png",
        newTitle: "Bio | GreenCinema TV",
      },
      menu: {
        title: "GreenCinemaTV",
        Imgsrc:
          "https://yt3.googleusercontent.com/bxduVtFUtzKPay-rw86zkFeBi5LKPnROawW3NsFTsg1nrPYbGs42DpPJwWs9vg80-25pPuqcyw=s900-c-k-c0x00ffffff-no-rj",
        hrefSrc: "https://www.youtube.com/@GreenCinemaTV",
      },
      main: {
        header: {
          title: "GreenCinema TV",
          subtitle: "Film analyzer | Content Creator | Editor",
          bacgroundImg: "../img/bg2.png",
          img: "https://yt3.googleusercontent.com/bxduVtFUtzKPay-rw86zkFeBi5LKPnROawW3NsFTsg1nrPYbGs42DpPJwWs9vg80-25pPuqcyw=s900-c-k-c0x00ffffff-no-rj",
          description:
            "Hi, I'm a passionate developer and content creator. Follow me on my journey across different platforms.",
        },
        socialLinks: {
          title: "Find Me On:",
          links: [
            {
              id: 1,
              name: "Instagram",
              listNumber: 3,
              url: "https://instagram.com/yourprofile",
              icon: "fab fa-instagram",
              actions: true,
            },
            {
              id: 2,
              listNumber: 4,
              name: "TikTok",
              url: "https://tiktok.com/@yourprofile",
              icon: "fab fa-tiktok",
              actions: true,
            },
            {
              id: 3,
              listNumber: 5,
              name: "Twitter",
              url: "https://twitter.com/yourprofile",
              icon: "fab fa-twitter",
              actions: true,
            },
            {
              id: 4,
              listNumber: 1,
              name: "YouTube",
              url: "https://youtube.com/yourprofile",
              icon: "fab fa-youtube",
              actions: true,
            },
            {
              id: 5,
              listNumber: 6,
              name: "Discord",
              url: "https://discord.com/yourprofile",
              icon: "fab fa-discord",
              actions: true,
            },
            {
              id: 6,
              listNumber: 2,
              name: "LinkedIn",
              url: "https://linkedin.com/yourprofile",
              icon: "fab fa-linkedin",
              actions: true,
            },
            {
              id: 7,
              listNumber: 7,
              name: "Twitch",
              url: "https://twitch.com/yourprofile",
              icon: "fab fa-twitch",
              actions: true,
            },
          ],
        },
        showonPage: true,
      },
      about: {
        title: "About Me",
        description:
          "Welcome to GreenCinema TV! At GreenCinema, we're passionate about exploring the most captivating moments in anime, TV shows, and movies. Whether it's the intense battles of the anime world or the intricate plots of epic series like Game of Thrones and House of the Dragon, we bring you reactions, insights, and analysis to enrich your viewing experience. Join us as we dive deep into the characters, stories, and emotions that make these visual masterpieces so unforgettable. Stay tuned for fresh content and let’s keep the conversation alive in the world of entertainment!",
        showonPage: false,
      },
      content: {
        title: "My Top Content",
        videos: {
          orderBy: "date",
          count: 6,
          channelId: "UCVQbS1SnObGNL6irTlqf-nQ",
          api_key: "AIzaSyBAeo8xo5wMYfKPAMXTDi22gMd2DcoRWj4",
        },
        showonPage: true,
      },
      contact: {
        title: "Contact Me",
        description:
          "If you have any questions or comments, feel free to reach out. I'm always happy to hear from you!",
        contactInfo: [
          {
            id: 1,
            name: "Email",
            url: "mailto:usefulplace2024@gmail.com",
            icon: "fas fa-envelope",
            actions: true,
          },
          {
            id: 2,
            name: "Number",
            url: "tel:+3333333333",
            icon: "fas fa-phone",
            actions: false,
          },
        ],
        showonPage: true,
      },
      footer: {
        description: "Copyright @2024 GreenCinema. All Rights Reserved.",
        showonPage: true,
      },
    };
    
  
    return title ? data[title] : data;
  };
  
  async function updateMenuVisibility() {
   
    const data = await pageData("");
    const menuItems = document.querySelectorAll('ul li');
  
    // Loop through each menu item
    menuItems.forEach((menuItem) => {
      // Get the section name from the class (e.g., "main", "about")
      const section = menuItem.className;
  
      // Check if the section is supposed to be visible or hidden
      if (data[section] && data[section].showonPage) {
        menuItem.style.display = 'list-item'; // Show the menu item
      } else {
        menuItem.style.display = 'none'; // Hide the menu item
      }
    });
  }
  async function setBackgroundImage() {
    try {
        const data = await pageData("body");
  
        const img = new Image();
  
        const loadImage = new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = (error) => reject(new Error(`Failed to load image: ${img.src}`));
        });
  
        img.src = data.bodyImg;
  
        await loadImage;
  
        document.body.style.backgroundImage = `url('${data.bodyImg}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundAttachment = "fixed";
        
    } catch (error) {
        console.error("Failed to load the background image", error);
    }
  }
  async function changeFavicon() {
    const {webIcon} = await pageData("body");
    // Find the <link> element with rel="icon"
    let favicon = document.getElementById("favicon");
    
    // If the favicon doesn't exist, create it
    if (!favicon) {
        favicon = document.createElement("link");
        favicon.id = "favicon";
        favicon.rel = "icon";
        document.head.appendChild(favicon);
    }
  
    // Set the new favicon URL
    favicon.href = webIcon;
  }
  // Page Title changer
  async function updateTitle() {
    const {newTitle}= await pageData("body");
    document.title = newTitle;
  }
  // theme maker
  const ThemeName = async function() {
    const theme = await pageData("theme");
    return theme || 'dark';  // Default to 'dark' if no theme is found
  }
  
  async function applyTheme() {
    const themeName = await ThemeName();
  
    console.log("Applying theme: ", themeName); // Debugging
  
    // Remove all theme-related classes before adding the new theme
    document.documentElement.classList.remove('dark-theme', 'light-theme', 'green-theme');
  
    // Add the new theme class
    if (themeName) {
      document.documentElement.classList.add(`${themeName}-theme`);
    }
  
    // Check applied classes (for debugging)
  }
  
  
  
  const videoData = async function () {
    const Data = await pageData("content");
    const { orderBy, count, channelId, api_key } = Data.videos;
    const videos = {
      kind: "youtube#searchListResponse",
      etag: "h7Io7Zm0bUXYsZECH4dn2lOUZLQ",
      nextPageToken: "CAQQAA",
      regionCode: "AZ",
      pageInfo: {
        totalResults: 63,
        resultsPerPage: 4,
      },
      items: [
        {
          kind: "youtube#searchResult",
          etag: "hrohmJpclHer4WtJzKnvRzmdO_A",
          id: {
            kind: "youtube#video",
            videoId: "0P77Pz6Cv_A",
          },
          snippet: {
            publishedAt: "2024-05-05T15:59:08Z",
            channelId: "UCVQbS1SnObGNL6irTlqf-nQ",
            title: "The God of Shinobi |",
            description:
              'Witness the legendary prowess of Hashirama Senju, the unparalleled "God of Shinobi," as he faces off against the formidable duo ...',
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/0P77Pz6Cv_A/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/0P77Pz6Cv_A/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/0P77Pz6Cv_A/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "GreenCinema TV",
            liveBroadcastContent: "none",
            publishTime: "2024-05-05T15:59:08Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "oHbg0wzwcRNTQ1MszGCDCAGJiFA",
          id: {
            kind: "youtube#video",
            videoId: "_dj1_teTmBc",
          },
          snippet: {
            publishedAt: "2024-05-01T18:08:39Z",
            channelId: "UCVQbS1SnObGNL6irTlqf-nQ",
            title: "Jon Snow and Drogon&#39;s Epic Encounter |",
            description:
              "In this thrilling video, witness the momentous meeting between two of the most iconic characters in Game of Thrones history: Jon ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/_dj1_teTmBc/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/_dj1_teTmBc/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/_dj1_teTmBc/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "GreenCinema TV",
            liveBroadcastContent: "none",
            publishTime: "2024-05-01T18:08:39Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "_Tb9RS8j1ehf0txy5vd-hIvm5IY",
          id: {
            kind: "youtube#video",
            videoId: "3h0DVp0lJEE",
          },
          snippet: {
            publishedAt: "2024-04-17T15:17:47Z",
            channelId: "UCVQbS1SnObGNL6irTlqf-nQ",
            title: "Eren Yeager&#39;s Iconic Walks",
            description:
              "Dive into the epic world of Attack on Titan with our YouTube Shorts series, showcasing Eren Yeager's most memorable walks ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/3h0DVp0lJEE/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/3h0DVp0lJEE/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/3h0DVp0lJEE/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "GreenCinema TV",
            liveBroadcastContent: "none",
            publishTime: "2024-04-17T15:17:47Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "PtlCLzuajiumg0O6zBT5aUvdTj8",
          id: {
            kind: "youtube#video",
            videoId: "aSHmi2Ealso",
          },
          snippet: {
            publishedAt: "2024-04-28T14:14:45Z",
            channelId: "UCVQbS1SnObGNL6irTlqf-nQ",
            title:
              "What if Obito is in the &quot;Attack on Titan&quot; Universe |",
            description:
              "Step into the depths of Obito's sorrow as he confronts the devastating loss of Rin, his dear friend and love. Set against the ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/aSHmi2Ealso/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/aSHmi2Ealso/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/aSHmi2Ealso/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "GreenCinema TV",
            liveBroadcastContent: "none",
            publishTime: "2024-04-28T14:14:45Z",
          },
        },
      ],
    };
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${count}&order=${orderBy}&key=${api_key}%20`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const temp = data.items.map((a) => {
        return {
          title: a.snippet.title,
          url: `https://www.youtube.com/watch?v=${a.id.videoId}`,
          imgUrl: a.snippet.thumbnails.high.url,
          type: a.snippet.description,
        };
      });
  
      return temp;
    } catch (error) {
      console.error("Failed to fetch YouTube data:", error);
      const temp2 = videos.items.map((a) => {
        return {
          title: a.snippet.title,
          url: `https://www.youtube.com/watch?v=${a.id.videoId}`,
          imgUrl: a.snippet.thumbnails.high.url,
          type: a.snippet.description,
        };
      });
      return temp2;
    }
  };
  
  async function menuMaker() {
    const menu = await pageData("menu");
  
    // Set the title, image source, and link href dynamically using querySelector
    document.querySelector(".header-title").innerText = menu.title;
    document.querySelector(".header-pic").src = menu.Imgsrc;
    document.querySelector(".header-profile").parentElement.href = menu.hrefSrc;
    document.querySelector(".header-profile").parentElement.target = "_blank";
  }
  
  async function createMainContent() {
    // data
    const main = await pageData("main");
  
  const mainContainer = document.querySelector("#main");
    
    
    
  
    // Create header section
    const header = document.createElement("header");
    header.id = "after-header";
  
    const headerBg = document.createElement("div");
    headerBg.classList.add("header-bg");
  
    // Inject CSS for ::before pseudo-element dynamically
    if (main.header.bacgroundImg) {
      const style = document.createElement("style");
      style.textContent = `
      .header-bg::before {
        background: url('${main.header.bacgroundImg}') no-repeat center center / cover;
      }
    `;
      document.head.appendChild(style);
    }
  
    const profileImg = document.createElement("img");
    profileImg.src = main.header.img;
    profileImg.alt = "Profile Picture";
    profileImg.classList.add("profile-pic");
  
    const h1 = document.createElement("h1");
    h1.textContent = main.header.title;
  
    const pSubtitle = document.createElement("p");
    pSubtitle.textContent = main.header.subtitle;
    pSubtitle.classList.add("point");
  
    headerBg.appendChild(profileImg);
    headerBg.appendChild(h1);
    headerBg.appendChild(pSubtitle);
    header.appendChild(headerBg);
    mainContainer.appendChild(header);
  
    // Create bio section
    const bioSection = document.createElement("section");
    bioSection.classList.add("bio");
  
    const bioParagraph = document.createElement("p");
    bioParagraph.textContent = main.header.description;
  
    bioSection.appendChild(bioParagraph);
    mainContainer.appendChild(bioSection);
  
    // Create social links section
    const socialSection = document.createElement("section");
    socialSection.classList.add("social-links");
  
    const socialTitle = document.createElement("h2");
    socialTitle.textContent = main.socialLinks.title;
  
    const ul = document.createElement("ul");
  
    main.socialLinks.links
      .sort((a, b) => a.listNumber - b.listNumber)
      .forEach((link) => {
        if (link.actions) {
          const li = document.createElement("li");
  
          const a = document.createElement("a");
          a.href = link.url;
          a.target = "_blank";
          a.classList.add(link.name.toLowerCase());
  
          const icon = document.createElement("i");
          icon.className = link.icon;
  
          const linkText = document.createTextNode(` ${link.name}`);
          a.appendChild(icon);
          a.appendChild(linkText);
  
          li.appendChild(a);
          ul.appendChild(li);
        }
      });
  
    socialSection.appendChild(socialTitle);
    socialSection.appendChild(ul);
    mainContainer.appendChild(socialSection);
  }
  
  async function createAboutSection() {
    // Fetching the about section data
    const about = await pageData("about");
  
    // Selecting the about container from the DOM
    const aboutContainer = document.querySelector("#about");
    if(!main.showonPage){
  
      aboutContainer.style.display = "none";
      return
    }
  
    // Creating the "About Me" section and elements
    const aboutSection = document.createElement("section");
    aboutSection.classList.add("about_me");
  
    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = about.title;
  
    const aboutContent = document.createElement("div");
    aboutContent.innerHTML = `Welcome to <a style="text-decoration: none;" href="https://www.youtube.com/@GreenCinemaTV"><strong> GreenCinema TV!</strong></a> ${about.description}`;
  
    // Appending the elements to the about section
    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutContent);
  
    // Adding the about section to the container
    aboutContainer.appendChild(aboutSection);
  }
  
  // Function to create the "My Top Content" section
  async function createContentSection() {
    // Fetch content data (use actual data fetching or static data)
    const content = await pageData("content");
    const videos = await videoData();
  
    // Select the content container
    const contentContainer = document.querySelector("#content .videos");
  
    // Clear the container first if needed
    contentContainer.innerHTML = "";
  
    // Set the section title
    document.querySelector("#content h2").textContent = content.title;
  
    // Loop through each video and create the necessary HTML elements
    videos.forEach((video) => {
      const videoLink = document.createElement("a");
      videoLink.href = video.url;
      videoLink.title = "Click here to watch";
      videoLink.target = "_blank"; // Open in a new tab
  
      const videoContainer = document.createElement("div");
      videoContainer.classList.add("video-container");
  
      const imgBox = document.createElement("div");
      imgBox.classList.add("img_box");
  
      const img = document.createElement("img");
      img.src = video.imgUrl;
      img.alt = "Channel Video Thumbnail";
      img.classList.add("video-thumbnail");
  
      const videoTitle = document.createElement("div");
      videoTitle.classList.add("video-title");
  
      const titleText = document.createElement("p");
      titleText.innerHTML = `Title:<b title="${video.title}" >${video.title.slice(
        0,
        15
      )}...</b>`;
      titleText.title = video.title;
  
      const typeText = document.createElement("p");
      typeText.innerHTML = `${
        video.type.length > 10 ? "Description:" : "Type:"
      }<b>${video.type.slice(0, 11)}...</b>`;
      typeText.title = video.type;
  
      // Append all elements in the correct order
      imgBox.appendChild(img);
      videoTitle.appendChild(titleText);
      videoTitle.appendChild(typeText);
      videoContainer.appendChild(imgBox);
      videoContainer.appendChild(videoTitle);
      videoLink.appendChild(videoContainer);
  
      // Append the entire link container to the content container
      contentContainer.appendChild(videoLink);
    });
  }
  
  // Function to create the "My Contact Info" section
  async function createContactSection() {
    // Fetch contact data (use actual data fetching or static data)
    const contact = await pageData("contact");
  
    // Set the section title and description
    document.querySelector("#contact h2").textContent = contact.title;
    document.querySelector("#contact p").textContent = contact.description;
  
    // Select the contact container
    const contactContainer = document.querySelector("#contact .contact_info ul");
  
    // Clear the container first if needed
    contactContainer.innerHTML = "";
  
    // Create elements for each contact info
    contact.contactInfo.forEach((info) => {
      if(!info.actions)return;
      const listItem = document.createElement("li");
  
      const link = document.createElement("a");
      link.href = info.url;
      link.target = "_blank"; // Open in a new tab
      link.classList.add(info.name.toLowerCase());
  
      const icon = document.createElement("i");
      icon.className = info.icon; // Icon class
  
      const linkText = document.createTextNode(` ${info.name}`);
      link.appendChild(icon);
      link.appendChild(linkText);
  
      listItem.appendChild(link);
      contactContainer.appendChild(listItem);
    });
  }
  
  // footer creator
  
  async function footerMaker() {
    try {
      const footer = await pageData("footer");
      
      const footerContainer = document.querySelector("#footer");
      
      // Check if the footer data exists
      if (footer && footer.description) {
        footerContainer.innerHTML = footer.description;
      } else {
        console.warn("Footer data is missing or not defined.");
        footerContainer.innerHTML = "Copyright © 2024. All Rights Reserved."; // Default message
      }
    } catch (error) {
      console.error("Error fetching footer data:", error);
      document.querySelector("#footer").innerHTML = "Error loading footer information."; // Fallback message
    }
  }
  
  
  window.onload = async function () {
    // Immediately update the favicon, title, and menu visibility
    await Promise.all([
      changeFavicon(),
      updateTitle(),
      updateMenuVisibility()
    ]);
  
    setTimeout(async function () {
      try {
        // Apply the theme before showing content
        await applyTheme();
  
        // Hide loading spinner
        document.getElementById("loading-screen").style.display = "none";
  
        // Show all content sections
        document.querySelectorAll(".container").forEach((container) => {
          container.style.display = "block"; 
        });
  
        // Load additional sections
        await setBackgroundImage();
        await Promise.all([
          menuMaker(),
          createMainContent(),    // Populate main content
          createAboutSection(),    // Populate about section
          createContentSection(),   // Populate top content section
          createContactSection(),   // Populate contact info
          footerMaker()
        ]);
      } catch (error) {
        console.error("An error occurred during page load:", error);
      }
    }, 2000);  // Adjust the delay as needed
  };
  
  
  