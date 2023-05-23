
<html>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif;}
body, html {
  height: 100%;
  color: #777;
  line-height: 1.8;
}

/* Create a Parallax Effect */
.bgimg-1, .bgimg-2, .bgimg-3, .bgimg-4 {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* First image (Logo. Full height) */
.bgimg-1 {
  background-image: url('https://images.hdqwalls.com/download/battle-fire-black-rose-dragon-ball-z-4k-5c-1360x768.jpg');
  min-height: 100%;
}

/* Second image (Portfolio) */
.bgimg-2 {
  background-image: url("https://media1.thehungryjpeg.com/thumbs/800_3514316_a597323a737346098a3af9eb91982c4690e79366.jpg");
  min-height: 400px;
}

/* Third image (Contact) */
.bgimg-3 {
  background-image: url("/w3images/parallax3.jpg");
  min-height: 400px;
}
  
/* fourth image (Certificates) */
.bgimg-3 {
  background-image: url("/w3images/parallax3.jpg");
  min-height: 400px;
}

.w3-wide {letter-spacing: 10px;}
.w3-hover-opacity {cursor: pointer;}

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1600px) {
  .bgimg-1, .bgimg-2, .bgimg-3, bgimg-4{
    background-attachment: scroll;
    min-height: 400px;
  }
}
</style>
<body>

<!-- Navbar (sit on top) -->
<div class="w3-top">
  <div class="w3-bar" id="myNavbar">
    <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
      <i class="fa fa-bars"></i>
    </a>
    <a href="#home" class="w3-bar-item w3-button">HOME</a>
    <a href="#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
    <a href="#portfolio" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> PORTFOLIO</a>
    <a href="#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
    <a href="#certificates" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CERTIFICATES</a>
    <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
      <i class="fa fa-search"></i>
    </a>
  </div>

  <!-- Navbar on small screens -->
  <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
    <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
    <a href="#portfolio" class="w3-bar-item w3-button" onclick="toggleFunction()">PORTFOLIO</a>
    <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
    <a href="#certificates" class="w3-bar-item w3-button" onclick="toggleFunction()">CERTIFICATES</a>
    <a href="#" class="w3-bar-item w3-button">SEARCH</a>
  </div>
</div>

<!-- First Parallax Image with Logo Text -->
<div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
  <div class="w3-display-middle" style="white-space:nowrap;">
    <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">MESS</span>
  </div>
</div>

<!-- Container (About Section) -->
<div class="w3-content w3-container w3-padding-64" id="about">
  <h3 class="w3-center">ABOUT ME</h3>
  <p>CU'25</p>
  <div class="w3-row">
    <div class="w3-col m6 w3-center w3-padding-large">
      <p><b><i class="fa fa-user w3-margin-right"></i>Nikkitt Mesiliy</b></p><br>
      <img src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/kanye-west-face-mask_0.jpg" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333">
    </div>

    <!-- Hide this text on small devices -->
    <div class="w3-col m6 w3-hide-small w3-padding-large">
      <p>Welcome to my website :)</p>
    </div>
  </div>
  

<!-- Container (Portfolio Section) -->
<div class="w3-content w3-container w3-padding-64" id="portfolio">
  <h3 class="w3-center">PICTURES CLICKED BY ME</h3>
  <p class="w3-center"><em><br> Click on the images to make them bigger</em></p><br>

  <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) -->
  <div class="w3-row-padding w3-center">
    <div class="w3-col m3">
      <img src="bird.jpg.jpg" width="500" height="300"  onclick="onClick(this)" class="w3-hover-opacity" alt="Bird">
    </div>

    <div class="w3-col m3">
      <img src="ducks.jpg.jpg" width="500" height="300"  onclick="onClick(this)" class="w3-hover-opacity" alt="ducks">
    </div>

    <div class="w3-col m3">
      <img src="ferrari.jpg.jpg" width="500" height="300" onclick="onClick(this)" class="w3-hover-opacity" alt="ferrari">
    </div>

    <div class="w3-col m3">
      <img src="ajmeruni.jpg.jpg" width="500" height="300"  onclick="onClick(this)" class="w3-hover-opacity" alt="ajmer university">
    </div>
  </div>

  <div class="w3-row-padding w3-center w3-section">
    <div class="w3-col m3">
      <img src="ajmerground.jpg.jpg" width="500" height="300"  onclick="onClick(this)" class="w3-hover-opacity" alt="ajmer ground">
    </div>

    <div class="w3-col m3">
      <img src="rubberestate.jpg.jpg" width="500" height="300"  onclick="onClick(this)" class="w3-hover-opacity" alt="rubber estate">
    </div>

    <div class="w3-col m3">
      <img src="mustang.jpg.jpg" width="500" height="300"  onclick="onClick(this)" class="w3-hover-opacity" alt="mustang">
    </div>

    <div class="w3-col m3">
      <img src="temple.jpg.jpg" width="500" height="300"  onclick="onClick(this)" class="w3-hover-opacity" alt="temple">
    </div>
  </div>
  
  <div class="w3-row-padding w3-center w3-section">
    <div class="w3-col m3">
      <img src="lalbaghjapanese.jpg" width="500" height="300"  onclick="onClick(this)" class="w3-hover-opacity" alt="Lal Bagh Garden">
    </div>
    
    <div class="w3-col m3">
      <img src="lalbaghbonsai.jpg" width="500" height="300"  onclick="onClick(this)" class="w3-hover-opacity" alt="Bonsai tree">
    </div>
    
    <div class="w3-col m3">
      <img src="lalbaghsky.jpg" width="500" height="300"  onclick="onClick(this)" class="w3-hover-opacity" alt="Lal Bagh Botanical Garden">
    </div>
    
    <div class="w3-col m3">
      <img src="lalbaghlake.jpg" width="500" height="300"  onclick="onClick(this)" class="w3-hover-opacity" alt="Lake">
    </div>
    <button href="https://vsco.co/nikkitt-/gallery" class="w3-button w3-padding-large w3-light-grey" style="margin-top:64px">LOAD MORE</button>
  </div>
</div>

<!-- Modal for full size images on click-->
<div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
  <span class="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i class="fa fa-remove"></i></span>
  <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
    <img id="img01" class="w3-image">
    <p id="caption" class="w3-opacity w3-large"></p>
  </div>
</div>

<!-- Container (certificate Section) -->
<div class="w3-content w3-container w3-padding-64" id="certificates">
  <h3 class="w3-center">MY CERTIFICATES</h3>
  <p class="w3-center"><em><br> Click on the images to make them bigger</em></p><br>

  <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) -->
  <div class="w3-row-padding w3-center">
    <div class="w3-col m3">
      <img src="IDS DATA SCIENCE CERTIFICATE - IMURGENCE_page-0001.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Bird">
    </div>

    <div class="w3-col m3">
      <img src="MYSQL CERTIFICATE - IMURGENCE_page-0001.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="ducks">
    </div>

    <div class="w3-col m3">
      <img src="TABLEAU CERTIFICATE - IMURGENCE_page-0001.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="ferrari">
    </div>

    <div class="w3-col m3">
      <img src="ethical hacking certification from UDEMY.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="ajmer uni">
    </div>
  </div>
  </div>
</div>

<!-- Modal for full size images on click-->
<div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
  <span class="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i class="fa fa-remove"></i></span>
  <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
    <img id="img01" class="w3-image">
    <p id="caption" class="w3-opacity w3-large"></p>
  </div>
</div>
  
<!-- Third Parallax Image with Portfolio Text (image to add to be shown just before socials) 
<div class="bgimg-3 w3-display-container w3-opacity-min">
  <div class="w3-display-middle">
  <img src="https://images.martechadvisor.com/images/uploads/content_images/shutterstock_296605652_5e5657597ce2e.jpg">
     <span class="w3-xxlarge w3-text-white w3-wide"></span>
  </div>
</div> -->
  

<!-- Container (Contact Section) -->
<div class="w3-content w3-container w3-padding-64" id="contact">

<p><font size = "2" color = "BLACK">Please follow me and like my content on:</font></p>


<html>
<head>
<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 14%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>
</head>
<body>

<div class="row">
  <div class="column">
    <a href="https://www.instagram.com/nikkittmesily"  target=”_blank”
    <img
src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg" alt="Instagram" style="width:40%">
  </a>
  </div>
  <div class="column">
    <a href="https://twitter.com/nikkitt_mesily"  target=”_blank”>
    <img
src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="Twitter" style="width:60%">
  </a>
  </div>
  <div class="column">
    <a href="https://www.youtube.com/channel/UCWnyFD9BaAYa30rz-XVn10Q"  target=”_blank”>
    <img
src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png" alt="youtube" style="width:60%">
  </a>
  </div>
  <div class="column">
    <a href="https://www.tumblr.com/blog/view/generousgalaxychaos"  target=”_blank”>
    <img
src="https://www.iconpacks.net/icons/2/free-tumblr-logo-icon-2434-thumb.png" alt="Tumblr" style="width:50%">
  </a>
  </div>
  <div class="column">
    <a href="https://www.twitch.tv/mess783"  target=”_blank”>
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1d8f334-66f0-4316-96f2-b9958b7a64c4/de2odrs-e96349ea-087a-4d41-bbe1-160a0a056f4b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxZDhmMzM0LTY2ZjAtNDMxNi05NmYyLWI5OTU4YjdhNjRjNFwvZGUyb2Rycy1lOTYzNDllYS0wODdhLTRkNDEtYmJlMS0xNjBhMGEwNTZmNGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EDEDys6YOT26lKmrnaGbwFdM0iGYQoYmGTOylUamlrs" alt="Twitch" style="width:60%">   </a>
  </div>
  <div class="column">
    <a href="http://vsco.co/nikkitt-"  target=”_blank”>
    <img
src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/VSCO_Seal.svg/1200px-VSCO_Seal.svg.png" alt="VSCO" style="width:50%">
  </a>
  </div>
   <div class="column">
    <a href="https://www.linkedin.com/in/nikkitt-mesily-664659198/"  target=”_blank”>
    <img
src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="LinkedIn" style="width:50%">
  </a>
  </div>
</div>
</body>
</html>

<!-- Footer -->
<footer class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
  <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
  
</footer>
 
<script>
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
</script>

<html>
  <body>
    <h1 style="text-align:center;">THANK YOU FOR VISITING MY WEBSITE :)</h1>
  </body>
</html>
  
