export interface UserModel {
    id: string,
    name: string,
    address: Array<{
        addressType: string,
        addressDetails: string,
        isDefault: boolean
    }>,
}