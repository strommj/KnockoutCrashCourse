function AppViewModel() {
  this.makes = {
    "Honda": new Make("Japan", 
                      generateModelList("Honda", ["AC", "power windows"])),
    "Ford": new Make("USA", 
                     generateModelList("Ford", ["radio"])),
    "VW": new Make("Germany", 
                   generateModelList("VW", ["AC", "radio", "airbags"])),
    "Toyota": new Make("Japan",
                       generateModelList("Toyota", ["power windows", "AC"])),
  }
  
  this.makeSelection = ko.observable("");
  this.modelSelection = ko.observable("");
  
  this.makeSelectionDisplay = ko.computed(() => {
    return this.makeSelection() ? this.makeSelection() : "no selection";
  });
  
  this.modelSelectionDisplay = ko.computed(() => {
    return this.modelSelection() ? this.modelSelection() : "no selection";
  })
}

function Make(CountryOfOrigin, models) {
  this.CountryOfOrigin = ko.observable(CountryOfOrigin);
  this.models = ko.observable(models);
}

function Model(features) {
  this.features = ko.observableArray(Array.from(features));
  
  // your code here
}

const generateModelList = function (make, features) {
  switch (make) {
    case "Honda":
      return {"Civic": new Model(features),
              "CRV": new Model(features),
              "Accord": new Model(features)};
      break;
    case "Ford":
      return {"Focus": new Model(features),
              "Explorer": new Model(features),
              "Fiesta": new Model(features)};
      break;
    case "VW":
      return {"Jetta": new Model(features),
              "Golf": new Model(features),
              "Touareg": new Model(features)};
      break;
    case "Toyota":
      return {"Rav4": new Model(features),
              "Camry": new Model( features),
              "Land Cruise": new Model(features)};
      break;
  }
}


// Activates knockout.js
ko.applyBindings(new AppViewModel());