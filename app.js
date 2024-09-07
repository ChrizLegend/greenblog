// year logic
document.querySelector(".year").innerHTML = new Date().getFullYear()

// nav logic

// target the menu btn
const menu_btn = document.querySelector(".menu-btn")
const navbar = document.querySelector("nav")
const post_form =  document.querySelector(".post-form")
const dark_theme = document.querySelector("nav")
const dark_postform = document.querySelector(".post-form")
const dark_postcard = document.querySelector(".post-card")
const dark_footer = document.querySelector("footer")
const dark_footerp = document.querySelector(".footer-p")
const theme_ball = document.querySelector(".theme-ball")


// add click event listener to it
menu_btn.addEventListener("click", function(){
       menu_btn.classList.toggle("close-menu") 
       navbar.classList.toggle("show-nav")
       
})

// add click event listner to it
dark_theme.addEventListener("click", function(){
    theme_ball.classList.toggle("move-ball")
    dark_footer.classList.toggle("dark-theme")
    dark_theme.classList.toggle("dark-theme")
    dark_footerp.classList.toggle("dark-theme")
    dark_postform.classList.toggle("dark-theme")
    dark_postcard.classList.toggle("dark-theme")
    

})


// logic to display the post form
const post_btn = document.querySelector(".post-btn")

// add click event listener to it
post_btn.addEventListener("click", function(){
        // target the post form and display it
       post_form.style.display = "flex"
})


// logic to close the post form
document.querySelector(".close-form").addEventListener("click", function(){
      // target the post form and close it
        post_form.style.display = "none"
})


// logic to upload and preview image

// target the file input
let image_url = ""
const file_input = document.querySelector("#uploaded_file")
file_input.addEventListener("change", function(){
          let selected_image = file_input.files[0]
        //   convert the selected image to object url
      image_url =   URL.createObjectURL(selected_image)

      document.querySelector(".image-preview").src = image_url
})

// add event listener of change to it

// logic to add post and display post

post_form.addEventListener("submit", function(event){
    //  prevent default behavior of form reloading the page
    event.preventDefault()

    // validation starts here
 
  // grab username
  let username = document.querySelector(".username-input").value
  // grab the title
  let title = document.querySelector(".title-input").value

  // grab the post body
  let post_body = document.querySelector(".body-text").value

 // check if user enters username
 if(username === ""){
      alert("Ooops! pls enter your username before posting")
 }else{
       if(title === ""){
          alert("Ooops! pls enter the title of your post ")
       }else{
             if(post_body === ""){
                alert("Ooops! pls enter the body of your post")
             }else{
                   if(document.querySelector("#uploaded_file").value === ""){
                        alert("Ooops! upload an image for your post")
                   }else{
                          // post your post here
                           let post = `<div class="post-card">
                        <img src=${image_url} alt="" class="post-image" width="100">
                        <p>
                            <b>${title}</b>
                            <span>
                                  ${post_body}
                            </span>
                            <button>See more...</button>
                           <small class="username-date">
                                <i class="username">
                                   ${username}
                                </i>

                                <i class="date">
                                     ${new Date().toLocaleString()}
                                </i>
                           </small>

                           <small class="social-widgets">
                                 <span>
                                      <img src="./images/like.png" alt="" width="15"><small>25</small>
                                 </span>

                                <span>
                                    <img src="./images/love.png" alt="" width="15"><small>10</small>
                                </span>

                                <span>
                                    <img src="./images/comment.png" alt="" width="15"><small>12</small>
                                </span>

                                <span>
                                    <img src="./images/share.png" alt="" width="15"><small>50</small>
                                </span>
                                
                           </small>
                        
                        </p>

                    </div>
`

    document.querySelector(".posts-container").innerHTML += post
                   }
             }
       }
 }

     post_form.style.display = "none"

})