import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Refrigerators" },
      { id: 2, name: "Smartphones" },
      { id: 3, name: "Laptops" },
      { id: 4, name: "TV" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12 Pro",
        price: 25000,
        rating: 5,
        img: "https://www.ixbt.com/img/n1/news/2020/4/2/iphone-12-pro-max.jpg",
      },
      {
        id: 2,
        name: "Samsung Galaxy A51",
        price: 12000,
        rating: 4,
        img: "https://www.ixbt.com/img/n1/news/2020/4/2/samsung-galaxy-a51.jpg",
      },
    ];
    this._selectedType = {};
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
}
