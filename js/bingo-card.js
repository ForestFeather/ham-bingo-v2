
var lines = [
  "Phasellus gravida bibendum adipiscing.",
  "Cras id rhoncus diam.",
  "Praesent pharetra justo sed velit tempus, non pulvinar tortor tempor.",
  "Maecenas elementum consequat orci, eget fermentum erat adipiscing porta.",
  "Nunc et lorem eu metus pretium ultrices.",
  "Nam pharetra a diam a accumsan.",
  "Aliquam egestas ante eget enim condimentum lobortis.",
  "Mauris euismod porta mollis.",
  "Praesent eget ornare eros.",
  "Nullam aliquet nulla eget erat congue, a sodales quam egestas.",
  "Nunc urna purus, auctor non facilisis ac, viverra id lectus.",
  "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  "Curabitur rutrum hendrerit facilisis.",
  "Pellentesque non scelerisque sapien.",
  "Pellentesque quis purus egestas, mattis mauris vel, volutpat enim.",
  "Maecenas eleifend sem in massa blandit eleifend.",
  "Fusce nisi nulla, vehicula eleifend diam ac, rutrum facilisis diam.",
  "Praesent eget leo a magna tincidunt ullamcorper quis eu massa.",
  "Etiam ac tincidunt felis.",
  "Aenean semper nisi sit amet nisl blandit, eget fermentum neque varius.",
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  "Nunc consequat, magna in gravida sollicitudin, nibh orci interdum tortor, vitae rutrum augue eros ut ante.",
  "Nullam volutpat nisi sit amet justo pulvinar aliquam.",
  "Pellentesque facilisis, odio in semper consectetur, risus eros sagittis mi, venenatis gravida orci orci auctor turpis.",
  "Nulla accumsan venenatis nisl id tempor.",
  "In hac habitasse platea dictumst.",
  "Proin mattis pulvinar arcu, at varius sapien venenatis vitae.",
  "Fusce dapibus purus sed enim volutpat iaculis.",
  "Nam commodo fermentum erat non ultrices.",
  "Ut congue dapibus nisl quis interdum.",
  "Vivamus non est in est sodales venenatis eget at risus.",
  "Aliquam consequat scelerisque leo, in interdum ipsum bibendum ut.",
  "Aenean eget erat ipsum.",
  "Cras a commodo felis.",
  "Integer convallis varius condimentum.",
  "Pellentesque imperdiet ultricies enim, vitae scelerisque lectus consequat quis.",
  "Duis gravida viverra fermentum.",
  "Aliquam tempus ultrices mauris, tempor laoreet lacus bibendum sed.",
  "Pellentesque in erat adipiscing, sagittis arcu quis, commodo odio.",
  "Cras at dapibus ipsum, eu dapibus dolor.",
  "Vivamus vel nisl nec nisl interdum sollicitudin pretium non enim.",
  "Phasellus sit amet metus sit amet ipsum porta fringilla id et elit.",
  "Integer rhoncus varius malesuada.",
  "Vestibulum adipiscing ante non leo ornare, id rutrum tortor posuere.",
  "In vel lobortis velit, vel dapibus mauris.",
  "Curabitur turpis arcu, dignissim nec aliquam eget, volutpat at sapien."
];

var linesCopy = lines.slice();
var seed;
var rng = new Math.seedrandom();

function newSeed() {
    var seedField = document.getElementById("seed");
    rng = new Math.seedrandom();
    seedField.value = Math.abs(rng.int32());
}

function initAll() {
  if (document.getElementById) {
    newSeed();
    newCard();
  } else {
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  rng = new Math.seedrandom(document.getElementById("seed").value);
  linesCopy = lines.slice();
  for (var i = 0; i < 24; i++) {
    setSquare(i);
  }
}

function setSquare(thisSquare) {
  var currentSquare = "square" + thisSquare;

  var randomString = getRandomStringAndRemove();
  document.getElementById(currentSquare).innerHTML = randomString;
}

function getRandomStringAndRemove() {
  var randomIndex = Math.floor(rng() * linesCopy.length) + 1;
  var randomString = linesCopy.splice(randomIndex, 1);

  return randomString;
}

function anotherCard() {
  newCard();

  return false;
}
