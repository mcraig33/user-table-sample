import IUser from "./IUser"

export default interface IUserData{
    data: IUser[],
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
}