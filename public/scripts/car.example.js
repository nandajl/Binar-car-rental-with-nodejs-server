class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
        <div class="card p-4">
          <img src="${this.image}" alt="" class="m-3 rounded">
          <p class="mt-auto">${this.model}/${this.manufacture}</p>
          <p class="fw-bold fs-6">Rp${this.rentPerDay}</p>
          <p>${this.description}</p>
          <p><i class="bi bi-people"></i> ${this.capacity} Orang</p>
          <p><i class="bi bi-people"></i> ${this.transmission}</p>
          <p><i class="bi bi-people"></i> ${this.year}</p>
          <button>Pilih Mobil</button>
        </div>
    `;
  }
}
