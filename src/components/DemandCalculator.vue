<template>
  <div>
    <input type="text" id="product" />
    <label hidden="hidden" for="product">Product</label>
  </div>
</template>

<script>
export default {
  name: "DemandCalculator",
};

/*

interface Item {
  name: string;
  time: number;
  requires?: Array<any>;
  // requires?: Array<key: Item>;

}

// ======================== initialise items =========================


const iron_plate: Item = {
  name:"iron plate",
  time: 1
};

const copper_plate = {
  name:"copper plate",
  time: 1,
  requires: []
  ,
};

const copper_cable = {
  name:"copper_cable",
  time: 0.25,
  requires: [
    [copper_plate, 0.5]
  ]
};

const stone_plate = {
  name:"stone_plate plate",
  time: 0.125,
  requires: []
  ,
};

const gear: Item = {
  name:"gear",
  time: 2,
  requires: [
    [iron_plate, 2]
  ]
}

const sand: Item = {
  name:"sand",
  time: 0.25,
  requires: []
}

const glass: Item = {
  name:"glass",
  time: 4,
  requires: [
    [sand, 4]
  ]
}

const steel: Item = {
  name:"steel",
  time: 16,
  requires: [
    [iron_plate, 5]
  ]
}

const science_red: Item = {
  name:"red science",
  time: 5,
  requires: [
    [gear, 1],
    [copper_plate, 1]
  ]
}

const green_circuit: Item = {
  name:"green_circuit",
  time: 0.5,
  requires: [
    [copper_cable, 3],
    [stone_plate, 1],
  ]
};

const solar_panel: Item = {
  name:"solar panel",
  time: 10,
  requires: [
    [green_circuit, 15],
    [glass, 5],
    [steel, 5],
    [copper_plate, 5],

  ]
};


// ======================== main =========================
function merge(m1: Map<any, any>, m2: Map<any, any>): Map<any, any> {
  const result = new Map(m1);
  //TODO check types
  let longer = m1.size;
  if (m2.size > longer) longer = m2.size;

  for (let [key, value] of m2) {
    if (result.has(key)) {
      result.set(key, result.get(key) + value)
    }
    else {
      result.set(key, value)
    }
  }
  return result;
}



function assemblerNeeded(product: Item, productsPerSec: number): Map<Item, number> {
  let result = new Map;
  result.set(product, productsPerSec * product.time);

  if (product.requires != null) {
    for (let [ressourceType, ressourceAmount] of product.requires) {
      result = merge(result, assemblerNeeded(ressourceType, ressourceAmount * productsPerSec ));
    }
  }
  return result;
}



//e.g.
console.log(">solar panel: 0.4/sec");
let result = assemblerNeeded(solar_panel, 0.4);

result.forEach((value, key) => {
  console.log(key.name, ":", value);
});

*/
</script>

<style scoped></style>
