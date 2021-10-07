import {ProductDto} from "./dto/product.dto";

export class ProductApi{
    public static async getAll(): Promise<ProductDto[]>{
        const resp = await fetch("http://localhost:5000/tractr/product/all",{
            method: "GET"
        })

        const data = await resp.json();

        return data;
    }

    public static async searchName(name: string): Promise<ProductDto[]>{
        const res = await fetch(`http://localhost:5000/tractr/product/searchName?name=${name}`,{
            method: "GET"
        })

        const data = await res.json();

        return data;
    }

    public static async searchDescription(description: string): Promise<ProductDto[]>{
        const res = await fetch(`http://localhost:5000/tractr/product/searchDescription?description=${description}`,{
            method: "GET"
        })

        const data = await res.json();

        return data;
    }

    public static async searchType(type: string): Promise<ProductDto[]>{
        const res = await fetch(`http://localhost:5000/tractr/product/searchPrice?price=${type}`,{
            method: "GET"
        })

        const data = await res.json();

        return data;
    }

    public static async searchOrigin(origin: string): Promise<ProductDto[]>{
        const res = await fetch(`http://localhost:5000/tractr/product/searchOrigin?origin=${origin}`,{
            method: "GET"
        })

        const data = await res.json();

        return data;
    }
}