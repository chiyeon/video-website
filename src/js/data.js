/* Create a Project Data type object */
const ProjectData = (title, title_sub, date, description, images, url, accent_class) => {
   return {
      title: title,
      title_sub: title_sub,
      date: date,
      description: description,
      images: images,
      url: url,
      accent_class: accent_class,
   }
}

const mograph_projects_data = [
   ProjectData(
      "AUTOMATION",
      "Automation & the Industry",
      "2020",
      "A documentary detailing the rise of automation in the workforce.",
      [
         "imgs/automation/automation_1.webp",
         "imgs/automation/automation_2.webp",
         "imgs/automation/automation_3.webp",
         "imgs/automation/automation_4.webp",
      ],
      "https://youtu.be/yn8qQTt-bO8",
      "splash"
   ),
   ProjectData(
      "YUNJING",
      "Keebsclub at UCI Yunjing Ad",
      "2022",
      "A social media advertisement for the Yunjing deskmat, designed in-house by the Keebs Club at the University of California.",
      [
         "imgs/keebsclub/yunjing_1.webp",
         "imgs/keebsclub/yunjing_2.webp",
         "imgs/keebsclub/yunjing_3.webp",
      ],
      "https://youtube.com/shorts/6jNj_kidMKo",
      "left mobile"
   ),
   ProjectData(
      "VALORANT",
      "Valorant Montages",
      "2021-2023",
      "A series of video game montages combining quick gameplay with visual effects and motion graphics.",
      [
         "imgs/val/val_1.webp",
         "imgs/val/val_2.webp",
         "imgs/val/val_3.webp",
      ],
      "https://youtube.com/shorts/6jNj_kidMKo",
      "right"
   ),
]

/* contains all data for projects, used to render dom elements */
const film_projects_data = [
   ProjectData(
      "HOSHIZORA",
      "Keyboard Build Video",
      "2023",
      "A carefully shot, visual & auditory experience.",
      [
         "imgs/hoshi/hoshi_1.webp",
         "imgs/hoshi/hoshi_2.webp",
         "imgs/hoshi/hoshi_3.webp",
      ],
      "https://youtu.be/kjGSr2NMFNc",
      "splash"
   ),
   ProjectData(
      "MEET RECAP",
      "Miles N. Meet Recap",
      "2022",
      "The recap for Miles Nguyen's performance at Socal Powerlifting's Thanksgiving Throwdown meet.",
      [
         "imgs/pl_highlight/pl_1.webp",
         "imgs/pl_highlight/pl_2.webp",
         "imgs/pl_highlight/pl_3.webp",
         "imgs/pl_highlight/pl_4.webp",
         "imgs/pl_highlight/pl_5.webp",
      ],
      "https://youtu.be/xE0yMxPyy3c",
      "left mobile extra"
   ),
   ProjectData(
      "SOUND TEST",
      "Keyboard Sound Tests",
      "2023",
      "A myriad of high fidelity keyboard sound tests, with a wide arrange of builds recorded.",
      [
         "imgs/sound_tests/neko.webp",
         "imgs/sound_tests/primrose.webp",
         "imgs/sound_tests/ciel.webp",
         "imgs/sound_tests/basketweave.webp",
      ],
      "https://www.youtube.com/watch?v=UL29yHQWmHo&list=PLtY2OxYBVyE9MlJ8YQu98vzIh_JBJUGjP&index=2&ab_channel=chiyeon",
      "right"
   ),
   ProjectData(
      "POWERLIFTING",
      "Powerlifting Club at UCI",
      "2022",
      "An advertisement for the Powerlifting Club at the Universty of California Irvine.",
      [
         "imgs/pl_socal/socal_1.webp",
         "imgs/pl_socal/socal_2.webp",
         "imgs/pl_socal/socal_3.webp",
         "imgs/pl_socal/socal_4.webp",
      ],
      "https://youtu.be/0B3FwWkPBG8",
      "left mobile"
   ),
   ProjectData(
      "VGDC GGJ",
      "VGDC at UCI's Global Game Jam",
      "2023",
      "A brief highlight of the global game jam entries by the Video Game Development Club at the University of California Irvine.",
      [
         "imgs/vgdc/ggj_1.webp",
         "imgs/vgdc/ggj_2.webp",
         "imgs/vgdc/ggj_3.webp",
      ],
      "https://youtube.com/shorts/0VKxQXojxXI",
      "right mobile"
   ),
]

/*
export {
   film_projects_data,
   mograph_projects_data
}
*/