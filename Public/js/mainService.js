angular.module('portfolio').service('mainService', function($http) {


  this.headShot = {
    string: "http://sydsnews.weebly.com/uploads/7/0/3/1/70315543/8783822.jpg?1452680078"
  };

  this.intro = {
    string: "I am a small town girl from Spanish Fork, Utah looking to make a difference. I am motivated by the change one person can make with just a little bit of courage. I am currently studying Broadcast Journalism at BYU and have the goal to become an international reporter. I served my mission in Paraguay and Argentina where I learned to speak Spanish fluently and developed a love for other cultures."
  };

  this.projects = [
    {
    number: 2,
    name: "Colliding beliefs",
    link: "https://player.vimeo.com/video/161518438",
    picture: "./images/Colliding.png"
    },
    {
    number: 3,
    name: "Change for change Sydnee Gunter",
    link: "https://player.vimeo.com/video/154638207",
    picture: "./images/change.png"
    },
]

  this.bioTitle = {
    string: "Finding My Voice"
  };

  this.p1 = {
    string: "This is how I found my voice, and my passion telling stories",
    link:"https://docs.google.com/document/d/18YPd3QMjvvs91iPfRJF8WLl0xigrLU82HyYQZKyAbHg/edit"
  };

  this.p2 = {
    string: "* Daily universe article written by yours truly",
    link:"http://universe.byu.edu/2013/05/09/becky-mackintosh-and-kristi-rodgerson-encouraging-praising-and-providing-help-for-our-teenagers/"
  };

  this.p3 = {
    string:"* Local business story",
    link:"https://docs.google.com/document/d/1dJcmjkgEOpXbUGh_SVgkJJbodAUqrtFGCXwamF9KCHk/edit"
  }

  this.p4 = {
    string:"* Local cuisine",
    link:"https://docs.google.com/document/d/1hyxZVM8DZDoUfj2_Td2vMfVAwuPPcnOJOpS7YeqWRCk/edit"
  };

  this.p5 = {
    string: "* Stories untold",
    link:"https://docs.google.com/document/d/1BAQ51GInkIurHJb-fvLJac2myAIXDlHj8j2gcoGqHb0/edit"
  };

});
