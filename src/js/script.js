//import { mograph_projects_data, film_projects_data } from "./data.js"

/* helper functions */

/* changes our current page */
function set_page(e, page) {
   if (page in pages) page_view.innerHTML = pages[page]
   else page_view.innerHTML = pages["about"] // TODO change to about
   
   /*window.history.pushState(page, page, "/" + page)
   localStorage.setItem("page", page)*/

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
register_template("About", "about-page")
create_page_from_data("film", film_projects_data)
create_page_from_data("motiongraphics", mograph_projects_data)
create_page_from_template("about", "About")

//let page = localStorage.getItem("page")
//let target = page ? page : "film"
let target = "film"
set_page(document.getElementById(target), target)