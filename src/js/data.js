/* Create a Project Data type object */
const ProjectData = (title, title_sub, date, tagline, description, images, url, accent_class) => {
   return {
      title: title,
      title_sub: title_sub,
      date: date,
      tagline: tagline,
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
      "The rise in automation in America's industries comes both benefits and concerns. The question we ask the 2020 presidential candidates is: 'What will you do about the growing adoption of automation and artificial intelligence that will displace millions of workers?'\n\nTeam members: Raymond Wang, Benjamin Wong, and Arvinder Dhillon from Franklin High School in Elk Grove",
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
      "The Yunjing Deskmat is an original deskmat designed in-house by graphics designer Jun Huang for Keebs Club at UCI.\n\nThis motion graphics advertisement serves as a way to entice potential buyers to purchase the deskmat by giving important details like various colorways and the buy-by date in a succinct, entertaining format.",
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
      "This playlist includes several highlight videos created from original gameplay, enhanced with a multitude of special effects to aid the user experience.",
      [
         "imgs/val/val_1.webp",
         "imgs/val/val_2.webp",
         "imgs/val/val_3.webp",
      ],
      "https://www.youtube.com/watch?v=hq_iTELYhdo&list=PLtY2OxYBVyE9p_auu92U46V8DlDSEar5J&ab_channel=chiyeon",
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
         "HOSHIZORA is a short film detailing the construction of a custom mechanical keyboard.\n\nFor as simple as they may seem, mechanical keyboards became a great point of fascination for many in the hobby, with incredible levels of depth one would never expect to come out of simply building a typing machine.\n\nThis short film captures most of the process of building a high end keyboard, ending with a high-fidelity sound test.",
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
      "Powerlifting meets are hectic events, filled with all kinds of energy and hype.\n\nThis video details powerlifter Miles Nguyen's lifts at Socal Powerlifting's Thanksgiving Throwdown meet, highlighting his immensely difficult and intense three attempts at each of the primary lifts: Squat, Bench, and Deadlift.\n\nThe video implements special effects and motion graphics to add to the intensity of the overall experience.",
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
      "For those in the hobby, an important part of custom mechanical keyboards is the sound it produces when typed on. Eventually, creating these 'Sound Tests' of keyboards became a popular way to showcase builds. \n\nThese sound tests aim to be as high fidelity as possible in terms of audio and video capture.",
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
      "This video was created as a social media advertisement for the Powerlifting Club at UCI.\n\nAn important part of running a club is enticing new members to join. This advertisement aims to be an integral component of that process, by exposing those curious on social media to powerlifting.",
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
      "The premise of a game jam is as follows: Create a game in as little time as specified, perhaps following certain restrictions.\n\nFor the Global Game Jam, participating UCI VGDC students were tasked with creating an entire game nearly from scratch over just a weekend. This insurmountable task is one filled with challenges and fun.\n\nThis social media video aims to capture those feelings and record them for everyone to view and reflect on.",
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