import axios from 'axios';
import Register from "../components/Register";

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customer";

class RegisterService {


    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }
}

export default new RegisterService()