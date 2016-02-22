angular.module('portfolio').service('mainService', function($http) {


  this.headShot = {
    string: "http://sydsnews.weebly.com/uploads/7/0/3/1/70315543/8783822.jpg?1452680078"
  };

  this.intro = {
    string: "I am a small town girl from Spanish Fork, Utah looking to make a difference. I am motivated by the difference one person can make with just a little bit of courage. I am currently studying Broadcast Journalism at BYU and have the goal to become an international reporter. I served my mission in Paraguay and Argentina where I learned to speak Spanish fluently and developed a love for other cultures."
  };

  this.projects = [
    {
    number: 1,
    name: "Pastor Counsels Students",
    link: "https://vimeo.com/153021388",
    picture: "./images/pastor.png"
    },
    {
    number: 2,
    name: "Colliding beliefs",
    link: "https://vimeo.com/153820784",
    picture: "./images/Colliding.png"
    },
    {
    number: 3,
    name: "Change for change Sydnee Gunter",
    link: "https://vimeo.com/154638207",
    picture: "./images/change.png"
    },
    {
    number: 4,
    name: "Something else will go here..",
    link: "https://vimeo.com/154638207",
    picture: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82724/calc.jpg"
    },
]

  this.bioTitle = {
    string: "Finding my Voice"
  };

  this.p1 = {
    string: "Article Link?"
  };

  this.p2 = {
    string: "Article Link?"
  };

  this.p3 = {
    string:"Article Link?"
  }

  this.p4 = {
    string:"articles??"
  };

  this.p5 = {
    string: "articles..."
  };

});
