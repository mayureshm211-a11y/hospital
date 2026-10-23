const ITEM_KEY='kbb_advanced_items_v2',ISSUE_KEY='kbb_advanced_issues_v2';
const starterItems=[
{id:'it1',name:'Examination Gloves',category:'Personal Protection',price:180,stock:120,reorder:20,batch:'PPE-101',description:'Disposable examination gloves'},
{id:'it2',name:'Surgical Face Masks',category:'Personal Protection',price:90,stock:150,reorder:30,batch:'PPE-102',description:'Disposable face masks'},
{id:'it3',name:'Disposable Gowns',category:'Personal Protection',price:250,stock:35,reorder:10,batch:'PPE-103',description:'Single-use protective gown'},
{id:'it4',name:'Gauze Dressing Pads',category:'First Aid',price:65,stock:75,reorder:15,batch:'FA-201',description:'Dressing pads'},
{id:'it5',name:'Elastic Bandage Roll',category:'First Aid',price:55,stock:40,reorder:10,batch:'FA-202',description:'Elastic support bandage roll'},
{id:'it6',name:'Digital Thermometer',category:'Equipment',price:220,stock:8,reorder:10,batch:'EQ-301',description:'Basic digital thermometer'},
{id:'it7',name:'Wheelchair',category:'Patient Care',price:4200,stock:4,reorder:3,batch:'PC-401',description:'Manual wheelchair'},
{id:'it8',name:'Bedside Patient Table',category:'Patient Care',price:1800,stock:12,reorder:4,batch:'PC-402',description:'Bedside table'},
{id:'it9',name:'Hand Sanitizer',category:'Cleaning & Hygiene',price:120,stock:9,reorder:15,batch:'HY-501',description:'Hand hygiene solution'},
{id:'it10',name:'Disposable Syringes',category:'Patient Care',price:140,stock:60,reorder:15,batch:'PC-403',description:'Disposable syringes'},
{id:'it11',name:'Pulse Oximeter',category:'Equipment',price:950,stock:7,reorder:5,batch:'EQ-302',description:'Finger pulse oximeter'},
{id:'it12',name:'Bed Sheet',category:'Patient Care',price:380,stock:28,reorder:8,batch:'PC-404',description:'Hospital bed sheet'}
];
function getItems(){try{const a=JSON.parse(localStorage.getItem(ITEM_KEY));if(Array.isArray(a))return a}catch(e){}saveItems(starterItems);return JSON.parse(JSON.stringify(starterItems))}
function saveItems(a){localStorage.setItem(ITEM_KEY,JSON.stringify(a))}
function getIssues(){try{return JSON.parse(localStorage.getItem(ISSUE_KEY))||[]}catch(e){return []}}
function saveIssues(a){localStorage.setItem(ISSUE_KEY,JSON.stringify(a))}
function rupee(n){return '₹'+Number(n||0).toLocaleString('en-IN',{maximumFractionDigits:2})}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function iconFor(c){return ({'Personal Protection':'♧','Patient Care':'♡','First Aid':'✚','Equipment':'⚕','Cleaning & Hygiene':'✧'})[c]||'✚'}
function themeFor(c){return ({'Personal Protection':'theme-mint','Patient Care':'theme-blue','First Aid':'theme-peach','Equipment':'theme-lilac','Cleaning & Hygiene':'theme-mint'})[c]||'theme-blue'}