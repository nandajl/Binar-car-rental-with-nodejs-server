class App {
  constructor() {
    this.filterByDriver = document.getElementById('driver');
    this.filterByDate = document.getElementById("filterDate");
    this.filterByTime = document.getElementById("filterTime");
    this.filterByCapacity = document.getElementById("filterCapacity");
    this.btnSearch = document.getElementById("btn-search");
    this.btnClear = document.getElementById("btn-clear");
    this.carContainerList = document.getElementById("carContainerList");
  }

  async init() {
    await this.load();

    this.btnClear.onclick = this.clearAll;
    this.btnSearch.onclick = this.run;
  }

  

  run = () => {
    const driverValue = this.filterByDriver.value;
    const dateValue = this.filterByDate.value;
    const timeValue = this.filterByTime.value;
    const capacityValue = this.filterByCapacity.value;
    const newDateTime = new Date(`${dateValue} ${timeValue}`);
    const dateNow = ()=>{
      let today = new Date();
      return today;
    }
    this.load(capacityValue, newDateTime);
    
    if (driverValue == "" ) {
      alert("Please select driver type");
      return;
    }
    else if(dateValue == ""){
      alert("Please select date");
      return;
    }
    else if(newDateTime < dateNow()){
      alert("Please dont select past time");
      return;
    }
  };

  async load(capacityFilter, dateFilter) {
    const cars = await Binar.listCars(item => (item.available === true) && (item.capacity >= capacityFilter) && (item.availableAt >= dateFilter));
    Car.init(cars);
    console.log(cars);
    if(cars == ""){
      this.clearNode();
      const node = document.createElement("div");
      node.innerHTML = '<h1 class="text-center">Data Mobil Tidak Ada</h1>'
      this.carContainerList.appendChild(node);
    }
    else{
      this.clearNode();
      Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.className = "col-lg-4 mt-2 d-flex align-items-stretch"
        node.innerHTML = car.render();
        this.carContainerList.appendChild(node);
      });
    }
  }

  

  clearForm = () => {
    this.filterByDriver.value = "";
    this.filterByDate.value = "";
    this.filterByTime.value = "";
    this.filterByCapacity.value = ""; 
  };

  clearNode = () => {
    let child = this.carContainerList.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerList.firstElementChild;
    }
  };

  clearAll = () => {
    this.clearForm();
    this.clearNode();
  };
}