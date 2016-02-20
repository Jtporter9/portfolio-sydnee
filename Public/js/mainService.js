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
    string:"The South American sun began to slip down the horizon leaving a musky salmon-colored sky.  Although the sun was setting, the humidity caused beads of sweat to roll down our faces.  My companion and I had just finished visiting one of our favorite investigators and it was almost time to head home.  I felt my legs drag behind my devoted heart as we passed each Paraguayan shack in search for someone willing to accept our message.  In the distance, a small girl was peering through the rusty wire fence that surrounded the red dirt yard.  She whispered something but we were too far away to hear what she was saying. We got closer and realized she was saying “ayudame”—which is “help me” in Spanish."
  };

  this.p2 = {
    string: "​Our steps quickened and she opened the jumbled slabs of wood she called a gate, to let us in.  Her mother laid unconscious on the dried mud of the front patio. We asked the child what happened, and she told us that her mother had been hit. Surprisingly, the attacker was the girl’s father. Just seconds later, three teenage boys emerged from the dark wooden hut.  The girl ran to them hugging their legs in fear. We frantically tried to wake the mother, and finally after many attempts, she awoke dazed. We decided to sing a hymn and leave with a prayer to comfort them. As we sang the final words of the song, a man watching us through the pane-less window caught my attention. His hair was white as snow and his bloodshot eyes struck fear through my body. Rapidly we said a prayer and headed out.  I glanced back when I heard screams from the children. Their father was yelling at one of the boys while pinning him up against the wall.  I was horrified."
  };

  this.p3 = {
    string: "I felt so defenseless as a missionary. I wanted to intervene but could not. My companion and I ran to the closest neighbor to obtain the phone number of the police. We found out that the chief lived close by and we sprinted toward his house. Luckily we were able to locate him and he called the rest of his dispatch. They arrived and I was astounded when they said they could not enter without permission. WHAT?? Who else would? The mother had just passed out again at the sight of the police and the father continued to beat his children. I could not take it any longer. I exploded. I told the police what had happened and that they needed to save the children. I was relieved when they made their way towards the man. Next, the children carried their mother out to the truck bed and jumped in as the truck sped off into the darkness."
  }

  this.p4 = {
    string: "I was frustrated that justice was not yet served because the children were taken away instead of the father, but I was also grateful because I had finally found my voice. I had thought that I was powerless because I could not make use of the self-defense classes I took, but I later realized that I had power all along. It was that moment when I finally discovered my ability to use speech as a weapon. I was no longer subject to fear. The family had something to say and I was lucky enough to be their mouthpiece."
  };

  this.p5 = {
    string: "There are many people in this world that have a voice but are afraid to speak. As a news reporter, I have made it my goal to give them a voice and help them tell their stories that otherwise would be hidden. I hope to be the face people can rely on and trust."
  };

});
