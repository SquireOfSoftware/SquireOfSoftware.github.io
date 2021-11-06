const content = {
  github: {
    thumbnail: {
      link: "https://github.com/SquireOfSoftware",
      title: "Main Github page",
      blurb: "For seeing what I have done outside of work.",
      image: "./stars_night_sky_base.jpeg"
    },
    pages: {
      content: [
        {
          type: "text",
          content: "hello world"
        }
      ]
    }
  },
  orion: {
    thumbnail: {
      link: "https://github.com/SquireOfSoftware/Orion",
      title: "Orion",
      blurb: "An Autonomous Drone Flight system. Aiming to make drone flight autonomous via just highlighting key " +
      "checkpoints on an iPad"
    },
    pages: {
      content: [
        {
          type: "text",
          content: "This was a University Project where we had to get a flight system that could automatically " +
          "guide a drone through a given path set by a person and take photos of its journey as it flew around."
        },
        {
          type: "text",
          content: "We built this Python flight system around the ROS (Robot Operating System) framework with the " +
          "Django ORM framework to help map these concepts into Python objects."
        }
      ]
    }
  }
}

export default content;