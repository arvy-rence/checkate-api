class GroceryInformation {
    locationName: string;
    distance: number;
}

class Product {
    id: number;
    productName: string;
    productSpecs: string;
    groceryAvailable: GroceryInformation[]
}

class ChecklistItem extends Product{
    id: number;
    isChecked: boolean;
    enteredPrice: number;
}
