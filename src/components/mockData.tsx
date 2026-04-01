

export function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return [name, calories, fat, carbs, protein ];
}



export const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export function AddRow(num: number){
  for(let i =0; i < num; i++)
  rows.push(createData('Frozen yoghurt', 159, 6.0, 24, 4.0));
  return rows
}
export const columns = ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5" , "Header 6", "Header 7" ];
export const actions = [{label:"Delete", type:"deleteARow"}, {label:"View", type:"viewARow"}, {label:"MoveTo", type:"moveARow", },]
export const rows2 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  
];

export const columns2 = ["Column 1", "Column 2", "Column 3" ];
export const actions2 = [{label:"Delete", type:"deleteARow"}, {label:"View", type:"viewARow"}, {label:"Edit", type:"editARow"}, {label:"Return", type:"moveARow", },]

/////////////////card test
const cards =[]
export function createCardData(
  name: string,
  brandName: string,
  description: string,
  price: number,
  imageUrl: string,
) {
  return {"name":name, "brandName":brandName, "description":description, "price":price, "imageUrl":imageUrl};
}
export function AddCard(num: number){
  for(let i =0; i < num; i++)
  {
  var row = createCardData("T Shirt","Zalando","abc", 100, "https://img01.ztat.net/article/spp-media-p1/27f6ed1310fa4c6d843ae122ed4f25cd/8c17fd17ec9949aea46d77744fed70fc.jpg?imwidth=200");
  row["id"] = cards.length;
  cards.push(row);
  }
  return cards
}

export function AddNewCards(num: number)
{
  const newCards = [];
  for(let i =0; i < num; i++)
  {
  var row = createCardData("T Shirt","Zalando","abc", 100, "https://img01.ztat.net/article/spp-media-p1/27f6ed1310fa4c6d843ae122ed4f25cd/8c17fd17ec9949aea46d77744fed70fc.jpg?imwidth=200");
  newCards.push(row);
  }
  
  return newCards;
}

export const masterMenuItems=[
    {title:"Ladies", path:"/ladies"},
    {title:"Gentlemen", path:"/gentlemen"},
    {title:"Issue", path:"/item"},
    
];

export const ladiesMenuItems=[
    {title:"New", path:"/ladies-new"},
    {title:"Clothing", path:"/ladies-clothing"},
    {title:"Boots", path:"/ladies-boots"},
    {title:"Accessories", path:"/ladies-accessories"},
    {title:"Sport", path:"/ladies-sport"},
    {title:"Streetwear", path:"/ladies-streetwear"},
    {title:"Designer", path:"/ladies-designer"},
    {title:"Beauty", path:"/ladies-beauty"},
    {title:"Nordic Style", path:"/ladies-nordic-style"},
    {title:"Pre-owned", path:"/ladies-pre-owned"},
    {title:"Ale", path:"/ladies-ale"},
    
]

export const gentlementMenuItems=[
    {title:"New", path:"/gentlemen-new"},
    {title:"Clothing", path:"/gentlemen-clothing"},
    {title:"Boots", path:"/gentlemen-boots"},
    {title:"Accessories", path:"/gentlemen-accessories"},
    {title:"Sport", path:"/gentlemen-sport"},
    {title:"Streetwear", path:"/gentlemen-streetwear"},
    {title:"Designer", path:"/gentlemen-designer"},
    {title:"Cosmestic", path:"/gentlemen-cosmestic"},
    {title:"Nordic Style", path:"/gentlemen-nordic-style"},
    {title:"Pre-owned", path:"/gentlemen-pre-owned"},
    {title:"Ale", path:"/gentlemen-ale"},
    
]


export const issueMenuItems=[
    {title:"Girls", path:"/issue-girls"},
    {title:"Boys", path:"/issue-boys"},
    {title:"Clothing", path:"/issue-clothing"},
    {title:"Boots", path:"/issue-boots"},
    {title:"Babies", path:"/issue-babies"},
    {title:"Accessories & toys", path:"/issue-accessories-toys"},
    {title:"Sport", path:"/issue-sport"},
    {title:"Streetwear", path:"/issue-streetwear"},
    {title:"Designer", path:"/issue-designer"},
    {title:"Pre-owned", path:"/issue-pre-owned"},
    {title:"Ale", path:"/issue-ale"},
    
]

export const subLadiesMenuItems=[
  { groupName:"group 1",
    items:[
    {title:"Girls", path:"/issue-girls"},
    {title:"Boys", path:"/issue-boys"},
    {title:"Clothing", path:"/issue-clothing"},
    {title:"Boots", path:"/issue-boots"},
    {title:"Babies", path:"/issue-babies"},
    {title:"Accessories & toys", path:"/issue-accessories-toys"},
 
    {title:"Pre-owned", path:"/issue-pre-owned"},
    {title:"Ale", path:"/issue-ale"},
    ],
  },
  { groupName:"group 2",
    items:[
    {title:"Girls", path:"/issue-girls"},
    {title:"Boys", path:"/issue-boys"},
    {title:"Clothing", path:"/issue-clothing"},
    {title:"Boots", path:"/issue-boots"},
    {title:"Babies", path:"/issue-babies"},
    
    ],
  },
  { groupName:"group 3",
    items:[
    {title:"Girls", path:"/issue-girls"},
    {title:"Boys", path:"/issue-boys"},
    {title:"Clothing", path:"/issue-clothing"},
    {title:"Boots", path:"/issue-boots"},
    {title:"Babies", path:"/issue-babies"},
    
    ],
  },
  { groupName:"group 4",
    items:[
    {title:"Girls", path:"/issue-girls"},
    {title:"Boys", path:"/issue-boys"},
    {title:"Clothing", path:"/issue-clothing"},
    {title:"Boots", path:"/issue-boots"},
    {title:"Babies", path:"/issue-babies"},
    
    ],
  },

    
];

export const categoryItems=[

 
  {
    name:"Kaikki kategoriat",
    paths:[{path:"Ladies-New", icon:"", groupName:"Viikon uutuudet"}]
    
    
  },
  {
    name:"Vaatteet",
    paths:[{path:"Ladies-New", icon:"", groupName:"Viikon uutuudet"}, {path:"Gentlemen-New", icon:"", groupName:"Viikon uutuudet"} ]
    
    
  },
  {
    name:"Kengät",
    paths:[{path:"Ladies-New", icon:"", groupName:"Viikon uutuudet"}, {path:"Gentlemen-New", icon:"", groupName:"Viikon uutuudet"} ]
    
    
  },
  {
    name:"Asusteet",
    paths:[{path:"Ladies-New", icon:"", groupName:"Viikon uutuudet"}, {path:"Gentlemen-New", icon:"", groupName:"Viikon uutuudet"} ]
    
    
  },
  {
    name:"Urheilu",
    paths:[{path:"Ladies-New", icon:"", groupName:"Viikon uutuudet"}, {path:"Gentlemen-New", icon:"", groupName:"Viikon uutuudet"} ]
    
    
  },
  {
    name:"Kauneus",
    paths:[{path:"Ladies-New", icon:"", groupName:"Viikon uutuudet"} ]
    
    
  },
  {
    name:"Trend Spotter",
    paths:[{path:"Ladies-New", icon:"", groupName:"Inspiroidu"}, {path:"Gentlemen-New", icon:"", groupName:"Inspiroidu"} ]
    
    
  },
  {
    name:"Edulliset tyylit",
    paths:[{path:"Ladies-New", icon:"", groupName:"Inspiroidu"} ]
    
    
  },
  
  {
    name:"Parhaat lahjavinkit",
    paths:[{path:"Ladies-New", icon:"", groupName:"Inspiroidu"}, {path:"Gentlemen-New", icon:"", groupName:"Inspiroidu"} ]
    
    
  },
  {
    name:"Zalando Assistentti",
    paths:[{path:"Ladies-New", icon:"", groupName:"Inspiroidu"}, {path:"Gentlemen-New", icon:"", groupName:"Inspiroidu"} ]
    
    
  },
  {
    name:"Mukautuvaa muotia",
    paths:[{path:"Ladies-New", icon:"", groupName:"Inspiroidu"}, {path:"Gentlemen-New", icon:"", groupName:"Inspiroidu"} ]
    
    
  },
   {
    name:"New brand: HAY",
    paths:[{path:"Ladies-New", icon:"", groupName:"Trending"}]
    
    
  },
  {
    name:"Uusi",
    paths:[{path:"Ladies-New", icon:"", groupName:"Trending"} ]
    
    
  },
  {
    name:"Bikinit",
    paths:[{path:"Ladies-New", icon:"", groupName:"Trending"}]
    
    
  },

  {
    name:"Tekoturkistakit",
    paths:[{path:"Ladies-New", icon:"", groupName:"Trending"}]
    
    
  },
  {
    name:"New in Jeans",
    paths:[{path:"Ladies-New", icon:"", groupName:"Trending"} ]
    
    
  },
  {
    name:"lululemon",
    paths:[{path:"Ladies-New", icon:"", groupName:"Trending"}]
    
    
  },
   {
    name:"Vaivattomat tyylit",
    paths:[{path:"Ladies-New", icon:"", groupName:"Trending"}]
    
  },
  {
    name:"Kaikki vaatteet",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:"Tutustu näihin"}]
    
  },
   {
    name:"Mekot",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:"Tutustu näihin"}]
    
  },
  {
    name:"Neuleet & neuletakit",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:"Tutustu näihin"} ]
    
  },
  {
    name:"Neuleet",
    paths:[{path:"Gentlemen-Clothing", icon:"", groupName:""} ]
    
  },
  {
    name:"Colleget & hupparit",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:"Tutustu näihin"}, {path:"Gentlemen-Clothing", icon:"", groupName:"Tutustu näihin"} ]
    
  },
   {
    name:"Farkut",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:"Tutustu näihin"}, {path:"Gentlemen-Clothing", icon:"", groupName:"Tutustu näihin"} ]
    
  },
   {
    name:"Housut",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:"Tutustu näihin"}, {path:"Gentlemen-Clothing", icon:"", groupName:"Tutustu näihin"} ]
    
  },
  {
    name:"Takit & Bleiserit",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:""}]
    
  },
  {
    name:"Päällystakit",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:""}, {path:"Gentlemen-Clothing", icon:"", groupName:""} ]
    
  },

  {
    name:"T-paidat & topit",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:""} ]
    
  },
   {
    name:"Paidat & puserot",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:""} ]
    
  },
   {
    name:"Hameet",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:""}]
    
  },


  {
    name:"Marimekko",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:"Suosikkimerkit"}]
    
  },
  {
    name:"Levi's®",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:"Suosikkimerkit"}, {path:"Gentlemen-Clothing", icon:"", groupName:"Suosikkimerkit"} ]
    
  },
  {
    name:"Bershka",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:"Suosikkimerkit"} ]
    
  },
  {
    name:"Next",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:"Suosikkimerkit"} ]
    
  },
  {
    name:"Mango",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:"Suosikkimerkit"}, {path:"Gentlemen-Clothing", icon:"", groupName:"Suosikkimerkit"} ]
  },
  {
    name:"Ralph Lauren",
    paths:[{path:"Ladies-Clothing", icon:"", groupName:"Suosikkimerkit"}]  
  },
  {
    name:"Katso kaikki",
    paths:[{path:"Gentlemen-New", icon:"", groupName:"Viikon uutuudet"}, {path:"Gentlemen-Clothing", icon:"", groupName:"Tutustu näihin"}]  
  },
  {
    name:"Kosmetiikka",
    paths:[{path:"Gentlemen-New", icon:"", groupName:"Viikon uutuudet"}]  
  },
  
  {
    name:"Taulu",
    paths:[{path:"Gentlemen-New", icon:"", groupName:"Inspiroidu"}]  
  },
  {
      name:"SIIM LIIVIK X ZALANDO",
      paths:[{path:"Gentlemen-New", icon:"", groupName:"Trending"} ]  
    },
     {
      name:"Rentoudu ja palaudu",
      paths:[{path:"Gentlemen-New", icon:"", groupName:"Trending"} ]  
    },
    {
      name:"Lasketteluvaatteet",
      paths:[{path:"Gentlemen-New", icon:"", groupName:"Trending"}]  
    },
     {
      name:"Talvitakit",
      paths:[{path:"Gentlemen-New", icon:"", groupName:"Trending"} ]  
    },
    {
      name:"Patagonia fleece",
      paths:[{path:"Gentlemen-New", icon:"", groupName:"Trending"}]  
    },
    {
      name:"T-paidat & pikeet",
      paths:[{path:"Gentlemen-Clothing", icon:"", groupName:"Tutustu näihin"}, {path:"Ladies-Clothing", icon:"", groupName:"Tutustu näihin"} ]  
    },
    {
      name:"Kauluspaidat",
      paths:[{path:"Gentlemen-Clothing", icon:"", groupName:"Tutustu näihin"}, {path:"Ladies-Clothing", icon:"", groupName:"Tutustu näihin"} ]  
    },

    {
      name:"Takit",
      paths:[{path:"Gentlemen-Clothing", icon:"", groupName:""}, {path:"Ladies-Clothing", icon:"", groupName:""} ]  
    },
    {
      name:"Urheiluvaatteet",
      paths:[{path:"Gentlemen-Clothing", icon:"", groupName:""}, {path:"Ladies-Clothing", icon:"", groupName:""} ]  
    },
    {
      name:"Puvut",
      paths:[{path:"Gentlemen-Clothing", icon:"", groupName:""}, {path:"Ladies-Clothing", icon:"", groupName:""} ]  
    },
    {
      name:"Alusasut",
      paths:[{path:"Gentlemen-Clothing", icon:"", groupName:""}, {path:"Ladies-Clothing", icon:"", groupName:""} ]  
    },
    {
      name:"Tommy Hilfiger",
      paths:[{path:"Gentlemen-Clothing", icon:"", groupName:"Suosikkimerkit"}, {path:"Ladies-Clothing", icon:"", groupName:"Suosikkimerkit"} ]  
    },
     {
      name:"Hugo Boss",
      paths:[{path:"Gentlemen-Clothing", icon:"", groupName:"Suosikkimerkit"}, {path:"Ladies-Clothing", icon:"", groupName:"Suosikkimerkit"} ]  
    },
     {
      name:"GANT",
      paths:[{path:"Gentlemen-Clothing", icon:"", groupName:"Suosikkimerkit"}, {path:"Ladies-Clothing", icon:"", groupName:"Suosikkimerkit"} ]  
    },
     {
      name:"Selected Homme",
      paths:[{path:"Gentlemen-Clothing", icon:"", groupName:"Suosikkimerkit"}, {path:"Ladies-Clothing", icon:"", groupName:"Suosikkimerkit"} ]  
    },


];

export function getCategory(pathName:string): any{
         const rets = categoryItems.filter(item=>{
          return (item.paths.filter(pathItem=> pathItem.path === pathName).length >0);
         });
         var groups=[]
         rets.forEach((item:any)=>{
              const foundPath: any = item.paths.filter(path=> path.path === pathName)[0];
              if(foundPath !== undefined)
              {
                  var group = groups.find((group: any) => group.groupName === foundPath.groupName);
                  if(group === undefined)
                  {
                    group = {groupName: foundPath.groupName,
                      items:[],
                    }
                    groups.push(group);
                  }
                  group.items.push({title: item.name, path: foundPath.path, icon: foundPath.icon})
                  

              
                }
          })
          
         groups.sort((a, b) =>sort(a.groupName, b.groupName));
         return groups;
}
const orders=["Tutustu näihin", "Inspiroidu", "", "Trending","Suosikkimerkit"];

function sort(a: string, b:string): number{
     return orders.indexOf(a) - orders.indexOf(b);
}





