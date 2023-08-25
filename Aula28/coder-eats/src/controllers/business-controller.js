import Business from '../dao/business-dao.js'

const businessService = new Business()

export const getBusiness = async (req, res) => {
    let result = await businessService.getBusiness()
    if(!result){
        res.status(404).send('Business not found')
    }
    res.send(result)
}

export const getBusinessById = async (req, res) => {
    const {id} = req.params;
    let result = await businessService.getBusinessById(id)
    if(!result){
        res.status(404).send('Business not found')
    }
    res.send(result)
}

export const createBusiness = async (req, res) => {
    const newBusiness = req.body;
    let result = await businessService.saveBusiness(newBusiness)
    if(!result){
        res.status(404).send('Business not found')
    }
    res.send(result)
}

export const addProduct = async (req, res) => {
    let product = req.body;
    let businessId = req.params.id;
    let business = await businessService.getBusinessById(businessId)
    if(!result){
        res.status(404).send('Business not found')
    } else {
        business.products.push(product);
        let result = await businessService.updateBusiness(businessId, business)
        res.send(result)
    }
}