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

const gear: Item = {
    name:"gear",
    time: 2,
    requires: [
        [iron_plate, 2]
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
const title = 
`
$$$$$$$\                                                                                                                               
$$  __$$\                                                                                                                              
$$ |  $$ | $$$$$$\   $$$$$$$\  $$$$$$$\  $$$$$$\  $$\   $$\  $$$$$$\   $$$$$$$\  $$$$$$\                                               
$$$$$$$  |$$  __$$\ $$  _____|$$  _____|$$  __$$\ $$ |  $$ |$$  __$$\ $$  _____|$$  __$$\                                              
$$  __$$< $$$$$$$$ |\$$$$$$\  \$$$$$$\  $$ /  $$ |$$ |  $$ |$$ |  \__|$$ /      $$$$$$$$ |                                             
$$ |  $$ |$$   ____| \____$$\  \____$$\ $$ |  $$ |$$ |  $$ |$$ |      $$ |      $$   ____|                                             
$$ |  $$ |\$$$$$$$\ $$$$$$$  |$$$$$$$  |\$$$$$$  |\$$$$$$  |$$ |      \$$$$$$$\ \$$$$$$$\                                              
\__|  \__| \_______|\_______/ \_______/  \______/  \______/ \__|       \_______| \_______|                                             
                                                                                                                                       
                                                                                                                                       
                                                                                                                                       
                        $$$$$$$\                                                $$\                                                    
                        $$  __$$\                                               $$ |                                                   
                        $$ |  $$ | $$$$$$\   $$$$$$\   $$$$$$\  $$$$$$$\   $$$$$$$ | $$$$$$\  $$$$$$$\   $$$$$$$\ $$\   $$\            
                        $$ |  $$ |$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$  __$$ |$$  __$$\ $$  __$$\ $$  _____|$$ |  $$ |           
                        $$ |  $$ |$$$$$$$$ |$$ /  $$ |$$$$$$$$ |$$ |  $$ |$$ /  $$ |$$$$$$$$ |$$ |  $$ |$$ /      $$ |  $$ |           
                        $$ |  $$ |$$   ____|$$ |  $$ |$$   ____|$$ |  $$ |$$ |  $$ |$$   ____|$$ |  $$ |$$ |      $$ |  $$ |           
                        $$$$$$$  |\$$$$$$$\ $$$$$$$  |\$$$$$$$\ $$ |  $$ |\$$$$$$$ |\$$$$$$$\ $$ |  $$ |\$$$$$$$\ \$$$$$$$ |           
                        \_______/  \_______|$$  ____/  \_______|\__|  \__| \_______| \_______|\__|  \__| \_______| \____$$ |           
                                            $$ |                                                                  $$\   $$ |           
                                            $$ |                                                                  \$$$$$$  |           
                                            \__|                                                                   \______/            
                                                 $$$$$$\            $$\                     $$\            $$\                         
                                                $$  __$$\           $$ |                    $$ |           $$ |                        
                                                $$ /  \__| $$$$$$\  $$ | $$$$$$$\ $$\   $$\ $$ | $$$$$$\ $$$$$$\    $$$$$$\   $$$$$$\  
                                                $$ |       \____$$\ $$ |$$  _____|$$ |  $$ |$$ | \____$$\\_$$  _|  $$  __$$\ $$  __$$\ 
                                                $$ |       $$$$$$$ |$$ |$$ /      $$ |  $$ |$$ | $$$$$$$ | $$ |    $$ /  $$ |$$ |  \__|
                                                $$ |  $$\ $$  __$$ |$$ |$$ |      $$ |  $$ |$$ |$$  __$$ | $$ |$$\ $$ |  $$ |$$ |      
                                                \$$$$$$  |\$$$$$$$ |$$ |\$$$$$$$\ \$$$$$$  |$$ |\$$$$$$$ | \$$$$  |\$$$$$$  |$$ |      
                                                 \______/  \_______|\__| \_______| \______/ \__| \_______|  \____/  \______/ \__|      
                                                                                                                                       
                                                                                                                                       
                                                                                                                                       
`;
console.log(title);
console.log("Enter how many items/second you want to produce");
console.log(">20");
let result = assemblerNeeded(science_red, 20);

result.forEach((value: boolean, key: string) => {
    console.log(key.name, ":", value);
});

