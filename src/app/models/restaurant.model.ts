export interface RestaurantModel {
  id: string;
  title: string;
  text: string;
  type: string;
  images: Array<{
    itemType: string;
    itemId: string;
    imageSize: string;
    base64: string;
    storeId: string;
  }>;
  location: {
    type: string;
    coordinates: [number, number];
  };
  isDinner: boolean;
  isDelivery: boolean;
  storeInfo: {
    id: string;
    geoLocation: {
      latitude: number;
      longitude: number;
    };
    userPoint: number;
    workingHours: Array<{
      day: number;
      open: string;
      close: string;
      closed: boolean;
    }>;
    status: string;
    rate: number;
    minOrderPrice: number;
  };
  categoryId: string;
}
  