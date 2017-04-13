/* app.js by Mike Roe (200166222) hosted at my server on Dreamhost */

/* Creating json data and using AJAX to read it */

"use strict";

// IIFE - Immediately Involked Function Expression

(function () {

    console.log("App Started.");
    console.info("Page Title: " + document.title);

    function Start() {
        LoadPageContent();
    }

function LoadPageContent() {
  switch (document.title) {
    case "About Me":
      LoadHomePage();
      break;

    case "Projects":
      LoadProjectsPage();
      break;

    case "Contact":
      LoadContactPage();
      break;
  }
}

function LoadHomePage() {


            // using let as a variable to control text injection to the page
            let Introduction = document.getElementById("Introduction");
            let myBio = "My name is Mike Roe. I am a first year student just trying to get my name out there.";
            Introduction.textContent = myBio;

            let Description = document.getElementById("Description");
            let PhotoInfo = "My Graduating class from this past April. I am in the very back, second from the left with the long hair.";
            Description.innerHTML = PhotoInfo;

            // Testing the the LoadHomePage function was running properly
            console.log(PhotoInfo);
           };

      let XHR = new XMLHttpRequest();
      XHR.open("GET", "data.json", true);
      XHR.send();
      XHR.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
          data = JSON.parse(this.responseText);
        }
        console.log("json data loaded");
      };

      XHR.addEventListener("load", function () {
           }, this);
       
    


        // Projects.html
       
       function LoadProjectsPage() {

            let Project1Description = document.getElementById("Project1Description");
            let FirstDescription = "A website I built using Adobe Muse.";
            Project1Description.innerHTML = FirstDescription;

            let Project2Description = document.getElementById("Project2Description");
            let SecondDescription = "Two posters, one done solo and one done in a group utilizing the method of screen printing.";
            Project2Description.innerHTML = SecondDescription;

            let Project3Description = document.getElementById("Project3Description");
            let ThirdDescription = "Using Photoshop's reflect tool to manipulate a painting I did.";
            Project3Description.innerHTML = ThirdDescription;

            //Testing LoadProjectsPage
            console.log(FirstDescription);
            console.log(SecondDescription);
            console.log(ThirdDescription);
           };
      
            function LoadContactPage() {

            // Assigning an id to a variable, then taking the value inserted to print to the console
            let Name = document.getElementById("Name");
            document.getElementById("Name").value;
            let Email = document.getElementById("Email");
            document.getElementById("Email").value;
            let Message = document.getElementById("Message");
            document.getElementById("Message").value;
            let ButtonSubmit = document.getElementById("ButtonSubmit");

            // Stops the Button from submitting the form normally, allowing the values to be seen
            ButtonSubmit.addEventListener("click", function (event) {
                event.preventDefault();

                // Prints the values to the console log where we can view them
                console.log(Name.value);
                console.log(Email.value);
                console.log(Message.value);
    

            });

            
    }

   



window.onload = Start;

})(); // The end of the IIFE (Immediately Invoked Function Expression) Statement

