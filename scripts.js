var tl = new TimelineLite();
var stripes = (".stripe");
var foos = (".foo");
var stripesDelay = (".stripeDelay");
var foosDelay = (".fooDelay");
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene();

tl.staggerTo(
  stripes,
  0.3,
  {
    left: "100%",
    ease: Quad.easeOut
  },
  0.2
);

tl.staggerTo(
  foos,
  0.3,
  {
    left: "100%",
    ease: Quad.easeOut
  },
  0.2
);

tl.staggerTo(
   stripesDelay,
   0.3,
   {
     left: "100%",
     ease: Quad.easeOut
   },
   0.2
 );
 
 tl.staggerTo(
   foosDelay,
   0.3,
   {
     left: "100%",
     ease: Quad.easeOut
   },
   0.2
 );


//FADE IN SKILLS
$( ".hcsSkill" ).click(function() {
   $( ".jsDesc, .wpDesc, .gitDesc" ).fadeOut( "fast", function() {
   });
   $( ".hcsDesc" ).fadeIn( "slow", function() {
   // Animation complete
   });
});

$( ".jsSkill" ).click(function() {
   $( ".hcsDesc, .wpDesc, .gitDesc" ).fadeOut( "fast", function() {
   });
   $( ".jsDesc" ).fadeIn( "slow", function() {
   // Animation complete
   });
});

$( ".wpSkill" ).click(function() {
   $( ".jsDesc, .hcsDesc, .gitDesc" ).fadeOut( "fast", function() {
   });
   $( ".wpDesc" ).fadeIn( "slow", function() {
   // Animation complete
   });
});

$( ".gitSkill" ).click(function() {
   $( ".jsDesc, .wpDesc, .hcsDesc" ).fadeOut( "fast", function() {
   });
   $( ".gitDesc" ).fadeIn( "slow", function() {
   // Animation complete
   });
});