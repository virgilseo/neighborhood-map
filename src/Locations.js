
//Store all the information about the locations in a array of objects
const Locations = [
  { id: '4b4f5c12f964a520080327e3', name: 'KIT - Kunst im Tunnel', type: 'museum', lat: 51.220050, lng: 6.767270 },
  { id: '4be413a2477d9c742184e62d', name: 'Filmmuseum ', type: 'museum', lat: 51.223810, lng: 6.771320 },
  { id: '562a8a69498e31c0f73f3339', name: 'TeamEscape', type: 'escape room', address: 'Alexanderstraße 31, 40210 Düsseldorf',  lat: 51.220050, lng: 6.783620 },
  { id: '4b6d5115f964a520be702ce3', name: 'Uerige', type: 'brewery', lat: 51.22509973234009, lng: 6.7723058742430755 },
  { id: '590604adf00a703cd1500e8a', name: 'Holy Craft Beer Bar', type:'brewery', lat: 51.22786801613094, lng: 6.7733523400135836 },
  { id: '58a32d1914f8f4092c99d864', name: 'Exit the Room', type: 'escape room', lat:51.216534, lng: 6.780973 },
  { id: '58c6bb00260327384aef6d1e', name: 'Locked Room', type: 'escape room', lat: 51.2121697952451, lng: 6.807385571758232 },
  { id: '4b6813f6f964a5204f662be3', name: 'La Luce Due', type: 'restaurant', lat: 51.230733920253286, lng: 6.80959599525736 },
  { id: '4b3be8f6f964a520207e25e3', name: 'Takumi', type: 'restaurant', lat: 51.22342887840904, lng: 6.788530773884483 },
  { id: '4c0cf5bf2466a5938fc87621', name: 'Casita Mexicana', type: 'restaurant', lat: 51.210704143755486, lng: 6.774504906838067 },
  { id: '53fd985a498ed8daa0b774c9', name: 'Bob & Mary', type: 'restaurant', lat: 51.2149445291977, lng: 6.756618179610777 },
  { id: '4b5ed93ef964a520d79a29e3', name: 'Schumacher Stammhaus', type: 'brewery', lat: 51.221498311147, lng: 6.785565174084197 },
  { id: '4b6d861ff964a5202d7a2ce3', name: 'Brauhaus Joh. Albrecht', type: 'brewery', lat: 51.24036708537516, lng: 6.751411578633284 },
  { id: '4bdc1b9f63c5c9b6ec6a2a68', name: 'Museum Kunstpalast', type: 'museum', lat: 51.23492906744998, lng: 6.773236574142464 },
  { id: '4b6e9e41f964a5202ac42ce3', name: 'K21 Ständehaus', type: 'museum', lat: 51.21664355455374, lng: 6.773998887902013 },
  { id: '4df5f772d4c01ff6b2f43229', name: 'K20 Kunstsammlung NRW', type: 'museum', lat: 51.2283882217505, lng: 6.776057557999587 },
  { id: '4be4150c477d9c745784e62d', name: 'Schifffahrt-Museum im Schlossturm', type: 'museum', lat: 51.22739946911818, lng: 6.770961994333302 },
  { id: '4f8271d3e4b02f4581db9a07', name: 'NRW-Forum Düsseldorf', type: 'museum', lat: 51.233297620424025, lng: 6.772193315604253 },
  { id: '4be59a4cbcef2d7f080004e5', name: 'Hetjens-Museum', type: 'museum', lat: 51.22378371335815, lng: 6.7710201389920135 },
  { id: '515080378aca1877ebad8170', name: 'Sumi.', type: 'restaurant', lat: 51.231848045562096, lng: 6.79256622088267 },
  { id: '4b5b2f0df964a52061e928e3', name: 'Roberts Bistro', type: 'restaurant', lat: 51.21540073559408, lng: 6.757224206816219 },
  { id: '522f64fa498e5f18ab365a35', name: 'Principale Pizzabar', type: 'restaurant', lat: 51.22870397043688, lng: 6.801720427658401 },
  { id: '50e4225be4b0a94f756be407', name: 'ĂN BÁNH MÌ', type: 'restaurant', lat: 51.229796719516976, lng: 6.807178463018556 },
  { id: '4b4e2db3f964a5203ae426e3', name: 'Brasserie Hülsmann', type: 'restaurant', lat: 51.23151554570723, lng: 6.747708163817817 },
  { id: '4c2cd74fae6820a1d4f91943', name: 'Tonhallen-Terrasse', type: 'brewery', lat: 51.23208601166795, lng: 6.772100336619741 },
  { id: '4d0a5cff5edd54815c3e059b', name: 'Pizzeria Romantica', type: 'restaurant', lat: 51.23375784654132, lng: 6.792516021404531 },
  { id: '4bab9683f964a520a7b63ae3', name: 'The Classic Western Steakhouse', type: 'restaurant', lat: 51.237144, lng: 6.793405 },
  { id: '56f433f2498e3c2fc23de310', name: 'Bibimcup', type: 'restaurant', lat: 51.222627783532054, lng: 6.787039529351158 }
]

export default Locations
