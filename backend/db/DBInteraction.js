async function AddToCollection(model,object){
    const res=model.insertMany([object]);
    return res;
}
async function getData(model,filter){
    const res= model.find(filter);
    return res;
}
async function deleteData(model, filter){
    const res= model.deleteOne(filter);
    return res;
}

module.exports = {AddToCollection,getData,deleteData}