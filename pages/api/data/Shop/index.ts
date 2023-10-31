import { NextApiRequest, NextApiResponse } from "next";
import Data from '../../../../models/Data'
import Log from '../../../../models/Log'
export default async (req: NextApiRequest, res: NextApiResponse)=>{
    try {
        if (req.method === 'POST') {
            const { products, client, authType } = req.body
            if (authType === 'S&H!O*P^I$N#G$T^I@M*E') {
                
            } else {
                res.status(407).json({success:false,message:'Invalid Auth Type'})
            }
        } else {
            res.status(409).json({success:false,message:'Invalid Request Type'})
        }
    } catch (err) {
        res.status(500).json({success:false, message:`Server Error => ${err}`})
    }
}