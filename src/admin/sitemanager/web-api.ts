let latency = 200;
let id = 0;

function getId(){
  return ++id;
}

let sites = [
  {
    id:getId(),
    firstName:'John',
    lastName:'Tolkien',
    email:'tolkien@inklings.com',
    phoneNumber:'869-5309',
    thumbnail: '/src/admin/sitemanager/img/thumbnail9.png'
  },
  {
    id:getId(),
    firstName:'Clive',
    lastName:'Lewis',
    email:'lewis@inklings.com',
    phoneNumber:'869-5309',
    thumbnail: '/src/admin/sitemanager/img/thumbnail9.png'
  },
  {
    id:getId(),
    firstName:'Owen',
    lastName:'Barfield',
    email:'barfield@inklings.com',
    phoneNumber:'869-5309',
    thumbnail: '/src/admin/sitemanager/img/thumbnail9.png'
  },
  {
    id:getId(),
    firstName:'Charles',
    lastName:'Williams',
    email:'williams@inklings.com',
    phoneNumber:'869-5309',
    thumbnail: '/src/admin/sitemanager/img/thumbnail9.png'
  },
  {
    id:getId(),
    firstName:'Roger',
    lastName:'Green',
    email:'green@inklings.com',
    phoneNumber:'869-5309',
    thumbnail: '/src/admin/sitemanager/img/thumbnail9.png'
  }
];

export class WebAPI {
  isRequesting = false;
  
  getsiteList(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = sites.map(x =>  { return {
          id:x.id,
          firstName:x.firstName,
          lastName:x.lastName,
          email:x.email,
          thumbnail:x.thumbnail
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getsiteDetails(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = sites.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  savesite(site){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(site));
        let found = sites.filter(x => x.id == site.id)[0];

        if(found){
          let index = sites.indexOf(found);
          sites[index] = instance;
        }else{
          instance.id = getId();
          sites.push(instance);
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }
}
