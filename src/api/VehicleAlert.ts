import { makeRequest } from "./base";

export const CreateVehicleAlert = async (VehicleData: { plate: string; titleOrNumberVin:string}) => {
    const data = await makeRequest("alert", "POST", VehicleData);
    return data;

};