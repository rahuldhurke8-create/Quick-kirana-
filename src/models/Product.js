class Product {
    constructor(name, tracking, harvestDate, certifications, categories, pricing, farmerInfo) {
        this.name = name;
        this.tracking = tracking; // farm fresh tracking
        this.harvestDate = harvestDate; // date of harvest
        this.certifications = certifications; // list of certifications
        this.categories = categories; // product categories
        this.pricing = pricing; // pricing details
        this.farmerInfo = farmerInfo; // information about the farmer
    }

    // You may include methods to handle product functionalities
}

module.exports = Product;