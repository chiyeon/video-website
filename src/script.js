//import { mograph_projects_data, film_projects_data } from "./data.js"
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

/* all data for motion graphics projects */
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

/* helper functions */

/* changes our current page */
function set_page(e, page) {
   if (page in pages) page_view.innerHTML = pages[page]
   else page_view.innerHTML = pages["home"] // TODO change to home

   window.history.pushState(page, page, "/" + page)
   localStorage.setItem("page", page)

   if(e) {
      if (!global_vars.current_page) {
         e.classList.add("selected")
         global_vars.current_page = e
      } else {
         e.classList.add("selected")
         global_vars.current_page.classList.remove("selected")
         global_vars.current_page = e
      }
   }
}

/* moves in between images */
function next_image(e) {
   let id = e.dataset.id
   let img_ref = global_vars[id]
   img_ref.current++

   if (img_ref.current >= img_ref.images.length) img_ref.current = 0

   document.getElementById(`img-${id}`).src = img_ref.images[img_ref.current]
}

function prev_image(e) {
   let id = e.dataset.id
   let img_ref = global_vars[id]
   img_ref.current--

   if (img_ref.current < 0) img_ref.current = img_ref.images.length - 1

   document.getElementById(`img-${id}`).src = img_ref.images[img_ref.current]
}

/* basic global dictionaries */
var global_vars = {}
var templates = {}
var pages = {}
var page_view = document.getElementById("page-view")

/* registers a template inside the html file, stores */
function register_template(name, id_name) {
   let template_framework = document.getElementById(id_name).innerHTML
   templates[name] = '`' + template_framework + '`'
}

/* creates an instance of a registered template */
function create_from_template(name, data, id) {
   let new_node
   let image_url
   if (name == "Project") {
      // this small lil fix is necessary! prevents GET errors from wierd things in template
      image_url = `hi" src="${data.images[0]}`
      global_vars[id] = {
         images: data.images,
         current: 0
      }
   }

   new_node = eval(templates[name])
   
   return new_node
}

/* create an innerHTML string given an array of ProjectData */
function create_page_from_data(page_name, data) {
   let page = ""

   data.forEach(p => { page += create_from_template("Project", p, page_name + page.length)})

   pages[page_name] = page
}

function create_page_from_template(page_name, template_name) {
   pages[page_name] = create_from_template(template_name, {}, page_name)
}

/* register our project template & create our pages, then set default page */
register_template("Project", "project-template")
register_template("Home", "home-page")
create_page_from_data("film", film_projects_data)
create_page_from_data("motiongraphics", mograph_projects_data)
create_page_from_template("home", "Home")

let page = localStorage.getItem("page")
let target = page ? page : "film"
set_page(document.getElementById(target), target)