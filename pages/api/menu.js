import { getMegaMenu } from "../../utils/services/ApiCalls";

export default async function handler(req, res) {
  
  return new Promise((resolve, reject) => {
const response = await getMegaMenu();
  })
}
